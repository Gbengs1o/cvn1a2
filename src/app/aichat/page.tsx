// 2. app/about/page.tsx (About page)
import React from 'react';
import Navbar from '../components/Navbar';
import AiChat from '../Aichat';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <main>
         <Navbar />
      <AiChat />
      <Footer />
    </main>
  );
}