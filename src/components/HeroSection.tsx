import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="relative text-center py-20 px-4 sm:px-8 overflow-hidden">
      {/* Background glow blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[30%] left-1/2 w-[500px] h-[500px] bg-pink-500 opacity-20 blur-3xl rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-500 opacity-20 blur-2xl rounded-full animate-spin-slow" />
      </div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-500 via-blue-400 to-violet-600 bg-clip-text text-transparent drop-shadow-lg"
      >
         Expose scams. Share your truth.
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="mt-6 text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-xl mx-auto font-medium"
      >
        Share your experience. Warn others. Change the game for job seekers.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="mt-10 flex justify-center gap-5 flex-wrap"
      >
        {/* Post a Scam Button */}
        <Link
          to="/post-scam"
          className="relative inline-block px-6 py-3 font-semibold text-lg text-white rounded-full bg-gradient-to-r from-pink-500 to-red-500 shadow-lg
            hover:from-pink-600 hover:to-red-600 hover:shadow-[0_0_20px_#FF3C38] transition-all duration-300"
        >
          Post a Scam
        </Link>

        {/* Modern Explore Button */}
        <Link
  to="/scampanies"
  className="relative inline-block px-6 py-3 font-semibold text-lg rounded-full
    text-gray-900 dark:text-white 
    bg-white/70 dark:bg-white/10 
    border border-gray-300 dark:border-white/20
    backdrop-blur-md shadow-md
    hover:shadow-[0_0_16px_#38B6FF]
    hover:text-[#38B6FF] 
    hover:bg-white/90 dark:hover:bg-white/20
    transition-all duration-300"
>
  View Scampanies
</Link>

      </motion.div>
    </section>
  );
};

export default HeroSection;
