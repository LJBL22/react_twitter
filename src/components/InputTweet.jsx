import {userData} from "./dummyData";
import { StyledAvatar, StyledImgDiv } from "./styles/Avatar.styled";
import {
  StyledTextarea,
  StyledInputDiv,
  StyledForm,
} from "./styles/InputTweet.styled";

function InputTweet({ width, height, divWidth, divHeight }) {
  const avatar = userData.user[0].avatar;
  return (
    <StyledInputDiv divWidth={divWidth} divHeight={divHeight}>
      <StyledImgDiv>
        <StyledAvatar src={avatar} alt="avatar" />
      </StyledImgDiv>
      <StyledForm action="">
        {/* placeholder 文字沒有辦法寫在 StyledTextarea檔案中，待確認問題 */}
        <StyledTextarea
          width={width}
          height={height}
          maxLength="140"
          placeholder="有什麼新鮮事?"
        />
        <button>推文</button>
      </StyledForm>
    </StyledInputDiv>
  );
}

export default InputTweet;
