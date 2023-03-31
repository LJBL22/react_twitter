import { useState } from 'react';
import {
  StyledContentDiv,
  StyledItemDiv,
  StyledActions,
  StyledImgDiv,
} from './styles/InputTweet.styled';
import { StyledCardDiv } from 'components/common/common.styled';
import { IconLikeOut, IconReply, IconLikeFi } from 'assets/icons';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledReplyActions = styled.div`
  & .replyAccount {
    margin: 0.6rem 0rem;
  }

  & .replyComment {
    margin-bottom: 0.7rem;
  }
`;

const formatDate = (dateString) => {
  const date = new Date(dateString);
  // 去抓使用者的時區
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const now = new Date();

  //將日期轉換為使用者所在的時區 (toLocalString 回傳的是value的string toLocalDateString回傳的是Date的string)
  const localData = date.toLocaleString('en-US', { timeZone });

  // 生成時間小於 24 小時，以「幾小時前」的方式顯示
  const diff = (now - new Date(localData)) / 1000; // 時差（秒）
  // 60秒*60分*24小時= 86400
  if (diff < 86400) {
    const hours = Math.floor(diff / 3600);
    const minutes = Math.floor((diff % 3600) / 60);
    if (hours > 0) {
      return `${hours}hr`;
    } else {
      return `${minutes}min`;
    }
  }

  // 否則以「月日」的方式顯示
  const formatter = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
  });
  return formatter.format(date);
};

// 確認時間格式使用
// console.log('1', formatDate('2023-03-22T11:39:01.000Z'));
// console.log('2', formatDate('2023-03-24T03:26:01.000Z'));

function TweetCard({ card, userInfo, id }) {
  const isLiked = card.isLiked;
  // console.log('isLiked', isLiked);
  const [isCurrentLiked, setIsCurrentLiked] = useState(isLiked);

  const handleLike = () => {
    if (!isCurrentLiked) {
      card.likesNum += 1;
    } else {
      card.likesNum -= 1;
    }
    setIsCurrentLiked(!isCurrentLiked);
  };
  return (
    //  想要重新命名InputTweet.styled.js 檔名 初步嘗試 git mv 路徑有問題，待之後確認
    <StyledCardDiv>
      <NavLink to={`/users/${userInfo ? userInfo.id : card.UserId}/tweets`}>
        <StyledImgDiv>
          <img
            src={userInfo ? userInfo.avatar : card.User.avatar}
            alt='avatar'
          />
        </StyledImgDiv>
      </NavLink>
      <StyledContentDiv>
        <StyledItemDiv>
          {/* en space，en是字體排印的一個計量單位，寬度是字體寬度的一半 */}
          <p className='cardName'>
            {userInfo ? userInfo.name : card.User.name}
          </p>
          &ensp;
          <p className='cardAccount'>
            @{userInfo ? userInfo.account : card.User.account}・
            {userInfo
              ? formatDate(userInfo.createdAt)
              : formatDate(card.createdAt)}
          </p>
        </StyledItemDiv>
        <NavLink to={`/tweets/${id}`}>
          <div className='styledContent'>{card.description}</div>
        </NavLink>
        <StyledActions>
          <div>
            <IconReply width='0.825rem' className='iconAction' />
            {card.repliesNum}
          </div>
          <div onClick={handleLike}>
            {isCurrentLiked ? (
              <IconLikeFi width='0.825rem' className='iconAction' />
            ) : (
              <IconLikeOut width='0.825rem' className='iconAction' />
            )}
            {card.likesNum}
          </div>
        </StyledActions>
      </StyledContentDiv>
    </StyledCardDiv>
  );
}

function ReplyCard({ reply, replyTo, userInfo }) {
  return (
    <StyledCardDiv>
      <StyledImgDiv>
        <img
          src={userInfo ? userInfo.avatar : reply.User.avatar}
          alt='avatar'
        />
      </StyledImgDiv>
      <StyledContentDiv>
        <StyledItemDiv>
          <p className='cardName'>
            {userInfo ? userInfo.name : reply.User.name}
          </p>
          &ensp;
          <p className='cardAccount'>
            @{userInfo ? replyTo : reply.User.account}・
            {userInfo
              ? formatDate(reply.createdAt)
              : formatDate(reply.createdAt)}
          </p>
        </StyledItemDiv>
        {/* 
      <div className='styledContent'>{reply.description}</div> */}
        <StyledReplyActions>
          <div className='replyAccount'>回覆@{replyTo}</div>
          <div className='replyComment'>{reply.comment}</div>
        </StyledReplyActions>
      </StyledContentDiv>
    </StyledCardDiv>
  );
}

export { TweetCard, ReplyCard };
