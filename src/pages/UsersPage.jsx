import { IconBack } from 'assets/icons';
import { BackHeader } from './ReplyList';
import { styled } from 'styled-components';
import { userData, tweetData } from 'components/dummyData';

// const StyledHeader = styled(BackHeader)`
// /*  */
// `;

// 暫定使用者為 userData 的 user[0]
const userInfo = userData[0];

const UsersPage = () => {
  return (
    <div>
      <BackHeader>
        <div>
          <div>
            <IconBack />
          </div>
          <div>
            <div>{userInfo.name}</div>
            <div className='tweetQty'>24 推文</div>
          </div>
        </div>
      </BackHeader>
    </div>
  );
};

export default UsersPage;
