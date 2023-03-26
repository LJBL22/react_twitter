import { IconBack } from 'assets/icons';
import { BackHeader } from './ReplyList';
import { userData, tweetData } from 'components/dummyData';

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
          <div>{userInfo.name}</div>
        </div>
      </BackHeader>
    </div>
  );
};

export default UsersPage;
