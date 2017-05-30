import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { authReducers as auth } from './authuser';

const rootReducer = combineReducers({
  form,
  auth
});

export default rootReducer;
