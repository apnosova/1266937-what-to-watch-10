import { NameSpace } from '../../constants';
import { RootState } from '../../types/state';
import { Movie, Movies } from '../../types/movie';


export const getMovie = (state: RootState): Movie => state[NameSpace.Movie].movie;
export const getPromo = (state: RootState): Movie => state[NameSpace.Movie].promo;
export const getSimilarMovies = (state: RootState): Movies => state[NameSpace.Movie].similarMovies;
