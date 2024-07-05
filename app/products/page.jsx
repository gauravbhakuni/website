"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { urlFor } from "@/app/lib/sanity";

import { getData, getAllData } from "@/components/GetData";
import ImageCarousel from "@/components/ImageCarousel";
import Link from "next/link";

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
import { Card, CardContent } from "@/components/ui/card";

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

      <div className='h-full'>
            <h1 className='text-black text-5xl text-center py-8'>All Products</h1>
            <div className='h-full grid grid-cols-2 md:grid-cols-4 gap-6 text-black p-8'>
                {products.map((product) => (
                    <Link href={{
                        pathname: `/products/${product.slug}`,
                        query: { slug: product.slug },
                    }}
                    >
                        <Card className='h-[24vh] sm:h-[32vh] md:h-[38vh] xl:h-[34vh] bg-black/80 border border-black/10 group'>
                            <CardContent className="relative flex flex-col items-center p-4 h-full">
                                <div className="hidden group-hover:flex absolute top-0 z-40 space-x-2 mt-4 justify-start">
                                    {product.categories.map((category, tagIndex) => (
                                        <span key={tagIndex} className="text-sm bg-blue-200 text-blue-800 opacity-70 rounded-sm px-2 py-1">
                                            {category.name}
                                        </span>
                                    ))}
                                </div>
                                <Image
                                    src={urlFor(product.images[0]).url()}
                                    alt={product.name}
                                    width={100}
                                    height={100}
                                    className="mb-4"
                                />
                                <span className="text-[0.7rem] md:text-[1rem] text-white text-center">{product.name}</span>
                                <span className="text-lg text-gray-300">₹{product.price.toFixed(2)}</span>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>

    </div>
  );
};

export default Products;