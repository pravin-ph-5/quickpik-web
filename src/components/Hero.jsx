/* eslint-disable no-unused-vars */
// hah om sai ram om bhaskarayaa namaha om namaha sivayaa

import React from 'react';
import { useState, useEffect } from "react";
import { heroItems } from "../utils/HeroData.js";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic loop to change items every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="bg-tertiary py-16">
      <div className="container px-4  mx-auto flex flex-col lg:flex-row justify-between items-center">
        
        {/* Left Side: Text and CTA */}
        <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
          {/* Container for headline and description with fixed height */}
          <div className="lg:h-40 mb-8">
            <h1 className="text-azure text-[28px] font-bold font-montserrat mb-4 text-center lg:text-left">
              {heroItems[currentIndex].headline}
            </h1>
            <p className="text-[16px] text-black font-montserrat text-center lg:text-left">
              {heroItems[currentIndex].description}
            </p>
          </div>

          {/* Call to Action Button */}
          <div className="flex justify-center lg:justify-start">
            <button className="bg-azure text-[#fff] text-[20px] font-semibold font-montserrat py-2 px-6 rounded-full hover:bg-saffron bg-opacity-70 transition duration-300 ease-in-out">
              Join Our Waitlist
            </button>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="lg:w-80 w-60 h-60 lg:h-80 lg:rounded-full overflow-hidden border-4 border-azure shadow-lg shadow-azure/50 hover:shadow-xl transition duration-300 ease-in-out">
          <img
            src={heroItems[currentIndex].image}
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Circle Indicator */}
      <div className="flex justify-center mt-8">
        {heroItems.map((item, index) => (
          <div
            key={item.id}
            className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-azure w-4 h-4" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
