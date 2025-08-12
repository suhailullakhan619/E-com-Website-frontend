import { Routes,Route } from 'react-router'
import './App.css'
import Homepage from './components/homepage/Homepage'
import Checkoutpage from './components/checkoutpage/Checkoutpage'
import Orderpage from './components/orderpage/orderpage'

function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='checkout' element={<Checkoutpage/>}></Route>
        <Route path='orders' element={<Orderpage/>}></Route>
      </Routes>

    </>
  )
}

export default App
