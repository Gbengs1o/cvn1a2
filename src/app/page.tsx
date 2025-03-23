// First, fix the file structure:
// 1. app/page.tsx (Home page)
import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './HomePage';

import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      
      <Navbar />
      <HomePage/>
      <Footer />
    </main>
  );
}