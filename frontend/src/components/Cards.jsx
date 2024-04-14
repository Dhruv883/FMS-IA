import '../styles/AllMoviesPage.css'
import image1 from '../assets/img1.jpg'
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
            <img src={image1} alt='movie' />
          </div>
          <div className='title'>{props.title}</div>
          <div className='bookNow'>
            <button onClick={handleOnClick}>Book Now!</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
