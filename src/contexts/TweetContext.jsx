import { createContext, useState, useEffect, useContext } from 'react';
import { getTweets, createTweet, getATweet, getReplies } from 'api/tweet';

const TweetsContext = createContext();

export const useTweets = () => useContext(TweetsContext);

export const TweetsProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState('');
  const [tweets, setTweets] = useState([]);
  const [replies, setReplies] = useState([]);

  // Input Tweet 撰寫推文
  const handleChange = (value) => {
    setInputValue(value);
  };

  // 拿到所有推文的API
  useEffect(() => {
    const getTweetsAsync = async () => {
      try {
        const tweets = await getTweets();
        setTweets(
          tweets.map((tweet) => {
            return {
              ...tweet,
            };
          })
        );
      } catch (error) {
        console.error(error);
      }
    };
    getTweetsAsync();
  }, []);

  // 使用 handleAddTweet 拿到 createTweet API 新增一則推文
  const handleAddTweet = async () => {
    if (inputValue.length === 0) {
      return;
    }
    try {
      const data = await createTweet({
        description: inputValue,
      });
      console.log('data', data);
      const newTweet = {
        id: data.id,
        description: data.description,
        UserId: data.UserId,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
        likesNum: 0,
        repliesNum: 0,
        User: {
          account: 'heklo',
          avatar:
            'https://www.akc.org/wp-content/uploads/2021/07/Cavalier-King-Charles-Spaniel-laying-down-indoors.jpeg',
          name: 'test',
        },
      };
      setTweets((prevTweets) => {
        return [...prevTweets, newTweet];
      });

      const updatedTweets = [newTweet, ...tweets];
      setTweets(updatedTweets);
      setInputValue('');
    } catch (error) {
      console.error(error);
    }
  };

  // 使用 handleClick 點擊其中一推文後，可瀏覽該則推文，及其相關回覆
  const handleGetTweet = async (id) => {
    try {
      const [tweet, replies] = await Promise.all([
        getATweet(id),
        getReplies(id),
      ]);
      console.log('getATweet', tweet);
      console.log('getReplies', replies);
      return setReplies(
        replies.map((reply) => {
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
    <TweetsContext.Provider
      value={{
        inputValue,
        handleChange,
        handleAddTweet,
        tweets,
        handleGetTweet,
      }}
    >
      {children}
    </TweetsContext.Provider>
  );
};
