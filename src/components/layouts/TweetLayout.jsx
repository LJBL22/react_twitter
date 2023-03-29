import PopularList from 'components/PopularList';
import { Sidebar } from 'components/Sidebar';
import { device, GridContainer } from 'components/styles/Container.styled';
import { Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuth } from 'contexts/AuthContext';
import { useUser } from 'contexts/UserContext';
import styled from 'styled-components';
import { createTweet, getATweet, getReplies } from 'api/tweet';
import { getUserData } from 'api/user';

const TweetContainer = styled(GridContainer)`
  display: grid;
  grid-auto-flow: column;
  @media screen and (${device.md}) {
    grid-template-rows: 1fr;
    grid-template-columns: 3.45fr 6.61fr 4.44fr;
  }

  @media screen and (${device.lg}) {
    grid-template-rows: 1fr;
    grid-template-columns: 2.91fr 5.6fr 3.74fr;
  }
`;

const TweetLayout = () => {
  const { currentMember } = useAuth();
  const { currentUser, setCurrentUser, setUserFollowings, setUserLikes } =
    useUser();
  const [tweetInput, setTweetInput] = useState('');
  const [tweets, setTweets] = useState([]);
  const [singleTweet, setSingleTweet] = useState([]);
  const [replies, setReplies] = useState([]);

  const { pathname } = useLocation();
  console.log('currentMember', currentMember);
  const id = currentMember.id;
  // Input Tweet 撰寫推文
  const handleChange = (value) => {
    setTweetInput(value);
  };

  // 使用 handleAddTweet 拿到 createTweet API 新增一則推文
  const handleAddTweet = async () => {
    if (tweetInput.length === 0) {
      return;
    }
    try {
      const data = await createTweet({
        description: tweetInput,
      });
      console.log('TTTdata', data);
      const newTweets = [
        {
          id: data.id,
          description: data.description,
          UserId: data.UserId,
          createdAt: data.createdAt,
          updatedAt: data.updatedAt,
          likesNum: 0,
          repliesNum: 0,
          User: {
            account: data.User.account,
            avatar: data.User.avatar,
            name: data.User.name,
          },
        },
        ...tweets,
      ];
      // 這裡使用 setTimeout 更好使用者體驗
      setTimeout(() => {
        setTweets(newTweets);
        setTweetInput('');
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const getUserAsync = async () => {
      try {
        // 將現有使用者拿到的id 去抓 currentUser
        const currentUser = await getUserData(id);
        console.log('currentUser', currentUser);
        setCurrentUser(currentUser);
      } catch (error) {
        console.error(error);
      }
    };
    getUserAsync();
  }, []);

  // 使用 handleClick 點擊其中一推文後，可瀏覽該則推文，及其相關回覆
  const handleGetTweet = async (id) => {
    try {
      const [tweet, replyCollection] = await Promise.all([
        getATweet(id),
        getReplies(id),
      ]);
      // 前面有資料，但問題點是這裡的setState 沒有把資料更新進去, 導致輸出以後還是初始值
      setSingleTweet({ tweet });
      setReplies(
        replyCollection.map((reply) => {
          return {
            ...reply,
          };
        })
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <TweetContainer>
        <div className='grid-item'>
          <Sidebar />
        </div>
        <div className='grid-item'>
          <Outlet
            context={{
              currentUser,
              tweets,
              setTweets,
              tweetInput,
              handleChange,
              handleAddTweet,
              handleGetTweet,
            }}
          />
        </div>
        <div className='grid-item'>
          <PopularList />
        </div>
      </TweetContainer>
    </>
  );
};

export default TweetLayout;
