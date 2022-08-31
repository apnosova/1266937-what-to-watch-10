import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { useEffect } from 'react';
import { getFavoriteMovies } from '../../store/favorite-process/selectors';
import { fetchFavoriteAction } from '../../store/api-actions';
import Header from '../../components/header/header';
import MovieList from '../../components/movie-list/movie-list';
import Footer from '../../components/footer/footer';


function UserListScreen(): JSX.Element {
  const favoriteMovies = useAppSelector(getFavoriteMovies);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteAction());
  }, [dispatch]);


  return (
    <div className="user-page">

      <Header classOption={'user-page__head'} pageTitle={'My list'} myList count={favoriteMovies.length} />

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <MovieList movies={favoriteMovies} />

      </section>

      <Footer />

    </div>
  );
}

export default UserListScreen;
