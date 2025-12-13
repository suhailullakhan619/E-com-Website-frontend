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
         await api.delete(`/api/cart-items/${cartitem.productId}`)
         await loadCart()
        }

        const updateQuantity=async (newQuantity)=>{
          await api.put(`/api/cart-items/${cartitem.productId}`,{
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
                  <div className="product-quantity" style={{display:'flex',gap:'10px'}}>
                    <span>
                      Quantity: 
                    </span> 
                    <button style={{fontSize:'16px'}} onClick={()=>updateQuantity(cartitem.quantity+1)}>
                      &#43;
                    </button>
                    <span className="quantity-label">{cartitem.quantity}</span>
                    <button style={{fontSize:'16px'}}   onClick={()=>updateQuantity(cartitem.quantity-1)}>
                      &#8722;
                    </button>
                   
           
                    <button  style={{color:'black'}} onClick={deleteQuantity}>
                       Delete Item
                    </button>
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