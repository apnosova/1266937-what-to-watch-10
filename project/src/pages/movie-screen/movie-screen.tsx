import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks-index';
import { useEffect } from 'react';
import { fetchMovie, fetchReviews, fetchSimilarMovies } from '../../store/api-actions';
import Tabs from '../../components/tabs/tabs';
import Footer from '../../components/footer/footer';
import MovieList from '../../components/movie-list/movie-list';
import NotFoundScreen from '../not-found-screen/not-found-screen';


function MovieScreen(): JSX.Element {
  const params = useParams();
  const filmId = Number(params.id);

  const movie = useAppSelector((state) => state.movie);
  const { backgroundImage, name, genre, released, previewImage, } = movie;

  const reviews = useAppSelector((state) => state.reviews);

  const similarMovies = useAppSelector((state) => (state.similarMovies));

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovie(filmId));
    dispatch(fetchSimilarMovies(filmId));
    dispatch(fetchReviews(filmId));
  }, [dispatch, filmId]);

  if (movie.id === undefined) {
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

          <header className="page-header film-card__head">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </div>
              </li>
              <li className="user-block__item">
                <a className="user-block__link" href="#todo">Sign out</a>
              </li>
            </ul>
          </header>

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
                <a href="add-review.html" className="btn film-card__button">Add review</a>
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
