import TweetCard from './TweetCard';
import { tweetData } from './dummyData';

function TweetCollection() {
  return (
    <div>
      {tweetData.map((card) => {
        return (
          <TweetCard
            divWidth="40.0625rem"
            divHeight="auto"
            key={card.id}
            card={card}
          />
        );
      })}
    </div>
  );
}

export default TweetCollection;
