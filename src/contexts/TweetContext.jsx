import { createContext, useState, useEffect, useContext } from 'react';
import { getTweets, createTweet, getSingleTweet, getReplies } from 'api/tweet';

const TweetsContext = createContext();

export const useTweets = () => useContext(TweetsContext);

export const TweetsProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState('');
  const [tweets, setTweets] = useState([]);
  const [replies, setReplies] = useState([]);

  // 在 handleGetTweet 函式中，getATweet API 返回的數據是一個物件，而 setSingleTweet 的參數需要是一個與 tweets 陣列中每個元素相同的物件格式。這是因為 singleTweet 狀態的值在應用中可能會用於顯示單個推文的詳細信息，例如該推文的創建時間、作者等等，因此必須與 tweets 陣列中的元素具有相同的屬性。

  const tweetFormat = {
    User: {
      account: null,
      avatar: null,
      name: null,
    },
    UserId: null,
    createdAt: null,
    description: null,
    id: null,
    isLiked: null,
    likesNum: null,
    repliesNum: null,
    updatedAt: null,
  };

  const [singleTweet, setSingleTweet] = useState(tweetFormat);

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
      const [tweet, replyCollection] = await Promise.all([
        getSingleTweet(id),
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
  // console.log('tweet', singleTweet);
  // console.log('replies', replies);
  return (
    <TweetsContext.Provider
      value={{
        inputValue,
        handleChange,
        handleAddTweet,
        tweets,
        handleGetTweet,
        replies,
        singleTweet,
      }}
    >
      {children}
    </TweetsContext.Provider>
  );
};
