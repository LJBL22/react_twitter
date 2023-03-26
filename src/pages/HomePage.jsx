import InputTweet from 'components/InputTweet';
import TweetCollection from 'components/TweetCollection';
import styled from 'styled-components';
import { StyledHeader } from 'components/styles/InputTweet.styled';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTweets, createTweet } from 'api/tweet';

const StyledDivider = styled.div`
  width: 39.9375rem;
  height: 0.625rem;
  background-color: #e6ecf0;
`;

const ScrollBar = styled.div`
  max-height: 49.81rem;
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
  // 因為之後新增的推文，會推到TweetCollection，故把 useState設定在這，其他使用 model 視窗串接的推文還待思考
  const [inputValue, setInputValue] = useState('');
  const [tweets, setTweets] = useState([]);
  const navigate = useNavigate();
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

  const handleChange = (value) => {
    setInputValue(value);
  };

  const handleAddTweet = async () => {
    if (inputValue.length === 0) {
      return;
    }
    try {
      // data 是使用 createTweet函式創建新的推文後拿回來的資料
      const data = await createTweet({
        description: inputValue,
      });
      console.log('data', data);
      setTweets((prevTweets) => {
        return [
          ...prevTweets,
          {
            // 這裡要放資料庫拿的推文id (才能當key值)，新增推文陣列
            id: data.id,
            description: data.description,
          },
        ];
      });
      setInputValue('');
    } catch (error) {
      console.error(error);
    }
    console.log('inputValue', inputValue);
    // 要將新的推文確認好資料加到tweetData裡
  };

  useEffect(() => {
    const getTweetsAsync = async () => {
      try {
        const tweets = await getTweets();
        console.log('getTweets', tweets);
        setTweets(
          tweets.map((tweet) => {
            return {
              ...tweet,
              // 目前沒有編輯功能，之後可以增加 isEdit: false 去切換推文編輯的狀態
            };
          })
        );
      } catch (error) {
        console.error(error);
      }
    };
    getTweetsAsync();
  }, []);

  return (
    <div>
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
    </div>
  );
};

export default HomePage;
