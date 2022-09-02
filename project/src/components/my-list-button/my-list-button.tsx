import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { useNavigate } from 'react-router-dom';
import { changeFavoriteStatusAction } from '../../store/api-actions';
import { getFavoriteMovies } from '../../store/favorite-process/selectors';
import { fetchFavoriteAction } from '../../store/api-actions';
import { Movie } from '../../types/movie';
import { AppRoute, AuthorizationStatus } from '../../constants';
import { getAuthorizationStatus } from '../../store/user-process/selectors';


type MyListButtonProps = {
  movie: Movie,
}

function MyListButton(props: MyListButtonProps) {
  const { movie } = props;
  const { id, isFavorite } = movie;

  const favoriteData = {
    filmId: id,
    status: isFavorite ? 0 : 1,
  };

  const { filmId } = favoriteData;

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const favoriteMovies = useAppSelector(getFavoriteMovies);

  const isCurrentMovieFavorite = favoriteMovies.some((item) => item.id === filmId);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleFavoriteClick = () => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(changeFavoriteStatusAction([filmId, isCurrentMovieFavorite ? 0 : 1]));
    } else {
      navigate(AppRoute.Login);
    }
  };

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoriteAction());
    }
  }, [dispatch, authorizationStatus]);


  return (
    <button className="btn btn--list film-card__button"
      type="button"
      onClick={handleFavoriteClick}
    >
      {isCurrentMovieFavorite
        ?
        <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list"></use>
        </svg>
        :
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>}
      <span>My list</span>
      <span className="film-card__count">{
        authorizationStatus === AuthorizationStatus.Auth ? favoriteMovies.length : 0
      }
      </span>

    </button >
  );
}


export default MyListButton;
