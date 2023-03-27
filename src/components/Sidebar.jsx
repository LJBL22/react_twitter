import {
  IconLogo,
  IconUserOut,
  IconLogout,
  IconHomeOut,
  IconCogOut,
} from 'assets/icons';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AuthButton } from 'components/common/auth.styled';

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
  padding: 1.875rem 0 0 1rem;
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
          <IconLogo />
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
          <AuthButton>推文</AuthButton>
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
