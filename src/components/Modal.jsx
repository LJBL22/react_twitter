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

export const TweetModal = ({
  inputValue,
  handleChange,
  handleAddTweet,
  isInputValueValid,
  tweetInput,
  currentUser,
  onChange,
  onAddTweet,
}) => {
  console.log('tweetInput', tweetInput);
  console.log('currentUser', currentUser);
  console.log('onChange', onChange);
  console.log('onAddTweet', onAddTweet);
  const [showModal, setShowModal] = useState(false);
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
                  inputValue={inputValue}
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

// function InputTweet({
//   width,
//   height,
//   divWidth,
//   divHeight,
//   tweetInput,
//   onChange,
//   onClose,
//   onClick,
//   isInputValid,
// }) {
//   const { currentMember } = useAuth();
//   const [errorMessage, setErrorMessage] = useState(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     if (!tweetInput.length) {
//       setErrorMessage('內容不可空白');
//       setIsSubmitting(false);
//       return;
//     }
//     if (tweetInput.length > 140) {
//       setErrorMessage('字數不可超過 140 字');
//       setIsSubmitting(false);
//       return;
//     }
//     const { status } = await onAddTweet();
//     if (status === 'ok') {
//       setTimeout(() => {
//         setIsSubmitting(false);
//         setErrorMessage(null);
//         onClose();
//       }, 2000);
//     }
//   };
//   return (
//     <StyledCardDiv divWidth={divWidth} divHeight={divHeight}>
//       <StyledImgDiv>
//         <img src={currentMember().avatar} alt='avatar' />
//       </StyledImgDiv>
//       <StyledForm
//         onSubmit={(e) => {
//           e.preventDefault();
//         }}
//       >
//         <StyledTextarea
//           width={width}
//           height={height}
//           onChange={(e) => onChange?.(e.target.value)}
//           value={tweetInput}
//         />
//         {/* submit 以後，text 設定為空值 */}
//         {/* <button onClick={() => onClick?.()} disabled={!isInputValid}>
//           推文
//         </button> */}
//         <div className='submit'>
//           <span>{`${tweetInput.length}/140`}</span>
//           <div>
//             <span className={errorMessage ? 'error' : undefined}>
//               {errorMessage}
//             </span>
//             <button
//               className={isSubmitting ? 'disabled' : undefined}
//               type='submit'
//               onClick={handleSubmit}
//             >
//               {isSubmitting ? '送出中...' : '推文'}
//             </button>
//           </div>
//         </div>
//       </StyledForm>
//     </StyledCardDiv>
//   );
// }

// 使用 handleAddTweet 拿到 createTweet API 新增一則推文
// const handleAddTweet = async () => {
//   if (tweetInput.length === 0) {
//     return;
//   }
//   try {
//     const data = await createTweet({
//       description: tweetInput,
//     });
//     // console.log('TTTdata', data);
//     const newTweets = [
//       {
//         id: data.id,
//         description: data.description,
//         UserId: data.UserId,
//         createdAt: data.createdAt,
//         updatedAt: data.updatedAt,
//         likesNum: 0,
//         repliesNum: 0,
//         User: {
//           account: data.User.account,
//           avatar: data.User.avatar,
//           name: data.User.name,
//         },
//       },
//       ...tweets,
//     ];
//     // 這裡使用 setTimeout 更好使用者體驗
//     setTimeout(() => {
//       setTweets(newTweets);
//       setTweetInput('');
//     }, 2000);
//   } catch (error) {
//     console.error(error);
//   }
// };
