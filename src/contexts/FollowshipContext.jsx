import { createContext, useState, useEffect, useContext } from 'react';
import { getFollow } from 'api/followship';

const FollowshipContext = createContext();

export const useFollowship = () => useContext(FollowshipContext);

export const FollowshipProvider = ({ children }) => {
  //初始為空？應該要是整個資料庫的前十
  const [Followship, setFollowship] = useState([]);

  // get follow
  // 傳遞 handleChange (為了資料庫的追蹤狀態變動？)
  // useEffect 第一次的 getFollow

  useEffect(() => {
    const getFollowshipAsync = async () => {
      try {
        const Followship = await getFollow();
        setFollowship(
          Followship.map((popUserCard) => {
            return {
              ...popUserCard,
            };
          })
        );
      } catch (error) {
        console.error(error);
      }
    };
    getFollowshipAsync();
  }, []);

  //應該是實作完再來這裡用 context 方式，現在才局部應該不需要，去 poplist 弄就好
  const handleAddTweet = async () => {
    if (inputValue.length === 0) {
      return;
    }
    try {
      const data = await createTweet({
        description: inputValue,
      });
      // console.log('data', data);
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
  return (
    <TweetsContext.Provider
      value={{
        inputValue,
        handleChange,
        handleAddTweet,
        tweets,
      }}
    >
      {children}
    </TweetsContext.Provider>
  );
};
