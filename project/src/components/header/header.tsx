import HeadGuest from './head-guest';
import UserBlock from './user-block';
import Logo from '../../components/logo/logo';
import { AuthorizationStatus } from '../../constants';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { fetchMovieAction } from '../../store/api-actions';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { getMovie } from '../../store/movies-process/selectors';

type HeaderProps = {
  isBreadcrumbs?: boolean,
  classOption?: string,
  pageTitle?: string,
  myList?: boolean,
  count?: number,
  isLoginForm?: boolean,
  isMain?: boolean,
}

function Header(props: HeaderProps): JSX.Element {
  const { isBreadcrumbs, classOption, pageTitle, myList, isLoginForm, isMain, count } = props;

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const movie = useAppSelector(getMovie);

  const params = useParams();
  const filmId = Number(params.id);
  const { name } = movie;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovieAction(filmId));
  }, [dispatch, filmId]);


  return (
    <header className={`page-header ${classOption}`}>

      <Logo isMain={isMain} />

      {
        pageTitle && pageTitle.length > 0 &&
        <h1 className="page-title user-page__title">{pageTitle}
          {
            myList && <span className="user-page__film-count">{count}</span>
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
