import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import Cards from "../Components/Cards";


const Products = () => {
    const [products, setProducts] = useState([]);
    const [filteredItems, setFilteredItems] = useState ([]);
    const [selectedCategory, setselectedCategory] = useState("all");
    const [sortOption, setSortOption] = useState("default");

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch("/products.json");
                const data = await response.json();
                // console.log(data)
                setProducts(data)
                setFilteredItems(data)
            } catch (error) {
                console.log("Error fetching data:", error)
            }
        }

        fetchData();
    }, [])
    // console.log(products)


      //filtering function
        const filtereItems = (category) => {
            const filtered = category === "all" ? (products) : products.filter((item) => item.category === category );

            setFilteredItems(filtered);
            setselectedCategory(category);

        }
      
      // show all prodcts
      const showAll = () => {
        setFilteredItems(products);
        setselectedCategory("all");
      }
        
      //sorting functionly
      const handleSortChange = (option) => {
        setSortOption(option);

        // logic for sorting
        let sortedItems = [...filteredItems];
        switch (option) {
          
          case "A-Z" : 
              sortedItems.sort((a, b) => a.title.localeCompare(b.title)); 
              break;
          case "Z-A" :
              sortedItems.sort((a, b) => b.title.localeCompare(a.title)); 
              break;
          case "low-to-high" :
              sortedItems.sort((a, b) => a.price - b.price); 
              break;
          case "high-to-low" :
              sortedItems.sort((a, b) => b.price - a.price); 
              break;
          default :
            break;
        }
        setFilteredItems(sortedItems);
      }

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4">
      <h2 className="title">Or Subscribe to the newsletter</h2>

      {/* product cards */}
      <div>
        <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3">
          {/* all btn */}
          <div className="flex flex-row justify-start md:gap-8 gap-4 md:items-center flex-wrap">
            <button onClick={showAll}>All Products</button>
            <button onClick={() => filtereItems("Dress") }>Clothing</button>
            <button onClick={() => filtereItems("Hoodies") }>Hoodies</button>
            <button onClick={() => filtereItems("Bag") }>Bags</button>
          </div>
          {/* sorting options */} 
          <div className="flex justify-end mb-4 rounded-sm">
            <div className="bg-black p-2">
              <FaFilter className="text-white h-4 w-4" />
            </div>


            <select 
            id="sort"
            onChange={(e) => handleSortChange(e.target.value)}
            value={sortOption}
            className="bg-black text-white px-2 py-1 rounded">
              <option value="default">Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High To Low</option>
            </select>
          </div>
        </div>
            <Cards FilteredItems={filteredItems} />

      </div>
    </div>
  );
};

export default Products;
