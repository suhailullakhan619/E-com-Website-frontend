import './Homepage.css'
import { useEffect, useState } from 'react'
import Header from '../header/Header'
import Productsgrid from './Productsgrid'
import api from '../../lib/api'



function Homepage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);
  const [pages,setPages]=useState(1);
  const [totalpages,setTotalpages]=useState();
  const [isHovered,setIsHovered]=useState(null)
  const itemsperPage=10;
  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsResponse = await api.get('/api/products')
        setProducts(productsResponse.data)
        setTotalpages(Math.ceil(productsResponse.data.length/itemsperPage))
      }

      catch (err) { console.log('Products not fetched', err) }
    }
    getProducts()
  }, [])

  const startIndex=(pages-1)*itemsperPage;
  const lastIndex=startIndex+itemsperPage;
  const currentpage=products.slice(startIndex,lastIndex)

function scroll(){
  window.scrollTo({top:0,behavior:'smooth'})
}

  return (
    <>
      <title>Ecommerce Project</title>
      <link rel="icon" type="image/svg+xml" href="home-favicon.png" />
      <Header cart={cart} />

      <div className="home-page">
        <Productsgrid   loadCart={loadCart} currentpage={currentpage} />
      </div>
      <div className='paginationDiv'>
        {pages!==1 && 
        <div className='leftandrightbtn' 
        onClick={()=>{
          setPages(pages-1);
          scroll()}}>◀️</div>  }
         {Array.from({length:totalpages},(_,i)=>{
          return <button className='pagebtn' 
          style={{background:pages===i+1?'#198754':isHovered===i?'#198754':'lightgrey',
            color:pages===i+1?'white':'black',transition:'all 0.2s'}} 
            key={i} 
            onClick={()=>{setPages(i+1);scroll();}} 
         onMouseEnter={()=>setIsHovered(i)}
        onMouseLeave={()=>setIsHovered(null)}
        >{i+1}</button> 
         })}
         {pages!==totalpages && 
         <div  className='leftandrightbtn' 
         onClick={()=>{
          setPages(pages+1);
          scroll();}}>▶️</div>}
        
      </div>
    </>
  )
}

export default Homepage