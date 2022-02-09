// this component will hold all the necessary input fields to book a reservation
// and we still want to connect our interface to a component's state
// because we need a component's state, we are going to create this component
// as a Class

// Riccardo told me the properties I need to send:
// name <-- string
// phone <-- number/string
// numberOfPeople <-- number/string
// smoking <-- boolean
// dateTime <-- string
// specialRequests <-- string

import { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

class ReservationForm extends Component {
  state = {
    reservation: {
      name: '',
      phone: '',
      numberOfPeople: 1,
      smoking: false,
      dateTime: '',
      specialRequests: '',
    },
  }

  render() {
    return (
      <div className='mb-3'>
        <h2>Book your table here!</h2>
        <Form>
          <Form.Group>
            <Form.Label>Reservation name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter your name'
              value={this.state.reservation.name}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter your phone'
              value={this.state.reservation.phone}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>How many people?</Form.Label>
            <Form.Control
              as='select'
              value={this.state.reservation.numberOfPeople}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Check
              type='checkbox'
              label='Do you smoke'
              checked={this.state.reservation.smoking}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Date and time</Form.Label>
            <Form.Control
              type='datetime-local'
              value={this.state.reservation.dateTime}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Any special request?</Form.Label>
            <Form.Control
              as='textarea'
              rows={3}
              value={this.state.reservation.specialRequests}
            />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

export default ReservationForm
