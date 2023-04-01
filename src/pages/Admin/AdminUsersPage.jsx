import styled from 'styled-components';
import { adminGetAllUsers } from 'api/admin';
import { IconLikeOut, IconPost } from 'assets/icons';
import { Header } from 'components/common/common.styled';
// import { ScrollBar } from 'pages/HomePage';
import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// List container
// const StyledContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
//   grid-template-rows: auto;
//   height: calc(100vh - 68px);
//   overflow-y: scroll;
//   padding: 1rem;
//   background-color: #fff;
//   border-top: 1px solid var(--color-gray-200);
//   border-inline: 1px solid var(--color-gray-200);
// `;

// // Card container
const StyledCardContainer = styled.div`
  position: relative;
  width: 200px;
  height: 300px;
  margin: 0.5rem 0.5rem;
  background-color: var(--color-gray-200);
  border-radius: 10px;

  img {
    border-radius: 10px 10px 0 0;
  }

  :hover {
    border: 1px solid var(--color-gray-400);
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  }

  .avatar {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    aspect-ratio: 1/1;
    border: 4px solid white;
    border-radius: 50%;
    overflow: hidden;
  }

  .stats {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 0.6rem;
    color: var(--color-secondary);
    font-size: var(--fs-basic);

    .stat {
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }

    span {
      color: var(--color-gray-900);
    }
  }
`;

const StyledCover = styled.div`
  width: 100%;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  padding-bottom: 75%;
  border-radius: 10px 10px 0 0;
`;

const StyledDiv = styled.div`
  .svg {
    color: var(--color-gray-700);
  }
  .follow {
    display: flex;
    justify-content: center;
    gap: 0.3rem;
    padding: 0.6rem;
    color: var(--color-secondary);
    font-size: var(--fs-secondary);
    span {
      color: var(--color-gray-900);
    }
  }
`;

// title、account
const StyledName = styled.div`
  text-align: center;
  margin-top: 1.6rem;

  .title {
    font-size: var(--fs-basic);
    font-weight: bold;
  }

  .account {
    color: var(--color-secondary);
    font-size: var(--fs-secondary);
  }
`;

const StyledMessage = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: grid;
  place-items: center;
  border-inline: 2px solid var(--color-gray-200);
  color: var(--color-secondary);
`;

function UserCard({ user }) {
  const {
    account,
    name,
    avatar,
    coverUrl,
    tweetsNum,
    followerNum,
    followingNum,
    likesNum,
  } = user;
  return (
    <StyledCardContainer backgroundImage={coverUrl}>
      <StyledCover backgroundImage={coverUrl} />
      <img className='avatar' src={avatar} alt='avatar' />
      <StyledName>
        <div className='title'>{name}</div>
        <div className='account'>@{account}</div>
      </StyledName>
      <StyledDiv>
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
        <div className='follow'>
          <span>{followingNum} </span>個跟隨中
          <span>{followerNum} </span>位跟隨者
        </div>
      </StyledDiv>
    </StyledCardContainer>
  );
}

const AdminUsersPage = () => {
  const [users, setUsers] = useState([]);
  //   const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
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

  //   const renderedItems = users.map((user) => {
  //     if (!isLoading) {
  //       return <UserCard key={user.id} user={user} />;
  //     }
  //   });
  return (
    <>
      <Header>使用者列表</Header>
      {/* <StyledContainer>{renderedItems}</StyledContainer> */}
      {/* <StyledContainer>f</StyledContainer> */}
    </>
  );
};

export default AdminUsersPage;
