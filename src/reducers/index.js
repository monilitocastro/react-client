import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { authReducers as auth } from './authuser';
import { contentReducers as content } from './content';

const rootReducer = combineReducers({
  form,
  auth,
  content
});

export default rootReducer;
