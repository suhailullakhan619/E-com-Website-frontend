import { Routes,Route } from 'react-router'
import './App.css'
import Homepage from './components/homepage/Homepage'

function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='checkout' element={<></>}></Route>
      </Routes>

    </>
  )
}

export default App
