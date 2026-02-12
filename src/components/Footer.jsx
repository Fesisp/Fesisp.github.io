import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/5 bg-surface/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-400 flex items-center justify-center gap-2 text-sm">
          Desenvolvido com <Heart size={16} className="text-primary fill-primary animate-pulse" /> por Felipe
        </p>
        <p className="text-xs text-gray-600 mt-2">
          © {new Date().getFullYear()} Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
