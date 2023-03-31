import PopularList from 'components/PopularList';
import { Sidebar } from 'components/Sidebar';
import { device, GridContainer } from 'components/styles/Container.styled';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { useUser } from 'contexts/UserContext';
import styled from 'styled-components';
import { createTweet } from 'api/tweet';

const TweetContainer = styled(GridContainer)`
  max-width: inherit;
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
  const { currentUser, userLikes } = useUser();
  const [tweetInput, setTweetInput] = useState('');
  const [tweets, setTweets] = useState([]);

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

  // useEffect(() => {
  //   const getUserAsync = async () => {
  //     try {
  //       // 將現有使用者拿到的id 去抓 currentUser
  //       const currentUser = await getUserData(id);
  //       // console.log('currentUser', currentUser);
  //       // 拿到使用者追蹤清單
  //       const userFollowings = await getFollowings(id);
  //       // 拿到使用者喜歡貼文清單
  //       const userLikes = await getUserLikes(id);
  //       setCurrentUser(currentUser);
  //       setUserFollowings(userFollowings);
  //       setUserLikes(userLikes);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   getUserAsync();
  //   // 這邊是否要把'setUserFollowings' and 'setUserLikes 寫進去才合理呢?
  // }, [id, setCurrentUser]);

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
              userLikes,
            }}
          />
        </div>
        <div
          className='grid-item'
          style={{ borderLeft: 'var(--color-gray-border) 1px solid' }}
        >
          <PopularList />
        </div>
      </TweetContainer>
    </>
  );
};

export default TweetLayout;
