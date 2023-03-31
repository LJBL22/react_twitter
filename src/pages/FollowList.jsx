import { useState, useEffect } from 'react';
import { NavLink, useLocation, useOutletContext } from 'react-router-dom';
import { getFollowers, getFollowings } from 'api/user';
import { useUser } from 'contexts/UserContext';
import { StyledTab } from 'components/UserProfile';
import {
  StyledContentDiv,
  StyledItemDiv,
  StyledImgDiv,
} from 'components/styles/InputTweet.styled';
import { StyledCardDiv } from 'components/common/common.styled';

const FollowList = () => {
  const { pathname } = useLocation();
  // 使用者追蹤清單
  const { userFollowings } = useUser();
  const { userInfo } = useOutletContext();
  // 更新使用者的追蹤 與被追蹤狀態
  const [userFollowingList, setUserFollowingList] = useState([]);
  const [userFollower, setUserFollower] = useState([]);
  // 用這行在非同步拿到資料前，可以不會噴錯
  const [isLoading, setIsLoading] = useState(true);

  let renderedFollowList;

  if (pathname.includes('following')) {
    renderedFollowList = userFollowingList.map((user) => {
      return (
        <FollowItem
          key={user.followingId}
          userInfo={userInfo}
          id={user.followingId}
          isFollowed={user.isFollowed}
        />
      );
    });
  } else {
    renderedFollowList = userFollowingList.map((user) => {
      return (
        <FollowItem
          key={user.followerId}
          userInfo={userInfo}
          id={user.followerId}
          isFollowed={user.isFollowed}
        />
      );
    });
  }

  useEffect(() => {
    const getUserFollowStatus = async () => {
      try {
        const followers = await getFollowers(userInfo.id);
        const following = await getFollowings(userInfo.id);
        console.log('er', followers);
        console.log('ing', following);
        setUserFollower(followers);
        setUserFollowingList(following);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    setIsLoading(true);
    getUserFollowStatus();
  }, [userFollowings]);
  return (
    <div>
      <FollowTab id={userInfo.id} />
      {isLoading ? <div> 資料加載中 </div> : renderedFollowList}
    </div>
  );
};

// 目前帶出來的 userInfo 是使用者的資料，需替換成追蹤人的
const FollowItem = ({ followCollection, userInfo }) => {
  return (
    <StyledCardDiv>
      <NavLink to={`/users/${userInfo.id}/tweets`}>
        <StyledImgDiv>
          <img src={userInfo.avatar} alt='avatar' />
        </StyledImgDiv>
      </NavLink>
      <StyledContentDiv>
        <StyledItemDiv>
          {/* en space，en是字體排印的一個計量單位，寬度是字體寬度的一半 */}
          <p className='cardName'>{userInfo.name}</p>
        </StyledItemDiv>
        <NavLink to={`/users/${userInfo.id}/tweets`}>
          <div className='styledContent'>{userInfo.introduction}</div>
        </NavLink>
      </StyledContentDiv>
    </StyledCardDiv>
  );
};
const FollowTab = ({ id }) => {
  return (
    <StyledTab>
      <NavLink className='category' to={`/users/${id}/followers`}>
        <p>追蹤者</p>
      </NavLink>
      <NavLink className='category' to={`/users/${id}/followings`}>
        <p>正在追隨</p>
      </NavLink>
    </StyledTab>
  );
};

export { FollowList };
