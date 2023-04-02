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
  width: ${({ width }) => width || '528px'}
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
  width: ${({ width }) => width || '33rem'}
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
  .iconDiv {
    display: flex;
    align-items: center;
    margin-right: 41.3px;
    & .iconAction {
      cursor: pointer;
      margin-right: 9.3px;
    }
    .NavLink {
      color: inherit;
      text-decoration: none;
      margin: 0;
      padding: 0;
    }
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0 0 1rem 0;
`;

export const StyledTextarea = styled.textarea.attrs({
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
