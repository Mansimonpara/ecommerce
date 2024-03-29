
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Product from './pages/Product';
import { useState } from 'react';
import Navbar from './Components/Navbar';
import Cart from './pages/Cart';
import Bill from './pages/Bill';
import Store from './pages/Store';
import AboutUs from './pages/AboutUs';
import SignIn from './pages/SignIn';
import ContactUS from './pages/ContactUS';

const App = () => {
  const [show, setShow] = useState(true);
  const [cart,setCart] = useState([]);
  




const handleClick = (item) => {
  console.log(item);
    let isPresent = false;
    cart.forEach((product)=>{
      if (item.id === product.id)
      isPresent = true;
    })
    if (isPresent)
           
        return ;
    setCart([...cart, item]);
    };


  return (
    <>
      <Navbar size={cart.length}/>  
      <Routes>
        <Route path='/Bill' element={<Bill cart={cart} setCart={setCart}/>} />       
        <Route path='/Store' element={<Store handleClick={handleClick} />} />  
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart cart={cart} setCart={setCart}  />}  />
        <Route path='/Product' element={<Product handleClick={handleClick} />}/>
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/SignIn" element={ <SignIn  handleClick={handleClick}/>} />
        <Route path="/ContactUs" element={ <ContactUS />} />
       
       
      </Routes>
    </>
      
    
  );
}

export default App;
