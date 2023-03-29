import styled from 'styled-components';

const StyledTitle = styled.h1`
  margin: 29px 0 40px 0;
`;
const StyledHeader = styled.header`
  font-weight: 700;
  padding: 1.5rem;
  font-size: 1.5rem;
  border-bottom: var(--color-gray-border) 1px solid;
`;
const StyledButton = styled.button`
  border: none;
  color: white;
  font-weight: 400;
  background-color: var(--color-theme);
  padding: ${({ padding }) => padding || '8px 0'};
  border-radius: ${({ borderRadius }) => borderRadius || '50px'};
  height: ${({ hight }) => hight || '46px'};
  width: ${({ width }) => width || '7rem'};
  margin: ${({ margin }) => margin || 0};
  /* min-width: 178px; */
  /* height: 2.875rem; */
  /* width: 100%; */
  transition: background-color 0.1s ease-in-out;
  &:hover {
    cursor: pointer;
    background-color: var(--color-primary);
  }
`;

const StyledCardDiv = styled.div`
  display: flex;
  width: ${({ divWidth }) => divWidth};
  height: ${({ divHeight }) => divHeight};
  border-bottom: 1px solid var(--color-gray-border);
  min-height: 9.5625rem;
  padding-left: 1.655rem;
`;

const StyledBackHeader = styled(StyledHeader)`
  & > div {
    display: flex;
    width: 100%;
    & > div {
      display: grid;
      align-content: center;
      padding-right: 1.46rem;
      & .name {
        font-size: 1.38rem;
        color: var(--color-gray-900);
        line-height: 2rem;
      }
      & .tweetQty {
        font-weight: 500;
        font-size: 1rem;
        line-height: 1.46rem;
        color: var(--color-secondary);
      }
    }
  }
`;
const StyledAvatar = styled.div`
  & > img {
    object-fit: cover;
    height: ${({ height }) => height || '3.125rem'};
    max-width: ${({ width }) => width || '3.125rem'};
    border-radius: 100%;
  }
`;

export {
  StyledTitle as PageTitle,
  StyledHeader as Header,
  StyledButton as ThemeButton,
  StyledCardDiv,
  StyledAvatar,
  StyledBackHeader as BackHeader,
};
