import {
  StyledTextarea,
  StyledForm,
  StyledImgDiv,
} from './styles/InputTweet.styled';
import { StyledCardDiv } from 'components/common/common.styled';
import { ThemeButton } from 'components/common/common.styled';
import { useUser } from 'contexts/UserContext';

function InputTweet({
  width,
  height,
  divWidth,
  divHeight,
  tweetValue,
  onChange,
  onClick,
  isInputValid,
  borderBottom,
  placeholder,
}) {
  const { currentUser } = useUser();

  console.log('twee', tweetValue);
  console.log('onChange', onChange);
  console.log('onClick', onClick);
  console.log('isInputValid', isInputValid);
  console.log('placeholder', placeholder);

  return (
    <StyledCardDiv
      divWidth={divWidth}
      divHeight={divHeight}
      borderBottom={borderBottom}
    >
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
          placeholder={placeholder}
          onChange={(e) => onChange?.(e.target.value)}
          value={tweetValue}
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
