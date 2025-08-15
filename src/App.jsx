'use client'
import { Routes,Route } from 'react-router'
import './App.css'
import Homepage from './components/homepage/Homepage'
import Checkoutpage from './components/checkoutpage/Checkoutpage'
import Orderpage from './components/orderpage/Orderpage'
import Trackingpage1 from './components/trackingpage/Trackingpage1'
import Trackingpage2 from './components/trackingpage/Trackingpage2'
import Trackingpage3 from './components/trackingpage/Trackingpage3'
import Pagenotfound from './components/pagenotfound/Pagenotfound'


function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/checkout' element={<Checkoutpage/>}></Route>
        <Route path='/orders' element={<Orderpage/>}></Route>
        <Route path='/tracking1' element={<Trackingpage1/>}></Route>
        <Route path='/tracking2' element={<Trackingpage2/>}></Route>
        <Route path='/tracking3' element={<Trackingpage3/>}></Route>
        <Route path='*' element={<Pagenotfound/>}></Route>
      </Routes>
      
    </>
    
  )
}

export default App
