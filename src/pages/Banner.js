import React from 'react';
import { FaShoppingBag } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "./animation.css";

const Banner = () => {
    return (
        <div className='flex justify-between bg-primayBG pt-48 py-10'>
            <div className='p-16 pl-36'>
                <h1 className='text-6xl py-2'>Collection</h1>
                <p className='mb-3'>You can Explore Ans Shop Many<br/> Diffrent Collection From Various <br/>Brands Here.</p>
                
            </div>  
            <div className=''>
                <div className='h-96 w-96 mr-36'> <img alt="image" src="/assets/banner.png"/>       </div>
               
                
            </div>
        </div>
    );
}

export default Banner;





