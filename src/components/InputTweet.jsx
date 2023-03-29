import { userData } from './dummyData';
import {
  StyledTextarea,
  StyledForm,
  StyledImgDiv,
} from './styles/InputTweet.styled';
import { StyledCardDiv } from 'components/common/common.styled';
import { useOutletContext } from 'react-router-dom';

function InputTweet({
  width,
  height,
  divWidth,
  divHeight,
  tweetInput,
  onChange,
  onClick,
  isInputValid,
}) {
  const { currentUser } = useOutletContext();
  // 要如何確認是哪一個使用者在撰寫推文?
  // 從驗證的 token 確認當下使用者
  // 要從後端拿到API 驗證當前的 currentUser 是誰，來取得他的資料。

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
          value={tweetInput}
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
