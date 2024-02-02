import React from 'react'
import { Link } from 'react-router-dom'
import "./animation.css";
const companyLogo = [
    {id: 1, img:"./assets/brand1.png"},
    {id: 2, img:"./assets/brand2.png"},
    {id: 3, img:"./assets/brand3.png"},
    {id: 4, img:"./assets/brand4.png"},
    {id: 5, img:"./assets/brand5.png"},
    
]


const Category = () => {
  return (
    <div className='max-w-screen-2xl mx-auto container xl:px-28 px-4 py-28'>
        {/* {branch logo} */}
        <div className='flex item-center justify-around flex-wrap  gap-4 py-5'>
            {
                companyLogo.map(({id, img}) => (
                    <div key={id}><img src={img} alt=''/>

                    </div>
                ))
                
            }
            

            
        </div>
            {/* catagory div */}
            <div className='mt-8 flex flex-col md:flex-row items-center gap-4'>
                <p className='font-semibolf md:-rotate-90     text-center bg-black text-white md:p-1.5 p-2 rounded-sm inline-flex'>EXPLOR NEW AND POPULAR STYLES</p>
            
            <div >
                <Link to="/"><img src='./assets/image1.png' alt='' className='w-full hover:scale-105 transition-all duration-200'/></Link>
               
            </div>
            <div className='md:w-1/2'>
                <div className='grid grid-cols-2 gap-1'>
                    <Link to="/"><img src='./assets/image2.png' alt=''className='w-full hover:scale-105 transition-all duration-200' /></Link>
                    <Link to="/"><img src='./assets/image3.png' alt='' className='w-full hover:scale-105 transition-all duration-200' /></Link>
                    <Link to="/"><img src='./assets/image4.png' alt='' className='w-full hover:scale-105 transition-all duration-200'/></Link>
                    <Link to="/"><img src='./assets/image5.png' alt=''className='w-full hover:scale-105 transition-all duration-200' /></Link>
                </div>
            </div>
            </div>
    </div>
  )
}

export default Category