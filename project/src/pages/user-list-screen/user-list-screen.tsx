import MovieList from '../../components/movie-list/movie-list';
import { useAppSelector } from '../../hooks/hooks-index';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';


function UserListScreen(): JSX.Element {

  const { movies } = useAppSelector((state) => state);

  return (
    <div className="user-page">

      <Header classOption={'user-page__head'} pageTitle={'My list'} myList />

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <MovieList movies={movies} />

      </section>

      <Footer />

    </div>
  );
}

export default UserListScreen;
