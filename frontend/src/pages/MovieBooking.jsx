import { useState, useEffect } from 'react'
import '../styles/MovieBookingPage.css'
import { Button } from '@nextui-org/react'
import SeatSelectionModal from '../components/SeatSelectionModal.jsx'

const MovieBooking = () => {
  const selectedMovie = 'Shinchan'
  const [showModal, setShowModal] = useState(false)
  const [seats, setSeats] = useState(
    Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => false))
  )

  const [bookedSeats, setBookedSeats] = useState(() => {
    const storedSeats = localStorage.getItem('bookedSeats')
    return storedSeats
      ? JSON.parse(storedSeats)
      : [
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
  })

  useEffect(() => {
    localStorage.setItem('bookedSeats', JSON.stringify(bookedSeats))
  }, [bookedSeats])

  const price = 20

  const calculatePrice = () => {
    const selectedSeatsCount = seats.reduce((total, row) => {
      return total + row.filter(seat => seat).length
    }, 0)
    return selectedSeatsCount * price
  }

  const toggleModal = () => {
    const anySeatSelected = seats.some(row => row.some(seat => seat))
    if (anySeatSelected) {
      setShowModal(!showModal)
    } else {
      alert('Please select at least one seat.')
    }
  }

  const getSelectedSeatIds = () => {
    return seats
      .flatMap((row, rowIndex) =>
        row.map(
          (seat, colIndex) =>
            seat && String.fromCharCode(rowIndex + 65) + (colIndex + 1)
        )
      )
      .filter(Boolean)
  }

  const handleSeatClick = (rowIndex, colIndex) => {
    if (!bookedSeats[rowIndex][colIndex]) {
      const newSeats = [...seats]
      newSeats[rowIndex][colIndex] = !newSeats[rowIndex][colIndex]
      setSeats(newSeats)
    }
  }

  const handleBookNow = () => {
    // Update booked seats
    const updatedSeats = seats.map((row, rowIndex) =>
      row.map((seat, colIndex) =>
        seat ? true : bookedSeats[rowIndex][colIndex]
      )
    )
    setBookedSeats(updatedSeats)
    setShowModal(false)
    setSeats(
      Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => false))
    )
    alert('Seats booked successfully!')
  }

  return (
    <>
      <SeatSelectionModal
        showModal={showModal}
        toggleModal={toggleModal}
        seats={seats}
        getSelectedSeatIds={getSelectedSeatIds}
        handleBookNow={handleBookNow}
      />
      <div className='container pt-32'>
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
              <Button shadow color='primary' size='lg' onClick={toggleModal}>
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
