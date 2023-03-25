import styled from 'styled-components';

const StyedContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 356px;
  margin: 69px auto;
  position: relative;
`;

const StyledAuthInputContainer = styled.div`
  width: 100%;
  margin-top: 30px;
`;

const StyledButton = styled.button`
  width: 100%;
  height: 2.875rem;
  border-radius: 50px;
  background-color: var(--color-theme);
  border: none;

  color: white;
  min-width: 300px;
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: 400;
  padding: 8px 0;
  margin: 2rem 0px 3rem;

  &:hover {
    cursor: pointer;
    background-color: var(--color-secondary-orange);
    border: 1px solid var(--color-gray-700);
  }
`;

const StyledFlexP = styled.p`
position: absolute;
bottom: 0;
right: 0;
`

const StyledLinkText = styled.span`
  color: var(--color-primary);
  text-decoration: underline;
`;

export {
  StyedContainer as AuthContainer,
  StyledAuthInputContainer as AuthInputContainer,
  StyledButton as AuthButton,
  StyledLinkText as AuthLinkText,
  StyledFlexP as AuthP,
};
