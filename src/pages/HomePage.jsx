import InputTweet from 'components/InputTweet';
import TweetCollection from 'components/TweetCollection';
import styled from 'styled-components';
import { StyledHeader } from 'components/styles/InputTweet.styled';
import { useEffect } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { getTweets } from 'api/tweet';

const StyledContainer = styled.div`
  height: 100vh;
  overflow: hidden;
`;

const StyledDivider = styled.div`
  width: 39.9375rem;
  height: 0.625rem;
  background-color: var(--color-gray-border);
`;

export const ScrollBar = styled.div`
  height: calc(100vh - 3.25rem);
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 13px;
  }
  &::-webkit-scrollbar-track {
    background-color: #fafafa;
    margin: 20px 4px;
    box-shadow: inset 1px 0px 0px #e8e8e8, inset -1px 0px 0px #f0f0f0;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: #c1c1c1;
  }
`;
const HomePage = () => {
  const {
    tweets,
    tweetInput,
    handleChange,
    handleAddTweet,
    setTweets,
    error,
    setError,
  } = useOutletContext();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  // 拿到所有推文的API
  useEffect(() => {
    const getTweetsAsync = async () => {
      try {
        const tweets = await getTweets();
        setTweets(
          tweets.map((tweet) => {
            return {
              ...tweet,
            };
          })
        );
      } catch (error) {
        console.error(error);
      }
    };
    getTweetsAsync();
  }, [setTweets]);

  // 將取得的輸入值去掉空白的部分使用正則表達式轉換成單字陣列
  const words = tweetInput.trim().split(/\s+/);
  const isInputValueValid = tweetInput.length > 0 && words.length < 140;

  return (
    <StyledContainer>
      <div>
        <StyledHeader>
          <div>首頁</div>
        </StyledHeader>
        <ScrollBar>
          <InputTweet
            width='32.875rem'
            height='auto'
            divWidth='40.0625rem'
            divHeight='8.625rem'
            tweetValue={tweetInput}
            onChange={handleChange}
            onClick={handleAddTweet}
            isInputValid={isInputValueValid}
            placeholder={'有什麼新鮮事?'}
            error={error}
            setError={setError}
          />
          <StyledDivider />
          <TweetCollection tweets={tweets} />
        </ScrollBar>
      </div>
    </StyledContainer>
  );
};

export default HomePage;
