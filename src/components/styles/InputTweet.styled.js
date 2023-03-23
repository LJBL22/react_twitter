import styled from "styled-components";

export const StyledCardDiv = styled.div`
  display: flex;
  width: ${({ divWidth }) => divWidth};
  height: ${({ divHeight }) => divHeight};
`;

export const StyledContextDiv = styled.div`
  padding: 1rem 1.8125rem 1.0625rem 0.5rem;
`;

export const StyledDescriptionDiv = styled.div`
  width: 33rem;
  height: 4.875rem;
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 400;
  font-size: var(--fs-basic);
  line-height: 1.625rem;
  color: var(--color-gray-900);
`;

export const StyledCardName = styled.p`
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 700;
  font-size: var(--fs-basic);
  line-height: 1.625rem;
  color: var(--color-gray-900);
`;

export const StyledCardAccount = styled.p`
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 400;
  font-size: var(--fs-secondary);
  line-height: 1.375rem;
  color: var(--color-secondary);
`;

export const StyledItemDiv = styled.div`
  display: flex;
  align-items: center;
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
