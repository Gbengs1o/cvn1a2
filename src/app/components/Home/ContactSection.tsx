'use client';
import { motion } from 'framer-motion';
import { useDlmode } from '@/app/components/dlmode';
import Link from 'next/link';

const ContactSection = ({ isLoaded }: { isLoaded: boolean }) => {
  const { darkMode } = useDlmode();

  return (
    <section 
      className={`w-full px-6 py-16 md:px-12 md:py-24 transition-colors duration-500 
      ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-b from-gray-50 to-white'}`}
    >
      <motion.div 
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={`text-3xl md:text-4xl font-extrabold mb-6 
          ${darkMode ? 'text-white' : 'text-gray-900'}`}
        >
          Ready to bring your ideas to life?
        </h2>
        <p className={`text-xl mb-8 max-w-2xl mx-auto 
          ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}
        >
          Let's collaborate to create something amazing together. I'm currently available for freelance work and job opportunities.
        </p>

        {/* Using Next.js Link for smooth client-side navigation */}
        <Link href="/contact" passHref>
          <motion.a
            whileHover={{ scale: 1.07, boxShadow: '0px 8px 20px rgba(0,0,0,0.15)' }}
            whileTap={{ scale: 0.95 }}
            className={`px-10 py-4 font-semibold rounded-lg shadow-md 
              transition-all duration-300
              ${darkMode 
                ? 'bg-gradient-to-r from-blue-600 to-teal-500 text-white hover:from-blue-700 hover:to-teal-600' 
                : 'bg-blue-600 text-white hover:bg-blue-700'}`}
          >
            Get In Touch
          </motion.a>
        </Link>

      </motion.div>
    </section>
  );
};

export default ContactSection;
