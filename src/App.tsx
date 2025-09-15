import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NewHero from './components/NewHero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import CompaniesSection from './components/CompaniesSection';
import DirectorSection from './components/DirectorSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BlogPost from './components/BlogPost';
import Privacy from './components/Privacy';

function HomePage() {
  return (
    <>
      <NewHero />
      <Services />
      <CompaniesSection />
      <WhyChooseUs />
      <DirectorSection />
      <ContactSection />
    </>
  );
}

function App() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A') {
        const href = target.getAttribute('href');
        if (href && href.startsWith('#') && href.length > 1) {
          e.preventDefault();
          const targetElement = document.querySelector(href);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
              behavior: 'smooth'
            });
          }
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="font-sans">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog/client-acquisition-system" element={<BlogPost />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;