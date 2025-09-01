import './Homepage.css'
import { useEffect, useState } from 'react'
import Header from '../header/Header'
import Productsgrid from './Productsgrid'
import api from '../../lib/api'



function Homepage({ cart, loadCart }) {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsResponse = await api.get('/api/products')
        setProducts(productsResponse.data)
      }

      catch (err) { console.log('Products not fetched', err) }
    }
    getProducts()
  }, [])




  return (
    <>
      <title>Ecommerce Project</title>
      <link rel="icon" type="image/svg+xml" href="home-favicon.png" />
      <Header cart={cart} />

      <div className="home-page">
        <Productsgrid products={products} loadCart={loadCart} />
      </div>
    </>
  )
}

export default Homepage