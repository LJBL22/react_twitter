import React from 'react';
import { ReplyCard, TweetCard } from 'components/TweetCard';
import { useOutletContext } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const UserTweets = () => {
  const { userInfo, userTweets } = useOutletContext();
  const userTweetsCollection = userTweets.map((card) => {
    return <TweetCard key={card.TweetId} card={card} userInfo={userInfo} />;
  });
  return <div>{userTweetsCollection}</div>;
};

const UserReplied = () => {
  const { userInfo, userReplies } = useOutletContext();
  const userRepliesCollection = userReplies.map((reply) => {
    return (
      <ReplyCard
        key={reply.TweetId}
        reply={reply}
        userInfo={userInfo}
        replyTo={reply.account}
      />
    );
  });
  return <div>{userRepliesCollection}</div>;
};

const UserLikes = () => {
  const { userInfo, userLikes } = useOutletContext();
  const userLikesCollection = userLikes.map((card) => {
    return (
      <TweetCard
        key={card.TweetId}
        card={card}
        userInfo={userInfo}
        id={card.TweetId}
      />
    );
  });
  return <div>{userLikesCollection}</div>;
};

export { UserTweets, UserReplied, UserLikes };
