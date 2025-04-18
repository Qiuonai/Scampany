import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';

const Home: React.FC = () => {
  return (
    <main className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Hero />
        <div className="mt-12">
          <Features />
        </div>
      </div>
    </main>
  );
};

export default Home;

