
import { Heart, Twitter, Instagram, Facebook } from 'lucide-react';
import LovifyLogo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-lovify-black text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="mb-4">
              {/* <h2 className="text-2xl font-extrabold gradient-text">Lovify</h2> */}
              <LovifyLogo />
            </div>
            <p className="text-gray-400 mb-4">
              A modern dating platform designed to create meaningful connections in a digital world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Safety Tips</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Community Guidelines</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Intellectual Property</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 mb-1 pt-4 flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0 md:space-x-6">
          <div className="flex items-center space-x-4">
            <span className="text-white font-semibold text-base mr-2">
              Get the app!
            </span>

            {/* Google Play Logo */}
            <a href="#" className="inline-block">
              <img
                src="/GetItOnGooglePlay_Badge_Web_color_English.png"
                alt="Get it on Google Play"
                className="h-12 w-auto"
              />
            </a>

            {/* App Store Logo */}
            <a href="#" className="inline-block">
              <img
                src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                alt="Download on the App Store"
                className="h-12 w-auto"
              />
            </a>
          </div>
        </div>


        <div className="border-t border-gray-800 mt-6 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Lovify. All rights reserved.
          </p>

          <div className="flex items-center text-gray-400 text-sm">
            <span>Built with </span>
            <Heart className="w-4 h-4 mx-1 text-lovify-pink" fill="#FF5E8E" />
            <span>in India</span>
            <span className="ml-1 text-lg">🇮🇳</span>
            <span className="ml-1"> to spark real connections</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
