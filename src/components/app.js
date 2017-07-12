import React, { Component } from 'react';
import BooksList from "./BooksList"


export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello Simple React App</h1>
        <BooksList/>
      </div>
    );
  }
}
