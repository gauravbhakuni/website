"use client";

import { useState, useEffect } from "react";

import ImageCarousel from "./ImageCarousel";
import { getNewData } from "./GetData";
import { FaArrowRight } from "react-icons/fa";


const PopularSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const products = await getNewData();
      setProducts(products);
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black flex flex-col items-center min-h-[80vh] py-16 px-4">
      <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 bg-gradient-to-r from-orange-400 to-rose-400 bg-clip-text text-transparent">
        New Launches
      </h1>
      <p className="flex items-center gap-3 text-gray-300 text-lg mb-8">
        Swipe to explore
        <span className="animate-bounce-horizontal">
          <FaArrowRight className="text-orange-400" />
        </span>
      </p>
      <ImageCarousel products={products} />
      <div className="mt-12 max-w-3xl">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-medium bg-gradient-to-r from-orange-400 via-rose-400 to-purple-500 bg-clip-text text-transparent">
          Elevate Your Style With Our Latest Collection
        </h2>
      </div>
    </div>
  )
}

export default PopularSection