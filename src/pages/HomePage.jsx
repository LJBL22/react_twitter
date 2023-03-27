import InputTweet from 'components/InputTweet';
import TweetCollection from 'components/TweetCollection';
import styled from 'styled-components';
import { StyledHeader } from 'components/styles/InputTweet.styled';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTweets } from 'contexts/TweetContext';

const StyledContainer = styled.div`
  height: 100vh;
  overflow: hidden;
`;

const StyledDivider = styled.div`
  width: 39.9375rem;
  height: 0.625rem;
  background-color: var(--color-gray-border);
`;

const ScrollBar = styled.div`
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
  const { inputValue, handleChange, handleAddTweet, tweets } = useTweets();
  console.log('inputValue', inputValue);
  const navigate = useNavigate();
  // console.log('getTweets', tweets);
  useEffect(() => {
    const checkTokenIsValid = async () => {
      const token = localStorage.getItem('token');
      // 確認 authToken 有沒有存在，驗證authToken 是不是正確還要額外從response 的 headers取得
      if (!token) {
        navigate('/login');
      }
      console.log('token', token);
    };
    checkTokenIsValid();
  }, [navigate]);

  // 將取得的輸入值去掉空白的部分使用正則表達式轉換成單字陣列
  const words = inputValue.trim().split(/\s+/);
  // 如果 0 < inputValue < 140 則輸入有效
  const isInputValueValid = inputValue.length > 0 && words.length < 140;

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
            inputValue={inputValue}
            onChange={handleChange}
            onClick={handleAddTweet}
            isInputValid={isInputValueValid}
          />
          <StyledDivider />
          <TweetCollection tweets={tweets} />
        </ScrollBar>
      </div>
    </StyledContainer>
  );
};

export default HomePage;
