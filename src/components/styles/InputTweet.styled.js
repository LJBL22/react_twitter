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
    flex-basis: 64px;
    width: 64px;
    height: 40px;
    line-height: 64px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    border: none;
    border-radius: 50px;
    background-color: #ff6600;
    color: #ffffff;
  }
`;

export const StyledTextarea = styled.textarea`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: 28px 28.5px 28px 8px;
  maxlength: "140";
  border: none;
  resize: none;
  ::placeholder {
    color: #6c757d;
  }
  // 讓滑鼠移到textarea 不會顯示外框
  :focus {
    outline: none;
  }
`;
