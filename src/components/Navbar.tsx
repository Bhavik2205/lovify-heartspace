
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import LovifyLogo from './Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm py-2' : 'bg-transparent py-4'
        }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* <h1 className="text-4xl font-black tracking-tight gradient-text font-montserrat">
          Lov<span className="text-lovify-pink">i</span>fy
        </h1> */}
        <LovifyLogo />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm text-gray-700 font-medium link-hover">Features</a>
          <a href="#how-it-works" className="text-sm text-gray-700 font-medium link-hover">How It Works</a>
          <a href="#testimonials" className="text-sm text-gray-700 font-medium link-hover">Success Stories</a>
          <a href="#sign-up" className="button-primary">Get Early Access</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg rounded-b-2xl py-4 animate-fade-in">
          <div className="container-custom flex flex-col space-y-4">
            <a
              href="#features"
              className="text-gray-700 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-700 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Success Stories
            </a>
            <a
              href="#sign-up"
              className="button-primary text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Early Access
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
