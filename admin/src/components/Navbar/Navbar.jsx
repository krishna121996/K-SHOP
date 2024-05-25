import React from 'react'
import {assets} from '../../assets/assets';
import './Navbar.css';
const navbar = () => {
  return (
    <div className='navbar'>
        <img className='logo' src={assets.logo} alt=''/>
        <img className='profile-pic' src={assets.profilepic} alt=''/>
    </div>
  )
}

export default navbar