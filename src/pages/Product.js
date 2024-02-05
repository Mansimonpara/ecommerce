import React from "react";
import J1 from "../assets/m1.png";
import J2 from "../assets/m2.png";
import J3 from "../assets/m3.png";
import J4 from "../assets/m4.png";
import J5 from "../assets/m5.png";
import J6 from "../assets/m6.png";
import J7 from "../assets/m7.png";
import J8 from "../assets/m8.png";
const Product = ({ handleClick }) => {
  const ProductData1 = [
    {
      id: 1,
      Title: "Yellow Reserved Hoodie",
      img: J1,
      Price: 699,
      amount: 1,
    },
    {
      id: 2,
      Title: "Adicolor Classics Jogger",
      img: J2,
      Price: 1199,
      amount: 1,
    },
    {
      id: 3,
      Title: "Nike Sportswear Futura Luxe",
      img: J3,
      Price: 2500,
      amount: 1,
    },
    {
      id: 4,
      Title: "Geometric print Scarf",
      img: J4,
      Price: 299,
      amount: 1,
    },
    {
      id: 5,
      Title: "Basic Dress Green",
      img: J5,
      Price: 1999,
      amount: 1,
    },
    {
      id: 6,
      Title: "Nike Air Zoom Pegasus",
      img: J6,
      Price: 4999,
      amount: 1,
    },
    {
      id: 7,
      Title: "Nike Repel Miler",
      img: J7,
      Price: 1799,
      amount: 1,
    },
    {
      id: 8,
      Title: "Nike Sportswear Futura Luxe",
      img: J8,
      Price: 999,
      amount: 1,
    },
  ];
  const [id,Title,img,Price] = ProductData1
  return (

    <div className="pt-[90px]">
        <div className="m-12">
      <div className="  my-4 grid grid-cols-1 sm:grid-cols-3">
        {ProductData1.map((item, index) => (
          <div key={index} className="px-2 mx-auto  ">
            <div className=" ">
              <div>
                <img
                  src={item.img}
                  alt=""
                  className="h-[15rem]  w-[15rem]  xl:h-[20rem] 2xl:w-[22rem] rounded-lg  hover:scale-105 duration-500 "></img>
                <div className="mb-3 2xl:mt-4">
                  
                  <h3>{item.Title}</h3>
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
    </div>
    </div>
    
  );
};
export default Product;



























