import { NameSpace } from '../../constants';
import { RootState } from '../../types/state';
import { Movies } from '../../types/movie';


export const getFavoriteMovies = (state: RootState): Movies => state[NameSpace.Favorite].favoriteMovies;
