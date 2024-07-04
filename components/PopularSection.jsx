"use client";

import { useState, useEffect } from "react";

import ImageCarousel from "./ImageCarousel";
import { getPopularData } from "./GetData";


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
        <div className="bg-black flex flex-col items-center h-[60vh] sm:h-[80vh] smm:pt-24 sm:pt-4 md:pt-20 xl:pt-24">
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl text-left pb-6">Popular Products</h1>
            <ImageCarousel products={products} />
        </div>
    )
}

export default PopularSection