import './Checkout.css'
import { amount } from '../../utils/amount'
import { useNavigate } from 'react-router-dom'
import api from '../../lib/api'

const PaymentSummary=({paymentSummery,loadCart})=>{
const navigate=useNavigate();

  const createOrder=async ()=>{
   await api.post('/api/orders')
   await loadCart()
   navigate('/orders')
  }
  return (
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

                <button className="place-order-button button-primary" onClick={()=>createOrder()}>
                  Place your order
                </button>
              </>
            )}

          </div>
  )
}
export default PaymentSummary