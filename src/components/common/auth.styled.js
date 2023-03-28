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
  margin-bottom: 30px;
`;

const StyledFlexP = styled.p`
position: absolute;
bottom: -2.875rem;
right: 0;
`

const StyledLinkText = styled.span`
  color: var(--color-primary);
  text-decoration: underline;
`;

export {
  StyedContainer as AuthContainer,
  StyledAuthInputContainer as AuthInputContainer,
  StyledLinkText as AuthLinkText,
  StyledFlexP as AuthP,
};
