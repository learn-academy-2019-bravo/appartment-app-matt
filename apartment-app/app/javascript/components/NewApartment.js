import React from "react"
import PropTypes from "prop-types"
import { Redirect } from 'react-router-dom'
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

export default class NewApartment extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      form: {
        street_1: '',
        street_2: '',
        city: '',
        postal_code: '',
        state: '',
        country: ''
      },
      success: false,
    }
  }
  
  handleChange = event => {
    const { form } = this.state
    form[event.target.name] = event.target.value
    this.setState({ form })
  }
  
  handleNewApartment = () => {
    const { success } = this.state
    const { handleNewApartment } = this.props
    handleNewApartment(this.state.form)
    let redirect = success === false ? true : false
    this.setState({ success: redirect })
  }
  
  render () {
    const {
      street_1,
      street_2,
      city,
      postal_code,
      state,
      country
    } = this.state
    return (
      <React.Fragment>
        <Form>
          <FormGroup>
            <Label for="street_1">Street 1</Label>
            <Input
              type="text"
              name="street_1"
              onChange={this.handleChange}
              value={street_1}
              id="street_1"
            />
          </FormGroup>
          <FormGroup>
            <Label for="street_2">Street 2</Label>
            <Input
              type="text"
              name="street_2"
              onChange={this.handleChange}
              value={street_2}
              id="street_2"
            />
          </FormGroup>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="city">City</Label>
                <Input
                  type="text"
                  name="city"
                  onChange={this.handleChange}
                  value={city}
                  id="city"
                />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="postal_code">Zip</Label>
                <Input
                  type="text"
                  name="postal_code"
                  onChange={this.handleChange}
                  value={postal_code}
                  id="postal_code"
                />
              </FormGroup>  
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="state">State</Label>
                <Input
                  type="text"
                  name="state"
                  onChange={this.handleChange}
                  value={state}
                  id="state"
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="country">Country</Label>
                <Input
                  type="text"
                  name="country"
                  onChange={this.handleChange}
                  value={country}
                  id="country"
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup check>
            <Input type="checkbox" name="check" id="exampleCheck"/>
            <Label for="exampleCheck" check>Check me out</Label>
          </FormGroup>
          <Button onClick={ this.handleNewApartment }>Register Apartment</Button>
        </Form>
        {this.state.success && <Redirect to='/apartments' />}
      </React.Fragment>
    )
  }
}
