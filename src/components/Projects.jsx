import React, { useState } from 'react';
import { Github, ExternalLink, Code2, Terminal, Cpu, Database, X } from 'lucide-react';
import Carousel from './reactbits/Carousel';

const projectsData = [
  {
    id: 1,
    title: 'Simulador Bancário',
    desc: 'Otimização de sistema bancário com Python, focado em estrutura de dados e modularização.',
    tags: ['Python', 'Logic', 'Backend'],
    category: 'personal',
    links: { repo: 'https://github.com/Fesisp/Dio-Python-Challenge', demo: '#' },
    gradient: 'from-teal-500 to-blue-600',
    color: '#007396',
    icon: <Terminal size={40} />
  },
  {
    id: 2,
    title: 'Azure AI Lab',
    desc: 'Soluções de Inteligência Artificial utilizando serviços cognitivos da Azure.',
    tags: ['Azure', 'AI', 'Cloud'],
    category: 'professional',
    links: { repo: 'https://github.com/Fesisp/Dio-Azure-Challenge', demo: '#' },
    gradient: 'from-blue-700 to-cyan-500',
    color: '#0078D4',
    icon: <Cpu size={40} />
  },
  {
    id: 3,
    title: 'Podcast Gen AI',
    desc: 'Workflow de IA Generativa para criação de podcasts automatizados.',
    tags: ['OpenAI', 'GenAI', 'Python'],
    category: 'personal',
    links: { repo: 'https://github.com/Fesisp/prompts-for-podcast-generate-by-ia', demo: '#' },
    gradient: 'from-pink-500 to-rose-600',
    color: '#FF69B4',
    icon: <Code2 size={40} />
  },
  {
    id: 4,
    title: 'NTT Data Bootcamp',
    desc: 'Desafios práticos de desenvolvimento backend e engenharia de dados.',
    tags: ['Java', 'Spring', 'Data'],
    category: 'professional',
    links: { repo: 'https://github.com/Fesisp/NTT-Data', demo: '#' },
    gradient: 'from-orange-500 to-red-600',
    color: '#F05032',
    icon: <Database size={40} />
  },
  {
    id: 5,
    title: 'Jogo da Forca',
    desc: 'Aplicação console clássica implementada em Java com lógica robusta.',
    tags: ['Java', 'Console', 'Game'],
    category: 'personal',
    links: { repo: 'https://github.com/Fesisp/Jogo-da-Forca-com-uma-Aplicacao-Console-Java', demo: '#' },
    gradient: 'from-yellow-500 to-orange-500',
    color: '#FFA500',
    icon: <Terminal size={40} />
  },
  {
    id: 6,
    title: 'Controle Financeiro',
    desc: 'Sistema de transações financeiras aplicando conceitos avançados de POO.',
    tags: ['C#', 'POO', 'Backend'],
    category: 'professional',
    links: { repo: 'https://github.com/Fesisp/Controle-de-transacoes-financeiras-em-POO', demo: '#' },
    gradient: 'from-green-600 to-teal-600',
    color: '#008000',
    icon: <Code2 size={40} />
  },
  {
    id: 7,
    title: 'Copilot Studio Bot',
    desc: 'Chatbot inteligente desenvolvido com Microsoft Copilot Studio.',
    tags: ['Copilot', 'Low-code', 'AI'],
    category: 'professional',
    links: { repo: 'https://github.com/Fesisp/Dio-Copilot-Desafio', demo: '#' },
    gradient: 'from-purple-600 to-indigo-600',
    color: '#800080',
    icon: <Cpu size={40} />
  },
  {
    id: 8,
    title: 'Portfolio Pessoal',
    desc: 'Este site! Desenvolvido com React, Tailwind e Framer Motion.',
    tags: ['React', 'Tailwind', 'TypeScript'],
    category: 'personal',
    links: { repo: '#', demo: '#' },
    gradient: 'from-cyan-500 to-blue-500',
    color: '#61DAFB',
    icon: <Code2 size={40} />
  }
];

