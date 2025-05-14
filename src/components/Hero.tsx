import React from 'react';
import { ArrowRight } from 'lucide-react';
import { primaryColor, accentColor, bgColor } from '../utils/colors';

const Hero: React.FC = () => {
  return (
    <section 
      className="pt-28 pb-20 relative overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 rounded-full bg-primary/10 filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 rounded-full bg-accent/10 filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Créez des campagnes interactives qui <span className="text-primary" style={{ color: primaryColor }}>convertissent</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Concevez, personnalisez et publiez facilement des quiz, concours et formulaires 
              avec notre éditeur sans code. Collectez des données précieuses et 
              analysez les résultats en temps réel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all hover:scale-105"
                style={{ backgroundColor: primaryColor }}
              >
                Créer ma première campagne <ArrowRight size={20} className="inline ml-2" />
              </button>
              <button className="border-2 border-gray-300 px-8 py-4 rounded-lg font-semibold text-lg hover:border-primary hover:text-primary transition-colors">
                Voir les démos
              </button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative">
            <div className="relative">
              <div 
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl filter blur-md transform -rotate-2"
                style={{ 
                  background: `linear-gradient(to right, ${primaryColor}20, ${accentColor}20)` 
                }}
              ></div>
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Interface de création de campagne" 
                className="rounded-2xl shadow-xl w-full relative z-10 transform rotate-2 hover:rotate-0 transition-transform duration-500"
              />
            </div>
            
            <div 
              className="absolute -right-4 -bottom-4 p-4 bg-white rounded-lg shadow-lg transform rotate-6 hover:rotate-0 transition-transform duration-300 z-20"
            >
              <div className="text-sm font-semibold text-primary" style={{ color: primaryColor }}>
                Déjà utilisé par
              </div>
              <div className="text-2xl font-bold">500+ entreprises</div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 border-t border-gray-200 pt-10">
          <p className="text-center text-gray-500 mb-6">Ils nous font confiance</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center">Logo 1</div>
            <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center">Logo 2</div>
            <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center">Logo 3</div>
            <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center">Logo 4</div>
            <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center">Logo 5</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;