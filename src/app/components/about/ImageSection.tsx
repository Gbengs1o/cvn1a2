'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useDlmode } from '@/app/components/dlmode';

const ImageSection: React.FC = () => {
  const { darkMode } = useDlmode();
  const [isImageLoaded, setIsImageLoaded] = useState(false);

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

  return (
    <div className="relative aspect-square w-full max-w-md mx-auto lg:max-w-full overflow-hidden rounded-2xl shadow-xl">
      <AnimatePresence mode="wait">
        {isImageLoaded && (
          <motion.div
            key={darkMode ? 'dark' : 'light'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={darkMode ? 'https://i.im.ge/2025/03/23/pUeDwD.a-logo-with-a-silhouette-of-a-young-nige-YmQeKod6Q9yat91MKLDxGQ-svDDfTbWQmCNZjaKRJqu9Q.jpeg' : 'https://i.im.ge/2025/03/23/pUeIZ4.a-logo-for-a-young-nigerian-developer-th-SulgnEIQQ42HeTYOAHbFsw-HeQrsNuT6SDzIR2GZK7ZQ.jpeg'}
              alt="Ogunkoya Oluwagbenga David"
              fill
              unoptimized
              className="object-cover"
              priority
            />
          </motion.div>
        )}
      </AnimatePresence>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 to-purple-500/30 mix-blend-overlay" />
    </div>
  );
};

export default ImageSection;
