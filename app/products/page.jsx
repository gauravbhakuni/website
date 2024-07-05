"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { urlFor } from "@/app/lib/sanity";

import { getData, getAllData } from "@/components/GetData";
import ImageCarousel from "@/components/ImageCarousel";

const shoes = [
  {
    name: "Nike Air Max 90",
    price: 8695.00,
    tags: ["new", "trending"],
    image: "/assets/shoesImages/NikeAirMaxExcee/air-max-excee-shoes-black-right.png"
  },
  {
    name: "Nike Dunk Low Retro",
    price: 8295.00,
    tags: ["new", "trending"],
    image: "/assets/shoesImages/Nike Dunk Low Retro/dunk-low-retro-shoe-black-right.png"
  },
  {
    name: "Air Jordan 1 Low SE",
    price: 8295.00,
    tags: ["new", "trending"],
    image: "/assets/shoesImages/Air Jordan 1 Low SE/air-jordan-1-low-se-shoes-right.jpeg"
  },
  {
    name: "Nike Winflo 10",
    price: 8257.00,
    tags: ["new"],
    image: "/assets/shoesImages/Nike Winflo 10/wio-10-road-running-shoes-right.png"
  },
  {
    name: "Nike Air Max 90",
    price: 8695.00,
    tags: ["new", "trending"],
    image: "/assets/shoesImages/NikeAirMaxExcee/air-max-excee-shoes-black-right.png"
  },
  {
    name: "Nike Dunk Low Retro",
    price: 8295.00,
    tags: ["new", "trending"],
    image: "/assets/shoesImages/Nike Dunk Low Retro/dunk-low-retro-shoe-black-right.png"
  },
  {
    name: "Air Jordan 1 Low SE",
    price: 8295.00,
    tags: ["new", "trending"],
    image: "/assets/shoesImages/Air Jordan 1 Low SE/air-jordan-1-low-se-shoes-right.jpeg"
  },
  {
    name: "Nike Winflo 10",
    price: 8257.00,
    tags: ["new"],
    image: "/assets/shoesImages/Nike Winflo 10/wio-10-road-running-shoes-right.png"
  },
  {
    name: "Nike Air Max 90",
    price: 8695.00,
    tags: ["new", "trending"],
    image: "/assets/shoesImages/NikeAirMaxExcee/air-max-excee-shoes-black-right.png"
  },
  {
    name: "Nike Dunk Low Retro",
    price: 8295.00,
    tags: ["new", "trending"],
    image: "/assets/shoesImages/Nike Dunk Low Retro/dunk-low-retro-shoe-black-right.png"
  },
  {
    name: "Air Jordan 1 Low SE",
    price: 8295.00,
    tags: ["new", "trending"],
    image: "/assets/shoesImages/Air Jordan 1 Low SE/air-jordan-1-low-se-shoes-right.jpeg"
  },
  {
    name: "Nike Winflo 10",
    price: 8257.00,
    tags: ["new"],
    image: "/assets/shoesImages/Nike Winflo 10/wio-10-road-running-shoes-right.png"
  },
];

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const Products = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [products, setProducts] = useState([]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const fetchData = async () => {
        const allProducts = await getAllData();
        setProducts(allProducts);
    };

    fetchData();
}, []);

  return (
    <div className="pt-8 bg-white">
      <div className="smm:px-4 sm:container mt-6 h-[8vh] bg-black flex justify-between items-center">
        <div>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>All Products</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div>
          <select className="mt-2 w-full bg-black/80 border rounded shadow-lg z-10">
            <option selected disabled>Sort By</option>
            <option>Featured</option>
            <option>Price - Low to High</option>
            <option>Price - High to Low</option>
          </select>
        </div>
      </div>

      <div>
        <h1 className="text-center pt-8 text-3xl text-black md:text-5xl">All Products</h1>
      </div>
      <div className="bg-white flex flex-col items-center pt-8">
        <ImageCarousel products={products} />
      </div>
      <div className="bg-white flex flex-col items-center">
        <ImageCarousel products={products} />
      </div>
      <div className="bg-white flex flex-col items-center">
        <ImageCarousel products={products} />
      </div>
      <div className="bg-white flex flex-col items-center">
        <ImageCarousel products={products} />
      </div>
      <div className="bg-white flex flex-col items-center pb-10">
        <ImageCarousel products={products} />
      </div>
    </div>
  );
};

export default Products;