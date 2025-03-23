
// components/HeroSection.tsx

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { useDlmode } from '@/app/components/dlmode';

const HomePage = () => {
  const { darkMode } = useDlmode();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className={`min-h-screen w-full pt-24 transition-colors duration-500 ${
      darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between py-12 md:py-20 lg:py-24">
          
          {/* Text Content */}
          <motion.div 
            className="lg:max-w-xl z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-xl md:text-2xl font-medium mb-4"
            >
              <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Hi there 👋, I'm</span>
            </motion.h2>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">
                Ogunkoya Oluwagbenga David
              </span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl opacity-90 mb-8"
            >
              I build exceptional and accessible digital experiences for the web. 
              Specializing in <span className="font-semibold">React</span> and <span className="font-semibold">Next.js</span>, 
              I transform ideas into elegant solutions with clean code and intuitive design. I am also an AI expert both it's use 
              and integration into verious systems.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="/projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-lg font-medium transition-colors duration-300 ${
                  darkMode 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                }`}
              >
                View My Work
              </motion.a>
              
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-lg font-medium transition-colors duration-300 ${
                  darkMode 
                    ? 'bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-blue-900/20' 
                    : 'bg-transparent border-2 border-blue-500 text-blue-600 hover:bg-blue-50'
                }`}
              >
                Get In Touch
              </motion.a>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-4 mt-10"
            >
              <span className="text-sm uppercase tracking-wider opacity-70">Find me on</span>
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/Gbengs1o" // Replace with your GitHub URL
                  whileHover={{ y: -5, color: '#2563eb' }}
                  className={`text-2xl ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-blue-600'}`}
                  aria-label="GitHub"
                >
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/david-ogunkoya-aa31991b7/" // Replace with your LinkedIn URL
                  whileHover={{ y: -5, color: '#2563eb' }}
                  className={`text-2xl ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-blue-600'}`}
                  aria-label="LinkedIn"
                >
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
                  </svg>
                </motion.a>
                <motion.a
                  href="https://api.whatsapp.com/send?phone=2348050488519&text=To%20Dovekings%20(Your%20Message)" // Replace with your Twitter/X URL
                  whileHover={{ y: -5, color: '#2563eb' }}
                  className={`text-2xl ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-blue-600'}`}
                  aria-label="Whatsapp"
                >
                  

                  <svg
  stroke="currentColor"
  fill="currentColor"
  strokeWidth="0"
  viewBox="0 0 16 16"
  height="1em"
  width="1em"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M13.601 2.399A7.958 7.958 0 0 0 8 0C3.589 0 0 3.589 0 8c0 1.403.371 2.772 1.07 3.978L.007 16l4.144-1.088A7.946 7.946 0 0 0 8 16c4.411 0 8-3.589 8-8 0-2.137-.833-4.144-2.399-5.601zM8 14.5c-1.237 0-2.445-.329-3.5-.954l-.25-.147-2.456.645.656-2.398-.164-.261A6.436 6.436 0 0 1 1.5 8C1.5 4.42 4.42 1.5 8 1.5S14.5 4.42 14.5 8 11.58 14.5 8 14.5zm3.322-4.545c-.165-.083-.979-.482-1.132-.538-.152-.057-.263-.083-.374.083-.11.165-.428.538-.526.649-.097.11-.194.124-.359.041-.165-.083-.696-.256-1.327-.816a4.989 4.989 0 0 1-.884-1.079c-.083-.141-.007-.217.062-.298.063-.063.165-.165.232-.248a.996.996 0 0 0 .165-.264c.055-.11.028-.207-.014-.289-.041-.083-.374-.896-.514-1.23-.136-.326-.276-.282-.374-.287a7.92 7.92 0 0 0-.34-.007c-.125 0-.33.047-.503.232-.165.165-.656.641-.656 1.562s.673 1.813.766 1.938c.083.11 1.325 2.027 3.215 2.77.449.194.797.31 1.07.398.45.143.86.123 1.185.075.362-.054 1.118-.457 1.275-.898.157-.441.157-.819.11-.898-.048-.08-.152-.123-.318-.207z"></path>
</svg>



                </motion.a>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Image Container */}
          <motion.div 
            className="mt-12 lg:mt-0 lg:ml-8 w-full max-w-md lg:max-w-lg"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative w-full aspect-square">
              {darkMode ? (
                <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden shadow-xl shadow-blue-500/20">
                 

<Image 
   src="https://i.im.ge/2025/03/23/pUGjFz.swagjacket.png" // Replace with your dark mode image path
                    alt="swagjacke"
  layout="fill"
  unoptimized
  className="object-cover object-top"
  priority
/>



                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 mix-blend-overlay"></div>
                </div>
              ) : (
                <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden shadow-xl shadow-blue-500/10">
                  <Image 
                    src="https://i.im.ge/2025/03/23/pUGwWF.linkdin.png" // Replace with your light mode image path
                    alt="linkdin" 
                    width={500}
                    height={500}
                    unoptimized
                    className="w-full h-full object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 to-teal-200/30 mix-blend-overlay"></div>
                </div>
              )}
              
              {/* Background decoration elements */}
              <div className={`absolute -bottom-6 -right-6 w-4/5 h-4/5 rounded-xl ${
                darkMode ? 'bg-blue-600/10 border border-blue-500/20' : 'bg-blue-100/50 border border-blue-200'
              }`}></div>
              
              <div className={`absolute -top-6 -left-6 w-4/5 h-4/5 rounded-xl ${
                darkMode ? 'bg-teal-600/10 border border-teal-500/20' : 'bg-teal-100/50 border border-teal-200'
              }`}></div>
              
              {/* Floating dots decoration */}
              <div className="absolute top-1/4 -left-4 w-8 h-8">
                <div className={`w-2 h-2 rounded-full ${darkMode ? 'bg-blue-400' : 'bg-blue-500'}`}></div>
              </div>
              <div className="absolute bottom-1/3 -right-4 w-8 h-8">
                <div className={`w-3 h-3 rounded-full ${darkMode ? 'bg-teal-400' : 'bg-teal-500'}`}></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;