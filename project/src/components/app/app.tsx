import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import UserListScreen from '../../pages/user-list-screen/user-list-screen';
import MovieScreen from '../../pages/movie-screen/movie-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../../components/private-route/private-route';
import { Movies } from '../../types/movie';

type AppScreenProps = {
  title: string;
  genre: string;
  year: number;
  movies: Movies;
}

function App({ title, genre, year, movies }: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={
            <MainScreen title={title} genre={genre} year={year} movies={movies} />
          }
        >
        </Route>
        <Route path={AppRoute.Login} element={<SignInScreen />}>
        </Route>
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <UserListScreen movies={movies} />
            </PrivateRoute>
          }
        >
        </Route>
        <Route path={AppRoute.Movie} element={<MovieScreen movies={movies} />}>
        </Route>
        <Route path={AppRoute.Review} element={<AddReviewScreen movies={movies} />}>
        </Route>
        <Route path={AppRoute.Player} element={<PlayerScreen movies={movies} />}>
        </Route>
        <Route path="*" element={<NotFoundScreen />}>
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
