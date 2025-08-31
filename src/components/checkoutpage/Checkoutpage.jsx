
import './Checkout.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import CheckoutHeader from './CheckoutHeader'
import OrderSummary from './OrderSummary'
import PaymentSummary from './PaymentSummary'



function Checkoutpage({ cart, loadCart }) {
  const [deliveryOption, setDeliveryoption] = useState([])
  const [paymentSummery, setPaymentSummery] = useState(null)

  useEffect(() => {
    const getCheckoutData = async () => {
      try {
        const deliveryResponse = await axios.get('http://localhost:3000/api/delivery-options?expand=estimatedDeliveryTime')
        setDeliveryoption(deliveryResponse.data)
      }
      catch (err) {
        console.log('something went wrong', err)
      }
    }
    getCheckoutData()
  }, [])

  useEffect(() => {
    const updatePaymentsummary = async () => {
      try {
        const paymentResponse = await axios.get('http://localhost:3000/api/payment-summary')
        setPaymentSummery(paymentResponse.data)
      }
      catch (err) {
        console.log('something went wrong', err)
      }
    }
    updatePaymentsummary()
  }, [cart])

  return (
    <>
      <title>Checkout</title>
      <link rel="icon" type="image/svg+xml" href="cart-favicon.png" />

      <CheckoutHeader cart={cart} />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary cart={cart} deliveryOption={deliveryOption} loadCart={loadCart} />

          <PaymentSummary paymentSummery={paymentSummery} />
        </div>
      </div>
    </>
  )
}

export default Checkoutpage