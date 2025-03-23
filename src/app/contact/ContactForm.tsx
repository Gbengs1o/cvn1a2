import { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormProps {
  darkMode: boolean;
}

const ContactForm = ({ darkMode }: ContactFormProps) => {
  // State to manage which contact method is active
  const [contactMethod, setContactMethod] = useState<'whatsappCall' | 'email'>('email');

  // Define input classes based on dark mode state (for future use if needed)
  const inputClasses = darkMode
    ? 'bg-gray-700 border-gray-600 focus:border-blue-500'
    : 'bg-gray-50 border border-gray-300 focus:border-blue-500';

  // Email button mailto link configuration:
  // The subject will be prefilled as "Portfolio Inquiry" (customize as needed)
  const mailtoLink = `mailto:davidogunkoya80@gmail.com?subject=Portfolio%20Inquiry`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`rounded-xl shadow-lg p-8 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
    >
      <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

      {/* Toggle Buttons for Contact Method */}
      <div className="flex justify-center mb-6 space-x-4">
        <button
          onClick={() => setContactMethod('whatsappCall')}
          className={`px-4 py-2 rounded-md font-semibold transition-colors duration-300 ${
            contactMethod === 'whatsappCall'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-800'
          }`}
        >
          WhatsApp/Call
        </button>
        <button
          onClick={() => setContactMethod('email')}
          className={`px-4 py-2 rounded-md font-semibold transition-colors duration-300 ${
            contactMethod === 'email'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-800'
          }`}
        >
          Email
        </button>
      </div>

      {contactMethod === 'whatsappCall' ? (
        // WhatsApp/Call Options Section
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a
            href="https://api.whatsapp.com/send?phone=2348050488519&text=To%20Dovekings%20(Your%20Message)"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg text-center transition-transform transform hover:scale-105"
          >
            WhatsApp
          </a>
          <a
            href="tel:08050488519"
            className="w-full md:w-auto bg-purple-500 hover:bg-purple-600 text-white py-3 px-6 rounded-lg text-center transition-transform transform hover:scale-105"
          >
            Book a Call
          </a>
        </div>
      ) : (
        // Email Button Section
        <div className="flex justify-center">
          <a
            href={mailtoLink}
            className="w-full md:w-auto bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg text-center transition-transform transform hover:scale-105"
          >
            Compose Email
          </a>
        </div>
      )}
    </motion.div>
  );
};

export default ContactForm;
