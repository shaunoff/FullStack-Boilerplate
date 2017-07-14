import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form'

import {booksReducers} from './booksReducers'
import {activeBookReducers} from './activeBookReducers'
import {formDataReducer} from './formDataReducer'

const rootReducer = combineReducers({
  books: booksReducers,
  activeBook: activeBookReducers,
  formData: formDataReducer,
  form: formReducer
});

export default rootReducer;
