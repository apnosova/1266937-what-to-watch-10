import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants';
import { MouseEvent } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { logoutAction } from '../../store/api-actions';


function UserBlock(): JSX.Element {
  const dispatch = useAppDispatch();

  const handleSignOutClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };


  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <Link to={AppRoute.MyList}>
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </Link>
        </div>
      </li>
      <li className="user-block__item">
        <Link
          to='/'
          className="user-block__link"
          onClick={handleSignOutClick}
        >
          Sign out
        </Link>
      </li>
    </ul>
  );
}


export default UserBlock;
