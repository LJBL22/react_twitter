import TweetCard from './TweetCard';
import { useTweets } from 'contexts/TweetContext';

function TweetCollection({ tweets }) {
  const { handleGetTweet } = useTweets;
  return (
    <div>
      {tweets.map((card) => {
        // console.log('card', card);
        return (
          <TweetCard
            divWidth='40.0625rem'
            divHeight='auto'
            key={card.id}
            card={card}
            onClick={() => handleGetTweet(card.id)}
          />
        );
      })}
    </div>
  );
}

export default TweetCollection;

export const ReplyCollection = ({ replyData, tweetId }) => {
  return (
    <div>
      {replyData.map((reply) => {
        return (
          <TweetCard
            divWidth='40.0625rem'
            divHeight='auto'
            key={reply.id}
            reply={reply}
            tweetId={tweetId}
          />
        );
      })}
    </div>
  );
};
