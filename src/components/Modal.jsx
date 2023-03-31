import { useState } from 'react';
import { Modal, ThemeButton } from './common/common.styled';
import InputTweet from 'components/InputTweet';
import { IconDanger } from 'assets/icons';
import { createTweet } from 'api/tweet';

export const TweetModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [tweetInput, setTweetInput] = useState('');
  const [tweets, setTweets] = useState([]);
  const handleChange = (value) => {
    setTweetInput(value);
  };
  const handleAddTweet = async () => {
    if (tweetInput.length === 0) {
      return;
    }
    try {
      const data = await createTweet({
        description: tweetInput,
      });
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
      console.log('modal success');
    } catch (error) {
      console.error(error);
    }
  };
  const words = tweetInput.trim().split(/\s+/);
  const isInputValueValid = tweetInput.length > 0 && words.length < 140;
  return (
    <>
      <ThemeButton onClick={() => setShowModal(true)} width='100%'>
        推文
      </ThemeButton>
      {showModal && (
        <>
          <Modal>
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
                  onChange={handleChange}
                  onClick={handleAddTweet}
                  isInputValid={isInputValueValid}
                />
              </div>
            </div>
          </Modal>
        </>
      )}
    </>
  );
};

export const ProfileModal = () => {};
export const ReplyModal = () => {};
