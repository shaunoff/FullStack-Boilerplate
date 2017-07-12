import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Grid,Row,Panel} from 'react-bootstrap'
class ActiveBook extends Component{
  render(){
    const {activeBook={}} = this.props
    return(
      <Grid>
        <Row>
          <Panel header="Active Book Title">
            <p>{activeBook.title}</p>
          </Panel>
        </Row>
      </Grid>
    )
  }
}

function mapStateToProps(state){
  return {
    activeBook: state.activeBook
  }
}
export default connect(mapStateToProps)(ActiveBook)
