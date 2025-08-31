import './Homepage.css'
import axios from 'axios';
import { amount } from '../../utils/amount';
import { useRef, useState } from 'react';
import addedtocartMsg from '../../utils/addedtocart';
function Product({ products, loadCart }) {
  const [quantity, setQuality] = useState(1);
  const buttonRef=useRef(null)
  const updateQuantity = async () => {

    await axios.post('/api/cart-items', {
      productId: products.id,
      quantity: quantity

    });
    await loadCart()
  }

  function setProductQuantity(event) {
    const quantitySelected = Number(event.target.value);
    setQuality(quantitySelected);
  }

  return (
    <>
      <div className="product-container">
        <div className="product-image-container">
          <img className="product-image"
            src={products.image} />
        </div>

        <div className="product-name limit-text-to-2-lines">
          {products.name}
        </div>

        <div className="product-rating-container">
          <img className="product-rating-stars"
            src={`/images/ratings/rating-${products.rating.stars * 10}.png`} />
          <div className="product-rating-count link-primary">
            {products.rating.count}
          </div>
        </div>

        <div className="product-price">
          {amount(products.priceCents)}
        </div>

        <div className="product-quantity-container">
          <select value={quantity} onChange={setProductQuantity}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        <div className="product-spacer"></div>

        <div className="added-to-cart">
          <img src={'/images/icons/checkmark.png'} />
          Added
        </div>

        <button ref={buttonRef} className="add-to-cart-button button-primary" onClick={async()=>{
         
         await updateQuantity();
          addedtocartMsg(buttonRef.current)
        }}>
          Add to Cart
        </button>
      </div>
    </>
  )
}
export default Product