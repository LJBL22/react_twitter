import Main from "./Main";
import InputTweet from "./InputTweet";
import TweetCollection from "./TweetCollection";

function MainTweet() {
  return (
    <div>
      <Main>
        <InputTweet
          width="32.875rem"
          height="8.5625rem"
          divWidth="40.0625rem"
          divHeight="8.625rem"
        />
        <TweetCollection />
      </Main>
    </div>
  );
}

export default MainTweet;
