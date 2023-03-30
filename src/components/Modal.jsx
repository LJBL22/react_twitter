import { useState } from 'react';
import { ModalButton } from './common/common.styled';
import InputTweet from 'components/InputTweet';
import { IconDanger } from 'assets/icons';

export const TweetModal = ({
  inputValue,
  handleChange,
  handleAddTweet,
  isInputValueValid,
}) => {
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
                  <IconDanger />
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
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowModal(false);
                  }}
                >
                  Close Modal
                </button>
              </div>
            </div>
          </>
        )}
      </ModalButton>
    </>
  );
};
