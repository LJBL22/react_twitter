import styled from 'styled-components';
import {
  StyledContentDiv,
  StyledItemDiv,
  StyledActions,
  StyledImgDiv,
} from 'components/styles/InputTweet.styled';
import { StyledCardDiv } from 'components/common/common.styled';
import { IconLikeOut, IconReply } from 'assets/icons';
import { useState } from 'react';
import { ReplyModal } from './Modal';

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

const ReplyActions = styled(StyledActions)`
  margin-top: 0px;
  height: 4.61rem;
  & .number {
    font-weight: 700;
    font-size: 1.46rem;
    color: #000000;
  }
  & .text {
    font-weight: 500;
    font-size: 1.46rem;
    color: var(--color-secondary);
  }
`;

// 要先掛上 getReply 的API 去拿到裡面的id 來使用
const TweetReply = ({ singleTweet, currentUser, replyInput, onChange }) => {
  console.log('ere', singleTweet);
  const [showModal, setShowModal] = useState(false);

  // const handleShowModal = () => {
  //   const nextShowModal = !showModal;
  //   setShowModal(nextShowModal);
  // };

  return (
    <>
      <StyledMainCard>
        <div>
          <StyledItemDiv>
            <StyledImgDiv>
              <img src={singleTweet.User.avatar} alt='avatar' />
            </StyledImgDiv>
            <div className='paddingL'>
              <p>{singleTweet.User.name}</p>
              <p>{singleTweet.User.account}</p>
            </div>
          </StyledItemDiv>
          <StyledContentDiv>
            <div className='styledContent'>{singleTweet.description}</div>
            <div className='styledTime'>上午 10:05・2021年11月10日</div>
          </StyledContentDiv>
          <BorderDivider />
          <ReplyActions>
            <div>
              <p className='number'>{singleTweet.repliesNum}</p>
              <p className='text'>回覆</p>
            </div>
            <div>
              <p className='number'>{singleTweet.likesNum}</p>
              <p className='text'>喜歡次數</p>
            </div>
          </ReplyActions>
          <BorderDivider />
          <ReplyActions>
            <div style={{ cursor: 'pointer' }}>
              <ReplyModal />
            </div>
            <div style={{ cursor: 'pointer' }}>
              <IconLikeOut width='1.9rem' className='iconAction' />
            </div>
          </ReplyActions>
        </div>
      </StyledMainCard>
    </>
  );
};

export default TweetReply;
