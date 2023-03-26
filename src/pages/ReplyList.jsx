import styled from 'styled-components';
import { StyledHeader } from 'components/styles/InputTweet.styled';
import { IconBack } from 'assets/icons';
import TweetReply from 'components/TweetReply';

const ReplyHeader = styled(StyledHeader)`
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
  return (
    <div>
      <ReplyHeader>
        <div>
          <div>
            <IconBack />
          </div>
          <div>推文</div>
        </div>
      </ReplyHeader>
      <TweetReply />
    </div>
  );
};

export default ReplyList;
