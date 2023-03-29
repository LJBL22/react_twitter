import { useEffect, useState } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
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
  const { id } = useParams();
  const { pathname } = useLocation();
  const [userInfo, setUserInfo] = useState(currentUser);
  const [userTweets, setUserTweets] = useState([]);
  const [userReplies, setUserReplies] = useState([]);
  const [userLikes, setUserLikes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getUserPageData = async () => {
    try {
      const user = await getUserData(id);
      console.log('id', id);
      const userTweets = await getUserTweets(id);
      setUserInfo(user);
      setUserTweets(userTweets);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
    console.log('userTweets', userTweets);
    console.log('userInfo', userInfo);
  };

  useEffect(() => {
    setIsLoading(true);
    getUserPageData();
  }, [id]);

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
    </div>
  );
};

export default UsersPage;
