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
} from 'pages';
import UserSetting from 'pages/UserSetting';
import AdminLayout from 'components/layouts/AdminLayout';
import TweetLayout from 'components/layouts/TweetLayout';
import { AuthProvider } from 'contexts/AuthContext';
import { TweetsProvider } from 'contexts/TweetContext';
// import { FollowshipProvider } from 'contexts/FollowshipContext';

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <BrowserRouter>
        <AuthProvider>
          <TweetsProvider>
            <Routes>
              <Route path='*' element={<NavigatePage />} />
              <Route path='login' element={<LoginPage />} />
              <Route path='regist' element={<RegistPage />} />
              <Route path='admin'>
                <Route index element={<AdminLoginPage />} />
                <Route element={<AdminLayout />}>
                  <Route path='users' element={<AdminUsersPage />} />
                  <Route path='tweets' element={<AdminTweetsPage />} />
                </Route>
              </Route>
              {/* <FollowshipProvider> */}
              <Route element={<TweetLayout />}>
                <Route path='/tweets' element={<HomePage />} />
                <Route path='/tweets/:tweetId' element={<ReplyList />} />
              </Route>
              <Route path='users'>
                <Route element={<TweetLayout />}>
                  <Route index element={<UsersPage />} />
                  <Route path='setting' element={<UserSetting />} />
                  <Route path=':userId/tweets' element={<UsersPage />} />
                  <Route path=':userId/likes' element={<UserLikes />} />
                  <Route
                    path=':userId/replied_tweets'
                    element={<UserReplied />}
                  />
                </Route>
              </Route>
              {/* </FollowshipProvider> */}
            </Routes>
          </TweetsProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
