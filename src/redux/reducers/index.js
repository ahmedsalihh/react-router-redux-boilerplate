import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import auth from './authReducer';

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    auth,
  });

export default rootReducer;
