import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { fetchMovieAction, fetchReviewsAction, fetchSimilarMoviesAction } from '../../store/api-actions';
import { AuthorizationStatus, AppRoute } from '../../constants';
import { getMovie, getSimilarMovies } from '../../store/movies-process/selectors';
import { getReviews } from '../../store/review-process/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import MyListButton from '../../components/my-list-button/my-list-button';
import Tabs from '../../components/tabs/tabs';
import Footer from '../../components/footer/footer';
import MovieList from '../../components/movie-list/movie-list';
import Header from '../../components/header/header';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { getLoadedDataStatus } from '../../store/movies-process/selectors';
import LoadingScreen from '../../pages/loading-screen/loading-screen';


function MovieScreen(): JSX.Element {
  const movie = useAppSelector(getMovie);
  const { backgroundImage, name, genre, released, previewImage, id } = movie;

  const reviews = useAppSelector(getReviews);
  const similarMovies = useAppSelector(getSimilarMovies);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const params = useParams();
  const filmId = Number(params.id);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovieAction(filmId));
    dispatch(fetchSimilarMoviesAction(filmId));
    dispatch(fetchReviewsAction(filmId));

  }, [filmId, dispatch]);

  const navigate = useNavigate();

  const handlePlayClick = () => {
    navigate(`/player/${id}`);
  };

  const isDataLoading = useAppSelector(getLoadedDataStatus);

  if (isDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  if (!name) {
    return <NotFoundScreen />;
  }


  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header classOption={'film-card__head'} />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button"
                  type="button"
                  onClick={handlePlayClick}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>

                <MyListButton movie={movie} />

                {
                  authorizationStatus === AuthorizationStatus.Auth &&
                  <Link to={`${AppRoute.Movies}/${id}/review`}
                    className="btn film-card__button"
                  >Add review
                  </Link>
                }
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={previewImage} alt={`${name} poster`} width="218" height="327" />
            </div>

            <Tabs movie={movie} reviews={reviews} />

          </div>
        </div>
      </section >

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <MovieList movies={similarMovies} />

        </section>

        <Footer />

      </div>
    </>
  );
}


export default MovieScreen;
