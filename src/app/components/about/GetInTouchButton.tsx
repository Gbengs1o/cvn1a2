'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';


const GetInTouchButton: React.FC = () => {
  return (
       
    <motion.div className="pt-6">
      {/* Using Next.js Link for smooth client-side navigation */}
      <Link href="/contact" passHref>
      <button className="bg-gradient-to-r from-blue-600 to-teal-400 hover:from-blue-700 hover:to-teal-500 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-lg">
        Get In Touch
      </button>
      </Link>
    </motion.div>
    
  );
};

export default GetInTouchButton;
