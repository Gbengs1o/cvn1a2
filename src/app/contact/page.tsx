// 4. app/contact/page.tsx (Contact page)
import React from 'react';
import Navbar from '../components/Navbar';
import Contact from '../Contact'; // Your Contact component
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <Contact />
      <Footer />
    </main>
  );
}