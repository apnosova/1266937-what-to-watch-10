import Header from '../../components/header/header';
import MovieList from '../../components/movie-list/movie-list';
import GenreList from '../../components/genre-list/genre-list';
import Footer from '../../components/footer/footer';
import { useAppSelector } from '../../hooks/hooks-index';
import ShowMoreButton from '../../components/show-more-button/show-more-button';


function MainScreen(): JSX.Element {
  const { moviesByGenre } = useAppSelector((state) => state);

  const promo = useAppSelector((state) => {
    const { backgroundImage, name, posterImage, genre, released } = state.promo;
    return {
      backgroundImage, name, posterImage, genre, released
    };
  });

  const { backgroundImage, name, posterImage, genre, released } = promo;


  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

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
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList />

          <MovieList movies={moviesByGenre} />

          <ShowMoreButton />

        </section>

        <Footer isMain />

      </div>
    </>
  );
}

export default MainScreen;
