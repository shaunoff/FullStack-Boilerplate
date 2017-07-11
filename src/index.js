import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

import {postBook} from './actions/booksActions';

const createStoreWithMiddleware = applyMiddleware()(createStore);


//create the store
const store = createStore(reducers);
store.subscribe(function(){
  console.log('current state is: ', store.getState());
})


//dispatch example actions

const exampleBook = {
  id: 1,
  title:'this is the book title',
  description: 'this is the book description',
  price: 33.33
}
store.dispatch(postBook(exampleBook))
store.dispatch(postBook(exampleBook))
store.dispatch(postBook(exampleBook))
store.dispatch(postBook(exampleBook))







ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('#app'));
