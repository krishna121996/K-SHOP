import React from 'react'
import './Sidebar.css'
import {assets} from '../../assets/assets';
import { NavLink } from 'react-router-dom';
 

const sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebar-options'>
            <NavLink to={'/add'} className='sidebar-option'>
               <img className='sidebar-logo' src={assets.add} alt=''/>
               <p className='title'>Add Items</p>
            </NavLink>
            <NavLink to={'/list'} className='sidebar-option'>
               <img className='sidebar-logo' src={assets.list} alt=''/>
               <p className='title'>List Items</p>
            </NavLink>
            <NavLink to={'/orders'} className='sidebar-option'>
               <img className='sidebar-logo' src={assets.order} alt=''/>
               <p className='title'>Orders</p>
            </NavLink>
        </div>
    </div>
  )
}

export default sidebar