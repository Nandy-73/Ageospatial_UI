
import { Menu, X, Linkedin } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black text-white fixed w-full top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          Ageospatial
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">About</a>
          <a href="#terms" className="text-gray-300 hover:text-white transition-colors duration-300">Terms</a>
          <a href="#policy" className="text-gray-300 hover:text-white transition-colors duration-300">Policy</a>
          <a href="#status" className="text-gray-300 hover:text-white transition-colors duration-300">Status</a>
          
          <a 
            href="#" 
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-300"
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
          <div className="absolute top-full left-0 w-full bg-black border-b border-gray-800 md:hidden">
            <nav className="flex flex-col space-y-4 p-4">
              <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300" onClick={toggleMenu}>About</a>
              <a href="#terms" className="text-gray-300 hover:text-white transition-colors duration-300" onClick={toggleMenu}>Terms</a>
              <a href="#policy" className="text-gray-300 hover:text-white transition-colors duration-300" onClick={toggleMenu}>Policy</a>
              <a href="#status" className="text-gray-300 hover:text-white transition-colors duration-300" onClick={toggleMenu}>Status</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
