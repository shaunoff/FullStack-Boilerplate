import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addBook,removeBook} from '../actions/index.js'
import {bindActionCreators} from 'redux'


class BooksList extends Component {
  renderBooksList(){
    console.log(this.props)
    return (
      this.props.books.map((book,index)=>{
        return <p key={index}>{book.title}</p>
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
    books: state.books
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({addBook,removeBook},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(BooksList)
