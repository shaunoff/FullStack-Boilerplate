import { combineReducers } from 'redux';
import {booksReducers} from './booksReducers'
import {activeBookReducers} from './activeBookReducers'

const rootReducer = combineReducers({
  books: booksReducers,
  activeBook: activeBookReducers
});

export default rootReducer;
