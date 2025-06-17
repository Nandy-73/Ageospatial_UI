
import { Menu, X, Linkedin } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-transparent text-white fixed w-full top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="text-2xl font-light">
          Ageospatial
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-12">
          <a href="#use-cases" className="text-gray-300 hover:text-white transition-colors duration-300 font-light">Use cases</a>
          <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300 font-light">About</a>
          <a href="#blog" className="text-gray-300 hover:text-white transition-colors duration-300 font-light">Blog</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300 font-light">Contact</a>
          
          <a 
            href="#" 
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-300 ml-6"
          >
            <Linkedin className="text-black" size={20} />
          </a>
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
          <div className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-md border-b border-gray-800 md:hidden">
            <nav className="flex flex-col space-y-4 p-6">
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
