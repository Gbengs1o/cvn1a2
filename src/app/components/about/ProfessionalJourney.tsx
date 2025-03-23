'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useDlmode } from '@/app/components/dlmode';

const ProfessionalJourney: React.FC = () => {
  const { darkMode } = useDlmode();

  return (
    <motion.div>
      <h3 className="text-xl font-semibold mb-4">Professional Journey</h3>
      <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800/70' : 'bg-white'} shadow-md`}>
        <p className="leading-relaxed">
          My development journey started with WordPress, where I learned the fundamentals of web development.
          As I grew professionally, I transitioned to modern JavaScript frameworks, focusing primarily on
          React and Next.js for frontend development, while using Node.js as my preferred backend solution.
          I also work with Python when needed, and can develop simple mobile applications using React Native.
          I'm constantly expanding my skill set to deliver the best possible solutions for every project.
        </p>
      </div>
    </motion.div>
  );
};

export default ProfessionalJourney;
