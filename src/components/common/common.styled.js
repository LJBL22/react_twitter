import styled, { css } from 'styled-components';

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
  height: ${({ height }) => height || '46px'};
  width: ${({ width }) => width || '7rem'};
  margin: ${({ margin }) => margin || 0};
  transition: background-color 0.1s ease-in-out;
  &:hover:not(.modal) {
    cursor: pointer;
    background-color: var(--color-primary);
  }
`;

const StyledModalBtn = styled(StyledButton)`
  & .modal-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9998;
    opacity: 0;
    /* 邊緣做效果 */
    /* filter: blur(0px); */
    transition: opacity 0.2s ease-in-out, filter 0.2s ease-in-out;
    &.show {
      opacity: 1;
      /* 邊緣做效果 */
      /* filter: blur(4px); */
    }
  }
  & .modal {
    position: fixed;
    top: 56px;
    left: 0;
    width: 100%;
    z-index: 9999;
    display: flex;
    justify-content: center;
    & .modal-content {
      border-radius: 14px;
      background-color: white;
      padding: 1rem;
    }
  }
  /* 繼承StyledButton的樣式並覆蓋width屬性 */
  ${({ modalBtnWidth }) => css`
    ${StyledButton};
    width: ${modalBtnWidth};
  `}
`;

const StyledCardDiv = styled.div`
  display: flex;
  width: ${({ divWidth }) => divWidth || '40.0625rem'};
  height: ${({ divHeight }) => divHeight || 'auto'};
  border-bottom: 1px solid var(--color-gray-border);
  min-height: 9.5625rem;
  padding-left: 1.655rem;
`;

const StyledBackHeader = styled(StyledHeader)`
  & > div {
    display: flex;
    width: 100%;
    align-items: center;
    & > div {
      display: grid;
      align-content: center;
      padding-left: 1.46rem;
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
    width: ${({ width }) => width || '3.125rem'};
    border-radius: 100%;
  }
`;

export {
  StyledTitle as PageTitle,
  StyledHeader as Header,
  StyledButton as ThemeButton,
  StyledModalBtn as ModalButton,
  StyledCardDiv,
  StyledAvatar,
  StyledBackHeader as BackHeader,
};
