import styled from "styled-components"

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
export {
  StyledTitle as PageTitle,
  StyledHeader as Header,
  StyledButton as ThemeButton,
}

