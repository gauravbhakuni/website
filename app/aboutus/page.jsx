"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { FaShieldAlt, FaUsers, FaAward } from "react-icons/fa";
import { useRef } from "react";

const AboutUs = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  const stats = [
    { number: "10K+", label: "Happy Customers", icon: FaUsers },
    { label: "Premium Quality", icon: FaShieldAlt },
    { label: "Award Winning", icon: FaAward },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Parallax Hero Section */}
      <div ref={ref} className="relative h-screen overflow-hidden">
        <motion.div 
          style={{ y }}
          className="absolute inset-0"
        >
          <Image
            src="/assets/images/nikeBlackCoolBg.webp"
            alt="Sneakers Collection"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" /> {/* Overlay */}
        </motion.div>

        <motion.div 
          style={{ opacity }}
          className="relative h-full flex flex-col justify-center items-center text-center px-4"
        >
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            Step Into Excellence
          </motion.h1>
          <motion.p 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed"
          >
            Where innovation meets style, and comfort meets performance
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-center"
        >
          <p className="text-sm mb-2">Scroll to explore</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-8 bg-white/50 mx-auto rounded-full"
          />
        </motion.div>
      </div>

      {/* Content Sections with Glass Morphism */}
      <div className="bg-gradient-to-b from-black via-gray-900 to-black">
        {/* Stats Section */}
        <div className="container mx-auto px-4 py-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="backdrop-blur-lg bg-white/10 p-8 rounded-2xl text-center transform hover:scale-105 transition-all duration-300"
              >
                <stat.icon className="text-4xl text-white/90 mx-auto mb-4" />
                {stat.number && (
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                )}
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="container mx-auto px-4 py-24">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Values Column */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white">Our Values</h3>
              <div className="space-y-4">
                <div className="backdrop-blur-lg bg-white/10 p-6 rounded-xl hover:bg-white/20 transition-colors">
                  <h4 className="font-semibold text-white mb-2">Innovation First</h4>
                  <p className="text-gray-300">
                    We continuously push boundaries to create footwear that combines cutting-edge technology with timeless design.
                  </p>
                </div>
                <div className="backdrop-blur-lg bg-white/10 p-6 rounded-xl hover:bg-white/20 transition-colors">
                  <h4 className="font-semibold text-white mb-2">Sustainable Practice</h4>
                  <p className="text-gray-300">
                    Our commitment to the environment drives us to use eco-friendly materials and sustainable manufacturing processes.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Promise Column */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white">Our Promise</h3>
              <div className="space-y-4">
                <div className="backdrop-blur-lg bg-white/10 p-6 rounded-xl hover:bg-white/20 transition-colors">
                  <h4 className="font-semibold text-white mb-2">Quality Assurance</h4>
                  <p className="text-gray-300">
                    Every pair undergoes rigorous quality checks to ensure durability and comfort that exceeds expectations.
                  </p>
                </div>
                <div className="backdrop-blur-lg bg-white/10 p-6 rounded-xl hover:bg-white/20 transition-colors">
                  <h4 className="font-semibold text-white mb-2">Customer First</h4>
                  <p className="text-gray-300">
                    Your satisfaction is our priority. We are dedicated to providing exceptional service and support at every step.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="container mx-auto px-4 py-24 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Join Our Journey
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            Experience the perfect blend of style and comfort with our premium collection.
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors text-lg">
            Explore Collection
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
