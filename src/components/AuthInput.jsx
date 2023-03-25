import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #f5f8fa;
  width: 100%;
  height: 54px;
  border-bottom: 2px solid var(--color-gray-900);
  border-radius: 2px;
  padding: 30px 10.45px;
  &:focus-within {
    border-bottom: 2px solid var(--color-primary);
  }
`;
const StyledLabel = styled.label`
  font-size: 14;
  color: var(--color-gray-700);
  text-align: start;
`;

const StyledInput = styled.input`
  outline: none;
  border: none;
  color: var(--color-gray-900);
  background-color: #f5f8fa;
  border-radius: 0px 0px 4px 4px;
  &::placeholder {
    color: var(--color-gray-500);
    opacity: 1; /* Firefox */
  }
`;

const AuthInput = ({ type, label, value, placeholder, onChange }) => {
  return (
    <StyledContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        type={type || "text"}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange?.(event.target.value)}
        required
      />
    </StyledContainer>
  );
};

export default AuthInput;
