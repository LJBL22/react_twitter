import TweetCard from './TweetCard';


function TweetCollection({ tweets }) {
  // console.log('tweets', tweets);
  return (
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
  );
}

export default TweetCollection;

export const ReplyCollection = ({ replyData }) => {
  console.log('replyData', replyData);
  return (
    <div>
      {replyData.map((reply) => {
        console.log('replyinMap', reply);
        <TweetCard
          divWidth='40.0625rem'
          divHeight='auto'
          key={reply.id}
          reply={reply}
        />;
      })}
    </div>
  );
};
