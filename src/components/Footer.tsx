// src/components/Footer.tsx
import React from 'react';
import { Facebook, Twitter, Instagram, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          {/* Brand & About */}
          <div>
            <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">Scampany</h2>
            <p className="text-sm leading-relaxed">
              Empowering professionals by exposing scams and sharing real job experiences. Let's make the job market more transparent.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/scampanies" className="hover:underline">Scampanies</Link></li>
              <li><Link to="/post-scam" className="hover:underline">Post Scam</Link></li>
              <li><Link to="/job-xp" className="hover:underline">JobXP</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
              
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:underline">About</Link></li>
              <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Connect with us</h3>
            <div className="flex space-x-4 mt-2">
              {[Facebook, Twitter, Instagram, Github, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 dark:border-gray-600 
                             transition-all duration-300 ease-in-out 
                             hover:bg-blue-500 hover:text-white 
                             hover:shadow-lg hover:scale-110"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider & Footer Bottom */}
        <div className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-6 text-center text-sm">
          &copy; {new Date().getFullYear()} Scampany. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;


