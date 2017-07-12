import React, { Component } from 'react';
import {Field,reduxForm} from 'redux-form'
import {Grid, Row, Col,Button,ButtonToolbar,Panel} from 'react-bootstrap'

class ReduxForm extends Component {
  constructor(){
    super()
    this.state = {
      values: ""
    }
  }
  renderField(field){
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />

      </div>
    )
  }
  onSubmit(values){
    this.setState({values: values})
  }
  render() {
    const {handleSubmit} = this.props
    return (
      <Grid>
        <Row style={{marginBottom: '10px'}} className="show-grid">
          <Col lg={6}>
            <Panel header="Redux Form">
              <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                  name='title'
                  label="Title"
                  component={this.renderField}
                />
                <Field
                  name='field2'
                  label="Field 2"
                  component={this.renderField}
                />
                <Field
                  name='field3'
                  label="Field 3"
                  component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </Panel>
          </Col>
          <Col lg={6}>
            <Panel header="Output">
              {JSON.stringify(this.state.values)}
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}

function validate(values){
  const error = {};
  if (!values.title){
    error.title = "Enter a Title"
  }
  if (!values.field2){
    error.title = "Enter value into field 2"
  }
  if (!values.field3){
    error.title = "Enter value into field 3"
  }
}

export default reduxForm({
  form: 'ReduxExample',
  validate: validate
})(ReduxForm)
