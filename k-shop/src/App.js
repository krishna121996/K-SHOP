import React from 'react'
import { useState } from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'
import Placeorder from './pages/PlaceOrder/Placeorder'
import LoginPopup from './components/LoginPopup/LoginPopup'

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    // App changes changhes
    <>
    {showLogin ? <LoginPopup setShowLogin={setShowLogin}/> : <></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<Placeorder/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App