import React, { useState } from 'react'
import '../styles/MovieBookingPage.css'
import { Input, Button } from '@nextui-org/react'

export const MovieBooking = () => {
  const [date, setDate] = useState()
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [seats, setSeats] = useState([])

  return (
    <>
      <div className='navbar'>Navbar</div>
      <div className='container'>
        <div className='info-title'>
          <div className='name-date'>
            <div className='name'>
              <div className='name-field'>Movie Name</div>
              <div className='movie-name'>Movie Name</div>
            </div>
            <div className='movie-date'>
              <Input label='Date' type='date' />
            </div>
          </div>
          <div className='book-btn'>
            <Button shadow color='primary' size='lg'>
              Book Now
            </Button>
          </div>
        </div>
        <div className='seating'>
          <div className='seats-grid'>Seats</div>
          <div className='screen'>Screen</div>
        </div>
      </div>
    </>
  )
}
