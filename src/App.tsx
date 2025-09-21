import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Results from './components/Results';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import About from './components/About';
import FAQ from './components/FAQ';
import BookCall from './components/BookCall';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import BlogPost from './components/BlogPost';
import Privacy from './components/Privacy';

function HomePage() {
  return (
    <>
      <Hero />
      <Results />
      <Process />
      <Testimonials />
      <About />
      <FAQ />
      <FinalCTA />
      <BookCall />
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