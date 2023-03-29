import { Header } from 'components/common/common.styled';
// import TweetCollection from 'components/TweetCollection';
import { ScrollBar } from 'pages/HomePage';
// import { adminGetTweets, deleteTweet } from 'api/admin';

import React from 'react';

const AdminTweetsPage = ({ tweets }) => {
  return (
    <>
      <Header>推文清單</Header>
      <ScrollBar>{/* <TweetCollection tweets={tweets} /> */}</ScrollBar>
    </>
  );
};

export default AdminTweetsPage;
