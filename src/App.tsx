import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import CampaignTypes from './components/CampaignTypes';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import './utils/animations.css';

function App() {
  useEffect(() => {
    // Mettre à jour le titre de la page
    document.title = "CampagnePro | Créez des campagnes marketing interactives";
    
    // Animation au défilement
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-animate');
      
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        
        if (rect.top <= window.innerHeight * 0.8) {
          element.classList.add('animate-fade-in');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Déclencher une fois au chargement
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <CampaignTypes />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;