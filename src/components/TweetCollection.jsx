import TweetCard from './TweetCard';
import { tweetData } from './dummyData';

function TweetCollection() {
  const cardCollection = tweetData.map((card) => {
    console.log(card);
    return (
      <div>
        <TweetCard />
      </div>
    );
  });

  return <div>{cardCollection}</div>;
}

export default TweetCollection;
