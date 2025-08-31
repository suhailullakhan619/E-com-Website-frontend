'use client'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Homepage from './components/homepage/Homepage'
import Checkoutpage from './components/checkoutpage/Checkoutpage'
import Orderpage from './components/orderpage/Orderpage'
import Trackingpage1 from './components/trackingpage/Trackingpage1'
import Pagenotfound from './components/pagenotfound/Pagenotfound'



function App() {
  const [cart, setCart] = useState([])
    const loadCart = async () => {
      try {
        const cartResponse = await axios.get('/api/cart-items?expand=product')
        setCart(cartResponse.data)
      }
      catch (err) { console.log('cart-items not fetched', err) }
    }
  useEffect(() => {
    loadCart()
  }, [])

  return (
    <>

      <Routes>
        <Route path="/" element={<Homepage cart={cart} loadCart={loadCart} />} />
        <Route path="/checkout" element={<Checkoutpage cart={cart} loadCart={loadCart} />} />
        <Route path="/orders" element={<Orderpage cart={cart} loadCart={loadCart} />} />
        <Route path="/tracking/:orderId/:productId" element={<Trackingpage1 cart={cart} />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>

    </>

  )
}

export default App
