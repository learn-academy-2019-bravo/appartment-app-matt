import React from "react"
import PropTypes from "prop-types"
import { Route, Switch } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap'

//Routes
import Apartments from './Apartments'
import Landing from './Landing'
import SignIn from './SignIn'


export default class Routes extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  
  
  render () {
    const { logged_in, sign_in_route, sign_out_route } = this.props
    return (
      <React.Fragment>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Apartmentalize</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#apartments">Apartments</NavLink>
              </NavItem>
              <NavItem>
                {!logged_in &&
                  <NavLink href="#users/sign_in">Sign In</NavLink>
                }
                {logged_in &&
                  <NavLink href="#users/sign_in">Sign Out</NavLink>
                }
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        <Switch>
            <Route exact path='/' component={ Landing } />
            <Route path='/apartments' component={ Apartments } />
            <Route
              path='/users/sign_in'
              render={(props) => <SignIn
                logged_in={ logged_in }
                sign_in_route={ sign_in_route }
                sign_out_route={ sign_out_route }
              /> }
            />
        </Switch>
      </React.Fragment>
    )
  }
}

