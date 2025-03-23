'use client';

import React from 'react';
import { motion } from 'framer-motion';

import ImageSection from '@/app/components/about/ImageSection';
import ExpertiseSection from '@/app/components/about/ExpertiseSection';
import AdditionalSkills from '@/app/components/about/AdditionalSkills';
import ProfessionalJourney from '@/app/components/about/ProfessionalJourney';
import GetInTouchButton from '@/app/components/about/GetInTouchButton';


import { useDlmode } from '@/app/components/dlmode';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const About: React.FC = () => {
  const { darkMode } = useDlmode();

  return (
    <main>
    <div className={`min-h-screen w-full transition-colors duration-500 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'}`}>
     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <ImageSection />
          
          {/* Content Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl font-extrabold mb-2">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">
                  About Me
                </span>
              </h1>
              <div className={`h-1 w-24 mb-6 ${darkMode ? 'bg-blue-500' : 'bg-teal-400'}`}></div>
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-3xl font-bold">
              Ogunkoya Oluwagbenga David
            </motion.h2>
            
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-2">Fullstack Developer</h3>
              <p className="text-lg leading-relaxed mb-6 opacity-90">
                I am a passionate fullstack developer with expertise in modern web technologies. 
                My journey began with WordPress, but I've evolved to specialize in React and Next.js 
                ecosystems. I bring ideas to life with clean, efficient code and intuitive user experiences. I am also
                a very good at converting figma designs into clean and responsive sites that resemble the design in every detail. 
              </p>
            </motion.div>

            {/* Expertise Section */}
            <motion.div variants={itemVariants}>
              <ExpertiseSection />
            </motion.div>

            {/* Additional Skills Section */}
            <motion.div variants={itemVariants}>
              <AdditionalSkills />
            </motion.div>

            {/* Professional Journey */}
            <motion.div variants={itemVariants}>
              <ProfessionalJourney />
            </motion.div>



            {/* Get In Touch Button */}
            <motion.div variants={itemVariants}>
              <GetInTouchButton />
            </motion.div>
          </motion.div>

          
            {/* imageside */}

            
        </div>
      </div>
   
    </div>
     </main>
  );
};

export default About;
