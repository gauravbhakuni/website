"use client";
import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const SaleSection = () => {
  // List of background images with unique ids
  const backgroundImages = [
    { 
      id: 'img1', 
      src: 'assets/images/saleImage1.webp',
      title: "Summer Collection",
      subtitle: "Up to 40% off on selected items"
    },
    { 
      id: 'img2', 
      src: 'assets/images/saleImage2.webp',
      title: "New Arrivals",
      subtitle: "Discover the latest trends"
    },
    { 
      id: 'img3', 
      src: 'assets/images/saleImage3.webp',
      title: "Limited Edition",
      subtitle: "Exclusive designs for you"
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
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="relative w-full min-h-[50vh] md:min-h-[80vh] xl:min-h-[95vh] bg-black overflow-hidden">
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
            opacity: { duration: 0.2 }
          }}
          className="absolute inset-0"
          {...handlers}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${backgroundImages[currentIndex].src})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />

          {/* Content Overlay */}
          <div className="absolute inset-0 bg-black/40">
            <div className="h-full flex flex-col items-center justify-center text-white text-center px-4">
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold mb-4"
              >
                {backgroundImages[currentIndex].title}
              </motion.h2>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-200 mb-8"
              >
                {backgroundImages[currentIndex].subtitle}
              </motion.p>
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
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
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full text-white transition-colors z-10"
      >
        <FaChevronLeft size={24} />
      </button>
      <button
        onClick={handleNextClick}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full text-white transition-colors z-10"
      >
        <FaChevronRight size={24} />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {backgroundImages.map((image, index) => (
          <button
            key={image.id}
            onClick={() => handleDotClick(index)}
            className={`h-2 transition-all duration-300 rounded-full ${
              currentIndex === index 
                ? 'w-8 bg-white' 
                : 'w-2 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SaleSection;
