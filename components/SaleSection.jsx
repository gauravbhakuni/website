"use client";
import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

const SaleSection = () => {
  // List of background images with unique ids
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

  // State to manage the current background index
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Automatically change the background every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  // Handlers for swipe gestures
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
    trackMouse: true, // Enable mouse dragging
  });

  const handlePrevClick = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? backgroundImages.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  // New function to handle dot click
  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
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
    <div className="relative w-full min-h-[75vh] md:min-h-[85vh] xl:min-h-[95vh] bg-black overflow-hidden">
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
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0"
          {...handlers}
        >
          {/* Background Image */}
          <Image
            src={backgroundImages[currentIndex].src}
            alt={backgroundImages[currentIndex].title}
            fill
            priority
            className="object-cover object-center sm:object-cover xl:object-contain z-0"
            style={{ backgroundColor: "#111111" }}
          />

          {/* Content Overlay - Adjusted for better mobile display */}
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="w-full px-4 py-6 sm:py-8 md:py-12 flex flex-col items-center justify-center text-white text-center">
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-2xl sm:text-4xl md:text-6xl font-bold mb-2 sm:mb-4"
              >
                {backgroundImages[currentIndex].title}
              </motion.h2>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-base sm:text-xl md:text-2xl text-gray-200 mb-4 sm:mb-8"
              >
                {backgroundImages[currentIndex].subtitle}
              </motion.p>
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="bg-white text-black px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-gray-200 transition-colors"
              >
                Shop Now
              </motion.button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows - Adjusted size for mobile */}
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

      {/* Dot Indicators - Adjusted position for mobile */}
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
