import { push } from 'connected-react-router';

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const authSuccess = () => {
  return { type: AUTH_SUCCESS };
};

export const logout = () => {
  return { type: LOGOUT_SUCCESS };
};

export const login = () => {
  return dispatch => {
    dispatch(authSuccess());
    dispatch(push('/secret'));
  };
};
