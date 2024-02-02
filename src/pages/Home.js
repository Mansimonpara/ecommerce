import React from 'react'

import Category from './Category'
import Products from './Products'
import Collections from './Collections'
import BestSellers from './BestSellers'
import Footer from '../Components/Footer'






const Home = () => {
  return (

    
    <>
    <Collections/>
    
    <Category />
    <Products />
    
    <BestSellers />
    <Footer />
    </>
  )
}

export default Home