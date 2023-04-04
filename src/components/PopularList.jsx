import styled from 'styled-components';
import { Header, ThemeButton } from './common/common.styled';
import { getFollow } from 'api/followship';
import { useEffect, useState } from 'react';
import { useUser } from 'contexts/UserContext';
import { getFollowings } from 'api/user';
import { useAuth } from 'contexts/AuthContext';

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

const FollowBtn = styled(ThemeButton)`
  background-color: var(--color-white);
  color: var(--color-theme);
  border: 1px solid var(--color-theme);
  transition: background-color 0.1s ease-in-out;
  &:hover {
    cursor: pointer;
    background-color: var(--color-gray-100);
  }
  &.active {
    border: none;
    background-color: var(--color-theme);
    color: var(--color-white);
  }
`;

const PopularUserCollection = ({ followship }) => {
  const { currentMember } = useAuth();
  const { userFollowings, setUserFollowings } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const getFollowingsData = async () => {
    try {
      const userFollowings = await getFollowings(currentMember().id);
      setUserFollowings(userFollowings);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setIsLoading(true);
    getFollowingsData();
    //eslint-disable-next-line
  }, []);
  return (
    <>
      {followship.map((user) => {
        return (
          <PopularUserCard
            key={user.id}
            user={user}
            id={user.id}
            userFollowings={userFollowings}
            isLoading={isLoading}
          />
        );
      })}
    </>
  );
};
function PopularUserCard({ user, id, isLoading, userFollowings }) {
  const { name, account, avatar } = user;
  const { handleFollow } = useUser();
  // 用這行在非同步拿到資料前，可以不會噴錯
  //eslint-disable-next-line
  const [disabled, setDisabled] = useState(true);
  // userFollowings 存取 追蹤id

  const isFollowed = userFollowings.some((user) => user.followingId === id);

  const handleFollowClick = async () => {
    setDisabled(true);
    await handleFollow(id);
    setDisabled(false);
  };

  return (
    <>
      {isLoading && <div> 資料加載中 </div>}
      {!isLoading && (
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
            <FollowBtn
              className={isFollowed ? 'active' : ''}
              type='button'
              onClick={handleFollowClick}
              width={'6rem'}
            >
              {isFollowed ? '正在跟隨' : '跟隨'}
            </FollowBtn>
          </div>
        </StyledUserCard>
      )}
    </>
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
