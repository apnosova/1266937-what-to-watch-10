export enum AppRoute {
  Root = '/',
  Login = '/login',
  MyList = '/mylist',
  Movie = '/films/:id',
  Review = '/films/:id/review',
  Player = '/player/:id',
  Movies = '/films',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum Genre {
  Drama = 'Dramas',
  Crime = 'Crime',
  Horror = 'Horror',
  Romance = 'Romance',
  Comedy = 'Comedies',
  Thriller = 'Thrillers',
  'Sci-Fi' = 'Sci-Fi',
  Documentary = 'Documentary',
  'Kids & Family' = 'Kids & Family',
}

export const DEFAULT_GENRE = 'All genres';

export const VIDEO_DELAY = 1000;

export const REQUEST_TIMEOUT = 5000;

export const URL_API = 'https://10.react.pages.academy/wtw';

export enum ApiRoute {
  Movies = '/films',
  Promo = '/promo',
  Favorite = '/favorite',
  Login = '/login',
  Logout = '/logout',
  Reviews = '/comments',
}

export const ERROR_TIMEOUT = 2000;

export const AUTH_TOKEN_KEY_NAME = 'wtw-token';

export enum TabItem {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}

export const DEFAULT_TAB = Object.keys(TabItem)[0];

export enum movieScore {
  Normal = 3,
  Good = 5,
  VeryGood = 8,
  Awesome = 10,
}

export enum ratingLevel {
  Bad = 'Bad',
  Normal = 'Normal',
  Good = 'Good',
  VeryGood = 'Very good',
  Awesome = 'Awesome',
}

export const MAX_SIMILAR_MOVIES = 4;

export const DEFAULT_RATING = 0;
