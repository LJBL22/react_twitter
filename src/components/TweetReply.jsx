import styled from 'styled-components';
import {
  StyledContentDiv,
  StyledItemDiv,
  StyledImgDiv,
} from 'components/styles/InputTweet.styled';
import { StyledCardDiv } from 'components/common/common.styled';
import { IconLikeOut, IconLikeFi } from 'assets/icons';
import { ReplyModal } from './Modal';
import { NavLink } from 'react-router-dom';
import { useUser } from 'contexts/UserContext';
import { useState } from 'react';

export const StyledMainCard = styled(StyledCardDiv)`
  width: 40.0625rem;
  min-height: 15.69rem;
`;

const BorderDivider = styled.div`
  width: 39rem;
  height: 0.076rem;
  background-color: var(--color-gray-border);
  margin-left: -1.4rem;
  align-items: center;
`;

const ReplyActions = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-top: 0px;
  height: 4.61rem;
  > div {
    display: flex;
    align-items: center;
    margin-right: 4.5rem;
  }
  .number {
    font-weight: 700;
    font-size: 1.46rem;
    color: #000000;
  }
  .text {
    font-weight: 500;
    font-size: 1.46rem;
    color: var(--color-secondary);
  }

  .likeBtn {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    margin-left: 8rem;
  }
`;

// 要先掛上 getReply 的API 去拿到裡面的id 來使用
//eslint-disable-next-line
const TweetReply = ({
  singleTweet,
  replyInput,
  onChange,
  onAddReply,
  showModal,
  setShowModal,
  error,
  setError,
}) => {
  const { handleLike, userLikes } = useUser();
  const [currentLikeCounts, setCurrentLikeCounts] = useState(
    singleTweet.likesNum
  );
  const [disabled, setDisabled] = useState(false);
  const isLiked = userLikes.some((tweet) => tweet.TweetId === singleTweet.id);

  const handleLikeTweet = async () => {
    setDisabled(true);
    await handleLike(singleTweet.id);
    if (isLiked) {
      setCurrentLikeCounts((prev) => prev - 1);
    } else {
      setCurrentLikeCounts((prev) => prev + 1);
    }
    // setDisable 去讓前面的setState可以更新畫面
    setDisabled(false);
  };

  return (
    <>
      <StyledMainCard>
        <div>
          <StyledItemDiv>
            <NavLink to={`/users/${singleTweet.UserId}/tweets`}>
              <StyledImgDiv>
                <img src={singleTweet.User.avatar} alt='avatar' />
              </StyledImgDiv>
            </NavLink>
            <div className='paddingL'>
              <p className='cardName'>{singleTweet.User.name}</p>
              <p className='cardAccount'>@{singleTweet.User.account}</p>
            </div>
          </StyledItemDiv>
          <StyledContentDiv>
            <div className='styledContent'>{singleTweet.description}</div>
            <div className='styledTime'>{singleTweet.createdAt}</div>
          </StyledContentDiv>
          <BorderDivider />
          <ReplyActions>
            <div>
              <p className='number'>{singleTweet.repliesNum}</p>
              <p className='text'>回覆</p>
            </div>
            <div>
              <p className='number'>{currentLikeCounts}</p>
              <p className='text'>喜歡次數</p>
            </div>
          </ReplyActions>
          <BorderDivider />
          <ReplyActions>
            <ReplyModal
              singleTweet={singleTweet}
              replyInput={replyInput}
              onChange={onChange}
              onAddReply={onAddReply}
              showModal={showModal}
              setShowModal={setShowModal}
              error={error}
              setError={setError}
            />
            <button className={`likeBtn ${disabled ? 'disabled' : ''}`}>
              {isLiked ? (
                <IconLikeFi className='icon' onClick={handleLikeTweet} />
              ) : (
                <IconLikeOut className='icon' onClick={handleLikeTweet} />
              )}
            </button>
          </ReplyActions>
        </div>
      </StyledMainCard>
    </>
  );
};

export default TweetReply;
