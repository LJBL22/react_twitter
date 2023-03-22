import { GlobalStyle } from "components/common/globalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  SignupPage,
  LoginPage,
  AdminLoginPage,
  AdminUsersPage,
  AdminTweetsPage,
  HomePage,
  UsersPage,
  UserLikes,
  UserReplied,
} from "pages";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <h1>Aa Noto Sans TC Hello ALPHitter 你好嗎 9 $% 123456</h1>
        <Routes>
          <Route index element={<LoginPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="admin" element={<AdminLoginPage />} />
          <Route path="admin/users" element={<AdminUsersPage />} />
          <Route path="admin/tweets" element={<AdminTweetsPage />} />
          {/* 以下暫時無法 */}
          {/* <Route path="admin" element={<AdminLoginPage />}>
            <Route path="users" element={<AdminUsersPage />} />
            <Route path="tweets" element={<AdminTweetsPage />} />
            <Route path="*" element={<AdminUsersPage />} />
          </Route> */}
          {/* </Route> */}
          <Route path="/tweets" element={<HomePage />} />
          <Route path="/users/:userId/tweets" element={<UsersPage />} />
          <Route path="/users/:userId/likes" element={<UserLikes />} />
          <Route
            path="/users/:userId/replied-tweets"
            element={<UserReplied />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
