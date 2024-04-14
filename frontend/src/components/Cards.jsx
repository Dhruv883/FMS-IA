import React from 'react'
import '../styles/AllMoviesPage.css'
import { Input, Button } from '@nextui-org/react'
import { useNavigate } from 'react-router-dom'

const Cards = props => {
  const navigate = useNavigate()
  const handleOnClick = () => {
    navigate(`/booking`, { state: { title: props.title } })
  }
  return (
    <div>
      <div className='cards'>
        <div className='movieCard'>
          <div className='image'>
            <img src={props.poster} alt='movie' />
          </div>
          <div className='title'>{props.title}</div>
          <div className='bookNow'>
            <Button
              type='button'
              color='primary'
              className='submitbtn text-lg'
              radius='lg'
              variant='solid'
              onClick={handleOnClick}
            >
              Book Now!
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
