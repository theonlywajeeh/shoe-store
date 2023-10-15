import Link from "next/link";
import React, { useState, useEffect } from "react";

const Shoes = () => {
  const [shoeData, setShoeData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/database/shoeData.json"); // Adjust the path based on your project structure
      const data = await response.json();
      setShoeData(data);
    };

    fetchData();
  }, []);

  if (!shoeData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid-cols-3 grid  gap-x-96  md:px-10 ">
      {Object.keys(shoeData).map((shoeKey) => {
        const shoe = shoeData[shoeKey];
        return (
          <div
            key={shoe.id}
            className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer rounded-lg p-6 w-80 ml-5"
            
          >
            <Link
            href="/product/1"
            >
            <img src={shoe.imageURL} alt={shoe.name} className="w-full h-48 object-cover mb[-50] " />
            <h2 className="text-xl font-medium mb-2">{shoe.name}</h2>
            <div className="text-gray-600">
              <p>Brand: {shoe.brand}</p>
              <p>Price: ${shoe.price}</p>
            </div>
            </Link>
            
           
          </div>
        );
      })}
    </div>
  );
};

export default Shoes;
