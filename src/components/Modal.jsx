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
      setShowModal(false);
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
                <div
                  style={{
                    padding: '1rem',
                    borderBottom: '1px solid var(--color-gray-border)',
                  }}
                >
                  <IconDanger
                    style={{ cursor: 'pointer' }}
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

export const ProfileModal = ({ onClose, onProfileChange }) => {
  // const handleAvatarChange = (e) => {
  //   const selectedImage = e.target.files[0];
  //   const previewURL = URL.createObjectURL(e.target.files[0]);
  //   setAvatar(selectedImage);
  //   setAvatarPreview(previewURL);
  // };

  // const handleCoverChange = (e) => {
  //   const selectedImage = e.target.files[0];
  //   const previewURL = URL.createObjectURL(e.target.files[0]);
  //   setCover(selectedImage);
  //   setcoverPreview(previewURL);
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
  //   if (name.length === 0 || introduction.length === 0) {
  //     setShowErrorMsg('欄位不可空白!');
  //     setTimeout(() => {
  //       setShowErrorMsg(false);
  //       setIsSubmitting(false);
  //     }, 1000);
  //     return;
  //   }
  //   if (name.length > 50 || introduction.length > 160) {
  //     setShowErrorMsg('字數超過上限!');
  //     setTimeout(() => {
  //       setShowErrorMsg(false);
  //       setIsSubmitting(false);
  //     }, 1000);
  //     return;
  //   }

  //   const { data, status } = await changeUserProfile({
  //     id: currentUser.id,
  //     name,
  //     introduction,
  //     avatar,
  //     cover,
  //   });
  //   if (data && status === 200) {
  //     setShowSuccessMsg(true);
  //     setIsSubmitting(false);
  //     setTimeout(() => {
  //       setShowSuccessMsg(false);
  //     }, 1000);
  //   }

  //   const newCurrentUser = {
  //     ...currentUser,
  //     name: data.name,
  //     introduction: data.introduction,
  //     avatar: data.avatar,
  //     cover: data.cover,
  //   };
  //   handleUserUpdate(newCurrentUser);
  //   onProfileChange();
  //   setIsSubmitting(false);
  //   onClose();
  // };
  return (
    <Modal>
      <div className='modal-background show'></div>
      <div className='modal'>
        <div className='modal-content'>
          <div onClick={onClose}>
            <IconDanger />
          </div>
          {/* 編輯個人資料 */}
          {/* 有 close 功能的儲存 */}
          {/* //Profile */}
          {/* 兩個 AuthInput */}
        </div>
      </div>
    </Modal>
  );
};

export const ReplyModal = () => {};
