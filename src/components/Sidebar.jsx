import {
  IconLogo,
  IconUserOut,
  IconCogFi,
  IconLogout,
  IconHomeOut,
} from "assets/icons";
import styled from "styled-components";

const StyledSidebar = styled.nav`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  /* 檢查用 */
  background-color: var(--color-gray-300);
  /* background-color: white; */
  color: var(--color-gray-800);
`;

const PageLink = styled.li`
  display: flex;
`;

function Sidebar() {
  return (
    <>
      <nav className="sidebar">
        <StyledSidebar>
          <div>
            <IconLogo />
            <ul>
              <PageLink>
                <IconHomeOut />
                首頁
              </PageLink>
              <PageLink>
                <IconUserOut />
                個人資料
              </PageLink>
              <PageLink>
                <IconCogFi />
                設定
              </PageLink>
              <PageLink>
                <IconCogFi />
                Test for noto and 123457859%
              </PageLink>
            </ul>
          </div>
          <div>
            <ul>
              <PageLink>
                <IconLogout />
                登出
              </PageLink>
            </ul>
          </div>
        </StyledSidebar>
      </nav>
    </>
  );
}

export default Sidebar;
