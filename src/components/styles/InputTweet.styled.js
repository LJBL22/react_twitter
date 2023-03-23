import styled from "styled-components";

export const StyledInputDiv = styled.div`
  display: flex;
  width: ${({ divWidth }) => divWidth};
  height: ${({ divHeight }) => divHeight};
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  // 在 flex 內 控制裡面的button flex-basis 和寬高 &>button
  // 思考CSS變數化 以及把button 的style 拉出來共用
  & > button {
    flex-basis: 4rem;
    width: 4rem;
    height: 2.5rem;
    line-height: 4rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 3.125rem;
    background-color: var(--color-theme);
    color: var(--color-white);
  }
`;

export const StyledTextarea = styled.textarea`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: 1.75rem 1.78125rem 1.75rem 0.5rem;
  maxlength: "140";
  border: none;
  resize: none;
  ::placeholder {
    color: var(--color-secondary);
  }
  // 讓滑鼠移到textarea 不會顯示外框
  :focus {
    outline: none;
  }
`;
