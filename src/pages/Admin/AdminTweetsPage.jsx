import { Header } from 'components/common/common.styled';
// import TweetCollection from 'components/TweetCollection';
import { ScrollBar } from 'pages/HomePage';
// import { adminGetTweets, deleteTweet } from 'api/admin';
// import TweetCard from 'components/TweetCard';
// import { useTweets } from 'contexts/TweetContext';
// import { useNavigate, useOutletContext } from 'react-router-dom';
// import React, { useEffect, useState } from 'react';

export default function AdminTweetsPage() {
  // const { tweets, setTweets } = useOutletContext();
  // const navigate = useNavigate();
  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (!token) {
  //     navigate('/admin');
  //   }
  // }, [navigate]);

  // // 拿到所有推文的API
  // useEffect(() => {
  //   const getTweetsAsync = async () => {
  //     try {
  //       const tweets = await adminGetTweets();
  //       setTweets(
  //         tweets.map((tweet) => {
  //           return {
  //             ...tweet,
  //           };
  //         })
  //       );
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   getTweetsAsync();
  // }, []);
  return (
    <>
      <Header>推文清單</Header>
      <ScrollBar>{/* <TweetCollection tweets={tweets} /> */}</ScrollBar>
    </>
  );
}

// 這裡的 tweets 是什麼
// 然後要 handle 什麼
// 是要引入還是自己寫一個？
// function TweetCollection({ tweets }) {
//   const { handleGetTweet } = useTweets();
//   const navigate = useNavigate();

//   const handleCardClick = (id) => {
//     handleGetTweet(id);
//     navigate(`/tweets/${id}`);
//   };
//   return (
//     <div>
//       {tweets.map((card) => {
//         return (
//           <TweetCard
//             divWidth='40.0625rem'
//             divHeight='auto'
//             key={card.id}
//             card={card}
//             onClick={() => handleCardClick(card.id)}
//           />
//         );
//       })}
//     </div>
//   );
// }
