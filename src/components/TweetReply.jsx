import styled from 'styled-components';
import {
  StyledContentDiv,
  StyledItemDiv,
  StyledActions,
  StyledImgDiv,
} from 'components/styles/InputTweet.styled';
import { StyledCardDiv } from 'components/common/common.styled';
import { IconLikeOut, IconLikeFi } from 'assets/icons';
import { ReplyModal } from './Modal';
import { NavLink } from 'react-router-dom';
import { useUser } from 'contexts/UserContext';

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
  cursor: pointer;
  display: flex;
  align-items: center;
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
  button {
    display: flex;
    align-items: center;
    margin-right: 41.3px;
    & .icon {
      width: 1.9rem;
      margin-right: 9.3px;
    }
  }
`;

// 要先掛上 getReply 的API 去拿到裡面的id 來使用
//eslint-disable-next-line
const TweetReply = ({ singleTweet, currentUser, replyInput, onChange }) => {
  const { handleLike, userLikes } = useUser();

  const isLiked = userLikes.some((tweet) => tweet.TweetId === singleTweet.id);

  const handleLikeTweet = async () => {
    await handleLike(singleTweet.id);
  };
  console.log('userLikes', userLikes);
  console.log('isLiked', isLiked);
  // console.log('ere', singleTweet);
  // const [showModal, setShowModal] = useState(false);

  // const handleShowModal = () => {
  //   const nextShowModal = !showModal;
  //   setShowModal(nextShowModal);
  // };

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
            <button>
              <ReplyModal />
            </button>
            <button>
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
