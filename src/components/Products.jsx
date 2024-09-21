/* eslint-disable no-unused-vars */
// hah om sai ram om bhaskaraya namaha om namaha sivaayaaa


import React from 'react';
import { useState } from 'react';
import { productItems } from '../utils/ProductData.js';

const ProductsSection = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <section id="products" className="bg-tertiary py-16">
      <div className="container mx-auto px-4 md:px-8">
        {/* Heading */}
        <h2 className="text-azure text-[28px] font-bold font-montserrat mb-8 text-center">
          Products
        </h2>

        {/* Product Cards */}
        <div className="flex flex-col md:flex-row justify-between md:space-x-6 space-y-6 md:space-y-0">
          {productItems.map((item, index) => (
            <div
              key={item.id}
              className="bg-saffron bg-opacity-10 p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300 ease-in-out relative"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              style={{ width: '100%', height: 'auto', minHeight: '600px' }} // Full-width on small screens
            >
              {/* Circular Image */}
              <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-6">
                <img
                  src={item.image}
                  alt={`Product ${item.id}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Description */}
              <p className="text-black text-[16px] mb-8 font-montserrat text-left">
                <span className="text-[24px] font-bold">{item.description.charAt(0)}</span>
                {item.description.slice(1)}
              </p>

              {/* CTA Button */}
              <button className="bg-azure text-[#FFF] text-[18px] font-semibold font-montserrat py-2 px-6 rounded-full hover:bg-opacity-70 transition duration-300 ease-in-out absolute bottom-6 left-1/2 transform -translate-x-1/2">
                Get Started
              </button>

              {/* Indicator for Hover (just the shadow, no color overlay) */}
              {hoverIndex === index && (
                <div className="absolute inset-0 rounded-lg shadow-2xl transition-all duration-300 ease-in-out"></div>
              )}
            </div>
          ))}
        </div>

        {/* Indicator for Hover (at the bottom of the section) */}
        <div className="flex justify-center mt-8 space-x-2">
          {productItems.map((item, index) => (
            <div
              key={item.id}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                hoverIndex === index ? 'bg-saffron w-4 h-4' : 'bg-gray-300'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
