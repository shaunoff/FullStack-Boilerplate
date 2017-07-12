import React, { Component } from 'react';
import BooksList from "./BooksList"
import NavigationBar from "./navbar/NavBar.js"
import {BrowserRouter,Route, Switch} from 'react-router-dom'
export default class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar/>
        <h1>Hello Simple React App</h1>
        <BooksList/>
      </div>
    );
  }
}
