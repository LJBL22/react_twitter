import { useState } from 'react';
import { ModalButton, StyledCardDiv } from './common/common.styled';
import InputTweet from 'components/InputTweet';
import { IconDanger } from 'assets/icons';
import {
  StyledForm,
  StyledImgDiv,
  StyledTextarea,
} from './styles/InputTweet.styled';
import { useAuth } from 'contexts/AuthContext';
import { createTweet } from 'api/tweet';

export const TweetModal = ({
  // 從 inputTweet 傳來 （bug?
  // inputValue,
  // handleChange,
  // handleAddTweet,
  isInputValueValid,
  // 從 tweetLayout -> sidebar 傳來
  // tweetInput,
  currentUser,
  onChange,
  onAddTweet,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [tweetInput, setTweetInput] = useState('');
  const [tweets, setTweets] = useState([]);

  const handleChange = (value) => {
    setTweetInput(value);
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };
  const handleAddTweet = async () => {
    if (tweetInput.length === 0) {
      return;
    }
    try {
      const data = await createTweet({
        description: tweetInput,
      });
      // console.log('TTTdata', data);
      const newTweets = [
        {
          id: data.id,
          description: data.description,
          UserId: data.UserId,
          createdAt: data.createdAt,
          updatedAt: data.updatedAt,
          likesNum: 0,
          repliesNum: 0,
          User: {
            account: data.User.account,
            avatar: data.User.avatar,
            name: data.User.name,
          },
        },
        ...tweets,
      ];
      // 這裡使用 setTimeout 更好使用者體驗
      setTimeout(() => {
        setTweets(newTweets);
        setTweetInput('');
      }, 2000);
      console.log('tweetInput', tweetInput);
      console.log('currentUser', currentUser);
      console.log('onChange', onChange);
      console.log('onAddTweet', onAddTweet);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <ModalButton onClick={() => setShowModal(true)} modalBtnWidth='100%'>
        推文
        {showModal && (
          <>
            <div
              className='modal-background show'
              onClick={(e) => {
                e.stopPropagation();
                setShowModal(false);
              }}
            ></div>
            <div className='modal'>
              <div className='modal-content'>
                <div>
                  <IconDanger
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowModal(false);
                    }}
                  />
                </div>
                <InputTweet
                  width='32.875rem'
                  height='auto'
                  divWidth='40.0625rem'
                  divHeight='8.625rem'
                  tweetValue={tweetInput}
                  // onSubmit={handleSubmit}
                  onChange={handleChange}
                  onClick={handleAddTweet}
                  isInputValid={isInputValueValid}
                />
                {/* <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowModal(false);
                  }}
                >
                  Close Modal
                </button> */}
              </div>
            </div>
          </>
        )}
      </ModalButton>
    </>
  );
};
