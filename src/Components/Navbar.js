import React, { useState } from "react";
import {
  FaBars,
  FaSearch,
  FaShoppingCart,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = ({ size, setShow }) => {
  const [isMenuOPen, setIsMenuOPen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOPen(!isMenuOPen);
  };
  const NavItems = [
    { title: "HOME", path: "/" },
    { title: "STORE", path: "/Store" },
    { title: "ABOUT US", path: "/AboutUs" },
    { title: "CONTACT", path: "/sportswear" },
    
    
  ];
  return (
    <header className="w-max-screen-2xl xl:px-28 px-4 absolute top-0 right-0 left-0">
      <nav className="flex justify-between items-center container md:py-4 pt-6 pb-3">
        <FaSearch className="text-Black w-5 h-5 cursor-pointer hidden md:block  " />
        <a href="/" className="w-[180px] ml-28  ">
          <img src="./assets/logo.PNG" alt="" className=""/>
        </a>

        <div className=" text-lg text-black ml-50 sm:flex  items-center gap-5 hidden ">
          <Link to="/" className="flex items-center gap-2">
            <FaUser className="w-5 h-7" />
           
          </Link>
          <Link to="/Cart" className="flex items-center  ">
            <FaShoppingCart className="w-6 h-10" />
            <span className="bg-orange-500 text-small text-black w-4 h-5 mb-3 mr-2  rounded-full  left-2 text-center leading-5 ">
              {size}
            </span><br/>
            
          </Link>
          
        </div>

        {/* {navbar for small devices} */}
        <div className="sm:hidden">
          <button onClick={toggleMenu}>
            {isMenuOPen ? (
              <FaTimes className="w-5 h-5 text-black" />
            ) : (
              <FaBars className="w-5 h-5 text-Black" />
            )}
          </button>
        </div>
      </nav>
      <hr />

      <div className="pt-4">
        <ul className="lg:flex items-center pl-[350px] gap-[60px] text-black hidden">
        
          {NavItems.map(({ title, path }) => (
            <li key={title} className="hover:text-orange-500 text-xl font-semibold">
              <Link to={path}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* {only mobile menu item} */}
      <div>
        <ul
          className={`bg-black text-white px-4 py-2 rounded ${
            isMenuOPen ? "" : "hidden"
          }`}
        >
          {NavItems.map(({ title, path }) => (
            <li key={title} className="hover:text-orange-500">
              <Link to="/">{title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
