// import styled from 'styled-components';
import { adminGetAllUsers } from 'api/admin';
import { IconLikeOut, IconPost } from 'assets/icons';
// import { IconLikeOut, IconPost } from 'assets/icons';
import { Header } from 'components/common/common.styled';
import { ScrollBar } from 'pages/HomePage';
// import { ScrollBar } from 'pages/HomePage';
import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const AdminUsersPage = () => {
  // eslint-disable-next-line no-unused-vars
  const [users, setUsers] = useState([]);
  //   const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const adminToken = localStorage.getItem('token');
    if (!adminToken) {
      navigate('/admin');
    }
    const getUsers = async () => {
      try {
        const users = await adminGetAllUsers();
        setUsers(users);
        // setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, [navigate]);
  const StyledContainer = styled.div`
    padding: 1rem;
    display: grid;
    grid-template: auto / repeat(4, 1fr);
    gap: 1rem;
  `;

  return (
    <>
      <Header>使用者列表</Header>
      <ScrollBar>
        <StyledContainer>
          {users.map((user) => {
            return <UserCard key={user.id} user={user} />;
          })}
        </StyledContainer>
      </ScrollBar>
    </>
  );
};

const UserCard = ({ user }) => {
  const {
    name,
    account,
    avatar,
    coverUrl,
    likesNum,
    tweetsNum,
    followingNum,
    followerNum,
  } = user;
  return (
    <>
      <StyledCard backgroundImage={coverUrl}>
        <div className='cover'></div>
        <img src={avatar} alt='avatar' className='avatar' />
        <StyledTitle>
          <h2>{name}</h2>
          <p>@{account}</p>
        </StyledTitle>
        <StyledStats>
          <div className='stats'>
            <div className='stat'>
              <span>
                <IconPost className='svg' />
              </span>
              <span>{tweetsNum}</span>
            </div>
            <div className='stat'>
              <IconLikeOut width='1.2rem' height='1.2rem' />
              <span>{likesNum}</span>
            </div>
          </div>
          <div className='followship'>
            <span>{followingNum}</span>個追隨中&ensp;
            <span>{followerNum}</span>位跟隨者
          </div>
        </StyledStats>
      </StyledCard>
    </>
  );
};

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 210px;
  height: 314px;
  background-color: var(--color-gray-200);
  border-radius: 10px;
  position: relative;
  > .cover {
    border-radius: 10px 10px 0 0;
    width: 100%;
    height: 140px;
    background-image: url(${(props) => props.backgroundImage});
  }
  > .avatar {
    position: absolute;
    left: 50%;
    top: 20%;
    transform: translateX(-50%);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 4px solid var(--color-white);
  }
`;

const StyledTitle = styled.div`
  text-align: center;
  padding: 2rem 0 1rem 0;
  h2 {
    font-size: 1rem;
  }
  p {
    color: var(--color-secondary);
    font-size: var(--fs-small);
  }
`;

const StyledStats = styled.div`
  .stats {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    & .stat {
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }
  }
  span {
    color: var(--color-gray-900);
  }
`;
export default AdminUsersPage;
