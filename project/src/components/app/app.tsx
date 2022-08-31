import { Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../constants';
import MainScreen from '../../pages/main-screen/main-screen';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import UserListScreen from '../../pages/user-list-screen/user-list-screen';
import MovieScreen from '../../pages/movie-screen/movie-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../../components/private-route/private-route';
import { useAppSelector } from '../../hooks/hooks';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';


function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);


  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={
            <MainScreen />
          }
        >
        </Route>
        <Route
          path={AppRoute.Login}
          element={<SignInScreen />}
        >
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
        <Route
          path={AppRoute.Movie}
          element={<MovieScreen />}
        >
        </Route>
        <Route
          path={AppRoute.Review}
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
            >
              <AddReviewScreen />
            </PrivateRoute>
          }
        >
        </Route>
        <Route
          path={AppRoute.Player}
          element={<PlayerScreen />}
        >
        </Route>
        <Route
          path="*"
          element={<NotFoundScreen />}
        >
        </Route>
      </Routes>
    </HistoryRouter >
  );
}

export default App;
