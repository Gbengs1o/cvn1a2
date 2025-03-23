// 3. app/projects/page.tsx (Projects page)
import React from 'react';
import Navbar from '../components/Navbar';
import Projects from '../Projects'; // Your Projects component
import Footer from '../components/Footer';

export default function ProjectsPage() {
  return (
    <main>
      <Navbar />
      <Projects />
      <Footer />
    </main>
  );
}