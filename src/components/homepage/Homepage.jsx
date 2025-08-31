import './Homepage.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

// logo

import Header from '../header/Header'
import Productsgrid from './Productsgrid'



function Homepage({cart}){
const [products,setProducts]=useState([])
  useEffect(()=>{
    const getProducts= async ()=>{
      try{
const productsResponse=await axios.get('/api/products')
setProducts(productsResponse.data)
      }
 
  catch(err){console.log('Products not fetched',err)}
    }
getProducts()
  },[])




  return(
    <>
    <title>Ecommerce Project</title>
     <link rel="icon" type="image/svg+xml" href="home-favicon.png" />
      <Header cart={cart}/>

    <div className="home-page">
     <Productsgrid products={products}/>
    </div>
    </>
  )
}

export default Homepage