import userData from "./dummyData";
import { StyledAvatar } from "./styles/Avatar.styled";

function InputTweet() {
  const avatar = userData.user[0].avatar;
  return (
    <div>
      <StyledAvatar src={avatar} alt="avatar" />
      <textarea></textarea>
    </div>
  );
}

export default InputTweet;
