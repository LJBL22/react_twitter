import { TweetCard, ReplyCard } from 'components/TweetCard';

function TweetCollection({ tweets }) {
  return (
    <div>
      {tweets.map((card) => {
        return (
          <TweetCard
            divWidth='40.0625rem'
            divHeight='auto'
            key={card.id}
            card={card}
            id={card.id}
          />
        );
      })}
    </div>
  );
}

export default TweetCollection;

export const ReplyCollection = ({ replies, replyTo }) => {
  const tweetReplies = replies.map((reply) => {
    return (
      <ReplyCard key={reply.id} reply={reply} replyTo={replyTo.User.account} />
    );
  });

  return <div>{tweetReplies}</div>;
};
