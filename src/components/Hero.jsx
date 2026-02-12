import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, Download, ChevronDown, MapPin, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div 
            className="relative inline-block mb-6 cursor-pointer group perspective-1000"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <motion.div
              initial={false}
              animate={{ rotateX: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative"
            >
              {/* Front Side */}
              <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold tracking-wider text-primary border border-primary/30 rounded-full bg-primary/10 shadow-[0_0_10px_rgba(0,255,65,0.2)] backface-hidden" style={{ backfaceVisibility: 'hidden' }}>
                <span className="w-2 h-2 bg-primary rounded-full animate-ping"></span>
                DISPONÍVEL PARA PROJETOS
              </div>

              {/* Back Side */}
              <div 
                className="absolute inset-0 inline-flex items-center justify-center gap-2 px-3 py-1 text-xs font-bold tracking-wider text-black bg-primary border border-primary rounded-full shadow-[0_0_15px_rgba(0,255,65,0.5)]"
                style={{ transform: "rotateX(180deg)", backfaceVisibility: 'hidden' }}
              >
                <Globe size={12} />
                <span>REMOTO / HÍBRIDO</span>
              </div>
            </motion.div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Python Backend & <span className="text-primary">DevOps Engineer</span>
          </h1>
          <div className="text-xl md:text-2xl text-gray-400 font-mono mb-6 h-16 md:h-auto">
            <TypeAnimation
              sequence={[
                'Python Developer',
                2000,
                'DevOps Engineer',
                2000,
                'Automação & Infraestrutura',
                2000,
                'Docker & Cloud',
                2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-secondary"
            />
          </div>
          <p className="text-gray-400 mb-8 max-w-lg leading-relaxed">
            Desenvolvedor especializado em automação e infraestrutura. Unindo a robustez do Python com a escalabilidade do Docker e Nuvem.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-6 py-3 bg-primary text-black font-bold rounded-lg hover:bg-secondary transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(0,255,65,0.3)] hover:shadow-[0_0_30px_rgba(0,255,65,0.5)]">
              Ver Soluções <ArrowRight size={20} />
            </a>
            <a href="/curriculo.pdf" download className="px-6 py-3 border border-gray-700 text-white font-medium rounded-lg hover:border-primary hover:text-primary transition-all flex items-center gap-2 bg-surface/50 backdrop-blur-sm">
              Download CV <Download size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          {/* Abstract Tech Visual - Flip Card */}
          <div 
            className="relative w-full max-w-[320px] h-96 cursor-pointer group perspective-1000"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <motion.div
              initial={false}
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 200, damping: 20 }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative w-full h-full"
            >
              {/* Front Side */}
              <div className="absolute inset-0 bg-gradient-to-br from-surface to-surface-hover border border-white/10 rounded-2xl p-6 shadow-2xl backface-hidden flex flex-col" style={{ backfaceVisibility: 'hidden' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                
                <div className="flex items-center gap-4 mb-6 border-b border-white/5 pb-4">
                  <div className="w-16 h-16 rounded-full bg-gray-800 overflow-hidden border-2 border-primary shadow-[0_0_15px_rgba(0,255,65,0.3)]">
                    <img src="https://github.com/Fesisp.png" alt="Avatar" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold">Felipe da Silva Spínola</h3>
                    <p className="text-xs text-primary font-mono">ID: PYTHON-DEVOPS</p>
                  </div>
                </div>

                <div className="space-y-4 font-mono text-sm text-gray-400 flex-grow">
                  <div className="flex justify-between">
                    <span>Status</span>
                    <span className="text-primary flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span> Building...
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Nível</span>
                    <span className="text-white">Pleno / Mid-Level</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Stack</span>
                    <span className="text-white">Python + Infra</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Exp</span>
                    <span className="text-white">4.5+ Anos</span>
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-white/5">
                  <div className="flex justify-between text-xs text-gray-500 font-mono mb-2">
                    <span>SYSTEM INTEGRITY</span>
                    <span>100%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-full animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Back Side */}
              <div 
                className="absolute inset-0 bg-gradient-to-bl from-gray-900 to-black border border-primary/30 rounded-2xl p-6 shadow-[0_0_30px_rgba(0,255,65,0.15)] backface-hidden flex flex-col"
                style={{ transform: "rotateY(180deg)", backfaceVisibility: 'hidden' }}
              >
                <div className="flex items-center gap-2 mb-6 text-primary border-b border-primary/20 pb-4">
                  <Globe size={20} />
                  <h3 className="font-bold font-mono">ACESSO RESTRITO</h3>
                </div>

                <div className="space-y-6 font-mono text-sm">
                  <div>
                    <p className="text-gray-500 text-xs mb-1">ESPECIALIZAÇÕES</p>
                    <div className="flex flex-wrap gap-2">
                      {['DevOps', 'Docker', 'Python', 'CI/CD'].map(tag => (
                        <span key={tag} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded border border-primary/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-gray-500 text-xs mb-1">FORMAÇÃO</p>
                    <ul className="text-gray-300 space-y-1 list-disc list-inside text-[10px]">
                      <li>Bacharelado em Ciência da Computação</li>
                      <li>Tecnologia em Segurança Pública</li>
                      <li>Exército Brasileiro (4 anos)</li>
                    </ul>
                  </div>

                  <div className="mt-auto p-3 bg-primary/5 border border-primary/20 rounded text-xs text-primary/80 text-center animate-pulse">
                    ⚠ CLASSIFIED INFORMATION
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -z-10 top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"></div>
        </motion.div>

      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
