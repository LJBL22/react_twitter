import styled, { css } from 'styled-components';

const StyledTitle = styled.h1`
  margin: 29px 0 40px 0;
`
const StyledHeader = styled.header`
  font-weight: 700;
  padding: 1.5rem;
  font-size: 1.5rem;
  border-bottom: var(--color-gray-border) 1px solid;
  `
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
  transition: background-color .1s ease-in-out;
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
export {
  StyledTitle as PageTitle,
  StyledHeader as Header,
  StyledButton as ThemeButton,
  StyledModalBtn as ModalButton,
}

