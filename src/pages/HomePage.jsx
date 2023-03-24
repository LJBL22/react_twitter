import Main from 'components/Main';
import InputTweet from 'components/InputTweet';
import TweetCollection from 'components/TweetCollection';
import styled from 'styled-components';
import { useState } from 'react';

const StyledHeader = styled.div`
  width: 40.0625rem;
  height: 3.1875rem;
  border: 0.0625rem solid #e6ecf0;
  border-top: none;
  margin-top: 1.5rem;
`;

const StyledTitle = styled.div`
  font-weight: 700;
  font-size: var(--fs-h4);
  line-height: 1.625rem;
  margin: 0rem 35.4375rem 1.5625rem 1.5rem;
  color: var(--color-gray-900);
`;

const StyledDivider = styled.div`
  width: 39.9375rem;
  height: 0.625rem;
  background-color: #e6ecf0;
`;

const ScrollBar = styled.div`
  max-height: 49.81rem;
  overflow-y: scroll;
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

  const handleChange = (value) => {
    setInputValue(value);
  };

  const handleAddTweet = () => {
    if (inputValue.length === 0) {
      return;
    }
    // async await try catch串API
    console.log('inputValue', inputValue);
    // 要將新的推文確認好資料加到tweetData裡
    setInputValue('');
  };

  return (
    <div>
      <Main>
        <StyledHeader>
          <StyledTitle>首頁</StyledTitle>
        </StyledHeader>
        <ScrollBar>
          <InputTweet
            width='32.875rem'
            height='8.5625rem'
            divWidth='40.0625rem'
            divHeight='8.625rem'
            inputValue={inputValue}
            onChange={handleChange}
            onClick={handleAddTweet}
          />
          <StyledDivider />
          <TweetCollection />
        </ScrollBar>
      </Main>
    </div>
  );
};

export default HomePage;
