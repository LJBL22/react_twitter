import styled from 'styled-components';
import { StyledHeader } from 'components/styles/InputTweet.styled';
import { IconBack } from 'assets/icons';
import TweetReply from 'components/TweetReply';
import { ReplyCollection } from 'components/TweetCollection';
import { useReply, ReplyTweetProvider } from 'contexts/ReplyContext';
import { useParams } from 'react-router-dom';

export const BackHeader = styled(StyledHeader)`
  & > div {
    display: flex;
    width: 100%;
    & > div {
      display: flex;
      flex-wrap: nowrap;
      padding-right: 1.46rem;
    }
  }
`;

const ReplyList = () => {
  const { repliesData } = useReply();
  const { tweetId } = useParams();
  console.log('tweetId', tweetId);
  console.log('replies from ReplyList', { repliesData });
  return (
    <div>
      <ReplyTweetProvider>
        <BackHeader>
          <div>
            <div>
              <IconBack />
            </div>
            <div>推文</div>
          </div>
        </BackHeader>
        <TweetReply />
        <ReplyCollection replyData={repliesData} tweetId={tweetId} />
      </ReplyTweetProvider>
    </div>
  );
};

export default ReplyList;
