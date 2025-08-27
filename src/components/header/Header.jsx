import React from 'react'
'use client'
// icons
import { Link, NavLink } from 'react-router-dom'
import './Header.css'

const Header = ({cart=[]}) => {
let totalquantity =0;
cart.forEach((cartitem)=>{
  totalquantity+=cartitem.quantity;
})

  return (
    <>
     <div className="header">
      <div className="left-section">
        <NavLink to="/" className="header-link">
          <p className='logowithname'><img className="logo"
            src= {'/images/mobile-logo-white.png'}/>SuhailUllaKhan</p>
          
          <img className="mobile-logo"
            src={'/images/mobile-logo-white.png'} />
        </NavLink>
      </div>

      <div className="middle-section">
        <input className="search-bar" type="text" placeholder="Search" />

         <Link to='*'>
        <button className="search-button">
          <img className="search-icon" src={"/images/icons/search-icon.png"} />
        </button>
        </Link>
      </div>

      <div className="right-section">
        <NavLink className="orders-link header-link" to="/orders">

          <span className="orders-text">Orders</span>
        </NavLink>

        <NavLink className="cart-link header-link" to="/checkout">
          <img className="cart-icon" src={ "/images/icons/cart-icon.png"} />
          <div className="cart-quantity">{totalquantity}</div>
          <div className="cart-text">Cart</div>
        </NavLink>
      </div>
    </div>
    </>
  )
}

export default Header