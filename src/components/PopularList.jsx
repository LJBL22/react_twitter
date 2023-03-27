import styled from 'styled-components';
import { Header, ThemeButton } from './common/common.styled';
// 暫待後端
// import { followRank } from 'api/user';
// 先使用假資料
import { userData } from './dummyData';
const users = userData;
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
        <ThemeButton>正在跟隨</ThemeButton>
      </div>
    </StyledUserCard>
  );
}
function PopularList() {
  return (
    <div className='PopularList' style={{ padding: '1.5rem' }}>
      <PopContainer>
        <Header>推薦跟隨</Header>
        {users.map((user, id) => (
          <PopularUserCard key={id} user={user} />
        ))}
      </PopContainer>
    </div>
  );
}

export default PopularList;
