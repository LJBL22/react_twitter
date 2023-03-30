import { useEffect, useState } from 'react';
import { useParams, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useUser } from 'contexts/UserContext';
import UserProfile from 'components/UserProfile';
import Header from 'components/Header';
import { getUserData, getUserTweets } from 'api/user';
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  const getUserPageData = async () => {
    try {
      const user = await getUserData(userId);
      console.log('id', userId);
      const userTweets = await getUserTweets(userId);
      setUserInfo(user);
      setUserTweets(userTweets);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getUserPageData();
  }, [userId]);
  console.log('userTweets', userTweets);
  console.log('userInfo', userInfo);
  return (
    <div>
      <Header
        headerText={userInfo.name}
        user={userInfo}
        goBackLink
        userTweets={userTweets}
      />
      <StyledDiv>
        {!pathname.includes('follow') && (
          <UserProfile user={userInfo} key={userInfo.id} />
        )}
      </StyledDiv>
      <Outlet context={{ currentUser, userInfo, userTweets }} />
    </div>
  );
};

export default UsersPage;
