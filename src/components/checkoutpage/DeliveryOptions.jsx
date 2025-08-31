import './Checkout.css'
import { amount } from '../../utils/amount';
import dayjs from 'dayjs';

const DeliveryOptions = ({deliveryOption,cartitem}) => {

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
        return (
          <div key={option.id} className="delivery-option">
            <input type="radio"
              checked={option.id === cartitem.deliveryOptionId}
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
  );

}
export default DeliveryOptions