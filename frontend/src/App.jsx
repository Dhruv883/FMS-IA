// import React from "react";
import Test from './pages/Test'
import { SignUp } from './pages/SignUp'
import { SignIn } from './pages/SignIn'
import { MovieDetail } from './pages/MovieDetail'
import { Routes, Route } from 'react-router-dom'
import MovieBooking from './pages/MovieBooking'
import SeatConfirm from './pages/SeatConfirm'
import PaymentPage from './pages/PaymentPage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/test' element={<Test />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/movie/:id' element={<MovieDetail />} />
        <Route path='/booking' element={<MovieBooking />} />
        <Route path='/confirm-seat' element={<SeatConfirm />} />
        <Route path='/payment-page' element={<PaymentPage />} />
      </Routes>
    </div>
  )
}

export default App
