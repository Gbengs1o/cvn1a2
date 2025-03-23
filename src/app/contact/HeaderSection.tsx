import { motion } from 'framer-motion';

const HeaderSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
      <h1 className="text-5xl font-extrabold mb-4">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">
          Get In Touch
        </span>
      </h1>
      <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-teal-400 mx-auto mb-6"></div>
      <p className="max-w-2xl mx-auto text-lg opacity-90">
        Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
      </p>
    </motion.div>
  );
};

export default HeaderSection;
