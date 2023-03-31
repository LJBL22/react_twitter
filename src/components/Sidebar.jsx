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
import { TweetModal } from './Modal';
import { useAuth } from 'contexts/AuthContext';

const StyledSidebar = styled.nav`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  background-color: white;
  color: var(--color-gray-800);
  border-right: var(--color-gray-border) 1px solid;
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

export function Sidebar({ tweetInput, currentUser, onChange, onAddTweet }) {
  const { currentMember } = useAuth();
  const { pathname } = useLocation();
  // const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  // const handleShowModal = () => {
  //   const nextShowModal = !showModal;
  //   setShowModal(nextShowModal);
  // };

  const handleLogout = () => {
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
            <NavLink
              to={`/users/${currentMember().id}/tweets`}
              className={
                pathname.includes(`users/${currentMember().id}`) && 'active'
              }
            >
              <StyledLi>
                <div className='icon'>
                  {pathname.includes(`users/${currentMember().id}`) ? (
                    <IconUserFi />
                  ) : (
                    <IconUserOut />
                  )}
                </div>
                <span>&ensp;個人資料</span>
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
                <span>&ensp;設定</span>
              </StyledLi>
            </NavLink>
          </StyleUl>
          <TweetModal />
        </SidebarContainer>
        <SidebarContainer>
          <StyleUl>
            <StyledLi onClick={handleLogout}>
              <IconLogout />
              登出
            </StyledLi>
          </StyleUl>
        </SidebarContainer>
      </StyledSidebar>
    </>
  );
}

export function AdminSidebar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleAdminLogout = () => {
    localStorage.removeItem('token');
    navigate('/admin');
  };
  return (
    <>
      <StyledSidebar>
        <SidebarContainer>
          <div style={{ padding: '0 0 31.78px 0' }}>
            <IconLogo />
          </div>
          <StyleUl>
            <NavLink to='/admin/tweets'>
              <StyledLi>
                <div className='icon'>
                  {pathname.includes('/tweets') ? (
                    <IconHomeFi />
                  ) : (
                    <IconHomeOut />
                  )}
                </div>
                <span>&ensp;推文清單</span>
              </StyledLi>
            </NavLink>
            <NavLink
              to='/admin/users'
              className={pathname.includes('users') && 'active'}
            >
              <StyledLi>
                <div className='icon'>
                  {pathname.includes('users') ? (
                    <IconUserFi />
                  ) : (
                    <IconUserOut />
                  )}
                </div>
                <span>&ensp;使用者列表</span>
              </StyledLi>
            </NavLink>
          </StyleUl>
        </SidebarContainer>
        <SidebarContainer>
          <StyleUl>
            <StyledLi onClick={handleAdminLogout}>
              <IconLogout />
              登出
            </StyledLi>
          </StyleUl>
        </SidebarContainer>
      </StyledSidebar>
    </>
  );
}
