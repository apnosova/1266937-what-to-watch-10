import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../constants';
import MainScreen from '../../pages/main-screen/main-screen';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import UserListScreen from '../../pages/user-list-screen/user-list-screen';
import MovieScreen from '../../pages/movie-screen/movie-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../../components/private-route/private-route';
import { useAppSelector } from '../../hooks/hooks-index';
import LoadingScreen from '../../pages/loading-screen/loading-screen';

function App(): JSX.Element {
  const { authorizationStatus, isDataLoaded } = useAppSelector((state) => state);

  if (isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

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
              authorizationStatus={authorizationStatus}
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
