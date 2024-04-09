import React from 'react'
import { Button } from '@nextui-org/react'
import '../styles/SeatConfirm.css'

const SeatConfirm = () => {
  const handleBtnClick = () => {
    window.location.href = '/payment-page'
  }
  return (
    <>
      <div className='navbar'>Navbar</div>
      <div className='summary-window'>
        <div className='summary'>
          <div className='movie-name'>Name: </div>
          <div className='seats'>Seats: </div>
          <div className='total-amount' style={{ paddingBottom: '50px' }}>
            Amount:{' '}
          </div>
          <Button shadow color='primary' size='lg' onClick={handleBtnClick}>
            Confirm Payment
          </Button>
        </div>
        <div className='vertical'></div>
        <div className='payment-invoice'>payment</div>
      </div>
    </>
  )
}

export default SeatConfirm
