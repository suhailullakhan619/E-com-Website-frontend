import './header.css'
import './Homepage.css'
// logo
import logowhite from '../../assets/logo-white.png'
import mobilelogwhite from '../../assets/mobile-logo-white.png'
import mobilelog from "../../assets/mobile-logo.png"
import SLogo from "../../assets/S letter.png"


// icons
import searchicon from "../../assets/icons/search-icon.png"
import cartIcon from "../../assets/icons/cart-icon.png"
import checkmarks from "../../assets/icons/checkmark.png"


// product image and rating

import scoks6pair from "../../assets/products/athletic-cotton-socks-6-pairs.jpg"
import scoksrating from "../../assets/ratings/rating-45.png"

import basketballimg from "../../assets/products/intermediate-composite-basketball.jpg"
import basketballrating from "../../assets/ratings/rating-40.png"

import planecottontshirt from "../../assets/products/adults-plain-cotton-tshirt-2-pack-teal.jpg"
import planecottontshirtrating from "../../assets/ratings/rating-45.png"


function Homepage(){

  return(
    <>
    <div class="header">
      <div class="left-section">
        <a href="index.html" class="header-link">
          <p className='logowithname'><img class="logo"
            src= {mobilelogwhite}/>SuhailUllaKhan</p>
          
          <img class="mobile-logo"
            src={mobilelogwhite} />
        </a>
      </div>

      <div class="middle-section">
        <input class="search-bar" type="text" placeholder="Search" />

        <button class="search-button">
          <img class="search-icon" src={searchicon} />
        </button>
      </div>

      <div class="right-section">
        <a class="orders-link header-link" href="orders.html">

          <span class="orders-text">Orders</span>
        </a>

        <a class="cart-link header-link" href="checkout.html">
          <img class="cart-icon" src={cartIcon} />
          <div class="cart-quantity">3</div>
          <div class="cart-text">Cart</div>
        </a>
      </div>
    </div>

    <div class="home-page">
      <div class="products-grid">
        <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src={scoks6pair} />
          </div>

          <div class="product-name limit-text-to-2-lines">
            Black and Gray Athletic Cotton Socks - 6 Pairs
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src={scoksrating} />
            <div class="product-rating-count link-primary">
              87
            </div>
          </div>

          <div class="product-price">
            $10.90
          </div>

          <div class="product-quantity-container">
            <select>
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

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src={checkmarks} />
            Added
          </div>

          <button class="add-to-cart-button button-primary">
            Add to Cart
          </button>
        </div>

        <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src={basketballimg} />
          </div>

          <div class="product-name limit-text-to-2-lines">
            Intermediate Size Basketball
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src={basketballrating} />
            <div class="product-rating-count link-primary">
              127
            </div>
          </div>

          <div class="product-price">
            $20.95
          </div>

          <div class="product-quantity-container">
            <select>
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

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src={checkmarks} />
            Added
          </div>

          <button class="add-to-cart-button button-primary">
            Add to Cart
          </button>
        </div>

        <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src={planecottontshirt} />
          </div>

          <div class="product-name limit-text-to-2-lines">
            Adults Plain Cotton T-Shirt - 2 Pack
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src={planecottontshirtrating} />
            <div class="product-rating-count link-primary">
              56
            </div>
          </div>

          <div class="product-price">
            $7.99
          </div>

          <div class="product-quantity-container">
            <select>
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

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src={checkmarks} />
            Added
          </div>

          <button class="add-to-cart-button button-primary">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Homepage