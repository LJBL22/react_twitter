import styled from 'styled-components';
import {
  StyledContentDiv,
  StyledItemDiv,
  StyledActions,
  StyledImgDiv,
  StyledCardDiv,
} from 'components/styles/InputTweet.styled';
import { IconLikeOut, IconReply } from 'assets/icons';
import { useTweets } from 'contexts/TweetContext';
import { tweetData } from './dummyData';
// 先使用假資料，第一篇 tweet
const tweet = tweetData[0];

const StyledMainCard = styled(StyledCardDiv)`
  width: 40.0625rem;
  min-height: 15.69rem;
`;

const BorderDivider = styled.div`
  width: 39rem;
  height: 0.076rem;
  background-color: var(--color-gray-border);
  margin-left: -1.4rem;
  align-items: center;
`;

const ReplyActions = styled(StyledActions)`
  margin-top: 0px;
  height: 4.61rem;
  & .number {
    font-weight: 700;
    font-size: 1.46rem;
    color: #000000;
  }
  & .text {
    font-weight: 500;
    font-size: 1.46rem;
    color: var(--color-secondary);
  }
`;

// 要先掛上 getReply 的API 去拿到裡面的id 來使用
const TweetReply = () => {
  const { singleTweet } = useTweets();
  console.log('ere', singleTweet);
  return (
    <StyledMainCard>
      <div>
        <StyledItemDiv>
          <StyledImgDiv>
            <img src={singleTweet.User.avatar} alt='avatar' />
          </StyledImgDiv>
          <div className='paddingL'>
            <p>{singleTweet.User.name}</p>
            <p>{singleTweet.User.account}</p>
          </div>
        </StyledItemDiv>
        <StyledContentDiv>
          <div className='styledContent'>{singleTweet.description}</div>
          <div className='styledTime'>上午 10:05・2021年11月10日</div>
        </StyledContentDiv>
        <BorderDivider />
        <ReplyActions>
          <div>
            <p className='number'>{singleTweet.repliesNum}</p>
            <p className='text'>回覆</p>
          </div>
          <div>
            <p className='number'>{singleTweet.likesNum}</p>
            <p className='text'>喜歡次數</p>
          </div>
        </ReplyActions>
        <BorderDivider />
        <ReplyActions>
          <div>
            <IconReply width='1.9rem' className='iconAction' />
          </div>
          <div>
            <IconLikeOut width='1.9rem' className='iconAction' />
          </div>
        </ReplyActions>
      </div>
    </StyledMainCard>
  );
};

export default TweetReply;
