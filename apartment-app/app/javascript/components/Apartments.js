import React from "react"
import PropTypes from "prop-types"

export default class Apartments extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: []
    }
  }
  
  
  componentDidMount = () => {
    const { apartments } = this.state
    fetch('/apartments.json')
      .then(response => { return response.json() })
      .then(data => { this.setState({ apartments: data })})
  }
  
  render () {
    const { apartments } = this.state
    const allApartments = apartments.map(apartment => {
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
    return (
      <React.Fragment>
        {allApartments}
      </React.Fragment>
    )
  }
}

