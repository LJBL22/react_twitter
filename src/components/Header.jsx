import { NavLink, useLocation } from 'react-router-dom';
import { IconBack } from 'assets/icons';
import { BackHeader } from 'components/common/common.styled';

const Header = ({ headerText, user, userTweets, goBackLink }) => {
  const { pathname } = useLocation();
  return (
    <BackHeader>
      <div>
        {goBackLink && (
          <NavLink
            to={
              pathname.includes('follow')
                ? `users/${user.id}/tweets`
                : '/tweets'
            }
          >
            <div>
              <IconBack />
            </div>
          </NavLink>
        )}
        <div>
          <div className='name'>{headerText}</div>
          <div className='tweetQty'> {userTweets?.length} 推文</div>
        </div>
      </div>
    </BackHeader>
  );
};

export default Header;
