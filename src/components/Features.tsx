import React from 'react';
import { LineChart, MousePointerClick, Database, ArrowDownToLine, PenTool, Gauge } from 'lucide-react';
import { primaryColor, accentColor } from '../utils/colors';

const features = [
  {
    icon: <PenTool size={40} />,
    title: "Créez avec des modèles",
    description: "Démarrez rapidement grâce à notre bibliothèque de modèles de quiz, sondages et formulaires entièrement personnalisables."
  },
  {
    icon: <MousePointerClick size={40} />,
    title: "Interface glisser-déposer",
    description: "Modifiez vos campagnes intuitivement avec notre éditeur visuel sans connaissances techniques."
  },
  {
    icon: <Database size={40} />,
    title: "Collecte de données sécurisée",
    description: "Recueillez des informations précieuses sur votre audience avec notre système de stockage intégré à Supabase."
  },
  {
    icon: <LineChart size={40} />,
    title: "Statistiques en temps réel",
    description: "Suivez les performances de vos campagnes avec des tableaux de bord visuels mis à jour en direct."
  },
  {
    icon: <ArrowDownToLine size={40} />,
    title: "Résultats exportables",
    description: "Exportez vos données au format CSV ou PDF pour une analyse approfondie et des présentations."
  },
  {
    icon: <Gauge size={40} />,
    title: "Haute performance",
    description: "Profitez d'une plateforme rapide et fiable, même avec des milliers de participants simultanés."
  }
];

const Features: React.FC = () => {
  return (
    <section id="fonctionnalites" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Fonctionnalités <span className="text-primary" style={{ color: primaryColor }}>puissantes</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Notre plateforme vous offre tous les outils nécessaires pour créer des campagnes marketing 
            interactives qui captent l'attention et génèrent des résultats.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 group hover:-translate-y-2"
            >
              <div 
                className="text-primary mb-6 transform group-hover:scale-110 transition-transform duration-300"
                style={{ color: primaryColor }}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button 
            className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105"
            style={{ backgroundColor: accentColor }}
          >
            Découvrir toutes les fonctionnalités
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;