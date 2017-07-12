import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addBook,removeBook,activateBook} from '../actions/index.js'
import {bindActionCreators} from 'redux'


class BooksList extends Component {
  renderBooksList(){

    return (
      this.props.books.map((book,index)=>{
        const active = book.title == this.props.activeBook.title
        return <p style={{backgroundColor: active ? "green": "white"}} onClick={()=>{this.props.activateBook(book.title)}} key={index}>{book.title}</p>
      })
    )
  }
  render() {
    return (
      <div>
        <div style={{padding: "10px"}} onClick={()=>{this.props.addBook()}}>Add</div>
        <div style={{padding: "10px"}} onClick={()=>{this.props.removeBook()}}>Remove</div>
        {this.renderBooksList()}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    books: state.books,
    activeBook: state.activeBook
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({addBook,removeBook,activateBook},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(BooksList)
