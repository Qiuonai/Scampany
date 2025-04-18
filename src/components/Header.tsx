// src/components/Header.tsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          🚀 Scampany
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 font-medium">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/scampanies" className="hover:text-blue-500">Scampanies</Link>
          <Link to="/post-scam" className="hover:text-blue-500">Post Scam</Link>
          <Link to="/job-xp" className="hover:text-blue-500">JobXP</Link>
          <Link to="/challenge" className="hover:text-blue-500">Challenge</Link>
          <Link to="/contact" className="hover:text-blue-500">Contact</Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 py-2 space-y-3 font-medium">
          <Link to="/" onClick={toggleMenu} className="block">Home</Link>
          <Link to="/scampanies" onClick={toggleMenu} className="block">Scampanies</Link>
          <Link to="/post-scam" onClick={toggleMenu} className="block">Post Scam</Link>
          <Link to="/job-xp" onClick={toggleMenu} className="block">JobXP</Link>
          <Link to="/challenge" onClick={toggleMenu} className="block">Challenge</Link>
          <Link to="/contact" onClick={toggleMenu} className="block">Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Header;


