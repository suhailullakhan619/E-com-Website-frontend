
import React, { Fragment, useState } from 'react'
import './tracking.css'
import Header from '../header/Header'
import { Link,useParams } from 'react-router-dom'
import dayjs from 'dayjs'
import { useEffect } from 'react'
import api from '../../lib/api'
const Trackingpage1 = ({ cart }) => {
 const [orderload,setOrderload]=useState(null)
  const {orderId,productId}=useParams();


  useEffect(()=>{

    const getOrderandProductId= async()=>{
      try{
      const response=await api.get(`/api/orders/${orderId}?expand=products`)
         setOrderload(response.data)
      }
catch(err){
  console.log('data didint fetched!!!',err)
}
    }
    getOrderandProductId()
  },[orderId])

  if(!orderload){return null}

    const product = orderload.products.find(p => p.productId === productId);
  if (!product) {
    return <div>Product not found in this order.</div>;
  }
const totalDeliveryTimeinMs=product.estimatedDeliveryTimeMs-orderload.orderTimeMs;
const timePassedMs=dayjs().valueOf()-orderload.orderTimeMs;
let  deliveryPercent=(timePassedMs/totalDeliveryTimeinMs)*100;
if(deliveryPercent>100){
  deliveryPercent=100
};
if(deliveryPercent<0){
   deliveryPercent=0
}
const deliveryDateLable=deliveryPercent>=100 ?"Delivered on" :"Arriving on";
const isPreparing=deliveryPercent<33;
const isShipped=deliveryPercent>=33 && deliveryPercent<100;
const isDelivered=deliveryPercent===100;
  return (
    <>
      <title>Order Tracking</title>
      <Header cart={cart} />

      <div className="tracking-page">
        <div className="order-tracking">
          <Link className="back-to-orders-link link-primary" to="/orders">
            View all orders
          </Link>
        
                 <div className="delivery-date">
                {deliveryDateLable} {dayjs(product.estimatedDeliveryTimeMs).format('dddd MMMM D')}
              </div>

              <div className="product-info">
                {product.product.name}
              </div>

              <div className="product-info">
                Quantity: {product.quantity}
              </div>

              <img className="product-image" src={product.product.image} />

              <div className="progress-labels-container">
                <div className={`progress-label${isPreparing ? ' current-status' : ''}`}>
                  Preparing
                </div>
                <div className={`progress-label${isShipped ? ' current-status' : ''}`}>
                  Shipped
                </div>
                <div className={`progress-label${isDelivered ? ' current-status' : ''} `}>
                  Delivered
                </div>
              </div>

              <div className="progress-bar-container">
                <div className="progress-bar" style={{width:`${deliveryPercent}%`}}></div>
              </div>
             
            
        

        </div>
      </div>



    </>
  )
}

export default Trackingpage1