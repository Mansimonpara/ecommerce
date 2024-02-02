import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingBag } from "react-icons/fa";


const BestSellers = () => {
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-28 px-2 hover:scale-105 transition-all duration-7000'>
        <div className='text-center'>
            <h2 className='title '> Best Seller</h2>
            <p className='text-black/75  capitalize md:w-2/3 mx-auto mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus arcu nunc, fermentum quis sapien in, placerat scelerisque risus. Class aptent taciti sociosqu ad litora torquent per</p>
        </div>
        {/* best seller product */}
        <div className='  justify-between gap-2 mt-4 px-4 grid xl:grid-cols-4  sm:grid-cols-2 grid-cols-1 '>
            <div >
                <img src='./assets/bag1.jpeg' alt=''/>
                <p className='font-semibold text-l'>Basic Dress Orange</p>
                <div className='flex justify-between mt-2'> <p className='text-black/50'>Dress</p>
                <p className='font-semibold mr-12'>$236.00</p></div>
                <Link to="/" className="btn"><FaShoppingBag className='bg-gray-200 inline-flex mr-2' />ADD TO BAG</Link>
                
                
            </div>
            
            <div>
                <img src='./assets/image22.png' alt='' />
                <p className='font-semibold text-l'>Nike Spotswear Futura Luxe</p>
                <div className='flex justify-between mt-2'> 
                <p className='text-black/50'>Bag</p>
                <p className='font-semibold mr-12'>$130.00</p>
                </div>
            </div>

            <div>
                <img src='./assets/image4 4.png' alt=''className='w-[312px] h-[350px]' />
                <p className='font-semibold text-l'>Yellow Reserved Hoodie</p>
                <div className='flex justify-between mt-2'> 
                <p className='text-black/50'>Dress</p>
                <p className='font-semibold mr-12'>$364.00</p>
                </div>
            </div>

            <div>
                <img src='./assets/image22.png' alt='' />
                <p className='font-semibold text-l'>Nike Air Zoom Pegasus</p>
                <div className='flex justify-between mt-2'> 
                <p className='text-black/50'>Shoes</p>
                <p className='font-semibold mr-12'>$220.00</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BestSellers