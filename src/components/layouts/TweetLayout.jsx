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
  const [error, setError] = useState(false);
  // Input Tweet 撰寫推文
  const handleChange = (value) => {
    if (tweetInput.length > 0) {
      setError(false);
    }
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
              error,
              setError,
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
