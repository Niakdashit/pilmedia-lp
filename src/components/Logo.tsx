import React from 'react';
import { Layout, MessageSquare } from 'lucide-react';
import { primaryColor, accentColor } from '../utils/colors';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <Layout 
          size={28} 
          className="text-primary" 
          style={{ color: primaryColor }}
        />
        <MessageSquare 
          size={16} 
          className="absolute top-1 right-1 text-accent" 
          style={{ color: accentColor }}
        />
      </div>
      <span className="font-bold text-xl text-gray-800">CampagnePro</span>
    </div>
  );
};

export default Logo;