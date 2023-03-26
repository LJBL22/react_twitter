import { login, register } from "api/auth";
import { createContext, useContext, useEffect, useState } from "react";
import * as jwt from "jsonwebtoken";
import { useLocation } from "react-router-dom";

const defaultAuthContext = {
  isAuthenticated: false,
  currentMember: null,
  register: null,
  login: null,
  logout: null,
};

//1. createContext
const AuthContext = createContext(defaultAuthContext);
//將 useContext 包裝在函式中 i.e. 在 useAuth 內部使用 useContext hook。useAuth 是一個自定義 hook
export const useAuth = () => useContext(AuthContext);
//2. 在父層設定 Context.Provider; 設定傳遞的 value，包含多個屬性的物件，每個屬性都代表了 AuthContext 中所需的狀態或方法
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [payload, setPayload] = useState(null);
  const { pathname } = useLocation();
  useEffect(() => {
    const checkTokenIsValid = async () => {
      //確認憑證是否存在
      const token = localStorage.getItem("token");
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
        //設置解析成功後會出現的值
        currentMember: payload && {
          id: payload.id,
          account: payload.account,
        },
        //直接從 signUp page 取
        // register: async (data) => {
        //   const { success, token } = await register({
        //     account: data.account,
        //     name: data.name,
        //     password: data.password,
        //     email: data.email,
        //     confirmPassword: data.confirmPassword,
        //   });
        //   //將經過 jwtWebToken 解析的 payload，儲存進 state
        //   const tempPayload = jwt.decode(token);
        //   if (tempPayload) {
        //     setPayload(tempPayload);
        //     setIsAuthenticated(true);
        //     localStorage.setItem("token", token);
        //   } else {
        //     setPayload(null);
        //     setIsAuthenticated(false);
        //   }
        //   return success;
        // },
        login: async (data) => {
          const { success, token } = await login({
            account: data.user.account,
            password: data.user.password,
          });
          const tempPayload = jwt.decode(token);
          if (tempPayload) {
            setPayload(tempPayload);
            setIsAuthenticated(true);
            localStorage.setItem("token", token);
          } else {
            setPayload(null);
            setIsAuthenticated(false);
            console.log("啊啊啊啊");
          }
          return success;
        },
        // logout: () => {
        //   localStorage.removeItem("token");
        //   setPayload(null);
        //   setIsAuthenticated(false);
        // },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
