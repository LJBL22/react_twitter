import React from 'react';
import { TweetCard } from 'components/TweetCard';
import { useOutletContext } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const UserTweets = () => {
  const { userInfo, userTweets } = useOutletContext();
  console.log('userTweets', userTweets);
  const userTweetsCollection = userTweets.map((card) => {
    return (
      <TweetCard
        divWidth='40.0625rem'
        divHeight='auto'
        key={card.TweetId}
        card={card}
        userInfo={userInfo}
      />
    );
  });
  return <div>{userTweetsCollection}</div>;
};

export default UserTweets;
