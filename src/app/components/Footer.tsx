'use client';
import { FiGithub, FiLinkedin} from 'react-icons/fi';
import { useDlmode } from '@/app/components/dlmode';
import { FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const { darkMode } = useDlmode();

  return (
    <footer className={`w-full px-6 py-12 md:px-12 transition-colors duration-500 
      ${darkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-50 text-gray-700'}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-600/20 pb-6">
          <div className="text-center md:text-left">
            <span className="font-extrabold text-3xl bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">
              OD
            </span>
            <p className="mt-2 text-sm md:text-base">
              Crafting digital experiences with passion & precision.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a 
              href="https://github.com/Gbengs1o" 
              className="transition-transform transform hover:scale-110 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <FiGithub size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/david-ogunkoya-aa31991b7/" 
              className="transition-transform transform hover:scale-110 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <FiLinkedin size={24} />
            </a>
            <a 
              href="https://www.tiktok.com/@.dovekings?_t=8p5D50dlykw&_r=1" 
              className="transition-transform transform hover:scale-110 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <FaTiktok size={24} />
            </a>
            <a 
              href="https://www.youtube.com/@dovekings" 
              className="transition-transform transform hover:scale-110 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <FaYoutube size={24} />
            </a>
            <a 
              href="https://api.whatsapp.com/send?phone=2348050488519&text=To%20Dovekings%20(Your%20Message)" 
              className="transition-transform transform hover:scale-110 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <FaWhatsapp size={24} />
            </a>
            <a 
              href="https://www.instagram.com/dovekings_of_tech/" 
              className="transition-transform transform hover:scale-110 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center pt-6 text-sm opacity-75">
          <p>
            © {new Date().getFullYear()} Oluwagbenga David. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
