import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { primaryColor, accentColor } from '../utils/colors';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? `bg-white shadow-md py-2` 
          : `bg-transparent py-4`
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo />
        
        {/* Menu pour desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#fonctionnalites" className="text-gray-800 hover:text-primary font-medium transition-colors">
            Fonctionnalités
          </a>
          <a href="#comment-ca-marche" className="text-gray-800 hover:text-primary font-medium transition-colors">
            Comment ça marche
          </a>
          <a href="#modeles" className="text-gray-800 hover:text-primary font-medium transition-colors">
            Modèles
          </a>
          <a href="#temoignages" className="text-gray-800 hover:text-primary font-medium transition-colors">
            Témoignages
          </a>
          <a href="#contact" className="text-gray-800 hover:text-primary font-medium transition-colors">
            Contact
          </a>
          <button 
            className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-full transition-all transform hover:scale-105"
            style={{ backgroundColor: primaryColor }}
          >
            Demander une démo
          </button>
        </nav>
        
        {/* Bouton menu mobile */}
        <button 
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Menu mobile */}
      <div 
        className={`md:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '60px' }}
      >
        <nav className="flex flex-col items-center py-8 space-y-6">
          <a 
            href="#fonctionnalites" 
            className="text-gray-800 text-lg font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Fonctionnalités
          </a>
          <a 
            href="#comment-ca-marche" 
            className="text-gray-800 text-lg font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Comment ça marche
          </a>
          <a 
            href="#modeles" 
            className="text-gray-800 text-lg font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Modèles
          </a>
          <a 
            href="#temoignages" 
            className="text-gray-800 text-lg font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Témoignages
          </a>
          <a 
            href="#contact" 
            className="text-gray-800 text-lg font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
          <button 
            className="mt-4 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full w-4/5 text-center"
            style={{ backgroundColor: primaryColor }}
            onClick={() => setIsMenuOpen(false)}
          >
            Demander une démo
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;