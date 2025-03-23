'use client';



import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useDlmode } from '@/app/components/dlmode';
import { HeaderSection, FilterButtons, ProjectCard } from '@/app/components/projects/thecomponents';


const Projects = () => {
  const { darkMode } = useDlmode();
  const [filter, setFilter] = useState('all');
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Project data
  const projects = [
    {
      id: 1,
      title: "DoveKings",
      description: "This is a start up of Mine with the goal of utilizing AI and other technologies to 2x the rate and efficiency to which things will be done in various fields.",
      image: darkMode ? "https://i.im.ge/2025/03/23/pUe1b9.Dovekings.png" : "https://i.im.ge/2025/03/23/pUe1b9.Dovekings.png",
      technologies: ["react", "nextjs", "node", "mongodb", "Ai models"],
      category: "fullstack",
      github: "https://github.com/Gbengs1o/DoveKingsite-vite----0.1",
      liveLink: "https://dovekings.com/",
      featured: true
    },
    {
      id: 2,
      title: "hydrochill.online",
      description: "A waterbottle company site integrated with AI",
      image: darkMode ? "https://i.im.ge/2025/03/23/pUelmz.hydrochill.png" : "https://i.im.ge/2025/03/23/pUelmz.hydrochill.png",
      technologies: ["wordpress", "html", "css", "ai model"],
      category: "fullstack",
      github: "https://github.com/Gbengs1o",
      liveLink: "https://hydrochill.online/",
      featured: true
    },
    {
      id: 3,
      title: "AI-Powered Education platform",
      description: "This is also another startup of mine where the goal is simple use the advancements in technology for example AI to increase learning among student. ",
      image: darkMode ? "https://i.im.ge/2025/03/23/pUerZ6.getin2school.png" : "https://i.im.ge/2025/03/23/pUerZ6.getin2school.png",
      technologies: ["react", "typescript", "tailwind", "firebase"],
      category: "fullstack",
      github: "https://github.com/Gbengs1o/getin2school ",
      liveLink: "https://getin2school.vercel.app/",
      featured: false
    },
    {
      id: 4,
      title: "Fist wordpress Cv site with personal AI",
      description: "This is a project aimed to making sites and other technologies for example mobile apps more intelligent in other for them to achieve their goals better in both my...",
      image: darkMode ? "https://i.im.ge/2025/03/23/pUeFXF.oulwa.png" : "https://i.im.ge/2025/03/23/pUeFXF.oulwa.png",
      technologies: ["wordpress", "custom css", "openai"],
      category: "fullstack",
      github: "https://github.com/Gbengs1o",
      liveLink: "https://oluwaseunoke.online/",
      featured: false
    },
    {
      id: 5,
      title: "Mobile Fitness Application",
      description: "React Native app for tracking workouts, nutrition, and progress with personalized recommendations.",
      image: darkMode ? "https://i.im.ge/2025/03/23/pUeIZ4.a-logo-for-a-young-nigerian-developer-th-SulgnEIQQ42HeTYOAHbFsw-HeQrsNuT6SDzIR2GZK7ZQ.jpeg" : "https://i.im.ge/2025/03/23/pUeIZ4.a-logo-for-a-young-nigerian-developer-th-SulgnEIQQ42HeTYOAHbFsw-HeQrsNuT6SDzIR2GZK7ZQ.jpeg",
      technologies: ["react", "node", "firebase"],
      category: "mobile",
      github: "https://github.com/Gbengs1o",
      liveLink: "#",
      featured: true
    },
    {
      id: 6,
      title: "My first portfolio site under the Alive project",
      description: "This is a site that contins my work but with an AI agent that would e  able to answer questions from potential clients.",
      image: darkMode ? "https://i.im.ge/2025/03/23/pUe2GX.viteportsite.png" : "https://i.im.ge/2025/03/23/pUe2GX.viteportsite.png",
      technologies: ["vue", "node", "mongodb"],
      category: "fullstack",
      github: "https://github.com/Gbengs1o/Portfoliosite",
      liveLink: "https://portfoliosite-ruby-three.vercel.app/",
      featured: false
    },
    {
      id: 7,
      title: "Fast Track",
      description: "A Figmaplugin and work flow that uses AI to turn figma files into fully responsive components",
      image: darkMode ? "https://i.im.ge/2025/03/23/pUeOhK.fasttrack.png" : "https://i.im.ge/2025/03/23/pUeOhK.fasttrack.png",
      technologies: ["typescript","node", "javascript"],
      category: "fullstack",
      github: "https://github.com/Gbengs1o",
      liveLink: "#",
      featured: false
    }
  ];

  // Filter projects based on category
  const filteredProjects = filter === 'all' 
    ? projects 
    : filter === 'featured'
      ? projects.filter(project => project.featured)
      : projects.filter(project => project.category === filter);

  useEffect(() => {
    // Preload images
    const lightImage = new window.Image();
    const darkImage = new window.Image();
    lightImage.src = 'https://i.im.ge/2025/03/23/pUeDwD.a-logo-with-a-silhouette-of-a-young-nige-YmQeKod6Q9yat91MKLDxGQ-svDDfTbWQmCNZjaKRJqu9Q.jpeg';
    darkImage.src = 'https://i.im.ge/2025/03/23/pUeIZ4.a-logo-for-a-young-nigerian-developer-th-SulgnEIQQ42HeTYOAHbFsw-HeQrsNuT6SDzIR2GZK7ZQ.jpeg';
    
    Promise.all([
      new Promise(resolve => { lightImage.onload = resolve; }),
      new Promise(resolve => { darkImage.onload = resolve; })
    ]).then(() => {
      setIsImageLoaded(true);
    });
  }, []);

  // Animation variants for the projects grid
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  // Configuration for filter buttons
  const filterButtons = [
    { id: 'all', label: 'All Projects' },
    { id: 'featured', label: 'Featured' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'mobile', label: 'Mobile' }
  ];

  return (
    <div className={`min-h-screen w-full transition-colors duration-500 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'}`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <HeaderSection darkMode={darkMode} />

        <FilterButtons 
          filterButtons={filterButtons} 
          currentFilter={filter}
          setFilter={setFilter}
          darkMode={darkMode}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id}
              project={project}
              darkMode={darkMode}
              isImageLoaded={isImageLoaded}
            />
          ))}
        </motion.div>
        
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-xl font-medium">No projects found for this filter.</p>
            <button
              onClick={() => setFilter('all')}
              className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-teal-400 text-white rounded-full"
            >
              View all projects
            </button>
          </motion.div>
        )}
      </div>
     
    </div>
  );
};

export default Projects;
