import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants';

type LogoProps = {
  isFooter?: boolean,
  isMain?: boolean,
}

function Logo(props: LogoProps): JSX.Element {
  const { isFooter, isMain } = props;

  return (
    <div className="logo">
      <Link
        to={AppRoute.Root}
        className={`logo__link ${isFooter && 'logo__link--light'}`}
        style={isMain && isFooter ? { color: '#54503e', borderColor: 'inherit' } : {}}
      >
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div >
  );
}


export default Logo;
