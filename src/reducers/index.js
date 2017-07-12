import { combineReducers } from 'redux';
import {booksReducers} from './booksReducers'
import {reducer as formReducer} from 'redux-form'
import {activeBookReducers} from './activeBookReducers'

const rootReducer = combineReducers({
  books: booksReducers,
  activeBook: activeBookReducers,
  form: formReducer
});

export default rootReducer;
