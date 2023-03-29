import {
  IconLogo,
  IconUserOut,
  IconLogout,
  IconHomeOut,
  IconCogOut,
  IconHomeFi,
  IconUserFi,
  IconCogFi,
} from 'assets/icons';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ModalBtn from './Modal';
import { useState } from 'react';
import TweetCard from './TweetCard';

const StyledSidebar = styled.nav`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  background-color: white;
  color: var(--color-gray-800);
`;

const SidebarContainer = styled.div`
  width: 178px;
`;

const StyleUl = styled.ul`
  padding: 0px;
`;
const StyledLi = styled.li`
  display: flex;
  font-weight: 700;
  padding: 0 0 1.875rem 1rem;
  &:hover {
    cursor: pointer;
    color: var(--color-primary);
  }
  .active & {
    color: var(--color-theme);
  }
`;

export function Sidebar({ tweetInput, currentMember, onChange, onAddTweet }) {
  const { pathname } = useLocation();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleShowModal = () => {
    const nextShowModal = !showModal;
    setShowModal(nextShowModal);
  };

  const handleLogoutClick = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <>
      <StyledSidebar>
        <SidebarContainer>
          <div style={{ padding: '0 0 31.78px 0' }}>
            <IconLogo />
          </div>
          <StyleUl>
            <NavLink to='/tweets'>
              <StyledLi>
                <div className='icon'>
                  {pathname.includes('tweets') &&
                  !pathname.includes('users') ? (
                    <IconHomeFi />
                  ) : (
                    <IconHomeOut />
                  )}
                </div>
                <span>&ensp;首頁</span>
              </StyledLi>
            </NavLink>
            {/* 暫時，種子的 id 是2 */}
            <NavLink
              to={`/users/2/tweets`}
              className={pathname.includes(`users/2`) && 'active'}
            >
              {/* <NavLink
            to={`/users/${currentMember.id}/tweets`}
            className={
              pathname.includes(`users/${currentMember.id}`) && 'active'
            }
            > */}
              <StyledLi>
                <div className='icon'>
                  {/* {pathname.includes(`users/${currentMember.id}`) ? ( */}
                  {/* 等 userContext 的資料 */}
                  {/* 暫時，種子的 id 是2 */}
                  {pathname.includes(`users/2`) ? (
                    <IconUserFi />
                  ) : (
                    <IconUserOut />
                  )}
                </div>
                <span>個人資料</span>
              </StyledLi>
            </NavLink>
            <NavLink to='/setting'>
              <StyledLi>
                <div className='icon'>
                  {pathname.includes('setting') ? (
                    <IconCogFi />
                  ) : (
                    <IconCogOut />
                  )}
                </div>
                <span>設定</span>
              </StyledLi>
            </NavLink>
          </StyleUl>
          <ModalBtn></ModalBtn>
        </SidebarContainer>
        <SidebarContainer>
          <StyleUl>
            <StyledLi onClick={handleLogoutClick}>
              <IconLogout />
              登出
            </StyledLi>
          </StyleUl>
        </SidebarContainer>
      </StyledSidebar>
      {showModal && (
        <TweetCard
          tweetInput={tweetInput}
          // currentUser={currentUser}
          // onChange={onChange}
          onAddTweet={onAddTweet}
          onClose={handleShowModal}
        />
      )}
    </>
  );
}

export function AdminSidebar() {
  const { pathname } = useLocation();

  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };
  return (
    <>
      <StyledSidebar>
        <SidebarContainer>
          <div style={{ padding: '0 0 31.78px 0' }}>
            <IconLogo />
          </div>
          <StyleUl>
            <StyledLi>
              <IconHomeOut />
              &ensp;首頁
            </StyledLi>
            <StyledLi>
              <IconUserOut />
              &ensp;個人資料
            </StyledLi>
            <StyledLi>
              <IconCogOut />
              &ensp;設定
            </StyledLi>
          </StyleUl>
          <ModalBtn></ModalBtn>
        </SidebarContainer>
        <SidebarContainer>
          <StyleUl>
            <StyledLi onClick={handleClick}>
              <IconLogout />
              登出
            </StyledLi>
          </StyleUl>
        </SidebarContainer>
      </StyledSidebar>
    </>
  );
}
