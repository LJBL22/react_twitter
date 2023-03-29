import { createContext, useContext, useState } from 'react';

const UserContext = createContext(null);

const userData = {
  id: 2,
  email: 'user1@example.com',
  account: 'user1',
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
  const [currentUser, setCurrentUser] = useState(userData);
  const [userFollowings, setUserFollowings] = useState([]);
  const [userLikes, setUserLikes] = useState([]);

  const handleUserUpdate = (data) => {
    setCurrentUser(data);
  };

  return (
    <UserContext.Provider
      value={{
        currentUser,
        handleUserUpdate,
        setCurrentUser,
        userFollowings,
        setUserFollowings,
        userLikes,
        setUserLikes,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
