import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { primaryColor, accentColor } from '../utils/colors';

const campaignTypes = [
  {
    title: "Quiz interactifs",
    description: "Engagez votre audience avec des quiz captivants qui génèrent des leads qualifiés.",
    image: "https://images.pexels.com/photos/7103/writing-notes-idea-conference.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    title: "Formulaires personnalisés",
    description: "Créez des formulaires élégants adaptés à vos besoins spécifiques de collecte de données.",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    title: "Concours et tirages au sort",
    description: "Augmentez votre visibilité avec des concours attractifs et légalement conformes.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    title: "Sondages d'opinion",
    description: "Recueillez des insights précieux sur votre audience et leurs préférences.",
    image: "https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    title: "Calculateurs interactifs",
    description: "Offrez des résultats personnalisés basés sur les réponses des utilisateurs.",
    image: "https://images.pexels.com/photos/6863250/pexels-photo-6863250.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  }
];

const CampaignTypes: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? campaignTypes.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === campaignTypes.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="modeles" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Types de <span className="text-primary" style={{ color: primaryColor }}>campagnes</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explorez les différents types de campagnes interactives que vous pouvez créer facilement avec notre plateforme.
          </p>
        </div>
        
        <div className="relative">
          {/* Contrôles du carousel */}
          <div className="absolute inset-y-0 left-0 flex items-center z-10">
            <button 
              onClick={handlePrev}
              className="bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow focus:outline-none -ml-4"
            >
              <ChevronLeft size={24} className="text-gray-800" />
            </button>
          </div>
          
          <div className="absolute inset-y-0 right-0 flex items-center z-10">
            <button 
              onClick={handleNext}
              className="bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow focus:outline-none -mr-4"
            >
              <ChevronRight size={24} className="text-gray-800" />
            </button>
          </div>
          
          {/* Carousel */}
          <div className="flex overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {campaignTypes.map((campaign, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={campaign.image} 
                        alt={campaign.title} 
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                        <h3 className="text-white text-xl font-semibold p-6">{campaign.title}</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 mb-4">{campaign.description}</p>
                      <button 
                        className="text-accent font-medium flex items-center hover:underline"
                        style={{ color: accentColor }}
                      >
                        Voir les exemples <ChevronRight size={16} className="ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Indicateurs */}
          <div className="flex justify-center mt-8 space-x-2">
            {campaignTypes.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index 
                    ? 'bg-primary' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                style={{ backgroundColor: activeIndex === index ? primaryColor : '' }}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampaignTypes;