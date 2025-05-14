import React from 'react';
import { FileText, Paintbrush, BarChart } from 'lucide-react';
import { primaryColor, accentColor, bgColor } from '../utils/colors';

const steps = [
  {
    icon: <FileText size={32} />,
    title: "Sélectionnez un modèle",
    description: "Choisissez parmi notre bibliothèque de modèles prêts à l'emploi ou commencez avec une page vierge."
  },
  {
    icon: <Paintbrush size={32} />,
    title: "Personnalisez votre campagne",
    description: "Modifiez les couleurs, textes et ajoutez vos propres questions avec notre éditeur intuitif."
  },
  {
    icon: <BarChart size={32} />,
    title: "Publiez et analysez",
    description: "Lancez votre campagne et suivez les statistiques de participation en temps réel."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section 
      id="comment-ca-marche" 
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comment ça <span className="text-primary" style={{ color: primaryColor }}>marche</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Créez et lancez votre première campagne en quelques minutes grâce à notre processus simple en trois étapes.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
          {steps.map((step, index) => (
            <div key={index} className="w-full md:w-1/3 relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/4 right-0 w-full h-0.5 bg-gray-200 transform translate-x-1/2">
                  <div 
                    className="absolute left-0 top-0 h-full bg-primary transition-all duration-1000"
                    style={{ 
                      width: '0%', 
                      backgroundColor: accentColor,
                      animation: 'progressLine 3s ease-out forwards infinite',
                      animationDelay: `${index * 1}s`
                    }}
                  ></div>
                </div>
              )}
              
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col items-center text-center">
                <div 
                  className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary"
                  style={{ 
                    backgroundColor: `${primaryColor}15`,
                    color: primaryColor
                  }}
                >
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                <div className="mt-6 text-5xl font-bold text-gray-100">
                  {index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button 
            className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105"
            style={{ backgroundColor: primaryColor }}
          >
            Essayer maintenant
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;