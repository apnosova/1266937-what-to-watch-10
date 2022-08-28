import HeadGuest from './head-guest';
import UserBlock from './user-block';
import Logo from '../../components/logo/logo';
import { AuthorizationStatus } from '../../constants';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks-index';
import { fetchMovie } from '../../store/api-actions';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants';

type HeaderProps = {
  isBreadcrumbs?: boolean,
  classOption?: string,
  pageTitle?: string,
  myList?: boolean,
  isLoginForm?: boolean,
  isMain?: boolean,
}

function Header(props: HeaderProps): JSX.Element {
  const { isBreadcrumbs, classOption, pageTitle, myList, isLoginForm, isMain } = props;

  const { authorizationStatus } = useAppSelector((state) => state);

  const movie = useAppSelector((state) => state.movie);

  const params = useParams();
  const filmId = Number(params.id);
  const { name } = movie;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovie(filmId));
  }, [dispatch, filmId]);

  return (
    <header className={`page-header ${classOption}`}>

      <Logo isMain={isMain} />

      {
        pageTitle && pageTitle.length > 0 &&
        <h1 className="page-title user-page__title">{pageTitle}
          {
            myList && <span className="user-page__film-count">9</span>
          }
        </h1>
      }

      {
        isBreadcrumbs &&
        <nav className="breadcrumbs">
          <ul className="breadcrumbs__list">
            <li className="breadcrumbs__item">
              <Link to={`${AppRoute.Movies}/${filmId}`} className="breadcrumbs__link">{name}</Link>
            </li>
            <li className="breadcrumbs__item">
              <span className="breadcrumbs__link">Add review</span>
            </li>
          </ul>
        </nav>
      }

      {
        (authorizationStatus === AuthorizationStatus.Auth)
          ? <UserBlock />
          : !isLoginForm && <HeadGuest />
      }

    </header>
  );
}


export default Header;
