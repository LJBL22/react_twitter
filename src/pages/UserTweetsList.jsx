import React from 'react';
import { ReplyCard, TweetCard } from 'components/TweetCard';
import { useOutletContext } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const UserTweets = () => {
  // 等資料用好 把map的 card 改成 tweet, 傳tweet跟 homePage的 card 做區分，刪除 userInfo
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
  // 等資料用好 把map的 card 改成 tweet, 傳tweet跟 homePage的 card 做區分，刪除 userInfo
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
