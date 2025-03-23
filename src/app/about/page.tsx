// 2. app/about/page.tsx (About page)
import React from 'react';
import Navbar from '../components/Navbar';
import About from '../about'; // Your existing About component
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <main>
         <Navbar />
      <About />
      <Footer />
    </main>
  );
}