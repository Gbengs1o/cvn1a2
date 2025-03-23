'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaWordpress, FaMobile } from 'react-icons/fa';
import { SiTypescript, SiPython, SiVuedotjs, SiAngular } from 'react-icons/si';
import { useDlmode } from '@/app/components/dlmode';
import { JSX } from 'react/jsx-runtime';

interface Skill {
  name: string;
  icon: JSX.Element;
  level: number;
}

const AdditionalSkills: React.FC = () => {
  const { darkMode } = useDlmode();
  const secondarySkills: Skill[] = [
    { name: 'TypeScript', icon: <SiTypescript size={30} className="text-blue-700" />, level: 80 },
    { name: 'Python', icon: <SiPython size={30} className="text-yellow-600" />, level: 75 },
    { name: 'WordPress', icon: <FaWordpress size={30} className="text-blue-800" />, level: 80 },
    { name: 'React Native', icon: <FaMobile size={30} className="text-purple-600" />, level: 70 },
    { name: 'Vue.js', icon: <SiVuedotjs size={30} className="text-green-500" />, level: 65 },
    { name: 'Angular', icon: <SiAngular size={30} className="text-red-600" />, level: 60 },
  ];

  return (
    <motion.div>
      <h3 className="text-xl font-semibold mt-6 mb-4">Additional Skills</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {secondarySkills.map((skill, index) => (
          <div 
            key={index} 
            className={`p-3 rounded-lg ${darkMode ? 'bg-gray-800/50' : 'bg-gray-100'} flex flex-col items-center text-center`}
          >
            {skill.icon}
            <span className="mt-2 font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default AdditionalSkills;
