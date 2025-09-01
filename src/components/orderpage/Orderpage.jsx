'use client'
import './Orderpage.css'


// product image and rating
import Header from '../header/Header'
import { Link } from 'react-router-dom'
import { Fragment, useEffect } from 'react'
import dayjs from 'dayjs'
import { amount } from '../../utils/amount'
import api from '../../lib/api'
import { useState } from 'react'
function Orderpage({ cart, loadCart }) {
  const [order, setOrders] = useState([])

  useEffect(() => {
    const getOrders = async () => {
      try {
        const ordersResponse = await api.get('/api/orders?expand=products')
        setOrders(ordersResponse.data)
      }
      catch (err) { console.log('Something wentWrong', err) }
    }
    getOrders()
  }, [])




  return (
    <>

      <title>Orders</title>
      <link rel="icon" type="image/svg+xml" href="orders-favicon.png" />

      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <div className="orders-grid">
          {order.map((orders) => {

            return (
              <>
                <div key={orders.id} className="order-container">

                  <div className="order-header">
                    <div className="order-header-left-section">
                      <div className="order-date">
                        <div className="order-header-label">Order Placed:</div>
                        <div>{dayjs(orders.orderTimesMs).format('MMMM D')}</div>
                      </div>
                      <div className="order-total">
                        <div className="order-header-label">Total:</div>
                        <div>{amount(orders.totalCostCents)}</div>
                      </div>
                    </div>

                    <div className="order-header-right-section">
                      <div className="order-header-label">Order ID:</div>
                      <div>{orders.id}</div>
                    </div>
                  </div>

                  <div className="order-details-grid">
                    {orders.products.map((orderproduct) => {
                      const ordersAddtocart = async () => {
                        await api.post(`/api/cart-items`,{
                          productId:orderproduct.product.id,
                          quantity:1
                        })
                        await loadCart()
                      }
                      return (
                        <Fragment key={orderproduct.product.id}>
                          <div className="product-image-container">
                            <img src={orderproduct.product.image} />
                          </div>

                          <div className="product-details">
                            <div className="product-name">
                              {orderproduct.product.name}
                            </div>
                            <div className="product-delivery-date">
                              Arriving on:{dayjs(orderproduct.product.estimatedDeliveryTimeMs).format('MMMM D')}
                            </div>
                            <div className="product-quantity">
                              Quantity: {orderproduct.quantity}
                            </div>
                            <button className="buy-again-button button-primary" onClick={ordersAddtocart}>
                              <img className="buy-again-icon" src={'/images/icons/buy-again.png'} />
                              <span className="buy-again-message" >Add to Cart</span>
                            </button>
                          </div>

                          <div className="product-actions">
                            <Link to={`/tracking/${orders.id}/${orderproduct.productId}`}>
                              <button className="track-package-button button-secondary">
                                Track package
                              </button>
                            </Link>
                          </div>
                        </Fragment>
                      )
                    })}
                  </div>
                </div>
              </>
            )
          })}

        </div>
      </div>


    </>
  )
}
export default Orderpage