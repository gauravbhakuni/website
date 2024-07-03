"use client";

import Image from "next/image";

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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Card, CardContent } from "@/components/ui/card"

import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const handleClick = (shoe) => {
  console.log(shoe.name);
};

const Products = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="mt-8">
      <div>
        <h1 className="text-center text-3xl md:text-5xl">All Collections</h1>
      </div>
      <div className="sm:container mt-6 h-[8vh] bg-black flex justify-between items-center">
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
            <option>Featured</option>
            <option>Price - Low to High</option>
            <option>Price - High to Low</option>
          </select>
        </div>
      </div>


      <div className="sm:container py-6">
        <div className="grid grid-cols-3 md:grid-cols-4">
          {shoes.map((shoe, index) => (
            <div className="p-1" key={index}>
              <Card className="h-full" onClick={() => handleClick(shoe)}>
                <CardContent className="relative flex flex-col items-center p-4 h-full">
                  <div className="hidden group-hover:flex absolute top-0 z-40 space-x-2 mt-4 justify-start">
                    {shoe.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-sm bg-blue-200 text-blue-800 opacity-70 rounded-sm px-2 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Image
                    src={shoe.image}
                    alt={shoe.name}
                    width={100}
                    height={100}
                    className="mb-4"
                  />
                  <span className="text-[0.7rem] md:text-[1rem] text-white text-center">{shoe.name}</span>
                  <span className="text-lg text-gray-300">₹{shoe.price.toFixed(2)}</span>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;