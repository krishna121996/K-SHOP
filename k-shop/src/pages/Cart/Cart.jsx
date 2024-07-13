import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { food_list } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import './Cart.css'

const Cart = () => {

  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext)
  const navigate = useNavigate();
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <img src={url+"images/"+item.image} alt=''></img>
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className='cart-cross'>x</p>
                </div>
                <hr />
              </div>
            )
          }
        })}
      </div>
      <div className='cart-bottom'> 
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
          <button onClick={()=> navigate('/order')}>PROCCED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have promo code, Enter it here.</p>
            <div className='cart-promocode-input'>
              <input type='text' placeholder='promo code'></input>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart