import React, { useState } from 'react'
import '../styles/MovieBookingPage.css'
import { Button } from '@nextui-org/react'

const MovieBooking = () => {
  const selectedMovie = 'Shinchan'
  const [seats, setSeats] = useState(
    Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => false))
  )

  const bookedSeats = [
    [false, false, false, false, true, false, false, false, false],
    [false, false, true, false, true, false, false, false, false],
    [false, false, false, false, false, false, false, false, false],
    [false, false, true, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, true, true],
    [false, false, false, false, false, false, true, true, false],
    [false, false, false, false, false, false, false, true, true],
    [false, false, false, false, false, false, false, false, false]
  ]

  const price = 20

  const calculatePrice = () => {
    const selectedSeatsCount = seats.reduce((total, row) => {
      return total + row.filter(seat => seat).length
    }, 0)
    return selectedSeatsCount * price
  }

  const handleSeatClick = (rowIndex, colIndex) => {
    if (!bookedSeats[rowIndex][colIndex]) {
      const newSeats = [...seats]
      newSeats[rowIndex][colIndex] = !newSeats[rowIndex][colIndex]
      setSeats(newSeats)
    }
  }

  return (
    <>
      <div className='navbar'>Navbar</div>
      <div className='container'>
        <div className='info-title'>
          <div className='name-date'>
            <div className='name'>
              <div style={{ minHeight: '13px' }}></div>
              <div className='name-field'>Movie Name</div>
              <div className='movie-name'>{selectedMovie}</div>
            </div>
          </div>
          <div className='book-btn'>
            <div className='button-container'>
              <Button
                shadow
                color='primary'
                size='lg'
                onClick={() => (window.location.href = '/confirm-seat')}
              >
                Book Now
              </Button>
              <div className='price'>${calculatePrice()}</div>
            </div>
          </div>
        </div>
        <div className='seating'>
          <div className='seats-grid'>
            {seats.map((row, rowIndex) => (
              <ul key={rowIndex} className='row'>
                {row.map((seat, colIndex) => {
                  const seatId =
                    String.fromCharCode(rowIndex + 65) + (colIndex + 1)
                  return (
                    <li
                      key={colIndex}
                      className={`seat ${seat ? 'selected' : ''} ${
                        bookedSeats[rowIndex][colIndex] ? 'booked' : ''
                      }`}
                      id={seatId}
                      onClick={() => handleSeatClick(rowIndex, colIndex)}
                    >
                      {seatId}
                    </li>
                  )
                })}
              </ul>
            ))}
          </div>
          <div className='screen'>Screen</div>
        </div>
      </div>
    </>
  )
}

export default MovieBooking
