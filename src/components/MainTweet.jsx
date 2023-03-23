import Main from './Main';
import InputTweet from './InputTweet';
import TweetCollection from './TweetCollection';
import styled from 'styled-components';

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

function MainTweet() {
  return (
    <div>
      <Main>
        <StyledHeader>
          <StyledTitle>首頁</StyledTitle>
        </StyledHeader>
        <InputTweet
          width="32.875rem"
          height="8.5625rem"
          divWidth="40.0625rem"
          divHeight="8.625rem"
        />
        <StyledDivider></StyledDivider>
        <TweetCollection />
      </Main>
    </div>
  );
}

export default MainTweet;
