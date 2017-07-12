import React, { Component } from 'react';
import {Navbar, Nav,NavItem,MenuItem,NavDropdown} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default class NavigationBar extends Component{
  render(){
    return(
      <Navbar>
        <Navbar.Header>
          <LinkContainer to={"/"}>
            <Navbar.Brand>
              Fullstack Boilerplate
            </Navbar.Brand>
          </LinkContainer>
        </Navbar.Header>
        <Nav>
          <LinkContainer to={"/active"}>
            <NavItem >Active Book Title</NavItem>
          </LinkContainer>
          <LinkContainer to={"/form"}>
            <NavItem >Redux Form</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar>
    )
  }

}
