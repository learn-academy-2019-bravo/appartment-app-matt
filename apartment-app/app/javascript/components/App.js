import React from "react"
import PropTypes from "prop-types"
import { HashRouter as Router } from 'react-router-dom'
import Routes from './Routes'

export default class App extends React.Component {
  render () {
    const {
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
      <React.Fragment>
        {logged_in &&
          <div>
            <h3>You are logged in!</h3>
            <a href={ sign_out_route }>Sign Out</a>
          </div>
        }
        
        {!logged_in &&
          <div>
            <h3>You aren't logged in! Please sign in.</h3>
            <a href={ sign_in_route }>Sign In</a>
          </div>
        }
        
        <Router>
          <Routes />
        </Router>
      </React.Fragment>
    )
  }
}

