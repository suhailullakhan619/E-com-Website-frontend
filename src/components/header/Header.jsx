import React from 'react'
import mobilelogwhite from '/images/mobile-logo-white.png'


// icons
import searchicon from "/images/icons/search-icon.png"
import cartIcon from "/images/icons/cart-icon.png"
import { Link, NavLink } from 'react-router'
import './Header.css'
const Header = () => {
  return (
    <>
     <div className="header">
      <div className="left-section">
        <NavLink to="/" className="header-link">
          <p className='logowithname'><img className="logo"
            src= {mobilelogwhite}/>SuhailUllaKhan</p>
          
          <img className="mobile-logo"
            src={mobilelogwhite} />
        </NavLink>
      </div>

      <div className="middle-section">
        <input className="search-bar" type="text" placeholder="Search" />

         <Link to='*'>
        <button className="search-button">
          <img className="search-icon" src={searchicon} />
        </button>
        </Link>
      </div>

      <div className="right-section">
        <NavLink className="orders-link header-link" to="/orders">

          <span className="orders-text">Orders</span>
        </NavLink>

        <NavLink className="cart-link header-link" to="/checkout">
          <img className="cart-icon" src={cartIcon} />
          <div className="cart-quantity">3</div>
          <div className="cart-text">Cart</div>
        </NavLink>
      </div>
    </div>
    </>
  )
}

export default Header