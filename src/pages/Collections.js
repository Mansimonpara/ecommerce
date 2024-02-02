import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingBag } from 'react-icons/fa'

function Collections() {
  return (
    <div className='py-[80px]'>
        <div className='bg-[url("./assets/collection.png")]  -mb-20 bg-cover  border border-orange-500 bg-center bg-no-repeat xl:px-28 px-4 my-20  '>
        <div className='h-[580px]  flex justify-between  md:flex-row items-center'>
            <div className='md:w-1/2'></div>
            <div className='md:w-1/2'>
                <h1 className='text-white text-6xl'>Collection</h1>
                <p className='text-white text-lg capitalize my-8 md:w-2/3 leading-[32px]'>You can Explore  Many Diffrent Collection From Various Brands Here. 
            </p>
            <Link to="/Product" className="bg-white hover:bg-orange-500 px-6 py-2 text-black font-semibold rounded-sm" ><FaShoppingBag className='inline-flex' /> Shop Now</Link>
            
            
            </div>
        </div>
    </div>
    </div>
    
    
  )
}

export default Collections