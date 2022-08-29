import { NameSpace, AuthorizationStatus } from '../../constants';
import { RootState } from '../../types/state';


export const getAuthorizationStatus = (state: RootState): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
