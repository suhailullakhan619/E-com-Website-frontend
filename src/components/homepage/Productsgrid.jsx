
import Product from './Product'
const Productsgrid = ({ products,loadCart }) => {



  return (
    <div className="products-grid">
      {products.map((products) => {
     
        return (
          <>
            <Product key={products.id} products={products} loadCart={loadCart}/>
          </>

        )
      })}
    </div>
  )
}

export default Productsgrid