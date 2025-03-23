// components/ProjectsSection.tsx
'use client';

import { motion, Variants } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { useDlmode } from '@/app/components/dlmode';
import Link from 'next/link';

interface Project {
  id: number;
  title: string;
  description: string;
  lightImage: string;
  darkImage: string;
  techs: { name: string; bgColor: string; lightBgColor: string }[];
  projectLink: string;
  githubLink: string;
  animationDelay: number;
}

const projectData: Project[] = [
  {
    id: 1,
    title: 'Dovekings',
    description: 'This is a start up of Mine with the goal of utilizing AI and other technologies to 2x the rate and efficiency to which things will be done in various fields.',
    lightImage: 'https://i.im.ge/2025/03/23/pUe1b9.Dovekings.png',
    darkImage: 'https://i.im.ge/2025/03/23/pUe1b9.Dovekings.png',
    techs: [
      { name: 'Next.js', bgColor: 'bg-blue-600', lightBgColor: 'bg-blue-500' },
      { name: 'Node.js', bgColor: 'bg-teal-600', lightBgColor: 'bg-teal-500' },
    ],
    projectLink: 'https://dovekings.com/',
    githubLink: 'https://github.com/Gbengs1o/dovekings1.0backendgrogfree',
    animationDelay: 0.2,
  },
  {
    id: 2,
    title: 'getin2school',
    description: 'This is also another startup of mine where the goal is simple use the advancements in technology for example AI to increase learning among student..',
    lightImage: 'https://i.im.ge/2025/03/23/pUerZ6.getin2school.png',
    darkImage: 'https://i.im.ge/2025/03/23/pUerZ6.getin2school.png',
    techs: [
      { name: 'React', bgColor: 'bg-blue-600', lightBgColor: 'bg-blue-500' },
      { name: 'Python', bgColor: 'bg-purple-600', lightBgColor: 'bg-purple-500' },
    ],
    projectLink: 'https://getin2school.vercel.app/',
    githubLink: 'https://github.com/Gbengs1o/getin2school',
    animationDelay: 0.4,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

interface ProjectCardProps {
  project: Project;
  darkMode: boolean;
  isLoaded: boolean;
}

const ProjectCard = ({ project, darkMode, isLoaded }: ProjectCardProps) => (
  <motion.div
    className={`rounded-xl overflow-hidden transition-all duration-300 ${
      darkMode 
        ? 'bg-gray-800 shadow-lg shadow-gray-900/30' 
        : 'bg-white shadow-lg shadow-gray-200/80'
    }`}
    custom={project.animationDelay}
    initial="hidden"
    animate={isLoaded ? "visible" : "hidden"}
    variants={containerVariants}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
  >
    <div className="relative h-56 md:h-64 overflow-hidden">
      {/* Light and Dark mode images */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{ opacity: darkMode ? 0 : 1 }}
      >
        <img
          src={project.lightImage}
          alt={`${project.title} Light`}
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{ opacity: darkMode ? 1 : 0 }}
      >
        <img
          src={project.darkImage}
          alt={`${project.title} Dark`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
        {project.techs.map((tech) => (
          <span
            key={tech.name}
            className={`px-3 py-1 text-white text-xs font-medium rounded-full transition-colors duration-300 ${
              darkMode ? tech.bgColor : tech.lightBgColor
            }`}
          >
            {tech.name}
          </span>
        ))}
      </div>
    </div>
    <div className="p-6">
      <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
        darkMode ? 'text-white' : 'text-gray-900'
      }`}>
        {project.title}
      </h3>
      <p className={`mb-4 transition-colors duration-300 ${
        darkMode ? 'text-gray-300' : 'text-gray-600'
      }`}>
        {project.description}
      </p>
      <div className="flex justify-between items-center">
        <a
          href={project.projectLink}
          className={`font-medium hover:underline flex items-center gap-1 transition-colors duration-300 ${
            darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
          }`}
        >
          <span>View Project</span>
          <FiExternalLink size={16} />
        </a>
        <a
          href={project.githubLink}
          className={`hover:scale-110 transition-all duration-300 ${
            darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          <FiGithub size={18} />
        </a>
      </div>
    </div>
  </motion.div>
);

const ProjectsSection = ({ isLoaded }: { isLoaded: boolean }) => {
  const { darkMode } = useDlmode();

  return (
    <section
      className={`w-full px-6 py-16 md:px-12 md:py-20 transition-colors duration-500 ${
        darkMode ? 'bg-gray-900' : 'bg-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-3 transition-colors duration-300 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Featured Projects
          </h2>
          <p className={`max-w-2xl mx-auto transition-colors duration-300 ${
            darkMode ? 'text-gray-200' : 'text-gray-600'
          }`}>
            A showcase of my latest work and passion projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projectData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              darkMode={darkMode}
              isLoaded={isLoaded}
            />
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >

          {/* Using Next.js Link for smooth client-side navigation */}
        <Link href="/projects" passHref>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-3 font-semibold rounded-lg transition-all duration-300 shadow-md ${
              darkMode 
                ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-900/20' 
                : 'bg-blue-500 hover:bg-blue-600 text-white shadow-blue-500/20'
            }`}
          >
            View All Projects
          </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;