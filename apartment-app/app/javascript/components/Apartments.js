import React from "react"
import PropTypes from "prop-types"

export default class Apartments extends React.Component {
  
  componentDidMount = () => {
    this.props.componentDidMount()
  }
  
  render () {
    const { apartments } = this.props
    const allApartments = () => { 
      return apartments.map(apartment => {
        return (
          <div key={apartment.id}>
            <p>{apartment.street_1}</p>
            <p>{apartment.street_2}</p>
            <p>{apartment.city}</p>
            <p>{apartment.postal_code}</p>
            <p>{apartment.state}</p>
            <p>{apartment.country}</p>
            <hr/>
            <br/>
          </div>
        )
      })
    }
    return (
      <React.Fragment>
        {allApartments()}
      </React.Fragment>
    )
  }
}

