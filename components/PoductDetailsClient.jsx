"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { urlFor } from "@/app/lib/sanity";
import { MdShoppingCart } from "react-icons/md";
import { motion } from "framer-motion";
import { FaTruck, FaShieldAlt, FaUndo, FaArrowRight } from "react-icons/fa";

import { getData, getAllData } from "@/components/GetData";
import { Button } from "@/components/ui/button";
import ImageCarousel from "@/components/ImageCarousel";
import { useCart } from "@/app/context/CartContext";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const getRandomProducts = (products, num) => {
    const shuffled = products.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
};

const ProductDetailsClient = () => {
    const searchParams = useSearchParams();
    const [product, setproduct] = useState();
    const [products, setProducts] = useState([]);
    const [randomProducts, setRandomProducts] = useState([]);
    const [selectedSize, setSelectedSize] = useState(null);
    const { addToCart } = useCart();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const slug = searchParams.get("slug");

    useEffect(() => {
        const fetchData = async () => {
            const product = await getData(slug);
            setproduct(product);

            const allProducts = await getAllData();
            setProducts(allProducts);
            const randomSubset = getRandomProducts(allProducts, 8);
            setRandomProducts(randomSubset);
        };

        fetchData();
    }, [slug]);

    const handle = () => {
        if (product && selectedSize) {
            addToCart({ ...product, selectedSize });
        } else {
            alert("Please select a size first");
        }
    };

    const features = [
        { icon: FaTruck, text: "Free Shipping", subtext: "On orders above ₹999" },
        { icon: FaShieldAlt, text: "Secure Payment", subtext: "100% secure payment" },
        { icon: FaUndo, text: "Easy Returns", subtext: "10 day return policy" },
    ];

    return (
        <>
            {product && (
                <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
                    {/* Breadcrumb - Updated */}
                    <div className="bg-gradient-to-r from-gray-900 to-black py-3 sm:py-4 sticky top-0 z-50">
                        <div className="px-4">
                            <Breadcrumb className="flex items-center text-[10px] sm:text-sm">
                                <BreadcrumbList className="flex items-center space-x-1 sm:space-x-2">
                                    <BreadcrumbItem>
                                        <BreadcrumbLink 
                                            href="/" 
                                            className="text-gray-400 hover:text-white transition-colors flex items-center"
                                        >
                                            Home
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator className="text-gray-500" />
                                    <BreadcrumbItem>
                                        <BreadcrumbLink 
                                            href="/products" 
                                            className="text-gray-400 hover:text-white transition-colors"
                                        >
                                            Products
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator className="text-gray-500" />
                                    <BreadcrumbItem>
                                        <BreadcrumbPage className="text-white font-medium truncate max-w-[100px] sm:max-w-none">
                                            {product.name}
                                        </BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>
                    </div>

                    {/* Product Section */}
                    <div className="w-full px-4 sm:px-6 py-4 sm:py-12">
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-12">
                            {/* Image Gallery */}
                            <div className="space-y-3 sm:space-y-4">
                                <motion.div
                                    className="relative h-[45vh] sm:h-[50vh] md:h-[60vh] w-full rounded-lg sm:rounded-2xl overflow-hidden bg-gray-50"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Image
                                        src={urlFor(product.images[currentImageIndex]).url()}
                                        alt={product.name}
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </motion.div>
                                <div className="flex gap-2 sm:gap-4 overflow-x-auto pb-2 scrollbar-hide">
                                    {product.images.map((image, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentImageIndex(index)}
                                            className={`relative h-14 w-14 sm:h-24 sm:w-24 rounded-md sm:rounded-lg overflow-hidden flex-shrink-0 bg-gray-50
                                                ${currentImageIndex === index ? 'ring-2 ring-black' : ''}`}
                                        >
                                            <Image
                                                src={urlFor(image).url()}
                                                alt={`${product.name} view ${index + 1}`}
                                                fill
                                                className="object-contain p-1"
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Product Info */}
                            <div className="space-y-4 sm:space-y-8 mt-2 sm:mt-0">
                                <div>
                                    <h1 className="text-xl sm:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">{product.name}</h1>
                                    <p className="text-xl sm:text-3xl font-semibold text-gray-900 mb-1 sm:mb-2">₹{product.price.toFixed(2)}</p>
                                    <p className="text-[10px] sm:text-sm text-gray-500">incl. of taxes and duties</p>
                                </div>

                                {/* Size Selection */}
                                <div className="space-y-2 sm:space-y-4">
                                    <h2 className="text-sm sm:text-lg font-semibold text-gray-900">Select Size (UK)</h2>
                                    <div className="grid grid-cols-5 gap-1 sm:gap-2">
                                        {[7, 8, 9, 10, 11].map((size) => (
                                            <button
                                                key={size}
                                                onClick={() => setSelectedSize(size)}
                                                className={`py-1.5 sm:py-3 rounded-md sm:rounded-lg border text-xs sm:text-base
                                                    ${selectedSize === size
                                                        ? 'border-black bg-black text-white'
                                                        : 'border-gray-300 text-black hover:border-gray-900'
                                                    }`}
                                            >
                                                UK {size}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Add to Cart Button */}
                                <button
                                    onClick={handle}
                                    className="w-full py-2.5 sm:py-4 bg-black text-white rounded-md sm:rounded-lg hover:bg-gray-900 
                                        transition-colors flex items-center justify-center gap-2 text-sm sm:text-lg font-semibold"
                                >
                                    Add to Cart
                                    <MdShoppingCart className="text-base sm:text-xl" />
                                </button>

                                {/* Features */}
                                <div className="grid grid-cols-3 gap-1 sm:gap-4 pt-4 sm:pt-8 border-t">
                                    {features.map((feature, index) => (
                                        <div key={index} className="text-center px-1">
                                            <feature.icon className="mx-auto text-lg sm:text-2xl mb-1 sm:mb-2 text-gray-900" />
                                            <h3 className="font-semibold text-[10px] sm:text-sm text-gray-900">{feature.text}</h3>
                                            <p className="text-[8px] sm:text-xs text-gray-500">{feature.subtext}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Description */}
                                <div className="border-t pt-4 sm:pt-8">
                                    <h2 className="text-base sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-4">Product Description</h2>
                                    <p className="text-xs sm:text-base text-gray-600 leading-relaxed">{product.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Similar Products - Fixed for mobile */}
                    <div className="bg-gradient-to-b from-gray-900 to-black py-8 sm:py-16 mt-6 sm:mt-12">
                        <div className="flex flex-col items-center w-full">
                            <h2 className="text-xl sm:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-3 sm:mb-6 text-center px-4">
                                Similar Products
                            </h2>
                            <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8">
                                <p className="text-gray-400 text-sm sm:text-base">
                                    Swipe to explore
                                </p>
                                <span className="animate-bounce-horizontal">
                                    <FaArrowRight className="text-orange-400 text-sm sm:text-base" />
                                </span>
                            </div>
                            
                            {/* Carousel Container - Simplified structure */}
                            <div className="w-full">
                                <ImageCarousel products={randomProducts} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductDetailsClient;