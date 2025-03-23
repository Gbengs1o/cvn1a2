'use client';

import React, { JSX } from 'react';
import { motion } from 'framer-motion';
import SkillBar from './SkillBar';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import { useDlmode } from '@/app/components/dlmode';

interface Skill {
  name: string;
  icon: JSX.Element;
  level: number;
}

const ExpertiseSection: React.FC = () => {
  const { darkMode } = useDlmode();
  const primarySkills: Skill[] = [
    { name: 'React', icon: <FaReact size={30} className="text-blue-500" />, level: 95 },
    { name: 'Next.js', icon: <SiNextdotjs size={30} className="text-black dark:text-white" />, level: 90 },
    { name: 'Node.js', icon: <FaNodeJs size={30} className="text-green-600" />, level: 85 },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={30} className="text-cyan-500" />, level: 90 },
  ];

  return (
    <motion.div>
      <h3 className="text-xl font-semibold mb-4">My Expertise</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {primarySkills.map((skill, index) => (
          <div 
            key={index} 
            className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md transition-all duration-300 hover:shadow-lg`}
          >
            <div className="flex items-center gap-3 mb-2">
              {skill.icon}
              <span className="font-medium">{skill.name}</span>
            </div>
            <SkillBar value={skill.level} />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ExpertiseSection;
