import { NameSpace } from '../../constants';
import { RootState } from '../../types/state';
import { Movies, Genre, Genres } from '../../types/movie';


export const getMovies = (state: RootState): Movies => state[NameSpace.Movies].movies;
export const getLoadedDataStatus = (state: RootState): boolean => state[NameSpace.Movies].isDataLoaded;
export const getCurrentGenre = (state: RootState): Genre => state[NameSpace.Movies].genre;
export const getGenreList = (state: RootState): Genres => state[NameSpace.Movies].genres;
export const getMoviesByGenre = (state: RootState): Movies => state[NameSpace.Movies].moviesByGenre;
