import './Checkout.css'
import { amount } from '../../utils/amount';
import dayjs from 'dayjs';
import api from '../../lib/api';

const DeliveryOptions = ({deliveryOption,cartitem,loadCart}) => {

  return (
    <div className="delivery-options">
      <div className="delivery-options-title">
        Choose a delivery option:
      </div>
      {deliveryOption.map((option) => {
        let priceString = 'Free shipping'
        if (option.priceCents > 0) {
          priceString = `${amount(option.priceCents)}-shipping`;
        }
        const updateDeliveryoptions= async()=>{
         await api.put(`/api/cart-items/${cartitem.productId}`,{
        deliveryOptionId: option.id
       })
        await loadCart()
        }
       
        return (
          <div key={option.id} className="delivery-option" onClick={updateDeliveryoptions}>
            <input type="radio"
              checked={option.id == cartitem.deliveryOptionId}
              onChange={()=>{}}
              className="delivery-option-input"
              name={`delivery-option-${cartitem.productId}`}
               />
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
  );

}
export default DeliveryOptions