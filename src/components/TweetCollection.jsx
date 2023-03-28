import TweetCard from './TweetCard';
import { useTweets } from 'contexts/TweetContext';
import { useNavigate } from 'react-router-dom';

function TweetCollection({ tweets }) {
  const { handleGetTweet } = useTweets();
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    handleGetTweet(id);
    navigate(`/tweets/${id}`);
  };
  return (
    <div>
      {tweets.map((card) => {
        return (
          <TweetCard
            divWidth='40.0625rem'
            divHeight='auto'
            key={card.id}
            card={card}
            onClick={() => handleCardClick(card.id)}
          />
        );
      })}
    </div>
  );
}

export default TweetCollection;

export const ReplyCollection = ({ replyData }) => {
  return (
    <div>
      {replyData.map((reply) => {
        return (
          <TweetCard
            divWidth='40.0625rem'
            divHeight='auto'
            key={reply.id}
            reply={reply}
            onClick={null}
          />
        );
      })}
    </div>
  );
};
