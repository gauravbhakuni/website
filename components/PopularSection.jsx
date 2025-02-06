"use client";

import { useState, useEffect } from "react";

import ImageCarousel from "./ImageCarousel";
import { getPopularData } from "./GetData";
import { FaArrowRight } from "react-icons/fa";


const PopularSection = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const products = await getPopularData();
            setProducts(products);
        };

        fetchData();
    }, []);

    return (
        <div className="bg-gradient-to-b from-black to-gray-900 flex flex-col items-center min-h-[80vh] py-16 px-4">
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Popular Products
            </h1>
            <p className="flex items-center gap-3 text-gray-300 text-lg mb-8">
                Swipe to explore
                <span className="animate-bounce-horizontal">
                    <FaArrowRight className="text-purple-400" />
                </span>
            </p>
            <ImageCarousel products={products} />
        </div>
    )
}

export default PopularSection