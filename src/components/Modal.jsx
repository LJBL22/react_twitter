import { useState } from 'react';
import { Modal, StyledCardDiv, ThemeButton } from './common/common.styled';
import InputTweet from 'components/InputTweet';
import {
  IconClose,
  IconDanger,
  IconReply,
  IconUploadPhoto,
} from 'assets/icons';
import { createTweet } from 'api/tweet';
import { useUser } from 'contexts/UserContext';
import { changeUserProfile } from 'api/user';
import AuthInput from './AuthInput';
import styled from 'styled-components';
import clsx from 'clsx';
import { device } from './styles/Container.styled';
import {
  StyledContentDiv,
  StyledItemDiv,
  StyledImgDiv,
  StyledForm,
} from 'components/styles/InputTweet.styled';
import { StyledMainCard } from './TweetReply';
import { useAuth } from 'contexts/AuthContext';

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
                  borderBottom='none'
                  tweetValue={tweetInput}
                  onChange={handleChange}
                  onClick={handleAddTweet}
                  isInputValid={isInputValueValid}
                  placeholder={'有什麼新鮮事?'}
                />
              </div>
            </div>
          </Modal>
        </>
      )}
    </>
  );
};

export const ReplyModal = ({
  singleTweet,
  replyInput,
  onChange,
  onAddReply,
  isInputValueValid,
  showModal,
  setShowModal,
}) => {
  return (
    <>
      <IconReply
        width='1.9rem'
        className='iconAction'
        onClick={() => setShowModal(true)}
      />
      {showModal && (
        <>
          <Modal>
            <div
              className='modal-background show'
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <div className='modal'>
                <div className='modal-content'>
                  <div
                    style={{
                      padding: '1rem',
                      borderBottom: '1px solid var(--color-gray-border)',
                    }}
                  >
                    <IconDanger onClick={() => setShowModal(false)} />
                  </div>
                  <StyledMainCard
                    borderBottom='none'
                    style={{ minHeight: '10.18rem' }}
                  >
                    <StyledImgDiv>
                      <img src={singleTweet.User.avatar} alt='avatar' />
                    </StyledImgDiv>
                    <StyledContentDiv>
                      <StyledItemDiv>
                        {/* en space，en是字體排印的一個計量單位，寬度是字體寬度的一半 */}
                        <p className='cardName'>{singleTweet.User.name}</p>
                        &ensp;
                        <p className='cardAccount'>
                          @{singleTweet.User.account}・{singleTweet.diffTime}
                        </p>
                      </StyledItemDiv>
                      <div className='styledContent'>
                        {singleTweet.description}
                      </div>
                      <div>
                        回覆給<span>@{singleTweet.User.account}</span>
                      </div>
                    </StyledContentDiv>
                  </StyledMainCard>
                  <InputTweet
                    width='32.875rem'
                    height='auto'
                    divWidth='40.0625rem'
                    divHeight='10rem'
                    borderBottom='none'
                    placeholder={'推你的回覆'}
                    tweetValue={replyInput}
                    onChange={onChange}
                    onClick={onAddReply}
                    isInputValid={isInputValueValid}
                  />
                </div>
              </div>
            </div>
          </Modal>
        </>
      )}
    </>
  );
};

