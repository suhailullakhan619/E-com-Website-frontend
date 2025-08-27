'use client'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Routes,Route} from 'react-router-dom'
import './App.css'
import Homepage from './components/homepage/Homepage'
import Checkoutpage from './components/checkoutpage/Checkoutpage'
import Orderpage from './components/orderpage/Orderpage'
import Trackingpage1 from './components/trackingpage/Trackingpage1'
import Trackingpage2 from './components/trackingpage/Trackingpage2'
import Trackingpage3 from './components/trackingpage/Trackingpage3'
import Pagenotfound from './components/pagenotfound/Pagenotfound'



function App() {
const [cart,setCart]=useState([])
 useEffect(()=>{
  axios.get('/api/cart-items?expand=product')
  .then((data)=>setCart(data.data))
  .catch((err)=>console.log('cart-items not fetched',err))
 },[])

  return (
    <>
  
      <Routes>
        <Route path="/" element={<Homepage cart={cart} />} />
        <Route path="/checkout" element={<Checkoutpage cart={cart} />} />
        <Route path="/orders" element={<Orderpage/>} />
        <Route path="/tracking1" element={<Trackingpage1 />} />
        <Route path="/tracking2" element={<Trackingpage2 />} />
        <Route path="/tracking3" element={<Trackingpage3 />} />
        <Route path="*" element={<Pagenotfound/>} />
      </Routes>
      
    </>
    
  )
}

export default App
