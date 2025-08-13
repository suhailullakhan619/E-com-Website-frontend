'use client'
import { Routes,Route } from 'react-router'
import './App.css'
import Homepage from './components/homepage/Homepage'
import Checkoutpage from './components/checkoutpage/Checkoutpage'
import Orderpage from './components/orderpage/orderpage'
import Trackingpage from './components/trackingpage/Trackingpage'
import Pagenotfound from './components/pagenotfound/Pagenotfound'


function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='checkout' element={<Checkoutpage/>}></Route>
        <Route path='orders' element={<Orderpage/>}></Route>
        <Route path='tracking' element={<Trackingpage/>}></Route>
        <Route path='*' element={<Pagenotfound/>}></Route>
      </Routes>
      
    </>
    
  )
}

export default App