export const ProfileModal = ({ onClose, onProfileChange }) => {
  const { currentUser, handleUserUpdate } = useUser();
  const nextUser = { ...currentUser };
  const [name, setName] = useState(nextUser.name);
  const [introduction, setIntroduction] = useState(nextUser.introduction);
  const [avatarPreview, setAvatarPreview] = useState(nextUser.avatar);
  const [coverPreview, setcoverPreview] = useState(nextUser.coverUrl);
  const [avatar, setAvatar] = useState(nextUser.avatar);
  const [cover, setCover] = useState(nextUser.cover);
  // const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const [showErrorMsg, setShowErrorMsg] = useState('');
  // const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  const nameLength = name.length;
  const introductionLength = introduction.length;

  const handleAvatarChange = (e) => {
    const selectedImage = e.target.files[0];
    const previewURL = URL.createObjectURL(e.target.files[0]);
    setAvatar(selectedImage);
    setAvatarPreview(previewURL);
  };

  const handleCoverChange = (e) => {
    const selectedImage = e.target.files[0];
    const previewURL = URL.createObjectURL(e.target.files[0]);
    setCover(selectedImage);
    setcoverPreview(previewURL);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // if (name.length === 0 || introduction.length === 0) {
    //   setShowErrorMsg('欄位不可空白!');
    //   setTimeout(() => {
    //     setShowErrorMsg(false);
    //     setIsSubmitting(false);
    //   }, 1000);
    //   return;
    // }
    // if (name.length > 50 || introduction.length > 160) {
    //   setShowErrorMsg('字數超過上限!');
    //   setTimeout(() => {
    //     setShowErrorMsg(false);
    //     setIsSubmitting(false);
    //   }, 1000);
    //   return;
    // }

    // const { data, status } = await changeUserProfile({
    const { data } = await changeUserProfile({
      userId: currentUser.id,
      name,
      introduction,
      avatar,
      cover,
    });
    // if (data && status === 200) {
    //   setShowSuccessMsg(true);
    //   setIsSubmitting(false);
    //   setTimeout(() => {
    //     setShowSuccessMsg(false);
    //   }, 1000);
    // }

    const newCurrentUser = {
      ...currentUser,
      name: data.name,
      introduction: data.introduction,
      avatar: data.avatar,
      cover: data.cover,
    };
    handleUserUpdate(newCurrentUser);
    onProfileChange();
    setIsSubmitting(false);
    onClose();
  };
  return (
    <StyledDiv>
      <StyledModal>
        <div className='modal-background show'></div>
        <form onSubmit={handleSubmit} encType='multipart/form-data'>
          <StyledCloseDiv>
            <button className='close-btn' type='button' onClick={onClose}>
              <IconDanger />
            </button>
            <p>編輯個人資料</p>
            <button
              className={`save-btn ${isSubmitting ? 'disabled' : undefined}`}
              type='submit'
            >
              {isSubmitting ? '儲存中...' : '儲存'}
            </button>
          </StyledCloseDiv>
          <div className='content'>
            <div className='cover'>
              <img src={coverPreview} alt='user-cover' />
              <StyledFilterDiv>
                <div className='icons'>
                  <label htmlFor='cover-input'>
                    <IconUploadPhoto className='icon' />
                  </label>
                  <IconClose className='icon' onClick={onClose} />
                  <input
                    className='cover-input'
                    name='cover'
                    id='cover-input'
                    placeholder='none'
                    type='file'
                    accept='image/*'
                    onChange={handleCoverChange}
                  />
                </div>
              </StyledFilterDiv>
            </div>
            <StyledInputContainer>
              <AuthInput
                label='名稱'
                placeholder='name'
                value={name}
                onChange={(nameInput) => setName(nameInput)}
                InputLength={nameLength}
              />
              <div className='introduction'>
                <label>自我介紹</label>
                <StyledInput
                  className={clsx('', { error: introductionLength > 160 })}
                  // rows={isMobile ? '6' : '3'}
                  placeholder='Hello! My name is ...'
                  value={introduction}
                  onChange={(event) => setIntroduction(event.target.value)}
                />
              </div>
              {introductionLength > 0 && (
                <StyledInputCount>{introductionLength}/160</StyledInputCount>
              )}
              {introductionLength > 160 && (
                <StyledInputLimit>字數超出上限！</StyledInputLimit>
              )}
            </StyledInputContainer>
            <div className='avatar'>
              <img src={avatarPreview} alt='avatar' />
              <StyledFilterDiv>
                <div className='icons'>
                  <label htmlFor='avatar-input'>
                    <IconUploadPhoto className='icon' />
                  </label>
                  <input
                    className='avatar-input'
                    id='avatar-input'
                    name='avatar'
                    placeholder='none'
                    type='file'
                    accept='image/*'
                    onChange={handleAvatarChange}
                  />
                </div>
              </StyledFilterDiv>
            </div>
          </div>
        </form>
      </StyledModal>
      {/* {showErrorMsg && (
        <StyledMsgDiv>
          <Alert type='error' message={showErrorMsg} />
        </StyledMsgDiv>
      )}
      {showSuccessMsg && (
        <StyledMsgDiv>
          <Alert type='success' message='修改成功' />
        </StyledMsgDiv>
      )} */}
    </StyledDiv>
  );
};

