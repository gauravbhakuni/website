"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import Link from "next/link";
import { urlFor } from "@/app/lib/sanity";

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"



const ImageCarousel = ({ products }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => {
    setIsDragging(false);
  };

  const handleMouseMove = () => {
    setIsDragging(true);
  };

  const handleClick = (name) => {
    if (!isDragging) {
      console.log("Card clicked:", name);
    }
  };

  return (
    
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full smm:max-w-[50vh] sm:max-w-[100vh] xl:max-w-[150vh] bg-black overflow-hidden md:overflow-visible"
      >
        <CarouselContent>
          {products.map((product, index) => (
            <CarouselItem key={index} className="basis-1/2 sm:basis-1/2 lg:basis-1/4 xl:basis-1/5 group">
              <div className="p-1">
                <Link href={{
                  pathname: `/products/${product.slug}`,
                  query: { slug: product.slug },                  
                }}
                >
                  <Card className="h-[32vh] md:h-[38vh] xl:h-[34vh]" onClick={() => handleClick(product.name)}>
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
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="px-auto" />
        <CarouselNext className="px-auto" />
      </Carousel>
  )
}
export default ImageCarousel