// components/Navbar.tsx
'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMoon, FiSun, FiGithub, FiLinkedin, FiTwitter, FiMenu, FiX } from 'react-icons/fi';
import { useDlmode } from '@/app/components/dlmode';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaWhatsapp } from 'react-icons/fa';

const Navbar = () => {
  const { darkMode, toggleTheme } = useDlmode();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <nav 
        className={`fixed w-full py-4 px-6 md:px-12 flex items-center justify-between transition-all duration-500 z-30 ${
          isScrolled 
            ? darkMode 
              ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg shadow-black/10' 
              : 'bg-white/95 backdrop-blur-sm shadow-lg shadow-gray-200/60' 
            : darkMode 
              ? 'bg-gray-900' 
              : 'bg-white'
        }`}
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2"
        >
          <Link href="/">
            <span className="font-bold text-2xl bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
              OD
            </span>
          </Link>
          <span className={`hidden sm:inline-block font-medium transition-colors duration-300 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Oluwagbenga David
          </span>
        </motion.div>
        
        <div className="flex items-center space-x-4 md:space-x-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors duration-300 ${
              darkMode 
                ? 'bg-gray-700/80 text-gray-200 hover:bg-gray-600/80' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </motion.button>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6 font-medium">
            <NavLink href="/" label="Home" active={pathname === '/'} darkMode={darkMode} />
            <NavLink href="/about" label="About" active={pathname === '/about'} darkMode={darkMode} />
            <NavLink href="/projects" label="Projects" active={pathname === '/projects'} darkMode={darkMode} />
            <NavLink href="/contact" label="Contact" active={pathname === '/contact'} darkMode={darkMode} />
           
          </div>
          
          <Link href="/aichat">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`hidden md:block px-5 py-2 font-medium rounded-lg transition-colors duration-300 ${
      darkMode 
        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
        : 'bg-blue-500 hover:bg-blue-600 text-white'
    }`}
  >
    Chat with my personal assistant (Ai)
  </motion.button>
</Link>

          
          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleMobileMenu}
            className={`md:hidden p-2 rounded-full transition-colors duration-300 ${
              darkMode 
                ? 'bg-gray-700/80 text-gray-200 hover:bg-gray-600/80' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </motion.button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`fixed top-16 left-0 right-0 z-20 p-4 transition-colors duration-300 shadow-lg ${
              darkMode ? 'bg-gray-900 shadow-gray-950/30' : 'bg-white shadow-gray-200/80'
            }`}
          >
            <div className="flex flex-col space-y-4">
              <MobileNavLink href="/" label="Home" active={pathname === '/'} darkMode={darkMode} onClick={() => setMobileMenuOpen(false)} />
              <MobileNavLink href="/about" label="About" active={pathname === '/about'} darkMode={darkMode} onClick={() => setMobileMenuOpen(false)} />
              <MobileNavLink href="/projects" label="Projects" active={pathname === '/projects'} darkMode={darkMode} onClick={() => setMobileMenuOpen(false)} />
              <MobileNavLink href="/contact" label="Contact" active={pathname === '/contact'} darkMode={darkMode} onClick={() => setMobileMenuOpen(false)} />
              <MobileNavLink href="/aichat" label="Aichat" active={pathname === '/aichat'} darkMode={darkMode} onClick={() => setMobileMenuOpen(false)} />
              
          

              
              <div className="pt-2 flex justify-center space-x-6">
                <SocialLink 
                  href="https://github.com/Gbengs1o" 
                  icon={<FiGithub size={20} />} 
                  darkMode={darkMode} 
                  label="GitHub"
                />
                <SocialLink 
                  href="https://www.linkedin.com/in/david-ogunkoya-aa31991b7/" 
                  icon={<FiLinkedin size={20} />} 
                  darkMode={darkMode} 
                  label="LinkedIn"
                />
                <SocialLink 
                  href="https://api.whatsapp.com/send?phone=2348050488519&text=To%20Dovekings%20(Your%20Message)" 
                  icon={<FaWhatsapp size={20} />} 
                  darkMode={darkMode} 
                  label="Whatsapp"
                />
              </div>
          
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Desktop Navigation Link Component
const NavLink = ({ href, label, active, darkMode }: { href: string; label: string; active: boolean; darkMode: boolean }) => (
  <Link href={href} className={`relative transition-colors duration-300 ${
    active 
      ? darkMode ? 'text-white' : 'text-blue-600'
      : darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-500'
  }`}>
    {label}
    {active && (
      <motion.span
        layoutId="activeIndicator"
        className={`absolute -bottom-1 left-0 right-0 h-0.5 ${darkMode ? 'bg-blue-400' : 'bg-blue-500'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    )}
  </Link>
);

// Mobile Navigation Link Component
const MobileNavLink = ({ 
  href, 
  label, 
  active, 
  darkMode,
  onClick
}: { 
  href: string; 
  label: string; 
  active: boolean; 
  darkMode: boolean;
  onClick: () => void;
}) => (
  <Link
    href={href}
    onClick={onClick}
    className={`py-2 px-4 rounded-lg transition-colors duration-300 ${
      active 
        ? darkMode 
          ? 'bg-gray-800 text-white' 
          : 'bg-gray-100 text-blue-600'
        : darkMode 
          ? 'text-gray-300 hover:bg-gray-800 hover:text-white' 
          : 'text-gray-700 hover:bg-gray-100 hover:text-blue-500'
    }`}
  >
    {label}
  </Link>
);

// Social Link Component for Mobile Menu
const SocialLink = ({ 
  href, 
  icon, 
  darkMode,
  label
}: { 
  href: string; 
  icon: React.ReactNode; 
  darkMode: boolean;
  label: string;
}) => (
  <motion.a
    href={href}
    aria-label={label}
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
    className={`p-2 rounded-full transition-colors duration-300 ${
      darkMode 
        ? 'text-gray-400 hover:text-white' 
        : 'text-gray-600 hover:text-blue-500'
    }`}
  >
    {icon}
  </motion.a>
);

export default Navbar;