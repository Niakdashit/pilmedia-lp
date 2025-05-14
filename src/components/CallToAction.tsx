import React from 'react';
import { primaryColor, accentColor, bgColor } from '../utils/colors';

const CallToAction: React.FC = () => {
  return (
    <section 
      className="py-20 relative overflow-hidden"
      style={{ 
        background: `linear-gradient(135deg, ${primaryColor}10 0%, ${accentColor}10 100%)` 
      }}
    >
      <div className="absolute -right-64 -top-64 w-96 h-96 rounded-full bg-primary/10 filter blur-3xl"></div>
      <div className="absolute -left-64 -bottom-64 w-96 h-96 rounded-full bg-accent/10 filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à lancer votre prochaine <span className="text-primary" style={{ color: primaryColor }}>campagne</span>?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Créez votre première campagne en quelques minutes et commencez à collecter des données précieuses dès aujourd'hui.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">Essai gratuit</h3>
              <p className="text-gray-600 mb-6">Découvrez notre plateforme sans engagement pendant 14 jours.</p>
              <button 
                className="w-full bg-white border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
                style={{ 
                  borderColor: primaryColor, 
                  color: primaryColor,
                  "--hover-bg": primaryColor,
                  "--hover-text": "white"
                } as React.CSSProperties}
              >
                Commencer l'essai gratuit
              </button>
            </div>
            
            <div 
              className="border-2 rounded-xl p-6 shadow-lg relative"
              style={{ borderColor: primaryColor }}
            >
              <div 
                className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-sm font-semibold rounded-bl-lg rounded-tr-xl"
                style={{ backgroundColor: primaryColor }}
              >
                Populaire
              </div>
              <h3 className="text-xl font-semibold mb-3">Demandez une démo</h3>
              <p className="text-gray-600 mb-6">Obtenez une présentation personnalisée avec nos experts.</p>
              <button 
                className="w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                style={{ backgroundColor: primaryColor }}
              >
                Réserver ma démo
              </button>
            </div>
          </div>
          
          <p className="text-gray-500 text-sm">
            Pas de carte de crédit requise. Annulez à tout moment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;