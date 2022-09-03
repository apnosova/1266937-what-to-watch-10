export const DEFAULT_GENRE = 'All genres';
export const MAX_SIMILAR_MOVIES = 4;
export const MOVIES_PER_STEP = 8;
export const MAX_GENRE_ITEMS = 10;
export const DEFAULT_RATING = 0;
export const VIDEO_DELAY = 1000;
export const VIDEO_TIME_UPDATE = 100;
export const MINS_IN_HOUR = 60;
export const REQUEST_TIMEOUT = 5000;
export const URL_API = 'https://10.react.pages.academy/wtw';
export const AUTH_TOKEN_KEY_NAME = 'wtw-token';


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

export enum ApiRoute {
  Movies = '/films',
  Promo = '/promo',
  Favorite = '/favorite',
  Login = '/login',
  Logout = '/logout',
  Reviews = '/comments',
}

export enum TabItem {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}

export const DEFAULT_TAB = Object.keys(TabItem)[0];

export enum MovieScore {
  Normal = 3,
  Good = 5,
  VeryGood = 8,
  Awesome = 10,
}

export enum RatingLevel {
  Bad = 'Bad',
  Normal = 'Normal',
  Good = 'Good',
  VeryGood = 'Very good',
  Awesome = 'Awesome',
}

export enum NameSpace {
  User = 'USER',
  Movies = 'MOVIES',
  Reviews = 'REVIEWS',
  Favorite = 'FAVORITE',
}

export enum CommentLength {
  MIN = 50,
  MAX = 400,
}
