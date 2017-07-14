import React, { Component } from 'react';
import BooksList from "./BooksList"
import NavigationBar from "./navbar/NavBar.js"

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
