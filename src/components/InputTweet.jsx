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
  borderBottom,
  placeholder,
  error,
  setError,
}) {
  const { currentUser } = useUser();
  const words = tweetValue.trim().split(/\s+/);
  const invalidLength = words.length > 140;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (tweetValue.length === 0) {
      setError(true);
    }
  };
  return (
    <StyledCardDiv
      divWidth={divWidth}
      divHeight={divHeight}
      borderBottom={borderBottom}
    >
      <StyledImgDiv>
        <img src={currentUser.avatar} alt='avatar' />
      </StyledImgDiv>
      <StyledForm onSubmit={handleSubmit}>
        <StyledTextarea
          width={width}
          height={height}
          placeholder={placeholder}
          onChange={(e) => onChange?.(e.target.value)}
          value={tweetValue}
        />
        <div className='submitHint'>
          {/* submit 以後，text 設定為空值 */}
          {error && <div className='errorHint'>字數不可為空</div>}
          {invalidLength && (
            <div className='errorHint'>字數不可超過140個字</div>
          )}
          <ThemeButton
            width='64px'
            onClick={() => onClick?.()}
            className={invalidLength ? 'disabled' : ''}
          >
            推文
          </ThemeButton>
        </div>
      </StyledForm>
    </StyledCardDiv>
  );
}

export default InputTweet;
