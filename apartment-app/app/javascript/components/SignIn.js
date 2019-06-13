import React from "react"
import PropTypes from "prop-types"

export default class SignIn extends React.Component {
  render () {
    const { logged_in, sign_in_route, sign_out_route } = this.props
    return (
      <React.Fragment>
        {logged_in &&
          <div>
            <h5>You are signed in!</h5>
            <a href={ sign_out_route }>Sign Out</a>
          </div>
        }
        
        {!logged_in &&
          <div>
            <h5>You aren't signed in! Please sign in.</h5>
            <a href={ sign_in_route }>Sign In</a>
          </div>
        }
      </React.Fragment>
    )
  }
}

