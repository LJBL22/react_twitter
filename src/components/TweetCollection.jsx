import TweetCard from './TweetCard';

function TweetCollection({ tweets }) {
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
          />
        );
      })}
    </div>
  );
};
