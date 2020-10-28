import * as authActions from '../../actions/authActions';

const defaultState = {
  isAuthenticated: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case authActions.AUTH_SUCCESS:
      return { ...state, isAuthenticated: true };
    case authActions.LOGOUT_SUCCESS:
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
};
