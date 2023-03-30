import { login, register, adminLogin } from 'api/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const dummyUser = {
  id: 524,
  email: 'jennie@example.com',
  account: 'blackpink',
  name: 'Donut',
  avatar: '',
  coverUrl: '',
  introduction: 'In the area.',
  role: 'user',
  createdAt: '2023-03-27T12:42:24.000Z',
  updatedAt: '2023-03-27T12:42:24.000Z',
};
const defaultAuthContext = {
  isAuthenticated: false,
  currentMember: dummyUser,
  register: null,
  setting: null,
  login: null,
  adminLogin: null,
  logout: null,
};

//1. createContext
const AuthContext = createContext(defaultAuthContext);
//將 useContext 包裝在函式中 i.e. 在 useAuth 內部使用 useContext hook。useAuth 是一個自定義 hook
export const useAuth = () => useContext(AuthContext);
//2. 在父層設定 Context.Provider; 設定傳遞的 value，包含多個屬性的物件，每個屬性都代表了 AuthContext 中所需的狀態或方法
export const AuthProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(dummyUser);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [payload, setPayload] = useState(null);
  const { pathname } = useLocation();

  // const handleUserUpdate = (data) => {
  //   setCurrentUser(data);
  //   console.log('user data updated');
  // };

  useEffect(() => {
    const checkTokenIsValid = async () => {
      //確認憑證是否存在
      const token = localStorage.getItem('token');
      if (!token) {
        setIsAuthenticated(false);
        setPayload(null);
        return;
      }
    };
    checkTokenIsValid();
    //相依
  }, [pathname]);
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        //避免 payload 為 null 的初始狀態
        //從 JWT 解析成功出現的物件中取值
        currentMember: payload && {
          id: payload.id,
          account: payload.account,
          email: payload.email,
          name: payload.name,
        },

        register: async (data) => {
          // 取前端塞入的 success: true
          const { success } = await register({
            account: data.account,
            name: data.name,
            password: data.password,
            email: data.email,
            checkPassword: data.checkPassword,
          });
          // 註冊完應該要導引至登入畫面，不再回傳 token ，因此不用解析，故刪除
          return success;
        },
        login: async (data) => {
          const { token } = await login({
            account: data.account,
            password: data.password,
          });
          const tempPayload = jwt_decode(token);
          if (tempPayload) {
            setPayload(tempPayload);
            setIsAuthenticated(true);
            localStorage.setItem('token', token);
          } else {
            setPayload(null);
            setIsAuthenticated(false);
          }
          return;
        },
        // setting: async (data) => {
        //   const { token } = await setup({
        //     account: data.account,
        //     password: data.password,
        //   });
        //   const tempPayload = jwt_decode(token);
        //   if (tempPayload) {
        //     setPayload(tempPayload);
        //     setIsAuthenticated(true);
        //     localStorage.setItem('token', token);
        //   } else {
        //     setPayload(null);
        //     setIsAuthenticated(false);
        //   }
        //   return;
        // },
        adminLogin: async (data) => {
          const { token } = await adminLogin({
            account: data.account,
            password: data.password,
          });
          const tempPayload = jwt_decode(token);
          if (tempPayload) {
            setPayload(tempPayload);
            setIsAuthenticated(true);
            localStorage.setItem('token', token);
          } else {
            setPayload(null);
            setIsAuthenticated(false);
          }
          return;
        },
        logout: () => {
          localStorage.removeItem('token');
          setPayload(null);
          setIsAuthenticated(false);
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
