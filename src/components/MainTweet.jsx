import Main from "./Main";
import InputTweet from "./InputTweet";
import TweetCollection from "./TweetCollection";

function MainTweet() {
  return (
    <div>
      <Main>
        <InputTweet
          width="526px"
          height="137px"
          divWidth="641px"
          divHeight="138px"
        />
        <TweetCollection />
      </Main>
    </div>
  );
}

export default MainTweet;
