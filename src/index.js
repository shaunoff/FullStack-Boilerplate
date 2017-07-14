import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import ReduxPromise from 'redux-promise'
import {BrowserRouter,Route, Switch} from 'react-router-dom'

//import App from './components/app';
import BooksList from "./components/BooksList"
import ActiveBook from "./components/ActiveBook"
import ReduxForm from "./components/ReduxForm"
import ApiTest from "./components/pages/ApiTest"
import ReduxApi from "./components/pages/ReduxApi"

import NavigationBar from "./components/navbar/NavBar.js"
import rootReducer from './reducers/index.js';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise,logger)(createStore);



ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <BrowserRouter>
      <div>
        <NavigationBar/>
        <Switch>
          <Route exact path="/" component={BooksList}/>
          <Route path="/active" component={ActiveBook}/>
          <Route path="/form" component={ReduxForm}/>
          <Route path="/api-test" component={ApiTest}/>
          <Route path="/redux-api" component={ReduxApi}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('#app'));
