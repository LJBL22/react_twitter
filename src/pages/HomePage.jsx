import Sidebar from "components/Sidebar";
import PopularList from "components/PopularList";
import MainTweet from "components/MainTweet";

function HomePage() {
  return (
    <>
      <Sidebar />
      <MainTweet/>
      <PopularList />
    </>
  );
}

export default HomePage;
