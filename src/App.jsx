'use client'
import { useState, useEffect, lazy,Suspense } from 'react'
import api from './lib/api'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import spin from './assets/spin.gif'
const Homepage=lazy(()=>import('./components/homepage/Homepage'))  
const Checkoutpage =lazy(()=>import('./components/checkoutpage/Checkoutpage')) 
const Orderpage=lazy(()=>import( './components/orderpage/Orderpage'))
const Trackingpage1=lazy(()=>import('./components/trackingpage/Trackingpage1')) 
const Pagenotfound=lazy(()=>import( './components/pagenotfound/Pagenotfound'))



function App() {
  const [cart, setCart] = useState([])
    const loadCart = async () => {
      try {
        const cartResponse = await api.get('/api/cart-items?expand=product')
        setCart(cartResponse.data)
      }
      catch (err) { console.log('cart-items not fetched', err) }
    }
  useEffect(() => {
    loadCart()
  }, [])

  return (
    <>
<Suspense  fallback={<div className='spinnerdiv'><img className='spinner' src={spin} alt='spinner'></img></div>}>
      <Routes>
        <Route path="/" element={<Homepage cart={cart} loadCart={loadCart} />} />
        <Route path="/checkout" element={<Checkoutpage cart={cart} loadCart={loadCart} />} />
        <Route path="/orders" element={<Orderpage cart={cart} loadCart={loadCart} />} />
        <Route path="/tracking/:orderId/:productId" element={<Trackingpage1 cart={cart} />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
</Suspense>
    </>

  )
}

export default App
