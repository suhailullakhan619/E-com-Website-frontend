
import Product from './Product'
const Productsgrid = ({ loadCart,currentpage }) => {



  return (
    <div className="products-grid">
      {currentpage.map((products) => {   
        return (
            <Product key={products.id} products={products} loadCart={loadCart}/>

        )
      })}
    </div>
  )
}

export default Productsgrid