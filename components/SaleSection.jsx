"use client";
import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

const SaleSection = () => {
  const backgroundImages = [
    {
      id: "img1",
      src: "/assets/images/saleImage1.webp",
      title: "Summer Collection",
      subtitle: "Up to 40% off on selected items",
    },
    {
      id: "img2",
      src: "/assets/images/saleImage2.webp",
      title: "New Arrivals",
      subtitle: "Discover the latest trends",
    },
    {
      id: "img3",
      src: "/assets/images/saleImage3.webp",
      title: "Limited Edition",
      subtitle: "Exclusive designs for you",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) =>
        prev === backgroundImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setDirection(1);
      handleNextClick();
    },
    onSwipedRight: () => {
      setDirection(-1);
      handlePrevClick();
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const handlePrevClick = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? backgroundImages.length - 1 : prev - 1
    );
  };

  const handleNextClick = () => {
    setDirection(1);
    setCurrentIndex((prev) =>
      prev === backgroundImages.length - 1 ? 0 : prev + 1
    );
  };

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Slide animation — first slide fades in for faster LCP
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: currentIndex === 0 ? 1 : 0, // no opacity animation for first slide
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div
      className="relative w-full min-h-[75vh] md:min-h-[85vh] xl:min-h-[95vh] bg-black overflow-hidden"
      {...handlers}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.4 },
          }}
          className="absolute inset-0"
        >
          <Image
            src={backgroundImages[currentIndex].src}
            alt={backgroundImages[currentIndex].title}
            fill
            priority={currentIndex === 0} // only first slide is priority
            quality={80}
            sizes="100vw"
            className="object-cover object-center sm:object-cover xl:object-contain z-0"
            style={{ backgroundColor: "#111111" }}
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="w-full px-4 py-6 sm:py-8 md:py-12 flex flex-col items-center justify-center text-white text-center">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="text-2xl sm:text-4xl md:text-6xl font-bold mb-2 sm:mb-4"
              >
                {backgroundImages[currentIndex].title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="text-base sm:text-xl md:text-2xl text-gray-200 mb-4 sm:mb-8"
              >
                {backgroundImages[currentIndex].subtitle}
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="bg-white text-black px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-gray-200 transition-colors"
              >
                Shop Now
              </motion.button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrevClick}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black p-1.5 sm:p-2 rounded-full text-white transition-colors z-10"
      >
        <FaChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>
      <button
        onClick={handleNextClick}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black p-1.5 sm:p-2 rounded-full text-white transition-colors z-10"
      >
        <FaChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-3 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-1.5 sm:gap-2 z-10">
        {backgroundImages.map((image, index) => (
          <button
            key={image.id}
            onClick={() => handleDotClick(index)}
            className={`h-1.5 sm:h-2 transition-all duration-300 rounded-full ${
              currentIndex === index
                ? "w-6 sm:w-8 bg-white"
                : "w-1.5 sm:w-2 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SaleSection;
