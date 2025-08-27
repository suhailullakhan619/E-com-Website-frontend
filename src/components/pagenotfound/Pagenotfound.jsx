

import React from 'react'
import Header from "../header/Header";
import './page.css'
import { Link } from 'react-router-dom';
const Pagenotfound = () => {
  return (
    <>
       <title>404 Page Not Found</title>
      <link rel="icon" type="image/svg+xml" href="home-favicon.png" />

      {/* Remember to add the <Header> so it looks like it's
      on the same website. */}
      <Header />

      {/* You can style this message however you want. */}
      <div className="not-found-message">
       404 Page not found
      </div>
      <Link to='/' className='backtohomepage'>
       <p>Back to home page</p>
       </Link>
    </>
  )
}

export default Pagenotfound