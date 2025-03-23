'use client';

import { ReactElement } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaWordpress } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiPython, SiVuedotjs, SiMongodb, SiFirebase } from 'react-icons/si';

// Define a type for the keys used in techIcons.
export type TechKey =
  | 'react'
  | 'nextjs'
  | 'node'
  | 'tailwind'
  | 'typescript'
  | 'python'
  | 'wordpress'
  | 'vue'
  | 'mongodb'
  | 'firebase';

// Define the techIcons mapping with type-safety.
export const techIcons: Record<TechKey, ReactElement> = {
  react: <FaReact className="text-blue-500" />,
  nextjs: <SiNextdotjs className="dark:text-white text-black" />,
  node: <FaNodeJs className="text-green-600" />,
  tailwind: <SiTailwindcss className="text-cyan-500" />,
  typescript: <SiTypescript className="text-blue-700" />,
  python: <SiPython className="text-yellow-600" />,
  wordpress: <FaWordpress className="text-blue-800" />,
  vue: <SiVuedotjs className="text-green-500" />,
  mongodb: <SiMongodb className="text-green-500" />,
  firebase: <SiFirebase className="text-orange-500" />,
  
};

// Component for project image and overlay links.
export const ImageSection = ({
  project,
  isImageLoaded
}: {
  project: any;
  isImageLoaded: boolean;
}) => {
  return (
    <div className="relative h-56 overflow-hidden">
      {isImageLoaded && (
        <Image
          src={project.image}
          alt={project.title}
          fill
          unoptimized
          className="object-cover transition-all duration-500"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
        <div className="flex space-x-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-all duration-300"
            aria-label="View GitHub repository"
          >
            <FiGithub size={20} className="text-white" />
          </a>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-all duration-300"
            aria-label="View live project"
          >
            <FiExternalLink size={20} className="text-white" />
          </a>
        </div>
        {project.featured && (
          <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-teal-400 text-white text-xs font-bold rounded-full">
            Featured
          </span>
        )}
      </div>
    </div>
  );
};

// Component for the header section.
export const HeaderSection = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
      <h1 className="text-5xl font-extrabold mb-4">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">
          My Projects
        </span>
      </h1>
      <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-teal-400 mx-auto mb-6"></div>
      <p className="max-w-2xl mx-auto text-lg opacity-90">
        A selection of my work across web and mobile development. Each project demonstrates my approach to solving problems and creating exceptional user experiences.
      </p>
    </motion.div>
  );
};

// Component for filter buttons.
export const FilterButtons = ({
  filterButtons,
  currentFilter,
  setFilter,
  darkMode
}: {
  filterButtons: { id: string; label: string }[];
  currentFilter: string;
  setFilter: (filter: string) => void;
  darkMode: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="flex flex-wrap justify-center gap-3 mb-12"
    >
      {filterButtons.map(button => (
        <button
          key={button.id}
          onClick={() => setFilter(button.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            currentFilter === button.id
              ? 'bg-gradient-to-r from-blue-600 to-teal-400 text-white shadow-md'
              : darkMode
              ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
          }`}
        >
          {button.label}
        </button>
      ))}
    </motion.div>
  );
};

// Component for an individual project card.
export const ProjectCard = ({
  project,
  darkMode,
  isImageLoaded
}: {
  project: any;
  darkMode: boolean;
  isImageLoaded: boolean;
}) => {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      className={`rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}
    >
      <ImageSection project={project} isImageLoaded={isImageLoaded} />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className={`text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.map((tech: TechKey, index: number) => (
            <div
              key={index}
              className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium ${
                darkMode ? 'bg-gray-700' : 'bg-gray-100'
              }`}
            >
              {techIcons[tech]}
              <span>{tech.charAt(0).toUpperCase() + tech.slice(1)}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
