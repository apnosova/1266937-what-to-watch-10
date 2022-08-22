import { store } from '../store/store-index';
import { setError } from '../store/actions';
import { clearError } from '../store/api-actions';

export const processErrorHandle = (message: string) => {
  store.dispatch(setError(message));
  store.dispatch(clearError);
};
