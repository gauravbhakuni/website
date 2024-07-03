"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import Link from "next/link"; // Import Link from Next.js

import { BsArrowRightCircleFill } from "react-icons/bs";
import { BsArrowDownRightCircleFill } from "react-icons/bs";

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

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const NewLaunches = () => {

  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => {
    setIsDragging(false);
  };

  const handleMouseMove = () => {
    setIsDragging(true);
  };

  const handleClick = (shoe) => {
    if (!isDragging) {
      console.log("Card clicked:", shoe.name);
      // Add your navigation or other onClick logic here
    }
  };

  return (
    <div className="bg-black flex flex-col items-center h-[60vh] sm:h-[80vh] smm:pt-24 sm:pt-16 md:pt-20 xl:pt-24">
      <h1 className="text-white text-4xl sm:text-6xl text-left pb-6">New Launches</h1>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full smm:max-w-[50vh] sm:max-w-[100vh] xl:max-w-[150vh] bg-black overflow-hidden md:overflow-visible"
      >
        <CarouselContent>
          {shoes.map((shoe, index) => (
            <CarouselItem key={index} className="basis-1/2 sm:basis-1/2 lg:basis-1/4 xl:basis-1/5 group">
              <div className="p-1">
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
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="px-auto" />
        <CarouselNext className="px-auto" />
      </Carousel>
      <div className="pt-8 sm:pt-16">
        <h1 className="px-4 text-xl sm:text-3xl md:text-5xl text-orange-400">Step up your style game with our latest collection</h1>
      </div>
    </div>
  )
}

export default NewLaunches;
