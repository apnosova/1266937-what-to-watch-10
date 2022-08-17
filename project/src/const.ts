export enum AppRoute {
  Root = '/',
  Login = '/login',
  MyList = '/mylist',
  Movie = '/films/:id',
  Review = '/films/:id/review',
  Player = '/player/:id',
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

export const DEFAULTGENRE = 'All genres';
