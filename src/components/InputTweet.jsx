import {
  StyledTextarea,
  StyledForm,
  StyledImgDiv,
} from './styles/InputTweet.styled';
import { StyledCardDiv } from 'components/common/common.styled';
import { useAuth } from 'contexts/AuthContext';
import { ThemeButton } from 'components/common/common.styled';

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
        <ThemeButton
          width='64px'
          onClick={() => onClick?.()}
          disabled={!isInputValid}
        >
          推文
        </ThemeButton>
      </StyledForm>
    </StyledCardDiv>
  );
}

export default InputTweet;
