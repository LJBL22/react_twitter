import {
  SignupPage,
  LoginPage,
  AdminLoginPage,
  AdminUsersPage,
  AdminTweetsPage,
} from "pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Hello ALPHitter</h1>
        <Routes>
          {/* 這個會失效 */}
          {/* <Route path="/" element={<App />}> */}
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
