import React from 'react';
import { Star } from 'lucide-react';
import { primaryColor } from '../utils/colors';

const testimonials = [
  {
    name: "Sophie Martin",
    company: "Marketing Digital SAS",
    role: "Directrice Marketing",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    content: "Grâce à CampagnePro, nous avons augmenté notre taux de conversion de 37% sur nos campagnes de génération de leads. L'interface est intuitive et les résultats sont au rendez-vous.",
    stars: 5
  },
  {
    name: "Thomas Dubois",
    company: "E-commerce Plus",
    role: "PDG",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    content: "La plateforme nous a permis de créer des quiz interactifs pour notre site e-commerce sans aucune connaissance technique. Nos clients adorent l'expérience et nous récupérons des données précieuses.",
    stars: 5
  },
  {
    name: "Émilie Laurent",
    company: "Agence Digitale Créative",
    role: "Responsable Clientèle",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    content: "Notre agence utilise CampagnePro pour tous nos clients. La possibilité de créer rapidement des campagnes personnalisées nous fait gagner un temps précieux et les analyses en temps réel sont un vrai plus.",
    stars: 4
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="temoignages" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ce que disent nos <span className="text-primary" style={{ color: primaryColor }}>clients</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Découvrez comment nos clients utilisent CampagnePro pour transformer leur stratégie marketing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    fill={i < testimonial.stars ? primaryColor : 'none'} 
                    color={i < testimonial.stars ? primaryColor : '#e2e8f0'} 
                  />
                ))}
              </div>
              
              <p className="text-gray-700 italic flex-grow">{testimonial.content}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-xl shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold mb-2">Prêt à transformer votre marketing?</h3>
              <p className="text-gray-600">Rejoignez plus de 500 entreprises qui convertissent déjà avec CampagnePro.</p>
            </div>
            <button 
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105 whitespace-nowrap"
              style={{ backgroundColor: primaryColor }}
            >
              Essayer gratuitement
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;