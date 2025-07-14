"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { urlFor } from "@/app/lib/sanity";
import { getAllData } from "@/components/GetData";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaStar, FaFilter, FaTags } from "react-icons/fa";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [sortType, setSortType] = useState("");
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categories, setCategories] = useState(["All"]);

  useEffect(() => {
    const fetchData = async () => {
      const allProducts = await getAllData();
      setProducts(allProducts);
      
      // Extract unique categories
      const uniqueCategories = ["All", ...new Set(allProducts.flatMap(p => p.categories.map(c => c.name)))];
      setCategories(uniqueCategories);
    };

    fetchData();
  }, []);

  const handleSortChange = (e) => {
    const sortValue = e.target.value;
    setSortType(sortValue);
    sortProducts(sortValue);
  };

  const sortProducts = (type) => {
    let sortedProducts = [...products];
    switch(type) {
      case "Price - Low to High":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "Price - High to Low":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case "Rating":
        sortedProducts.sort((a, b) => (b.rating?.average || 0) - (a.rating?.average || 0));
        break;
      case "Newest":
        sortedProducts.sort((a, b) => b.isNewArrival - a.isNewArrival);
        break;
    }
    setProducts(sortedProducts);
  };

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => 
        product.categories.some(cat => cat.name === selectedCategory)
      );

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-gray-900 to-black py-4 sticky top-0 z-10">
        <div className="px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <Breadcrumb className="text-sm">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-gray-500" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white">All Products</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <FaFilter className="text-gray-400" />
              <select
                className="bg-transparent text-white border border-gray-700 rounded-lg px-3 py-1 text-sm focus:outline-none focus:border-gray-500"
                onChange={(e) => setSelectedCategory(e.target.value)}
                value={selectedCategory}
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-gray-900">
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2">
              <FaTags className="text-gray-400" />
              <select
                className="bg-transparent text-white border border-gray-700 rounded-lg px-3 py-1 text-sm focus:outline-none focus:border-gray-500"
                onChange={handleSortChange}
                value={sortType}
              >
                <option value="" disabled className="bg-gray-900">Sort By</option>
                <option className="bg-gray-900">Newest</option>
                <option className="bg-gray-900">Rating</option>
                <option className="bg-gray-900">Price - Low to High</option>
                <option className="bg-gray-900">Price - High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="px-4 py-8">
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Discover Our Collection
        </motion.h1>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {filteredProducts.map((product) => (
            <motion.div key={product._id} variants={item}>
              <Link
                href={{
                  pathname: `/products/${product.slug}`,
                  query: { slug: product.slug },
                }}
                className="block"
                onMouseEnter={() => setHoveredProduct(product._id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <Card className="group relative overflow-hidden rounded-xl border-0 bg-black/20 to-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <CardContent className="p-4">
                    {/* New Arrival Badge */}
                    {product.isNewArrival && (
                      <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full z-10">
                        New
                      </span>
                    )}

                    {/* Image */}
                    <div className="relative h-40 sm:h-48 mb-4 transition-transform duration-300 group-hover:scale-105">
                      <Image
                        src={urlFor(product.images[0]).url()}
                        alt={product.name}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                      />
                    </div>

                    {/* Product Info */}
                    <div className="space-y-2">
                      {/* Categories */}
                      <div className="flex flex-wrap gap-1">
                        {product.categories.map((category) => (
                          <span
                            key={category._id}
                            className="text-[10px] px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full"
                          >
                            {category.name}
                          </span>
                        ))}
                      </div>

                      {/* Name and Price */}
                      <h3 className="font-medium text-gray-900 line-clamp-1">
                        {product.name}
                      </h3>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-gray-900">
                            ₹{product.price.toFixed(2)}
                          </span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">
                              ₹{product.originalPrice.toFixed(2)}
                            </span>
                          )}
                        </div>

                        {/* Rating */}
                        {product.rating && (
                          <div className="flex items-center gap-1">
                            <FaStar className="text-yellow-400 text-sm" />
                            <span className="text-sm text-gray-600">
                              {product.rating.average.toFixed(1)}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
