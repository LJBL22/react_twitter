import { tweetData } from './dummyData';
import { StyledAvatar, StyledImgDiv } from './styles/Avatar.styled';
import {
  StyledCardDiv,
  StyledContextDiv,
  StyledItemDiv,
  StyledDescriptionDiv,
  StyledCardName,
  StyledCardAccount,
} from './styles/InputTweet.styled';

function TweetCard({ divWidth, divHeight }) {
  const tweets = tweetData;
  const name = tweetData[0].name;
  const account = tweetData[0].account;
  const description = tweetData[0].description;
  const avatar = tweetData[0].avatar;
  console.log(tweets);
  return (
    //  想要重新命名InputTweet.styled.js 檔名 初步嘗試 git mv 路徑有問題，待之後確認
    <StyledCardDiv divWidth={divWidth} divHeight={divHeight}>
      <StyledImgDiv>
        <StyledAvatar src={avatar} alt="avatar" />
      </StyledImgDiv>
      <StyledContextDiv>
        <StyledItemDiv>
          {/* en space，en是字體排印的一個計量單位，寬度是字體寬度的一半 */}
          <StyledCardName>{name}</StyledCardName>&ensp;
          <StyledCardAccount>@{account}・3 小時</StyledCardAccount>
        </StyledItemDiv>
        <StyledDescriptionDiv>{description}</StyledDescriptionDiv>
        <StyledItemDiv>
          <div>likes</div>
          <div>replies</div>
        </StyledItemDiv>
      </StyledContextDiv>
    </StyledCardDiv>
  );
}

export default TweetCard;
