import './Checkout.css'
import { Link } from 'react-router-dom'

const CheckoutHeader = ({cart}) => {
let totalquantity=0;
cart.map((cartItems)=>{
  totalquantity+=cartItems.quantity;
})
  return (
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
            to="/">{totalquantity} items</Link>)
        </div>

        <div className="checkout-header-right-section">
          <img src={'/images/icons/checkout-lock-icon.png'} />
        </div>
      </div>
    </div>
  )
}
export default CheckoutHeader