const Projects = ({ activeTech, onClearFilter }) => {
  const [filter, setFilter] = useState('all');
  const [profIndex, setProfIndex] = useState(0);
  const [persIndex, setPersIndex] = useState(0);

  const filteredData = activeTech 
    ? projectsData.filter(p => p.tags.includes(activeTech))
    : projectsData;

  const personalProjects = filteredData.filter(project => project.category === 'personal');
  const professionalProjects = filteredData.filter(project => project.category === 'professional');

  const formatIndex = (current, total) => {
    if (total === 0) return "00/00";
    return `${(current + 1).toString().padStart(2, '0')}/${total.toString().padStart(2, '0')}`;
  };

  const getCarouselItems = (projects) => projects.map(project => ({
    id: project.id,
    title: project.title,
    description: project.desc,
    links: project.links,
    icon: (
      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
        <div className="text-white drop-shadow-md">
          {project.icon}
        </div>
      </div>
    )
  }));

  return (
    <section id="projects" className="py-4 overflow-hidden min-h-screen flex flex-col justify-center relative">
      <div className="container mx-auto px-6 mb-4">
        <h2 className="text-3xl font-bold text-center text-white relative inline-block left-1/2 -translate-x-1/2 mb-4">
          Projetos em Destaque
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
        </h2>

        {activeTech && (
          <div className="flex items-center justify-center gap-2 mb-6 animate-pulse">
            <span className="text-sm text-gray-400">Filtrando por tecnologia: </span>
            <span className="text-primary font-bold text-lg border-b border-primary">{activeTech}</span>
            <button 
              onClick={onClearFilter}
              className="p-1 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
              title="Limpar filtro"
            >
              <X size={16} />
            </button>
          </div>
        )}

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-4">
          {['all', 'personal', 'professional'].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-1 rounded-full text-xs font-bold transition-all border ${
                filter === type 
                  ? 'bg-primary text-black border-primary shadow-[0_0_15px_rgba(0,255,65,0.4)]' 
                  : 'bg-transparent text-gray-400 border-white/10 hover:border-primary/50 hover:text-white'
              }`}
            >
              {type === 'all' ? 'Todos' : type === 'personal' ? 'Pessoais' : 'Profissionais'}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full max-w-[1400px] mx-auto flex flex-col gap-2">
        {filteredData.length === 0 && (
           <div className="text-center text-gray-400 mt-10">
             Nenhum projeto encontrado com a tecnologia <span className="text-primary">{activeTech}</span>.
           </div>
        )}

        {(filter === 'all' || filter === 'professional') && professionalProjects.length > 0 && (
          <div className="flex flex-col items-center w-full">
            <h3 className="text-lg font-bold text-white mb-2 pl-6 self-start border-l-4 border-primary ml-4 md:ml-20">
              Projetos Profissionais <span className="text-sm font-normal text-gray-400 ml-2">{formatIndex(profIndex, professionalProjects.length)}</span>
            </h3>
            <div className="w-full flex justify-center -mt-4">
              <Carousel 
                key={`prof-${activeTech || 'all'}-${professionalProjects.length}`}
                items={getCarouselItems(professionalProjects)} 
                baseWidth={300} 
                autoplay={true} 
                autoplayDelay={3000}
                pauseOnHover={true}
                loop={true}
                round={false}
                onIndexChange={setProfIndex}
              />
            </div>
          </div>
        )}

        {(filter === 'all' || filter === 'personal') && personalProjects.length > 0 && (
          <div className="flex flex-col items-center w-full">
            <h3 className="text-lg font-bold text-white mb-2 pl-6 self-start border-secondary ml-4 md:ml-20">
              Projetos Pessoais <span className="text-sm font-normal text-gray-400 ml-2">{formatIndex(persIndex, personalProjects.length)}</span>
            </h3>
            <div className="w-full flex justify-center -mt-4">
              <Carousel 
                key={`pers-${activeTech || 'all'}-${personalProjects.length}`}
                items={getCarouselItems(personalProjects)} 
                baseWidth={300} 
                autoplay={true} 
                autoplayDelay={3500}
                pauseOnHover={true}
                loop={true}
                round={false}
                onIndexChange={setPersIndex}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
