import { useState, useEffect } from 'react';
import { NavLink, useLocation, useOutletContext } from 'react-router-dom';
import { getFollowers, getFollowings } from 'api/user';
import { useUser } from 'contexts/UserContext';
import { StyledTab } from 'components/UserProfile';
import {
  StyledContentDiv,
  StyledImgDiv,
} from 'components/styles/InputTweet.styled';
import { StyledCardDiv } from 'components/common/common.styled';
import styled from 'styled-components';

const StyledContent = styled(StyledContentDiv)`
  width: 528px;
  padding-top: 8px;
  .follower {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    gap: 10px;
  }
  button {
    width: 96px;
    height: 40px;
    padding: 8px 0;
    border-radius: 50px;
    background-color: var(--color-white);
    color: var(--color-theme);
    border: 1px solid var(--color-theme);
    transition: background-color 0.1s ease-in-out;
    &:hover {
      cursor: pointer;
    }
    &.active {
      border: none;
      background-color: var(--color-theme);
      color: var(--color-white);
    }
    &.disabled {
    }
  }
`;

const FollowList = () => {
  const { pathname } = useLocation();
  // 使用者追蹤清單
  const { userInfo } = useOutletContext();
  const { currentUser, userFollowings } = useUser();
  console.log('currentUserFo', currentUser);
  // 更新使用者的追蹤 與被追蹤狀態
  const [userFollowingList, setUserFollowingList] = useState([]);
  const [userFollower, setUserFollower] = useState([]);
  // 用這行在非同步拿到資料前，可以不會噴錯
  const [isLoading, setIsLoading] = useState(true);

  let renderedFollowList;

  if (pathname.includes('following')) {
    renderedFollowList = userFollowingList.map((user) => {
      // console.log('following', user);
      return (
        <FollowItem key={user.followingId} user={user} id={user.followingId} />
      );
    });
  } else {
    renderedFollowList = userFollower.map((user) => {
      // console.log('follower', user);
      return (
        <FollowItem key={user.followerId} user={user} id={user.followerId} />
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

const FollowItem = ({ user, id }) => {
  const { handleFollow } = useUser();
  const [disabled, setDisabled] = useState(false);

  const handleFollowClick = async () => {
    setDisabled(true);
    await handleFollow(id);
    setDisabled(false);
  };

  return (
    <StyledCardDiv>
      <NavLink to={`/users/${id}/tweets`}>
        <StyledImgDiv>
          <img src={user.avatar} alt='avatar' />
        </StyledImgDiv>
      </NavLink>
      <StyledContent>
        <div className='follower'>
          {/* en space，en是字體排印的一個計量單位，寬度是字體寬度的一半 */}
          <p className='cardName'>{user.name}</p>

          <button
            className={`${user.isFollowed ? 'active' : ''} ${
              disabled ? 'disabled' : ''
            }`}
            type='button'
            onClick={handleFollowClick}
          >
            {user.isFollowed ? '正在跟隨' : '跟隨'}
          </button>
        </div>
        <NavLink to={`/users/${user.id}/tweets`}>
          <div className='styledContent'>{user.introduction}</div>
        </NavLink>
      </StyledContent>
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
