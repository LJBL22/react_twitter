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
  ReplyList,
  NavigatePage,
} from "pages";
import UserSettingPage from "pages/UserSettingPage";
import AdminLayout from "components/layouts/AdminLayout";
import TweetLayout from "components/layouts/TweetLayout";
// import TweetLayout from "components/layouts/TweetLayout";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NavigatePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="regist" element={<SignupPage />} />
          <Route path="admin">
            <Route index element={<AdminLoginPage />} />
            <Route element={<AdminLayout />}>
              <Route path="users" element={<AdminUsersPage />} />
              <Route path="tweets" element={<AdminTweetsPage />} />
            </Route>
          </Route>
          <Route element={<TweetLayout />}>
            <Route path="/tweets" element={<HomePage />} />
            <Route path="/tweets/:tweetId" element={<ReplyList />} />
          </Route>
          <Route path="/users/:userId/tweets" element={<UsersPage />} />
          <Route path="/users/:userId/likes" element={<UserLikes />} />
          <Route
            path="/users/:userId/replied_tweets"
            element={<UserReplied />}
          />
          <Route path="setting" element={<UserSettingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
