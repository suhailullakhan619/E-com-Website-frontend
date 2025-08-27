import './Homepage.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { amount } from '../../utils/amount'
// logo

import Header from '../header/Header'



function Homepage({cart}){
const [products,setProducts]=useState([])
  useEffect(()=>{
  axios.get('/api/products')
  .then((data)=>setProducts(data.data))
  .catch((err)=>console.log('Products not fetched',err))
  },[])




  return(
    <>
    <title>Ecommerce Project</title>
     <link rel="icon" type="image/svg+xml" href="home-favicon.png" />
      <Header cart={cart}/>

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
           {amount(products.priceCents)}
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
            <img src={'/images/icons/checkmark.png'} />
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