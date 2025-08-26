import './Homepage.css'

import {products} from '../../data/products.js'
// logo

import checkmarks from "/images/icons/checkmark.png"
// product image and rating

// import scoks6pair from "../../assets/products/athletic-cotton-socks-6-pairs.jpg"
// import scoksrating from "../../assets/ratings/rating-45.png"

// import basketballimg from "../../assets/products/intermediate-composite-basketball.jpg"
// import basketballrating from "../../assets/ratings/rating-40.png"

// import planecottontshirt from "../../assets/products/adults-plain-cotton-tshirt-2-pack-teal.jpg"
// import planecottontshirtrating from "../../assets/ratings/rating-45.png"
import Header from '../header/Header'


function Homepage(){

  return(
    <>
    <title>Ecommerce Project</title>
     <link rel="icon" type="image/svg+xml" href="home-favicon.png" />
      <Header/>

    <div className="home-page">
      <div className="products-grid">
        {products.map((products)=>{
          return  (
            <>
            <div key={products.id} className="product-container">
          <div className="product-image-container">
            <img className="product-image"
              src={products.image} />
          </div>

          <div className="product-name limit-text-to-2-lines">
            {products.name}
          </div>

          <div className="product-rating-container">
            <img className="product-rating-stars"
              src={`/images/ratings/rating-${products.rating.stars*10}.png`} />
            <div className="product-rating-count link-primary">
              {products.rating.count}
            </div>
          </div>

          <div className="product-price">
           &#8377;{Math.floor(products.priceCents/100*87)}
          </div>

          <div className="product-quantity-container">
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

          <div className="product-spacer"></div>

          <div className="added-to-cart">
            <img src={checkmarks} />
            Added
          </div>

          <button className="add-to-cart-button button-primary">
            Add to Cart
          </button>
        </div>
            </>

          )
        })}
        

        {/* <div className="product-container">
          <div className="product-image-container">
            <img className="product-image"
              src={basketballimg} />
          </div>

          <div className="product-name limit-text-to-2-lines">
            Intermediate Size Basketball
          </div>

          <div className="product-rating-container">
            <img className="product-rating-stars"
              src={basketballrating} />
            <div className="product-rating-count link-primary">
              127
            </div>
          </div>

          <div className="product-price">
            $20.95
          </div>

          <div className="product-quantity-container">
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

          <div className="product-spacer"></div>

          <div className="added-to-cart">
            <img src={checkmarks} />
            Added
          </div>

          <button className="add-to-cart-button button-primary">
            Add to Cart
          </button>
        </div>

        <div className="product-container">
          <div className="product-image-container">
            <img className="product-image"
              src={planecottontshirt} />
          </div>

          <div className="product-name limit-text-to-2-lines">
            Adults Plain Cotton T-Shirt - 2 Pack
          </div>

          <div className="product-rating-container">
            <img className="product-rating-stars"
              src={planecottontshirtrating} />
            <div className="product-rating-count link-primary">
              56
            </div>
          </div>

          <div className="product-price">
            $7.99
          </div>

          <div className="product-quantity-container">
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

          <div className="product-spacer"></div>

          <div className="added-to-cart">
            <img src={checkmarks} />
            Added
          </div>

          <button className="add-to-cart-button button-primary">
            Add to Cart
          </button>
        </div> */}
      </div>
    </div>
    </>
  )
}

export default Homepage