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
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseDown = () => setIsDragging(false);
  const handleMouseMove = () => setIsDragging(true);
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
      className="w-full relative"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {products.map((product, index) => (
          <CarouselItem 
            key={index} 
            className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Link href={{
              pathname: `/products/${product.slug}`,
              query: { slug: product.slug },
            }}>
              <Card className="group relative overflow-hidden rounded-xl border-0 bg-gradient-to-b from-gray-800 to-gray-900 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-1">
                <CardContent className="relative flex flex-col items-center p-3 sm:p-6 h-[28vh] sm:h-[32vh] md:h-[38vh] xl:h-[34vh]">
                  {/* Categories Tags */}
                  <div className="absolute top-2 left-2 z-40 flex flex-wrap gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {product.categories.map((category, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="text-[10px] sm:text-xs px-2 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium shadow-lg"
                      >
                        {category.name}
                      </span>
                    ))}
                  </div>

                  {/* Product Image */}
                  <div className="relative w-full h-3/4 mb-2 sm:mb-4 transition-transform duration-300 group-hover:scale-105">
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
                  <div className="w-full text-center space-y-1 sm:space-y-2">
                    <h3 className="text-xs sm:text-sm md:text-base font-medium text-white/90 line-clamp-1 group-hover:text-white transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm sm:text-lg font-bold bg-gradient-to-r from-orange-400 to-rose-400 bg-clip-text text-transparent">
                      ₹{product.price.toFixed(2)}
                    </p>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </CardContent>
              </Card>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      
      {/* Custom Navigation Buttons */}
      <CarouselPrevious className="hidden lg:flex -left-4 sm:-left-12 bg-white/10 hover:bg-white/20" />
      <CarouselNext className="hidden lg:flex -right-4 sm:-right-12 bg-white/10 hover:bg-white/20" />
    </Carousel>
  )
}

export default ImageCarousel