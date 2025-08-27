
import './Checkout.css'
import { Link } from 'react-router-dom'
import Pagenotfound from '../pagenotfound/Pagenotfound'
import { amount } from '../../utils/amount'
import axios from 'axios'
import { useState, useEffect } from 'react'
import dayjs from 'dayjs'



function Checkoutpage({ cart }) {
  const [deliveryOption, setDeliveryoption] = useState([])
  const [paymentSummery,setPaymentSummery]=useState(null)

  useEffect(() => {
    axios.get('http://localhost:3000/api/delivery-options?expand=estimatedDeliveryTime')
      .then((res) => setDeliveryoption(res.data))
      .catch((err) => console.log('something went wrong', err))
      axios.get('http://localhost:3000/api/payment-summary')
      .then((res)=>setPaymentSummery(res.data))
      .catch((err)=>console.log('something wentWrong',err))
  }, [])

  return (
    <>
      <title>Checkout</title>
      <link rel="icon" type="image/svg+xml" href="cart-favicon.png" />

      <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <Link to="/" style={{ textDecoration: 'none' }}>
              <p className='logowithname'>
                <img className="logo" src={'/images/mobile-logo.png'} />SuhailUllaKhan</p>
              <img className="mobile-logo" src={'/images/mobile-logo.png'} />
            </Link>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (<Link className="return-to-home-link"
              to="/">3 items</Link>)
          </div>

          <div className="checkout-header-right-section">
            <img src={'/images/icons/checkout-lock-icon.png'} />
          </div>
        </div>
      </div>

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <div className="order-summary">
            { deliveryOption.length>0 && cart.map((cartitem) => {
              const selectDeliveryOption=deliveryOption.find((deliveryOption)=>{
                return deliveryOption.id===cartitem.deliveryOptionId;
              })

              return (
                <>
                  <div key={cartitem.productId} className="cart-item-container">
                    <div className="delivery-date">
                      Delivery date: {dayjs(selectDeliveryOption.estimatedDeliveryTimeMs).format('dddd MMMM D')}
                    </div>

                    <div className="cart-item-details-grid">
                      <img className="product-image"
                        src={cartitem.product.image} />

                      <div className="cart-item-details">
                        <div className="product-name">
                          {cartitem.product.name}
                        </div>
                        <div className="product-price">
                          {amount(cartitem.product.priceCents)}
                        </div>
                        <div className="product-quantity">
                          <span>
                            Quantity: <span className="quantity-label">{cartitem.quantity}</span>
                          </span>
                          <span className="update-quantity-link link-primary">
                            Update
                          </span>
                          <span className="delete-quantity-link link-primary">
                            Delete
                          </span>
                        </div>
                      </div>

                      <div className="delivery-options">
                        <div className="delivery-options-title">
                          Choose a delivery option:
                        </div>
                        {deliveryOption.map((option) => {
                          let priceString='Free shipping'
                          if(option.priceCents>0){
                            priceString=`${amount(option.priceCents)}-shipping`;
                          }
                          return (
                            <div key={option.id} className="delivery-option">
                              <input type="radio" 
                              checked={option.id===cartitem.deliveryOptionId}
                                className="delivery-option-input"
                                name={`delivery-option-${cartitem.productId}`} />
                              <div>
                                <div className="delivery-option-date">
                                  {dayjs(option.estimatedDeliveryTimeMs).format('dddd ,MMMM, D')}
                                </div>
                                <div className="delivery-option-price">
                                  {priceString}
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </>
              )

            })}
      
          </div>

          <div className="payment-summary">
            <div className="payment-summary-title">
              Payment Summary
            </div>
   {paymentSummery && (
    <>
    <div className="payment-summary-row">
              <div>Items ({paymentSummery.totalItems}):</div>
              <div className="payment-summary-money">{amount(paymentSummery.productCostCents)}</div>
            </div>

            <div className="payment-summary-row">
              <div>Shipping &amp; handling:</div>
              <div className="payment-summary-money">{amount(paymentSummery.shippingCostCents)}</div>
            </div>

            <div className="payment-summary-row subtotal-row">
              <div>Total before tax:</div>
              <div className="payment-summary-money">{amount(paymentSummery.totalCostBeforeTaxCents)}</div>
            </div>

            <div className="payment-summary-row">
              <div>Estimated tax (10%):</div>
              <div className="payment-summary-money">{amount(paymentSummery.taxCents)}</div>
            </div>

            <div className="payment-summary-row total-row">
              <div>Order total:</div>
              <div className="payment-summary-money">{amount(paymentSummery.totalCostCents)}</div>
            </div>

            <button className="place-order-button button-primary">
              Place your order
            </button>
    </>
   ) }
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Checkoutpage