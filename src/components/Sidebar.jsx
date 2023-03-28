import {
  IconLogo,
  IconUserOut,
  IconLogout,
  IconHomeOut,
  IconCogOut,
} from 'assets/icons';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ModalBtn from './Modal';

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
const PageLink = styled.li`
  display: flex;
  font-weight: 700;
  padding: 0 0 1.875rem 1rem;
  &:hover {
    cursor: pointer;
    color: var(--color-primary);
  }
`;

function Sidebar() {
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
            <PageLink>
              <IconHomeOut />
              &ensp;首頁
            </PageLink>
            <PageLink>
              <IconUserOut />
              &ensp;個人資料
            </PageLink>
            <PageLink>
              <IconCogOut />
              &ensp;設定
            </PageLink>
          </StyleUl>
          <ModalBtn></ModalBtn>
        </SidebarContainer>
        <SidebarContainer>
          <StyleUl>
            <PageLink onClick={handleClick}>
              <IconLogout />
              登出
            </PageLink>
          </StyleUl>
        </SidebarContainer>
      </StyledSidebar>
    </>
  );
}

export default Sidebar;
