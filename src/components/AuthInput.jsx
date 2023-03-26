import { useState } from "react";
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
  position: relative;
  &:focus-within {
    border-bottom: 2px solid var(--color-primary);
  }
  /* 有問題不確定可不可以吃到 */
  &:invalid[focused="true"] {
    border-bottom: 2px solid var(--color-error);
  }
  &:invalid[focused="true"] ~ span {
    display: block;
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

// 參照案例並想做自己的樣式，樣式成功了，但邏輯寫不成功。
//46-56 & 84
// const StyledError = styled.span`
//   position: absolute;
//   color: var(--color-error);
//   font-size: 30px;
//   bottom: -1.5rem;
//   display: none;
// `;

// const ErrorMsg = ({ msg }) => {
//   return <StyledError>{msg}</StyledError>;
// };

const AuthInput = ({
  type,
  label,
  value,
  placeholder,
  onChange,
  pattern,
  errorMsg,
}) => {
  const [focused, setFocused] = useState(false);
  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <StyledContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        type={type || "text"}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange?.(event.target.value)}
        onBlur={handleFocus}
        onFocus={() => value === "confirmPassword" && setFocused(true)}
        focused={focused.toString()}
        pattern={pattern}
      />
      {/* {errorMsg && <ErrorMsg msg={errorMsg} />} */}
    </StyledContainer>
  );
};

export default AuthInput;
