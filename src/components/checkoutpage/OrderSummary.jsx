import './Checkout.css'
import dayjs from 'dayjs'
import { amount } from '../../utils/amount'
import DeliveryOptions from './DeliveryOptions'
import api from '../../lib/api'

const OrderSummary = ({ cart, deliveryOption, loadCart }) => {



  return (
    <div className="order-summary">
      {deliveryOption.length > 0 && cart.map((cartitem) => {
        const selectDeliveryOption = deliveryOption.find((deliveryOption) => {
          return deliveryOption.id === cartitem.deliveryOptionId;
        })
         {/* {cart.length === 0 && <p>Your cart is empty</p>}

       {cart.map((cartitem) => {
    const selectDeliveryOption = deliveryOption.find(
      (opt) => opt.id === cartitem.deliveryOptionId
    ); */}

        const deleteQuantity=async()=> {
         await api.delete(`/api/cart-items/${cartitem.id}`)
         await loadCart()
        }

        const updateQuantity=async (newQuantity)=>{
          await api.put(`/api/cart-items/${cartitem.id}`,{
            quantity:newQuantity,
          });
          await loadCart()
        }

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
                    <span className="update-quantity-link link-primary" onClick={()=>updateQuantity(cartitem.quantity+1)}>
                      Update
                    </span>
                    <span className="delete-quantity-link link-primary" onClick={deleteQuantity}>
                      Delete
                    </span>
                  </div>
                </div>

                <DeliveryOptions cartitem={cartitem} deliveryOption={deliveryOption} loadCart={loadCart} />

              </div>
            </div>
          </>
        )

      })}

    </div>
  )
}
export default OrderSummary