// const StyledMsgDiv = styled.div`
//   position: absolute;
//   top: 10%;
//   left: 50%;
//   display: grid;
//   place-items: center;
// `;

const StyledDiv = styled.div`
  position: absolute;
  z-index: 5;
  inset: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const StyledModal = styled.div`
  z-index: 1
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: white;
  .modal-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
    opacity: 1;
    /* 邊緣做效果 */
    /* filter: blur(0px); */
    transition: opacity 0.2s ease-in-out, filter 0.2s ease-in-out;
  }
  .content {
    position: relative;
    display: flex;
    flex-direction: column;

    .cover {
      position: relative;
      img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        object-position: bottom;
      }
    }
  }

  .avatar {
    position: absolute;
    top: 7.75rem;
    left: 1rem;
    width: 140px;
    aspect-ratio: 1/1;
    border: 4px solid white;
    border-radius: 50%;
    overflow: hidden;
  }

  @media screen and (${device.md}) {
    position: absolute;
    inset: 3.5rem 0;
    width: 634px;
    height: 650px;
    margin: 0 auto;
    border-radius: 1rem;
  }
`;

const StyledCloseDiv = styled.div`
  display: grid;
  grid-template-columns: 3rem 1fr auto;
  align-items: center;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid var(--color-gray-200);

  p {
    font-weight: 700;
  }

  .close-btn {
    all: unset;
    cursor: pointer;
    color: var(--color-theme);
  }

  .save-btn {
    all: unset;
    cursor: pointer;
    padding: 0.5rem 1rem;
    border: 1px solid var(--color-theme);
    border-radius: 3.125rem;
    color: white;
    background-color: var(--color-theme);

    &.disabled {
      pointer-events: none;
      opacity: 0.75;
    }
  }
`;

const StyledFilterDiv = styled.div`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);

  .icons {
    display: flex;
    align-items: center;
    gap: 2rem;

    .icon {
      cursor: pointer;
      :hover {
        color: var(--color-theme);
      }
    }

    .avatar-input,
    .cover-input {
      display: none;
    }
  }
`;

const StyledInputContainer = styled.div`
  position: relative;
  margin-top: 5rem;
  padding: 1rem;
  .introduction {
    display: flex;
    flex-direction: column;
    margin-top: 1.4rem;
    background-color: var(--color-gray-100);
    label {
      padding: 0.125rem 0.625rem;
      font-size: var(--fs-secondary);
      color: var(--color-gray-700);
    }
  }
`;

// introduction
const StyledInput = styled.textarea`
  padding: 0.125rem 0.625rem;
  border: none;
  resize: none;
  background-color: var(--color-gray-100);
  line-height: 1.6rem;
  font-size: var(--fs-basic);
  ::-webkit-input-placeholder {
    color: var(--color-gray-500);
  }
  border-bottom: 2px solid var(--color-gray-700);
  :focus {
    border-bottom: 2px solid var(--color-light-blue);
    outline: none;
  }
  :hover {
    border-bottom: 2px solid var(--color-light-blue);
  }
  &.error {
    border-bottom: 2px solid var(--color-error);
  }
`;
const StyledInputLimit = styled.div`
  position: absolute;
  bottom: 1rem;
  text-align: end;
  color: var(--color-error);
`;

const StyledInputCount = styled.div`
  text-align: end;
  color: var(--color-gray-700);
  margin-top: 0.5rem;
`;

// function Alert({ type, message }) {
//   return (
//     <StyledBaseAlert borderColor={borderColor} type={type}>
//       <p>{message}</p>
//       <div className='icon'>{alertIcons[type]}</div>
//     </StyledBaseAlert>
//   );
// }
// const StyledBaseAlert = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   position: absolute;
//   z-index: 2;
//   width: 400px;
//   height: 100px;
//   padding: 1.5rem;
//   border-radius: 0.5rem;
//   box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
//     0px 4px 16px rgba(51, 51, 51, 0.08);
//   background-color: white;
//   font-size: var(--fs-h5);
//   font-weight: 700;

//   .icon {
//     border: 2px solid ${(props) => props.borderColor[props.type]};
//     border-radius: 50%;
//     padding: 0.75rem;
//   }
// `;
