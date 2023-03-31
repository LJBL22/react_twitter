import {
  StyledTextarea,
  StyledForm,
  StyledImgDiv,
} from './styles/InputTweet.styled';
import { StyledCardDiv } from 'components/common/common.styled';
import { useAuth } from 'contexts/AuthContext';

function InputTweet({
  width,
  height,
  divWidth,
  divHeight,
  tweetInput,
  onChange,
  onClick,
  isInputValid,
  borderBottom,
}) {
  const { currentMember } = useAuth();

  return (
    <StyledCardDiv
      divWidth={divWidth}
      divHeight={divHeight}
      borderBottom={borderBottom}
    >
      <StyledImgDiv>
        <img src={currentMember().avatar} alt='avatar' />
      </StyledImgDiv>
      <StyledForm
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <StyledTextarea
          width={width}
          height={height}
          onChange={(e) => onChange?.(e.target.value)}
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
