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
      console.log('data', data);
      setTweets((prevTweets) => {
        return [
          ...prevTweets,
          {
            id: data.data.id,
            description: data.data.description,
            UserId: data.data.UserId,
            createdAt: data.data.createdAt,
            updatedAt: data.data.updatedAt,
            likesNum: 0,
            repliesNum: 0,
            User: {
              account: 'test',
              avatar:
                'https://www.akc.org/wp-content/uploads/2021/07/Cavalier-King-Charles-Spaniel-laying-down-indoors.jpeg',
              name: 'test',
            },
          },
        ];
      });

      const newTweet = {
        id: data.data.id,
        description: data.data.description,
        UserId: data.data.UserId,
        createdAt: data.data.createdAt,
        updatedAt: data.data.updatedAt,
        likesNum: 0,
        repliesNum: 0,
        User: {
          account: 'heklo',
          avatar:
            'https://www.akc.org/wp-content/uploads/2021/07/Cavalier-King-Charles-Spaniel-laying-down-indoors.jpeg',
          name: 'test',
        },
      };

      const updatedTweets = [newTweet, ...tweets];
      setTweets(updatedTweets);
      setInputValue('');
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
        setTweets,
      }}
    >
      {children}
    </TweetsContext.Provider>
  );
};
