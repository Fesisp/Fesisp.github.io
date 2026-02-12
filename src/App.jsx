import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';
import MatrixRain from './components/MatrixRain';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeTech, setActiveTech] = useState(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Simula um carregamento inicial para efeito "boot"
    const timer = setTimeout(() => setLoading(false), 2000);
    
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSkillSelect = (tech) => {
    setActiveTech(tech);
    // Scroll logic removed to keep user in context
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="text-primary font-mono text-xl animate-pulse">
          INITIALIZING SYSTEM...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent text-white font-sans selection:bg-primary selection:text-black overflow-x-hidden cursor-none">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50 shadow-[0_0_10px_#00ff41]"
        style={{ scaleX }}
      />
      <div className="fixed inset-0 bg-black -z-20"></div>
      <CustomCursor />
      <MatrixRain />
      
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills onSkillSelect={handleSkillSelect} activeTech={activeTech} />
          <Projects activeTech={activeTech} onClearFilter={() => handleSkillSelect(null)} />
          <Contact />
        </main>
        <Footer />
      </div>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 bg-primary text-black rounded-full shadow-lg shadow-primary/20 transition-all duration-300 z-40 hover:scale-110 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
}

export default App;
