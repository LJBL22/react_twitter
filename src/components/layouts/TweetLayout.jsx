import PopularList from 'components/PopularList';
import { Sidebar } from 'components/Sidebar';
import { device, GridContainer } from 'components/styles/Container.styled';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const TweetContainer = styled(GridContainer)`
  display: grid;
  grid-auto-flow: column;
  @media screen and (${device.md}) {
    /* 設定無效 無法改他們三欄的比例 */
    grid-template-rows: 1fr;
    grid-template-columns: 3.45fr 6.61fr 4.44fr;
  }

  @media screen and (${device.lg}) {
    grid-template-rows: 1fr;
    grid-template-columns: 2.91fr 5.6fr 3.74fr;
  }
`;

const TweetLayout = () => {
  return (
    <>
      <TweetContainer>
        <div className='grid-item'>
          <Sidebar />
        </div>
        <div className='grid-item'>
          <Outlet />
        </div>
        <div className='grid-item'>
          <PopularList />
        </div>
      </TweetContainer>
    </>
  );
};

export default TweetLayout;
