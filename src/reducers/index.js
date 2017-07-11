import { combineReducers } from 'redux';
import {booksReducers} from './booksReducers'


const rootReducer = combineReducers({
  books: booksReducers
});

export default rootReducer;
