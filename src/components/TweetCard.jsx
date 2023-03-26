import {
  StyledCardDiv,
  StyledContentDiv,
  StyledItemDiv,
  StyledActions,
  StyledImgDiv,
} from './styles/InputTweet.styled';
import { IconLikeOut, IconReply } from 'assets/icons';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  // 去抓使用者的時區
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const now = new Date();

  //將日期轉換為使用者所在的時區 (toLocalString 回傳的是value的string toLocalDateString回傳的是Date的string)
  const localData = date.toLocaleString('en-US', { timeZone });

  // 生成時間小於 24 小時，以「幾小時前」的方式顯示
  const diff = (now - new Date(localData)) / 1000; // 時差（秒）
  // 60秒*60分*24小時= 86400
  if (diff < 86400) {
    const hours = Math.floor(diff / 3600);
    const minutes = Math.floor((diff % 3600) / 60);
    if (hours > 0) {
      return `${hours}hr`;
    } else {
      return `${minutes}min`;
    }
  }

  // 否則以「月日」的方式顯示
  const formatter = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
  });
  return formatter.format(date);
};

// 確認時間格式使用
// console.log('1', formatDate('2023-03-22T11:39:01.000Z'));
// console.log('2', formatDate('2023-03-24T03:26:01.000Z'));

function MainSection({ card }) {
  if ({ card }) {
    return (
      <>
        <div className='styledContent'>{card.description}</div>
        <StyledActions>
          <div>
            <IconReply width='0.825rem' className='iconAction' />
            {card.repliesNum}
          </div>
          <div>
            <IconLikeOut width='0.825rem' className='iconAction' />
            {card.likesNum}
          </div>
        </StyledActions>
      </>
    );
  }
  return (
    <>
      <div>hello</div>
    </>
  );
}

function TweetCard({ divWidth, divHeight, card, reply }) {
  const cardLocalTime = formatDate(card.createdAt);
  const cardUserName = card.User.name;
  const cardUserAccount = card.User.account;
  const cardUserAvatar = card.User.avatar;
  console.log('replyinTweetCard', reply);
  // const replyLocalTime = reply.createdAt;
  // const replyUserName = reply.User.name;
  // const replyUserAccount = reply.User.account;
  // const replyUserAvatar = reply.User.avatar;
  return (
    //  想要重新命名InputTweet.styled.js 檔名 初步嘗試 git mv 路徑有問題，待之後確認
    <StyledCardDiv divWidth={divWidth} divHeight={divHeight}>
      <StyledImgDiv>
        <img src={card ? cardUserAvatar : 'test'} alt='avatar' />
      </StyledImgDiv>
      <StyledContentDiv>
        <StyledItemDiv>
          {/* en space，en是字體排印的一個計量單位，寬度是字體寬度的一半 */}
          <p className='cardName'>{card ? cardUserName : 'test'}</p>
          &ensp;
          <p className='cardAccount'>
            @{card ? cardUserAccount : 'test'}・{card ? cardLocalTime : 'test'}
          </p>
        </StyledItemDiv>
        <MainSection card={card} />
      </StyledContentDiv>
    </StyledCardDiv>
  );
}

export default TweetCard;
