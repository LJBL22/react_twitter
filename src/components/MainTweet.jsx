import Main from "./Main";
import InputTweet from "./InputTweet";
import TweetCollection from "./TweetCollection";

function MainTweet() {
  return (
    <div>
      <Main>
        <InputTweet />
        <TweetCollection />
      </Main>
    </div>
  );
}

export default MainTweet;
