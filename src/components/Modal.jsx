import { useState } from 'react';
import styled, { css } from 'styled-components';
import { ThemeButton } from './common/common.styled';
const StyledModalBtn = styled(ThemeButton)`
  & .modal-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9998;
    opacity: 0;
    filter: blur(0px);
    transition: opacity 0.2s ease-in-out, filter 0.2s ease-in-out;
    &.show {
      opacity: 1;
      filter: blur(4px);
    }
  }
  & .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    & .modal-content {
      background-color: white;
      padding: 20px;
    }
  }
  /* 繼承StyledButton的樣式並覆蓋width屬性 */
  ${({ modalBtnWidth }) => css`
    ${ThemeButton};
    width: ${modalBtnWidth};
  `}
`;
const ModalBtn = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <StyledModalBtn onClick={() => setShowModal(true)} modalBtnWidth='100%'>
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
                <h2>Modal Content</h2>
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
      </StyledModalBtn>
    </>
  );
};

export default ModalBtn;
