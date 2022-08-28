import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks-index';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchMovie, fetchReviews, fetchSimilarMovies } from '../../store/api-actions';
// import { AppRoute } from '../../constants';
import Tabs from '../../components/tabs/tabs';
import Footer from '../../components/footer/footer';
import MovieList from '../../components/movie-list/movie-list';
import Header from '../../components/header/header';
// import NotFoundScreen from '../not-found-screen/not-found-screen';
import { AuthorizationStatus, AppRoute } from '../../constants';


function MovieScreen(): JSX.Element {
  const params = useParams();
  const filmId = Number(params.id);

  const movie = useAppSelector((state) => state.movie);
  const { backgroundImage, name, genre, released, previewImage, id } = movie;

  const reviews = useAppSelector((state) => state.reviews);

  const similarMovies = useAppSelector((state) => state.similarMovies);

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovie(filmId));
    dispatch(fetchSimilarMovies(filmId));
    dispatch(fetchReviews(filmId));
  }, [dispatch, filmId]);

  // if (!movie) {
  //   return <NotFoundScreen />;
  // }


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
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
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
