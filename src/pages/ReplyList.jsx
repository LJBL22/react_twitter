import styled from 'styled-components';
import { StyledHeader } from 'components/styles/InputTweet.styled';
import { IconBack } from 'assets/icons';
import TweetReply from 'components/TweetReply';
import { ReplyCollection } from 'components/TweetCollection';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getSingleTweet, getReplies, replyTweet } from 'api/tweet';
import { useUser } from 'contexts/UserContext';

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
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);
  const { id } = useParams;
  const { currentUser } = useUser();
  console.log('currentUserReply', currentUser);
  // 瀏覽單則推文
  const [singleTweet, setSingleTweet] = useState([]);
  // 留言回覆
  const [tweetReplies, setTweetReplies] = useState([]);
  // 回覆 input 狀態
  const [replyInput, setReplyInput] = useState('');
  const [isLoading, setIsLoading] = true;
  // console.log('singleTweet', singleTweet);
  // console.log('replies', replies);
  // 使用 handleClick 點擊其中一推文後，可瀏覽該則推文，及其相關回覆
  useEffect(() => {
    const getSingleTweet = async () => {
      try {
        const tweet = await getSingleTweet(id);
        const replies = await getReplies(id);
        if (replies !== undefined) {
          setTweetReplies(replies);
        }
        setSingleTweet(tweet);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    getSingleTweet();
  }, []);

  const handleInputChange = (value) => {
    setReplyInput(value);
  };

  const handleAddReply = async () => {
    try {
      const data = await replyTweet({
        id: singleTweet.id,
        comment: replyInput,
      });
      if (data === 'error') return;
      // 思考加這行的好處?

      // setTweets
      // const nextTweetReplies = [{}];
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <BackHeader>
        <div>
          <div>
            <IconBack />
          </div>
          <div>推文</div>
        </div>
      </BackHeader>
      <TweetReply
        singleTweet={singleTweet}
        currentUser={currentUser}
        replyInput={replyInput}
        onChange={handleInputChange}
      />
      {!isLoading && tweetReplies !== null && (
        <ReplyCollection replies={tweetReplies} replyTo={singleTweet} />
      )}
      {!isLoading && tweetReplies.length === 0 && (
        <div>此貼文目前沒有回覆訊息</div>
      )}
    </div>
  );
};

export default ReplyList;
