import React from "react"
import PropTypes from "prop-types"

export default class Apartments extends React.Component {
  
  render () {
    const { allApartments } = this.props
    return (
      <React.Fragment>
        {allApartments}
      </React.Fragment>
    )
  }
}

