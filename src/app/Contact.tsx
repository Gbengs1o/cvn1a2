'use client';

import { useDlmode } from '@/app/components/dlmode';
import HeaderSection from './contact/HeaderSection';

import ContactForm from './contact/ContactForm';

const Contact = () => {
  const { darkMode } = useDlmode();

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-500 ${
        darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <HeaderSection />
        <ContactForm darkMode={darkMode} />
      </div>
    </div>
  );
};

export default Contact;
