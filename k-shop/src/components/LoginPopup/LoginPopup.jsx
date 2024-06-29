import React from 'react'
import { useState } from 'react'
import { assets } from '../../assets/assets';
import './LoginPopup.css'

const LoginPopup = ({setShowLogin}) => {
  const [currState, setCurrState] = useState("Login");
  return (
    <div className="login-popup">
        <form action="" className="login-pup-container">
          <div className="login-pupup-title">
            <h2>{currState}</h2>
            <img alt='' onClick={() => setShowLogin(false)} src={assets.cross_icon}></img>
          </div>
          <div className="login-popup-inputs">
            {currState === "Login" ? <></> : <input type="text" placeholder='Your name' required className="" />}
            <input type="email" placeholder='Your email' required/>
            <input type="password" placeholder='Password' required />
          </div>
          <button>{currState === "Sign Up" ? "Create account" : "Login"}</button>
          <div className="login-pupip-container">
            <input type="checkbox" required/>
            <p>By continuing, I agree to the terms of use and privacy policy.</p>
          </div>
          {currState === "Login"
          ? <p>Create a new account ? <span onClick={() => setCurrState("Sign Up")}>Click Here</span></p>:
          <p>Already have an account ? <span onClick={() => setCurrState("Login")}>Login Here</span></p>}
        </form>
    </div>
  )
}

export default LoginPopup