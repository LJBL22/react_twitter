import styled from 'styled-components';
import { useUser } from 'contexts/UserContext';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IconMessageOut, IconNotiFi } from 'assets/icons';

const StyledContainer = styled.div`
  position: relative;
  border: 1px solid var(--color-gray-200);
  background-color: var(--color-white);
  .cover {
    overflow: hidden;

    img {
      object-fit: cover;
      max-width: inherit;
    }
  }

  .avatar {
    position: absolute;
    left: 15%;
    transform: translate(-50%, -50%);
    width: 10.77rem;
    aspect-ratio: 1/1;
    border: 0.31rem solid white;
    border-radius: 50%;
    overflow: hidden;
  }
`;

const StyledContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  .userInfo {
    margin-top: 2rem;
    font-size: 18px;
    line-height: 26px;
    color: var(--color-gray-900);
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: var(--color-secondary);
  }
  .intro {
    color: var(--color-gray-900);
  }

  .followShip {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 8px 20px 20px 0;
    color: var(--color-secondary);
    font-size: var(--fs-secondary);
    .fQty {
      margin-right: 0.25rem;
      color: var(--color-gray-900);
    }

    a:hover {
      color: var(--color-gray-900);
    }
  }
`;

const StyledEditDiv = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 0.5rem;
  > button {
    flex-direction: column;
    align-items: center;
    width: 8rem;
    height: 2.5rem;
    padding: 0.5rem 0.9rem;
    line-height: 1.225rem;
    border-radius: 3.125rem;
    border: 1px solid var(--color-theme);
    color: var(--color-theme);
    font-size: var(--fs-basic);
    background-color: var(--color-white);
    flex-grow: 0;
    cursor: pointer;
    &:hover,
    & .active {
      color: var(--color-white);
      background-color: var(--color-theme);
    }
    & .disabled {
      pointer-events: none;
      opacity: 0.8;
    }
  }
`;

export const StyledTab = styled.div`
  display: flex;
  justify-content: start;
  border-bottom: 1px solid var(--color-gray-200);
  color: var(--color-secondary);
  font-weight: 700;
  .category {
    width: 130px;
    height: 52px;
    display: grid;
    gap: 50px;
    place-items: center;
    border-bottom: 2px solid white;
    :hover {
      background-color: var(--color-gray-100);
      border-bottom: 2px solid var(--color-gray-100);
    }
    &.active {
      border-bottom: 2px solid var(--color-theme);
      color: var(--color-theme);
    }
  }
`;

function UserProfile({ user }) {
  const { currentUser } = useUser();
  // console.log('currentUser', currentUser);
  const { id } = user;
  // console.log('user', user);
  const [showModal, setShowModal] = useState(false);
  // const [disabled, setDisabled] = useState(false);

  const handleShowModal = () => {
    const nextShowModal = !showModal;
    setShowModal(nextShowModal);
  };

  return (
    <div>
      <StyledContainer>
        <div className='cover'>
          <img src={currentUser.coverUrl} alt='cover-url' />
        </div>
        <img className='avatar' src={currentUser.avatar} alt='avatar' />
        <StyledContentDiv>
          <StyledEditDiv>
            {id === currentUser.id ? (
              <button type='button' onClick={handleShowModal}>
                編輯個人資料
              </button>
            ) : (
              <>
                <span>
                  <IconMessageOut />
                </span>
                <span>
                  <IconNotiFi />
                </span>
                {/* <button
                  className={`${isFollowed ? 'active' : undefined}${
                    disabled ? 'disabled' : undefined
                  }`}
                  type='button'
                ></button> */}
              </>
            )}
          </StyledEditDiv>
          <div className='userInfo'>
            <b>{currentUser.name}</b>
            <p>@{currentUser.account}</p>
            <p className='intro'>{currentUser.introduction}</p>
          </div>
          <div className='followShip'>
            <NavLink to={`/users/${id}/followings`}>
              <span>
                <b className='fQty'>{currentUser.followingNum}個</b>跟隨中
              </span>
            </NavLink>
            <NavLink to={`/users/${id}/followers`}>
              <span>
                <b className='fQty'>{currentUser.followerNum}個</b>跟隨者
              </span>
            </NavLink>
          </div>
        </StyledContentDiv>
        <StyledTab>
          <NavLink className='category' to={`/users/${id}/tweets`}>
            <p>推文</p>
          </NavLink>
          <NavLink className='category' to={`users/${id}/replied_tweets`}>
            <p>回覆</p>
          </NavLink>
          <NavLink className='category' to={`users/${id}/likes`}>
            <p>喜歡的內容</p>
          </NavLink>
        </StyledTab>
      </StyledContainer>
      <div></div>
    </div>
  );
}

export default UserProfile;
