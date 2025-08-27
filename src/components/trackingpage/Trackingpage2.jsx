

import React from 'react'
import './tracking.css'


import Header from '../header/Header'
import { Link } from 'react-router-dom'

const Trackingpage2 = () => {
  return (
    <>
    <title>Order Tracking</title>
     <Header/>

    <div className="tracking-page">
      <div className="order-tracking">
        <Link className="back-to-orders-link link-primary" to="/orders">
          View all orders
        </Link>

        <div className="delivery-date">
          Arriving on Monday, June 18
        </div>

        <div className="product-info">
           Adults Plain Cotton T-Shirt - 2 Pack
        </div>

        <div className="product-info">
          Quantity: 1
        </div>

        <img className="product-image" src={"/images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg"} />

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

export default Trackingpage2