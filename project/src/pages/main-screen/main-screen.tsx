import { useEffect } from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getMoviesByGenre, getMoviesPerStep } from '../../store/movies-process/selectors';
import { getPromo } from '../../store/movies-process/selectors';
import { resetFilter, getMovieListByGenre } from '../../store/movies-process/movies-process';
import Header from '../../components/header/header';
import MyListButton from '../../components/my-list-button/my-list-button';
import MovieList from '../../components/movie-list/movie-list';
import GenreList from '../../components/genre-list/genre-list';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import Footer from '../../components/footer/footer';


function MainScreen(): JSX.Element {
  const moviesByGenre = useAppSelector(getMoviesByGenre);
  const promo = useAppSelector(getPromo);
  const { backgroundImage, name, posterImage, genre, released, id } = promo;

  const moviesPerStep = useAppSelector(getMoviesPerStep);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetFilter());
    dispatch(getMovieListByGenre());
  }, [dispatch]);

  const navigate = useNavigate();

  const handlePlayClick = () => {
    navigate(`/player/${id}`);
  };


  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header classOption={'film-card__head'} isMain />

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={posterImage} alt={`${posterImage} poster`} width="218" height="327" />
            </div>

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

                < MyListButton movie={promo} />

              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList />
          <MovieList movies={moviesByGenre.slice(0, moviesPerStep)} />

          {
            moviesPerStep < moviesByGenre.length &&
            <ShowMoreButton />
          }

        </section>

        <Footer isMain />
      </div>
    </>
  );
}


export default MainScreen;
