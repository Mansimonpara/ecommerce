import React,{ useState } from "react";
import Footer from "../Components/Footer";
import { ProductData1 } from "../Components/data";

const Store = ({handleClick}) => {
  const [data, setData] = useState(ProductData1);
  const filterResult = (catItem) => {
    const result = ProductData1.filter((curData) => {
      return curData.category === catItem;
    });
    setData(result);
  };

  return (
    <div className="pt-[170px]">
    
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 w-[100%] px-10">
        <button
          className="hover:bg-orange-400 shadow-xl border border-black rounded-sm  text-black hover:text-white"
          onClick={() => setData(ProductData1)}
        >
          ALL
        </button>
        <button
          className="hover:bg-orange-400 rounded-sm shadow-xl border border-black  text-black hover:text-white"
          onClick={() => filterResult("Clothes")}
        >
          CLOTHES
        </button>
        <button
          className="hover:bg-green-500 rounded-sm shadow-xl border border-black  text-black hover:text-white"
          onClick={() => filterResult("Footwear")}
        >
          FOOTWEAR
        </button>
      </div>
      <div className="my-4 grid xl:grid-cols-4  sm:grid-cols-3 grid-cols-1">
        {data.map((item, index) => (
          <div key={index} className="px-2 mx-auto  ">
            <div className=" ">
              <div>
                <img
                  src={item.img}
                  alt=""
                  className="h-[15rem]  w-[15rem]  xl:h-[20rem] 2xl:w-[22rem] rounded-lg  hover:scale-105 duration-500 "></img>
                <div className="mb-3 2xl:mt-4">
                  
                  <h3 className="text-[17px] font-semibold">{item.Title}</h3>
                  <p className="flex">
                  
                  ₹{item.Price}
                  </p>
                  <button
                    onClick={()=>handleClick(item)}
                    className="bg-amber-600 w-32  border-black px-2  py-[1.px]  mt-1 flex " >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
     
    </div>
    
  );
};


export default Store;
   
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
        
            
            
              

            
            
             
            
            
             