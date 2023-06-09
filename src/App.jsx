import { GlobalStyle } from 'components/common/globalStyles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import {
  RegistPage,
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
  FollowList,
  UserTweets,
} from 'pages';
import UserSetting from 'pages/UserSetting';
import AdminLayout from 'components/layouts/AdminLayout';
import TweetLayout from 'components/layouts/TweetLayout';
import { AuthProvider } from 'contexts/AuthContext';
import { UserProvider } from 'contexts/UserContext';
const basename = process.env.PUBLIC_URL;

function App() {
  return (
    <div className='App'>
      <BrowserRouter basename={basename}>
        <AuthProvider>
          <UserProvider>
            <GlobalStyle />
            <Routes>
              <Route path='*' element={<NavigatePage />} />
              <Route path='login' element={<LoginPage />} />
              <Route path='regist' element={<RegistPage />} />
              <Route path='admin'>
                <Route index element={<AdminLoginPage />} />
                <Route element={<AdminLayout />}>
                  <Route path='tweets' element={<AdminTweetsPage />} />
                  <Route path='users' element={<AdminUsersPage />} />
                </Route>
              </Route>
              <Route element={<TweetLayout />}>
                <Route path='tweets'>
                  <Route index element={<HomePage />} />
                  <Route path=':tweetId' element={<ReplyList />} />
                </Route>
                <Route element={<UsersPage />}>
                  <Route path='users/:userId'>
                    <Route path='tweets' element={<UserTweets />} />
                    <Route path='replied_tweets' element={<UserReplied />} />
                    <Route path='likes' element={<UserLikes />} />
                    <Route
                      path='followers'
                      element={<FollowList type='followers' />}
                    />
                    <Route
                      path='followings'
                      element={<FollowList type='followings' />}
                    />
                  </Route>
                </Route>
                <Route path='setting' element={<UserSetting />} />
              </Route>
            </Routes>
          </UserProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
