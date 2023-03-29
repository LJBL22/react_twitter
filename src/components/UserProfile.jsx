import styled from 'styled-components';
import { useUser } from 'contexts/UserContext';

const StyledContainer = styled.div`
  position: relative;
  border: 1px solid var(--color-gray-200);
  background-color: white;
  .cover {
    height: 15.38rem;
    overflow: hidden;

    img {
      object-fit: cover;
    }
  }

  .avatar {
    position: absolute;
    top: 4.8rem;
    left: 1rem;
    width: 10.77rem;
    aspect-ratio: 1/1;
    border: 0.31rem solid white;
    border-radius: 50%;
  }
`;

const StyledContentDiv = styled.div``;

const StyledEditDiv = styled.div``;

function UserProfile({ height, width }) {
  const { currentUser } = useUser();
  return (
    <div>
      <StyledContainer>
        <div className='cover'>
          <img src={currentUser.coverUrl} alt='cover-url' />
        </div>
        <img className='avatar' src={currentUser.avatar} alt='avatar' />
        <StyledContentDiv>
          <StyledEditDiv>
            {/* {id === currentUser.id? (
              <button type="button" onClick={handleShowModal}>
                編輯個人資料
              </button>
            ):(<>
            
            </>) 
            } */}
          </StyledEditDiv>
        </StyledContentDiv>
      </StyledContainer>
      <div></div>
    </div>
  );
}

export default UserProfile;
