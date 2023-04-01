import { createContext, useContext, useState } from 'react';
import { likeTweet, unlikeTweet } from 'api/like';
import { following, unfollow } from 'api/followship';
import { useEffect } from 'react';
import { getFollowings, getUserData, getUserLikes } from 'api/user';
import { useAuth } from './AuthContext';

const UserContext = createContext(null);

const userData = {
  id: 2,
  email: 'user1@example.com',
  account: 'user456',
  password: '$2a$10$XMpUnrzEJxVI2b1rQIzPXOLcBHktHLuDQ67tGS.lJavo16CBLUz1O',
  name: '測試',
  avatar:
    'https://raw.githubusercontent.com/LJBL22/react_twitter/3d808b59166970aa7c34cbb78dba58d70b11fc63/src/logo.svg',
  coverUrl:
    'https://github.com/LJBL22/react_twitter/blob/main/src/assets/images/defaultCover.jpg?raw=true',
  introduction: '你好啊',
  role: 'user',
  createdAt: '2023-03-26T04:31:13.000Z',
  updatedAt: '2023-03-26T09:51:14.000Z',
};

export const useUser = () => useContext(UserContext);
export const UserProvider = ({ children }) => {
  const { currentMember } = useAuth();
  const id = currentMember().id;
  const [currentUser, setCurrentUser] = useState(userData);
  // 儲存使用者追蹤的 ID 名單
  const [userFollowings, setUserFollowings] = useState([]);
  const [userLikes, setUserLikes] = useState([]);
  // 儲存 特定使用者正在追蹤的用戶及資料
  const [userFollowInfo, setUserFollowInfo] = useState([]);

  const handleUserUpdate = (data) => {
    setCurrentUser(data);
  };

  // 每次 handleLike 完都要拿到最新的 userLikeID List
  const handleLike = async (id) => {
    try {
      if (userLikes.includes(id)) {
        await unlikeTweet(id);
        const newLikes = userLikes.filter((TweetId) => TweetId !== id);
        setUserLikes(newLikes);
        console.log('unLike-new', newLikes);
      } else {
        await likeTweet(id);
        const newLikes = [...userLikes, id];
        setUserLikes(newLikes);
        console.log('like-new', newLikes);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // 每次 handleFollow 完都要拿到最新的 userFollowingID List
  const handleFollow = async (id) => {
    try {
      //userFollowings = [1,2,3] 只能用來儲存followingId
      if (userFollowings.includes(id)) {
        await unfollow(id);
        const newFollowList = userFollowings.filter(
          (followingId) => followingId !== id
        );
        setUserFollowings(newFollowList);
        console.log('-following', newFollowList);
      } else {
        await following(id);
        const newFollowList = [...userFollowings, id];
        setUserFollowings(newFollowList);
        console.log('+following', newFollowList);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getUserAsync = async () => {
      try {
        // 處理 localStorage 裡面沒有 token 的情境
        if (!id) return;
        // 將現有使用者拿到的id 去抓 currentUser
        const currentUser = await getUserData(id);
        // console.log('currentUser', currentUser);
        // 拿到使用者追蹤用戶資料清單
        const userFollowings = await getFollowings(id);
        // 拿到使用者喜歡貼文清單
        const userLikes = await getUserLikes(id);
        setCurrentUser(currentUser);
        setUserFollowInfo(userFollowings);
        setUserLikes(userLikes);
      } catch (error) {
        console.error(error);
      }
    };
    getUserAsync();
    // 這邊是否要把'setUserFollowings' and 'setUserLikes 寫進去才合理呢?
  }, [id, setCurrentUser]);

  // 這裡的 currentUser 是拿到login的 ID ，所以是使用者
  return (
    <UserContext.Provider
      value={{
        currentUser,
        handleUserUpdate,
        setCurrentUser,
        userFollowings,
        setUserFollowings,
        userFollowInfo,
        setUserFollowInfo,
        userLikes,
        setUserLikes,
        handleFollow,
        handleLike,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
