import React, { useEffect, useState } from 'react'
'use client'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = ({ cart = [] }) => {
  const [search, setSearch] = useState('')
  let totalquantity = 0;
  cart.forEach((cartitem) => {
    totalquantity += cartitem.quantity;

  })
  function navbartext(e) {
    setSearch(e.target.value)
  }
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  useEffect(() => {
    const searchparam = searchParams.get('search') || ''
    setSearch(searchparam)
  },[])

function handleSearch(e){
            e.preventDefault();
          navigate(`/?search=${search}`); 
          setSearch('');
           }


  return (
    <>
      <div className="header">
        <div className="left-section">
          <NavLink to="/" className="header-link">
            <p className='logowithname'><img className="logo"
              src={'/images/mobile-logo-white.png'} />SuhailUllaKhan</p>

            <img className="mobile-logo"
              src={'/images/mobile-logo-white.png'} />
          </NavLink>
        </div>


        <div className="middle-section">

          <input className="search-bar" type="text" placeholder="Search" value={search} onChange={navbartext} />


          <button className="search-button " onClick={handleSearch}>
          <img className="search-icon" src={"/images/icons/search-icon.png"} />
        </button>



      </div>


      <div className="right-section">
        <NavLink className="orders-link header-link" to="/orders">

          <span className="orders-text">Orders</span>
        </NavLink>

        <NavLink className="cart-link header-link" to="/checkout">
          <img className="cart-icon" src={"/images/icons/cart-icon.png"} />
          <div className="cart-quantity">{totalquantity}</div>
          <div className="cart-text">Cart</div>
        </NavLink>
      </div>
    </div >
    </>
  )
}

export default Header