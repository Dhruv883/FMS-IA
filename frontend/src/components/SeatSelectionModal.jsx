import React from 'react'

export default function SeatSelectionModal ({
  showModal,
  toggleModal,
  getSelectedSeatIds,
  handleBookNow
}) {
  const selectedSeatIds = getSelectedSeatIds()

  return (
    showModal && (
      <div className='modal'>
        <div className='modal-content'>
          <h2>Selected Seats</h2>
          <ul>
            {selectedSeatIds.map((seatId, index) => (
              <li key={index}>{seatId}</li>
            ))}
          </ul>
          <div className='modal-buttons'>
            <button onClick={handleBookNow} className='continue-btn'>
              Continue
            </button>
            <button onClick={toggleModal} className='cancel-btn'>
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  )
}
