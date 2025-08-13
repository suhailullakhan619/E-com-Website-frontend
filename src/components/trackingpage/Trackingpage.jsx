




import React from 'react'
import './header.css'
import './tracking.css'
import mobilelogwhite from '../../assets/mobile-logo-white.png'


// icons
import searchicon from "../../assets/icons/search-icon.png"
import cartIcon from "../../assets/icons/cart-icon.png"


import scoks6pair from "../../assets/products/athletic-cotton-socks-6-pairs.jpg"
import Header from '../header/Header'

const Trackingpage = () => {
  return (
    <>
    <title>Order Tracking</title>
     <Header/>

    <div className="tracking-page">
      <div className="order-tracking">
        <a className="back-to-orders-link link-primary" href="orders">
          View all orders
        </a>

        <div className="delivery-date">
          Arriving on Monday, June 13
        </div>

        <div className="product-info">
          Black and Gray Athletic Cotton Socks - 6 Pairs
        </div>

        <div className="product-info">
          Quantity: 1
        </div>

        <img className="product-image" src={scoks6pair} />

        <div className="progress-labels-container">
          <div className="progress-label">
            Preparing
          </div>
          <div className="progress-label current-status">
            Shipped
          </div>
          <div className="progress-label">
            Delivered
          </div>
        </div>

        <div className="progress-bar-container">
          <div className="progress-bar"></div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Trackingpage