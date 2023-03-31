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
  const { currentUser } = useUser();
  const { userId } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();
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
            user={userInfo}
            key={userInfo.id}
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
