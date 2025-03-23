// components/SkillsSection.tsx
'use client';
import { motion } from 'framer-motion';
import { SiNextdotjs, SiTailwindcss, SiWordpress, SiPython } from 'react-icons/si';
import { RiReactjsLine, RiNodejsLine, RiVuejsLine } from 'react-icons/ri';
import { useDlmode } from '@/app/components/dlmode';

const skillsVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
  }
};

const skillItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const SkillsSection = ({ isLoaded }: { isLoaded: boolean }) => {
  const { darkMode } = useDlmode();

  return (
    <section className={`w-full px-6 py-16 md:px-12 md:py-20 transition-colors duration-500 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            My Tech Stack
          </h2>
          <p className={`max-w-2xl mx-auto ${darkMode ? 'text-gray-200' : 'text-gray-600'}`}>
            I work with modern technologies to create seamless experiences across different platforms.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
          variants={skillsVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          {/* Next.js */}
          <SkillItem 
            darkMode={darkMode}
            icon={<SiNextdotjs size={30} className={darkMode ? 'text-white' : 'text-black'} />}
            name="Next.js"
          />
          
          {/* React */}
          <SkillItem 
            darkMode={darkMode}
            icon={<RiReactjsLine size={30} className="text-blue-500" />}
            name="React"
          />
          
          {/* Tailwind CSS */}
          <SkillItem 
            darkMode={darkMode}
            icon={<SiTailwindcss size={30} className="text-teal-500" />}
            name="Tailwind CSS"
          />
          
          {/* Node.js */}
          <SkillItem 
            darkMode={darkMode}
            icon={<RiNodejsLine size={30} className="text-green-600" />}
            name="Node.js"
          />
          
          {/* Vue.js */}
          <SkillItem 
            darkMode={darkMode}
            icon={<RiVuejsLine size={30} className="text-green-500" />}
            name="Vue.js"
          />
          
          {/* WordPress */}
          <SkillItem 
            darkMode={darkMode}
            icon={<SiWordpress size={30} className="text-blue-700" />}
            name="WordPress"
          />
          
          {/* Python */}
          <SkillItem 
            darkMode={darkMode}
            icon={<SiPython size={30} className="text-yellow-600" />}
            name="Python"
          />
          
          {/* React Native */}
          <SkillItem 
            darkMode={darkMode}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="currentColor" className="text-blue-500">
                <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
              </svg>
            }
            name="React Native"
          />
        </motion.div>
      </div>
    </section>
  );
};

// Component for each skill item to reduce repetition
const SkillItem = ({ 
  darkMode, 
  icon, 
  name 
}: { 
  darkMode: boolean; 
  icon: React.ReactNode; 
  name: string;
}) => {
  return (
    <motion.div variants={skillItemVariants} className="flex flex-col items-center">
      <div className={`w-16 h-16 flex items-center justify-center rounded-full shadow-sm mb-3 transition-colors duration-300 ${
        darkMode 
          ? 'bg-gray-700 shadow-gray-900/30' 
          : 'bg-white shadow-gray-200/80'
      }`}>
        {icon}
      </div>
      <h3 className={`font-medium transition-colors duration-300 ${
        darkMode ? 'text-white' : 'text-gray-800'
      }`}>{name}</h3>
    </motion.div>
  );
};

export default SkillsSection;