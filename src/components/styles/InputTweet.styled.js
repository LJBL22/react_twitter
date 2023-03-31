import styled from 'styled-components';
import { StyledAvatar } from 'components/common/common.styled';

export const StyledHeader = styled.div`
  width: 40.0625rem;
  height: 3.1875rem;
  border-bottom: 0.0625rem solid var(--color-gray-border);
  border-top: none;
  & > div {
    font-weight: 700;
    font-size: var(--fs-h4);
    margin: 0rem 35.4375rem 1.5625rem 1.5rem;
    color: var(--color-gray-900);
  }
`;

export const StyledContentDiv = styled.div`
  flex-direction: column;
  padding: 1rem 1.8125rem 1.0625rem 0.5rem;
  width: 528px;
  & .cardName {
    font-style: normal;
    font-weight: 700;
    font-size: var(--fs-basic);
    line-height: 1.625rem;
    color: var(--color-gray-900);
  }
  &.cardAccount {
    font-style: normal;
    font-weight: 400;
    font-size: var(--fs-secondary);
    line-height: 1.375rem;
    color: var(--color-secondary);
  }
  & .styledContent {
    width: 33rem;
    height: auto;
    min-height: 4.875rem;
    font-style: normal;
    font-weight: 400;
    font-size: var(--fs-basic);
    line-height: 1.625rem;
    color: var(--color-gray-900);
  }
`;
export const StyledImgDiv = styled(StyledAvatar)`
  padding-top: 1rem;
  width: 50px;
`;
export const StyledItemDiv = styled.div`
  display: flex;
  align-items: center;
  & .paddingL {
    padding-left: 0.5rem;
  }
  & .cardName {
    font-style: normal;
    font-weight: 700;
    font-size: var(--fs-basic);
    line-height: 1.625rem;
    color: var(--color-gray-900);
  }
  & .cardAccount {
    font-style: normal;
    font-weight: 400;
    font-size: var(--fs-secondary);
    line-height: 1.375rem;
    color: var(--color-secondary);
  }
`;

export const StyledActions = styled(StyledItemDiv)`
  margin-top: 8px;
  > div {
    display: flex;
    align-items: center;
    margin-right: 41.3px;
    & .iconAction {
      margin-right: 9.3px;
    }
  }
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
    margin-bottom: 1rem;
    &:hover {
    cursor: pointer;
    background-color: var(--color-primary);
  }
  }
`;

export const StyledTextarea = styled.textarea.attrs({
  placeholder: '有什麼新鮮事?',
  maxLength: '140',
  // 日後挑戰，使用者可繼續打(textarea框會長高)，但超過140個字就會跳錯誤提示
})`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: 1.75rem 1.78125rem 1.75rem 0.5rem;
  border: none;
  resize: none;
  overflow: hidden;
  ::placeholder {
    color: var(--color-secondary);
  }
  // 讓滑鼠移到textarea 不會顯示外框
  :focus {
    outline: none;
  }
`;
