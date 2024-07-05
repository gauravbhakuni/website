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
    <div className="bg-black flex flex-col items-center h-[75vh] sm:h-[80vh] smm:pt-24 sm:pt-20 md:pt-20 xl:pt-24">
      <h1 className="text-white text-4xl sm:text-5xl md:text-6xl text-left pb-6">New Launches</h1>
      <p className="flex flex-row gap-4">Drag <span className="py-2">
        <FaArrowRight />
      </span>
      </p>
      <ImageCarousel products={products} />
      <div className="pt-8 sm:pt-16">
        <h1 className="px-4 font-light text-center text-xl sm:text-3xl md:text-5xl text-orange-400">Step up your style game with our latest collection</h1>
      </div>
    </div>
  )
}

export default PopularSection