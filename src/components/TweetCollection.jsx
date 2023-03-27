import TweetCard from './TweetCard';
import { Link } from 'react-router-dom';

function TweetCollection({ tweets }) {
  return (
    <Link to='/tweets/:tweetId'>
      <div>
        {tweets.map((card) => {
          return (
            <TweetCard
              divWidth='40.0625rem'
              divHeight='auto'
              key={card.id}
              card={card}
            />
          );
        })}
      </div>
    </Link>
  );
}

export default TweetCollection;

export const ReplyCollection = ({ replyData }) => {
  console.log('replyData from TweetCollection', replyData);
  return (
    <div>
      {replyData.map((reply) => {
        console.log('replyinMap', reply);
        return (
          <TweetCard
            divWidth='40.0625rem'
            divHeight='auto'
            key={reply.id}
            reply={reply}
          />
        );
      })}
    </div>
  );
};
