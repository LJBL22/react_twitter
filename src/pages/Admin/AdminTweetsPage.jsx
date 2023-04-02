import { Header } from 'components/common/common.styled';
import { ScrollBar } from 'pages/HomePage';
import { adminGetTweets } from 'api/admin';
import React, { useEffect, useState } from 'react';
import { IconClose } from 'assets/icons';
import { StyledCardDiv } from 'components/common/common.styled';
import {
  StyledContentDiv,
  StyledImgDiv,
  StyledItemDiv,
} from 'components/styles/InputTweet.styled';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function AdminTweetsPage() {
  const [tweets, setTweets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const adminToken = localStorage.getItem('token');
    if (!adminToken) {
      navigate('/admin');
    }
    const getAllTweets = async () => {
      try {
        const tweets = await adminGetTweets();
        setTweets(tweets);
        console.log(tweets);
      } catch (error) {
        console.error(error);
      }
    };
    getAllTweets();
  }, [navigate]);

  return (
    <>
      <Header>推文清單</Header>
      <ScrollBar>
        {tweets.map((tweet) => {
          return <AdminTweetCard key={tweet.id} tweet={tweet} />;
        })}
      </ScrollBar>
    </>
  );
}

const AdminTweetCard = ({ tweet }) => {
  const { description, createdAt, User } = tweet;
  const { account, name, avatar } = User;
  return (
    <StyledCardDiv divWidth='100%'>
      <StyledImgDiv>
        <img src={avatar} alt='avatar' />
      </StyledImgDiv>
      <StyledContentDiv width='100%'>
        <StyledItemDiv>
          <p className='cardName'>{name}</p>
          &ensp;
          <p className='cardAccount'>
            @{account}・{formatDate(createdAt)}
          </p>
        </StyledItemDiv>
        <div className='styledContent' style={{ position: 'relative' }}>
          {description}
          <StyleDelete>
            <IconClose
              width='2rem'
              className='iconAction'
              // onClick={handleClick}
            />
          </StyleDelete>
        </div>
      </StyledContentDiv>
    </StyledCardDiv>
  );
};

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

const StyleDelete = styled.div`
  position: absolute;
  right: 5px;
  top: 50%;
  .iconAction {
    color: var(--color-theme);
  }
`;
