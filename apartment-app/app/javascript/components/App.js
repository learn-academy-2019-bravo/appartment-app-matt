import React from "react"
import PropTypes from "prop-types"
import { HashRouter as Router } from 'react-router-dom'
import Routes from './Routes'

export default class App extends React.Component {
  render () {
    const { logged_in, sign_in_route, sign_out_route } = this.props
    return (
      <React.Fragment>
        <Router>
          <Routes
            logged_in={ logged_in }
            sign_in_route={ sign_in_route }
            sign_out_route={ sign_out_route }
          />
        </Router>
      </React.Fragment>
    )
  }
}

