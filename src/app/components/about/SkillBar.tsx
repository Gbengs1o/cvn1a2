import React from 'react';

interface SkillBarProps {
  value: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ value }) => (
  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mt-2">
    <div 
      className="bg-gradient-to-r from-blue-600 to-teal-400 h-2.5 rounded-full"
      style={{ width: `${value}%` }}
    />
  </div>
);

export default SkillBar;
