import { createContext, useState, useEffect, useContext } from 'react';
import { getTweets, createTweet } from 'api/tweet';

const TweetsContext = createContext();

export const useTweets = () => useContext(TweetsContext);

export const TweetsProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState('');
  const [tweets, setTweets] = useState([]);

  const handleChange = (value) => {
    setInputValue(value);
  };

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

  const handleAddTweet = async () => {
    if (inputValue.length === 0) {
      return;
    }
    try {
      const data = await createTweet({
        description: inputValue,
      });
      setTweets((prevTweets) => {
        return [
          ...prevTweets,
          {
            id: data.id,
            description: data.description,
          },
        ];
      });
      setInputValue('');
    } catch (error) {
      console.error(error);
    }
    console.log('inputValue', inputValue);
    // 要將新的推文確認好資料加到tweetData裡
  };
  return (
    <TweetsContext.Provider
      value={{ inputValue, handleChange, handleAddTweet, tweets }}
    >
      {children}
    </TweetsContext.Provider>
  );
};
