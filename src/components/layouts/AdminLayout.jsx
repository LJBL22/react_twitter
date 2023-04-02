import { AdminSidebar } from 'components/Sidebar';
import { device, GridContainer } from 'components/styles/Container.styled';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const AdminContainer = styled(GridContainer)`
  height: 100vh;
  overflow: hidden;
  @media screen and (${device.md}) {
    grid-template-columns: 1fr 7fr;
  }

  @media screen and (${device.lg}) {
    grid-template-columns: 1fr 4.5fr;
  }
`;
// 兩欄式
const AdminLayout = () => {
  return (
    <>
      <AdminContainer>
        <div className='fr1'>
          <AdminSidebar />
        </div>
        <div className='fr2'>
          <Outlet />
        </div>
      </AdminContainer>
    </>
  );
};

export default AdminLayout;
