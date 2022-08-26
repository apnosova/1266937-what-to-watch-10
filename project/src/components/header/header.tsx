import HeadGuest from './head-guest';
import UserBlock from './user-block';
import Logo from '../../components/logo/logo';
import { AuthorizationStatus } from '../../constants';
import { useAppSelector } from '../../hooks/hooks-index';

function Header() {
  const { authorizationStatus } = useAppSelector((state) => state);

  return (
    <header className="page-header film-card__head">

      <Logo />

      {authorizationStatus === AuthorizationStatus.Auth ? <UserBlock /> : <HeadGuest />}

    </header>
  );
}


export default Header;
