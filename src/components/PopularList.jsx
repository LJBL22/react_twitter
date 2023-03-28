import styled from 'styled-components';
import { Header, ThemeButton } from './common/common.styled';
import { getFollow } from 'api/followship';
import { useEffect, useState } from 'react';

const PopContainer = styled.div`
  min-width: 273px;
  background-color: var(--color-gray-100);
  border-radius: 1rem;
`;
const StyledUserCard = styled.div`
  width: 273px;
  background-color: var(--color-gray-100);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  padding: 1rem;
  & > .avatar {
    width: 3.125rem;
    height: 3.125rem;
    margin-right: 0.5rem;
    & > img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  & > .info {
    flex: 1;
    & > p {
      margin: 0;
      font-size: 1rem;
      line-height: 1.5rem;
      width: 83px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    & > p:first-child {
      font-weight: bold;
      color: var(--color-gray-900);
    }

    & > p:last-child {
      font-size: var(--fs-secondary);
      color: var(--color-gray-600);
    }
  }
`;
const PopularUserCollection = ({ followship }) => {
  return (
    <>
      {followship.map((user) => {
        return <PopularUserCard key={user.id} user={user} />;
      })}
    </>
  );
};
function PopularUserCard({ user }) {
  const { name, account, avatar } = user;
  return (
    <StyledUserCard>
      <div className='avatar'>
        <img src={avatar} alt='avatar' />
      </div>
      <div className='info'>
        {/* 之後要處理一下 ... 寫法 */}
        <p>{name}</p>
        <p>@{account}</p>
      </div>
      <div>
        {/* 之後要寫邏輯切換 Button 樣式 */}
        <ThemeButton width={'6rem'}>正在跟隨</ThemeButton>
      </div>
    </StyledUserCard>
  );
}

export default function PopularList() {
  const [followship, setFollowship] = useState([]);
  useEffect(() => {
    const getFollowshipAsync = async () => {
      try {
        const token = localStorage.getItem('token');
        const followship = await getFollow(token);
        setFollowship(
          followship.map((popUserCard) => {
            return {
              ...popUserCard,
            };
          })
        );
      } catch (error) {
        console.error(error);
      }
    };
    getFollowshipAsync();
  }, []);

  return (
    <div
      className='PopularList'
      style={{ padding: '1.5rem', height: '100vh', overflow: 'hidden' }}
    >
      <PopContainer>
        <Header>推薦跟隨</Header>
        <PopularUserCollection followship={followship} />
      </PopContainer>
    </div>
  );
}
