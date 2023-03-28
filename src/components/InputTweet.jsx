import { userData } from './dummyData';
import {
  StyledTextarea,
  StyledCardDiv,
  StyledForm,
  StyledImgDiv,
} from './styles/InputTweet.styled';
import { useAuth } from 'contexts/AuthContext';

function InputTweet({
  width,
  height,
  divWidth,
  divHeight,
  inputValue,
  onChange,
  onClick,
  isInputValid,
}) {
  // 要如何確認是哪一個使用者在撰寫推文?
  // 從驗證的 token 確認當下使用者
  // 要從後端拿到API 驗證當前的 currentUser 是誰，來取得他的資料。
  const currentUser = userData[0];
  // 先假設此帳號登入使用者是 userId: 1
  // 要使用 userContext 拿到 userData 裡面的 avatar 來替換
  return (
    <StyledCardDiv divWidth={divWidth} divHeight={divHeight}>
      <StyledImgDiv>
        <img src={currentUser.avatar} alt='avatar' />
      </StyledImgDiv>
      <StyledForm
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <StyledTextarea
          width={width}
          height={height}
          onChange={(e) => onChange(e.target.value)}
          value={inputValue}
        />
        {/* submit 以後，text 設定為空值 */}
        <button onClick={() => onClick?.()} disabled={!isInputValid}>
          推文
        </button>
      </StyledForm>
    </StyledCardDiv>
  );
}

export default InputTweet;
