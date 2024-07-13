import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';
import './Navbar.css'
const Navbar = ({setShowLogin}) => {

  const [menu,setMenu] = useState('Home');
  const { getTotalCartAmount } = useContext(StoreContext)
  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className='logo' /></Link>
      <ul className='navbar-menu'>
        <Link to='/' onClick={()=> setMenu('Home')} className={menu === 'Home' ? 'active' : ''}>Home</Link>
        <a href='#explore-menu' onClick={()=> setMenu('Menu')} className={menu === 'Menu' ? 'active' : ''}>Menu</a>
        <a href='#app-download' onClick={()=> setMenu('Mobile app')} className={menu === 'Mobile app' ? 'active' : ''}>Mobile app</a>
        <a href='#footer' onClick={()=> setMenu('Contact us')} className={menu === 'Contact us' ? 'active' : ''}>Contact us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt='' />
        <div className='navbar-search-icon'>
          <Link to='/cart'><img src={assets.basket_icon} alt='' />
          <div className={getTotalCartAmount() === 0 ? '' : 'dot'}></div></Link>
        </div>
        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
    </div>
  )
}

export default Navbar