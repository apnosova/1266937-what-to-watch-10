export enum AppRoute {
  Root = '/',
  Login = '/login',
  MyList = '/mylist',
  Movie = 'films/:id',
  Review = 'films/:id/review',
  Player = 'player/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
