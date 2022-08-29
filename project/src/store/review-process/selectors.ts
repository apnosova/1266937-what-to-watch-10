import { NameSpace } from '../../constants';
import { RootState } from '../../types/state';
import { Reviews } from '../../types/review';


export const getReviews = (state: RootState): Reviews => state[NameSpace.Reviews].reviews;
