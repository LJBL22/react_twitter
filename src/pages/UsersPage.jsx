import { useEffect, useState } from 'react';
import { useParams, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useUser } from 'contexts/UserContext';
import UserProfile from 'components/UserProfile';
import Header from 'components/Header';
import {
  getUserData,
  getUserTweets,
  getUserRelies,
  getUserLikes,
} from 'api/user';
import styled from 'styled-components';

const StyledDiv = styled.div`
  height: calc(100vh-73px);
  overflow-y: scroll;
`;

const UsersPage = () => {
  // 拿到特定 id 的使用者資料
  const { currentUser } = useUser();
  const { userId } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  // 拿到特定 id 的使用者資料，更新誰是目前檔案看的使用者
  const [userInfo, setUserInfo] = useState(currentUser);
  const [userTweets, setUserTweets] = useState([]);
  const [userReplies, setUserReplies] = useState([]);
  const [userLikes, setUserLikes] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  const getUserPageData = async () => {
    try {
      const user = await getUserData(userId);
      const userTweets = await getUserTweets(userId);
      const userReplies = await getUserRelies(userId);
      const userLikes = await getUserLikes(userId);
      setUserInfo(user);
      setUserTweets(userTweets);
      setUserReplies(userReplies);
      setUserLikes(userLikes);
      // setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    // setIsLoading(true);
    getUserPageData();
    // eslint-disable-next-line
  }, [userId]);
  // console.log('userTweetsInUserPage', userTweets);
  // console.log('userInfo', userInfo);
  // console.log('userReplies', userReplies);
  // console.log('userLikes', userLikes);
  //  這裡的 userInfo 是拿到特定 ID 的 currentUser
  return (
    <div>
      <Header
        headerText={userInfo.name}
        user={userInfo}
        goBackLink
        userTweets={userTweets}
      />
      <StyledDiv>
        {/* 如果pathname沒有follow，則不含此頁面 */}
        {!pathname.includes('follow') && (
          <UserProfile
          // UserPage 點選的任何 id 使用
            user={userInfo}
            key={userInfo.id}
            // currentUser 是從useUser引入的初始值，部會受UsersPage點選切換=> 當作使用者
            currentUser={currentUser}
          />
        )}
        <Outlet
          context={{
            currentUser,
            userInfo,
            userTweets,
            userReplies,
            userLikes,
          }}
        />
      </StyledDiv>
    </div>
  );
};

export default UsersPage;
