import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ScampaniesPreviewSection from '../components/ScampaniesPreviewSection';
import JobXPPreviewSection from '../components/JobXPPreviewSection';
import FAQSection from '../components/FAQSection';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <main className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 py-8">
        <HeroSection />
        <AboutSection />
        <ScampaniesPreviewSection />

        {/* ✅ JobXP Preview Section */}
        <div className="space-y-6">
          <JobXPPreviewSection />
          <div className="text-center">
            <Link
              to="/job-xp"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              More JobXP
            </Link>
          </div>
        </div>

        <FAQSection />
      </div>
    </main>
  );
};

export default Home;
