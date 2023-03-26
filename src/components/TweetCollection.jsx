import TweetCard from './TweetCard';
// import { tweetData } from './dummyData';

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
  // console.log('tweets', tweets);
  return (
    <div>
      {replyData.map((card) => {
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
};
