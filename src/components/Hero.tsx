// src/components/Hero.tsx
import React from 'react';

const Hero = () => {
  return (
    <section className="text-center py-20 bg-gray-100">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        🚨 Expose scams. Share your truth.
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Join Scampany — the platform where your job experience can protect others.
      </p>
      <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
        Get Started
      </button>
    </section>
  );
};

export default Hero;
