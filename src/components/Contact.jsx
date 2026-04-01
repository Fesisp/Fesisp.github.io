import React, { useState } from 'react';
import { Mail, Linkedin, Github, MessageCircle, Check } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import ExternalLink from './ExternalLink';

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
      href: 'https://www.linkedin.com/in/felipe-da-silva-spinola/'
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
      href: 'https://wa.me/5595984059374'
    },
  ];

  return (
    <section id="contact" className="py-20 relative border-t border-white/5">
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            role="status"
            aria-live="polite"
            className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-primary text-black px-6 py-3 rounded-full font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(0,255,65,0.4)] z-50"
          >
            <Check size={20} />
            Email copiado para a área de transferência!
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-4">Vamos Conversar?</h2>
        <p className="text-center text-gray-400 max-w-xl mx-auto mb-12">
          Estou sempre aberto a novas oportunidades e parcerias.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {contacts.map((contact, index) => (
            <motion.div
              key={contact.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-surface/60 border border-white/10 rounded-xl p-4 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3 text-primary">
                {contact.icon}
                <h3 className="font-semibold text-white">{contact.title}</h3>
              </div>

              <p className="text-sm text-gray-400 mb-4">{contact.value}</p>

              {contact.isCopy ? (
                <button
                  type="button"
                  onClick={contact.onClick}
                  className="w-full py-2 rounded-lg bg-primary text-black font-semibold hover:opacity-90 transition-opacity"
                >
                  {contact.action}
                </button>
              ) : (
                <ExternalLink
                  href={contact.href}
                  className="block w-full py-2 rounded-lg border border-primary/40 text-primary text-center font-semibold hover:bg-primary/10 transition-colors"
                >
                  {contact.action}
                </ExternalLink>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
