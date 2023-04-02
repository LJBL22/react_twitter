import React from 'react';
import { ReplyCard, TweetCard } from 'components/TweetCard';
import { useOutletContext } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const UserTweets = () => {
  // 等資料用好 把map的 card 改成 tweet, 傳tweet跟 homePage的 card 做區分，刪除 userInfo
  const { userTweets } = useOutletContext();
  const userTweetsCollection = userTweets.map((tweet) => {
    return <TweetCard key={tweet.TweetId} tweet={tweet} id={tweet.TweetId} />;
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
  const { userLikes } = useOutletContext();
  const userLikesCollection = userLikes.map((tweet) => {
    return <TweetCard key={tweet.TweetId} tweet={tweet} id={tweet.TweetId} />;
  });
  return <div>{userLikesCollection}</div>;
};

export { UserTweets, UserReplied, UserLikes };
