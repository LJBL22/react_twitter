import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, UsersPage, UserLikes, UserReplied } from "pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/tweets" element={<HomePage />} />
        <Route path="/users/:userId/tweets" element={<UsersPage />} />
        <Route path="/users/:userId/likes" element={<UserLikes />} />
        <Route path="/users/:userId/replied-tweets" element={<UserReplied />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
