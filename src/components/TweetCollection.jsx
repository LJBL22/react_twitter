import TweetCard from './TweetCard';
import { useOutletContext } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function TweetCollection({ tweets }) {
  const { handleGetTweet } = useOutletContext();
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
