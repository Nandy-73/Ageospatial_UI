
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-slate-900 text-white fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold">
          Ageospatial
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#use-cases" className="text-gray-300 hover:text-white transition-colors duration-300">Use cases</a>
          <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">About</a>
          <a href="#blog" className="text-gray-300 hover:text-white transition-colors duration-300">Blog</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-slate-900 md:hidden">
            <nav className="flex flex-col space-y-4 p-4">
              <a href="#use-cases" className="text-gray-300 hover:text-white transition-colors duration-300" onClick={toggleMenu}>Use cases</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300" onClick={toggleMenu}>About</a>
              <a href="#blog" className="text-gray-300 hover:text-white transition-colors duration-300" onClick={toggleMenu}>Blog</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300" onClick={toggleMenu}>Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
