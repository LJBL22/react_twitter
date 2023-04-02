import styled from 'styled-components';
export const breakpoint = {
  md: '992px',
  lg: '1200px',
};

export const device = {
  md: `min-width: ${breakpoint.md}`,
  lg: `min-width: ${breakpoint.lg}`,
};

export const Container = styled.div`
  max-width: 100%;
  padding: 0 24px;
  margin: 0 auto;

  @media screen and (${device.md}) {
    max-width: 960px;
    padding: unset;
  }

  @media screen and (${device.lg}) {
    max-width: 1140px;
  }
`;

export const GridContainer = styled(Container)`
  @media screen and (${device.md}) {
    display: grid;
    grid-template-columns: 1fr 4fr 3fr;
  }

  @media screen and (${device.lg}) {
    grid-template-columns: 1fr 3fr 1.75fr;
  }
`;
