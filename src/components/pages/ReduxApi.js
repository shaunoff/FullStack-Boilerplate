import React, { Component } from 'react';
import {Field,reduxForm} from 'redux-form'
import {Grid, Row, Col,Button,ButtonToolbar,Panel,Glyphicon} from 'react-bootstrap'
import {connect} from 'react-redux'
import {getTodos,deleteTodo,addTodo} from '../../actions/index.js'
import {bindActionCreators} from 'redux'
import axios from 'axios'

class ReduxApi extends Component {
  componentDidMount(){
    this.props.getTodos()
  }
  fetchTodos(){
    this.props.getTodos()
  }
  deleteTodo(id){
    this.props.deleteTodo(id)
  }
  addTodo(){
    this.props.addTodo({text: Date.now()})
  }
  onSubmit(values){
    this.props.addTodo(values)
    this.props.reset()
  }
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? "has-error" : ""}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help" style={{color: "red"}}>
          {touched ? error : ""}
        </div>
      </div>
    );
  }
  renderTodos(){
    return (
      this.props.todos.map((todo)=>{
        return (
          <div key={todo._id} className="panel panel-primary">
            <div className="panel-heading clearfix">
              <h2 className="panel-title pull-left" style={{paddingTop: '3px'}}>Panel header</h2>
              <div onClick={this.deleteTodo.bind(this,todo._id)} className="btn-group pull-right">
                <Glyphicon glyph="trash" />
              </div>
            </div>
            <p onClick={this.deleteTodo.bind(this,todo._id)}>{todo.text}</p>
            <p>{todo.text}</p>
          </div>)
      })
    )
  }
  render() {
    const {handleSubmit} = this.props
    return (
      <Grid>
        <Row style={{marginBottom: '10px'}} className="show-grid">
          <Col lg={6}>
            <Panel header={"Add Todo"}>
              <Button onClick={this.addTodo.bind(this)} bsStyle="success">Add Todo</Button>
            </Panel>
            <Panel header="Redux Form">
              <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                  name='text'
                  label="Title"
                  component={this.renderField}
                />

                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </Panel>
          </Col>
          <Col lg={6}>
            <Panel header="Output">
              {this.renderTodos()}
            </Panel>

          </Col>
        </Row>
      </Grid>
    );
  }
}
function mapStateToProps(state){
  return {
    todos: state.todos
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({getTodos,deleteTodo,addTodo},dispatch)
}
function validate(values){
  const error = {};
  if (!values.text){
    error.text = "Enter a Title"
  }
  return error
}

export default reduxForm({
  form: 'ReduxApiExample',
  validate: validate
})(connect(mapStateToProps,mapDispatchToProps)(ReduxApi))
