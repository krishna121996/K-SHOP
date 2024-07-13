import React from 'react'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import './Placeorder.css'

const Placeorder = () => {
  const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <form className='place-order'>
<div className='place-order-left'>
  <p className="title">
    Delivery Information
  </p>
  <div className="multi-fields">
    <input type="text" placeholder='First Name' />
    <input type="text" placeholder='Last Name' />
  </div>
  <input type="email" placeholder='Email address' />
  <input type="email" placeholder='Street' />
  <div className="multi-fields">
    <input type="text" placeholder='City' />
    <input type="text" placeholder='State' />
  </div>
  <div className="multi-fields">
    <input type="text" placeholder='Zip code' />
    <input type="text" placeholder='Country' />
  </div>
  <input type="text" placeholder='Phone' />
</div>
<div className="place-order-right">
<div className="cart-total">
          <h2>Cart Totals</h2>
          <div className='cart-total-details'>
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className='cart-total-details'>
            <p>Delivery Fee</p>
            <p>${2}</p>
          </div>
          <hr />
          <div className='cart-total-details'>
            <p>Total</p>
            <p>${getTotalCartAmount() + 2}</p>
          </div>
          <button>PROCCED TO PAYMENT</button>
        </div>
</div>
    </form>
  )
}

export default Placeorder