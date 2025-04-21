// src/components/Header.tsx
import React, { useEffect, useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem('theme') === 'dark'
  );

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          🚀 Scampany
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 font-medium items-center">
          {[
            { path: "/", label: "Home" },
            { path: "/scampanies", label: "Scampanies" },
            { path: "/post-scam", label: "Post Scam" },
            { path: "/job-xp", label: "JobXP" },
            { path: "/challenge", label: "Challenge" },
            { path: "/contact", label: "Contact" },
          ].map((link, idx) => (
            <Link
              key={idx}
              to={link.path}
              className="text-gray-800 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-300 transition"
            >
              {link.label}
            </Link>
          ))}

          {/* Dark Mode Toggle */}
          <button onClick={toggleDarkMode} className="ml-4">
            {isDarkMode ? (
              <Sun size={20} className="text-yellow-300" />
            ) : (
              <Moon size={20} className="text-gray-800" />
            )}
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button onClick={toggleDarkMode}>
            {isDarkMode ? (
              <Sun size={20} className="text-yellow-300" />
            ) : (
              <Moon size={20} className="text-gray-800" />
            )}
          </button>
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 py-2 space-y-3 font-medium">
          {[
            { path: "/", label: "Home" },
            { path: "/scampanies", label: "Scampanies" },
            { path: "/post-scam", label: "Post Scam" },
            { path: "/job-xp", label: "JobXP" },
            { path: "/challenge", label: "Challenge" },
            { path: "/contact", label: "Contact" },
          ].map((link, idx) => (
            <Link
              key={idx}
              to={link.path}
              onClick={toggleMenu}
              className="block text-gray-800 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-300 transition"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;




