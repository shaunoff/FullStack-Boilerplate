import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form'

import {booksReducers} from './booksReducers'
import {activeBookReducers} from './activeBookReducers'
import {formDataReducer} from './formDataReducer'
import {todosApiReducers} from './todosApiReducers'

const rootReducer = combineReducers({
  books: booksReducers,
  activeBook: activeBookReducers,
  formData: formDataReducer,
  form: formReducer,
  todos: todosApiReducers,
});

export default rootReducer;
