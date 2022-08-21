import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constants';
import MainScreen from '../../pages/main-screen/main-screen';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import UserListScreen from '../../pages/user-list-screen/user-list-screen';
import MovieScreen from '../../pages/movie-screen/movie-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../../components/private-route/private-route';
// import { Movies } from '../../types/movie';

// type AppScreenProps = {
//   title: string;
//   genre: string;
//   year: number;
//   // movies: Movies;
// }

function App(): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={
            <MainScreen />
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
              <UserListScreen />
            </PrivateRoute>
          }
        >
        </Route>
        <Route path={AppRoute.Movie} element={<MovieScreen />}>
        </Route>
        <Route path={AppRoute.Review} element={<AddReviewScreen />}>
        </Route>
        <Route path={AppRoute.Player} element={<PlayerScreen />}>
        </Route>
        <Route path="*" element={<NotFoundScreen />}>
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
