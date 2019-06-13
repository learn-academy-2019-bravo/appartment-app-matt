import React from "react"
import PropTypes from "prop-types"
import { Route, Switch } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'

//Routes
import Landing from './Landing'


export default class Routes extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Navbar id="navbar" bg="blue" expand="lg">
          <Navbar.Brand id="title" href="/">Apartmentalize</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#createprofile">Create Profile</Nav.Link>
              <Nav.Link href="#profiles">All Cats</Nav.Link>
              <Nav.Link href="#">Pending Requests</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route exact path='/' component={ Landing } />
        </Switch>
      </React.Fragment>
    )
  }
}

