import React from 'react';
import TweetCard from 'components/TweetCard';
import { useOutletContext } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const UserTweets = () => {
  const { userInfo, userTweets } = useOutletContext();
  // const { handleGetTweet } = useOutletContext();
  // const navigate = useNavigate();

  // const handleCardClick = (id) => {
  //   handleGetTweet(id);
  //   navigate(`/tweets/${id}`);
  // };

  return (
    <div>
      userTweets
      {/* {userTweets.map((card) => {
        return <TweetCard divWidth='40.0625rem' divHeight='auto' card={card} />;
      })} */}
    </div>
  );
};

export default UserTweets;
