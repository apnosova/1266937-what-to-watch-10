import { AUTH_TOKEN_KEY_NAME } from '../constants';

export type Token = string;

export const getToken = () => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);

  return token ?? '';
};

export const saveToken = (token: Token): void => {
  localStorage.saveItem(AUTH_TOKEN_KEY_NAME, token);
};

export const dropToken = (): void => {
  localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
};