import React, { useState } from 'react';
import { Mail, Linkedin, Github, MessageCircle, Check } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Folder from './reactbits/Folder';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('mrfelipefss@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contacts = [
    { 
      icon: <Mail size={20} />, 
      title: 'Email', 
      value: 'mrfelipefss@gmail.com', 
      action: copied ? 'Copiado!' : 'Copiar',
      onClick: handleCopyEmail,
      isCopy: true
    },
    { 
      icon: <Linkedin size={20} />, 
      title: 'LinkedIn', 
      value: 'Conecte-se', 
      action: 'Acessar',
      href: 'https://linkedin.com/in/seu-perfil'
    },
    { 
      icon: <Github size={20} />, 
      title: 'GitHub', 
      value: 'Repositórios', 
      action: 'Acessar',
      href: 'https://github.com/Fesisp'
    },
    { 
      icon: <MessageCircle size={20} />, 
      title: 'WhatsApp', 
      value: 'Conversar', 
      action: 'Abrir',
      href: 'https://wa.me/5511999999999'
    },
  ];

  return (
    <section id="contact" className="py-20 relative min-h-[600px] flex flex-col justify-center items-center">
      {/* Toast Notification */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-primary text-black px-6 py-3 rounded-full font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(0,255,65,0.4)] z-50"
          >
            <Check size={20} />
            Email copiado para a área de transferência!
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-6 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center text-white mb-4">Vamos Conversar?</h2>
        <p className="text-center text-gray-400 max-w-xl mx-auto mb-12">
          Estou sempre aberto a novas oportunidades e parcerias. Clique na pasta para ver meus contatos.
        </p>

        <div className="relative mt-20 mb-20">
          <Folder 
            color="#00ff41" 
            size={1} 
            items={[
              // Paper 1: Professional (LinkedIn/GitHub)
              <div className="w-full h-full p-2 flex flex-col justify-between bg-white/5 border border-black/5 overflow-hidden">
                <div className="border-b border-black/10 pb-1 mb-1">
                  <h3 className="text-[8px] font-bold text-black uppercase tracking-wider">Professional</h3>
                </div>
                <div className="flex flex-col gap-1">
                  <a href="https://linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group cursor-pointer hover:bg-black/5 p-1 rounded transition-colors">
                    <div className="p-1 bg-blue-600 text-white rounded-md shrink-0">
                      <Linkedin size={10} />
                    </div>
                    <div className="leading-none min-w-0">
                      <span className="text-[7px] font-bold text-black block truncate">LinkedIn</span>
                    </div>
                  </a>
                  <a href="https://github.com/Fesisp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group cursor-pointer hover:bg-black/5 p-1 rounded transition-colors">
                    <div className="p-1 bg-gray-900 text-white rounded-md shrink-0">
                      <Github size={10} />
                    </div>
                    <div className="leading-none min-w-0">
                      <span className="text-[7px] font-bold text-black block truncate">GitHub</span>
                    </div>
                  </a>
                </div>
                <div className="mt-auto pt-1 border-t border-black/5 flex justify-between items-center">
                  <span className="text-[5px] text-gray-400 font-mono">ID: PRO-01</span>
                </div>
              </div>,

              // Paper 2: Direct (Email/WhatsApp)
              <div className="w-full h-full p-2 flex flex-col justify-between bg-white/5 border border-black/5 overflow-hidden">
                <div className="border-b border-black/10 pb-1 mb-1">
                  <h3 className="text-[8px] font-bold text-black uppercase tracking-wider">Direct</h3>
                </div>
                <div className="flex flex-col gap-1">
                  <button onClick={handleCopyEmail} className="flex items-center gap-2 group cursor-pointer w-full text-left hover:bg-black/5 p-1 rounded transition-colors">
                    <div className="p-1 bg-red-500 text-white rounded-md shrink-0">
                      <Mail size={10} />
                    </div>
                    <div className="leading-none min-w-0">
                      <span className="text-[7px] font-bold text-black block truncate">Email</span>
                    </div>
                  </button>
                  <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group cursor-pointer hover:bg-black/5 p-1 rounded transition-colors">
                    <div className="p-1 bg-green-500 text-white rounded-md shrink-0">
                      <MessageCircle size={10} />
                    </div>
                    <div className="leading-none min-w-0">
                      <span className="text-[7px] font-bold text-black block truncate">WhatsApp</span>
                    </div>
                  </a>
                </div>
                <div className="mt-auto pt-1 border-t border-black/5 flex justify-between items-center">
                  <span className="text-[5px] text-gray-400 font-mono">ID: DIR-02</span>
                </div>
              </div>,

              // Paper 3: System
              <div className="w-full h-full p-2 flex flex-col bg-gray-50 font-mono border border-black/5 overflow-hidden">
                <div className="border-b-2 border-black pb-1 mb-1 flex justify-between items-end">
                  <span className="text-[8px] font-black">SYSTEM</span>
                  <span className="text-[5px]">v2.0</span>
                </div>
                <div className="space-y-1 text-[6px] text-gray-600">
                  <div className="flex justify-between">
                    <span>STATUS:</span>
                    <span className="text-green-600 font-bold">ONLINE</span>
                  </div>
                  <div className="flex justify-between">
                    <span>JOB:</span>
                    <span className="text-blue-600 font-bold">OPEN</span>
                  </div>
                </div>
                <div className="mt-auto flex justify-end">
                  <div className="w-3 h-3 bg-black"></div>
                </div>
              </div>
            ]} 
          />
        </div>
        
        <p className="mt-24 text-sm text-gray-500 animate-pulse">Clique na pasta para abrir</p>
      </div>
    </section>
  );
};

export default Contact;
