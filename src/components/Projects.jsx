import React, { useState } from 'react';
import { Github, ExternalLink, Code2, Terminal, Cpu, Database, X } from 'lucide-react';
import Carousel from './reactbits/Carousel';

const projectsData = [
  // PROJETOS EM DESTAQUE
  {
    id: 1,
    name: 'Ambiente Escolar Digital',
    title: 'SaaS de Gestão Acadêmica (ERP)',
    desc: 'Plataforma completa de gestão escolar com arquitetura de microsserviços. Implementa controle de acesso granular (RBAC), auditoria de dados (LGPD) e deploy containerizado.',
    tags: ['Python', 'Flask', 'Docker', 'PostgreSQL', 'RBAC'],
    category: 'professional',
    featured: true,
    links: { repo: 'https://github.com/Fesisp/Ambiente-Escolar-Digital', demo: '#' },
    gradient: 'from-emerald-600 to-teal-500',
    color: '#10B981',
    icon: <Database size={40} />
  },
  {
    id: 2,
    name: 'Automação DevOps',
    title: 'Automação de Infraestrutura & Bots',
    desc: 'Conjunto de scripts e bots desenvolvidos para automatizar tarefas repetitivas de sustentação (Toil), monitoramento de servidores e alertas inteligentes.',
    tags: ['Python', 'Automação', 'Zabbix', 'API', 'Bash'],
    category: 'professional',
    featured: true,
    links: { repo: '#', demo: '#' },
    gradient: 'from-orange-600 to-red-600',
    color: '#F05032',
    icon: <Terminal size={40} />
  },
  {
    id: 3,
    name: 'Azure Cloud Lab',
    title: 'Azure Cloud Lab & AI',
    desc: 'Laboratórios práticos de provisionamento de recursos em nuvem e implementação de serviços cognitivos de IA, alinhados com as melhores práticas da Microsoft.',
    tags: ['Azure', 'Cloud Computing', 'AI-900'],
    category: 'professional',
    featured: true,
    links: { repo: 'https://github.com/Fesisp/Dio-Azure-Challenge', demo: '#' },
    gradient: 'from-blue-700 to-cyan-500',
    color: '#0078D4',
    icon: <Cpu size={40} />
  },
  {
    id: 4,
    name: 'Portfolio Pessoal Interativo',
    title: 'Site com Estética Cyberpunk e Matrix Rain',
    desc: 'Portfolio interativo desenvolvido com React, Tailwind CSS e Framer Motion, apresentando interface com efeito Matrix Rain, cursor personalizado, carrossel 3D de projetos e integração entre seções Tech Stack e Projetos.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite', 'JavaScript'],
    category: 'professional',
    featured: true,
    links: { repo: 'https://github.com/Fesisp/Fesisp.github.io', demo: 'https://fesisp.github.io' },
    gradient: 'from-purple-600 to-pink-500',
    color: '#9333EA',
    icon: <Code2 size={40} />
  },
  
  // PROJETOS SIMPLES
  {
    id: 5,
    name: 'Arquitetura de Microserviços',
    title: 'Sistema de Gestão de Pedidos com Spring Cloud',
    desc: 'Arquitetura completa de microserviços implementando Service Discovery com Eureka, API Gateway, Circuit Breaker com Resilience4j, containerização Docker e pipeline CI/CD automatizado.',
    tags: ['Java', 'Spring Boot', 'Spring Cloud', 'Docker', 'Microservices'],
    category: 'personal',
    featured: false,
    links: { repo: 'https://github.com/Fesisp/NTT-Data-Architecture', demo: '#' },
    gradient: 'from-orange-600 to-red-600',
    color: '#F05032',
    icon: <Terminal size={40} />
  },
  {
    id: 6,
    name: 'Biblioteca de Processamento de Imagens',
    title: 'Pacote PyPI para Transformação e Análise',
    desc: 'Biblioteca Python modular estruturada para distribuição via PyPI, implementando transformações de imagem, comparação estrutural, transferência de histogramas usando scikit-image.',
    tags: ['Python', 'PyPI', 'scikit-image', 'Image Processing'],
    category: 'personal',
    featured: false,
    links: { repo: 'https://github.com/Fesisp/image-processing-toolkit', demo: '#' },
    gradient: 'from-blue-700 to-cyan-500',
    color: '#0078D4',
    icon: <Cpu size={40} />
  },
  {
    id: 7,
    name: 'Sistema Bancário com POO',
    title: 'Aplicação de Gerenciamento Financeiro',
    desc: 'Sistema bancário completo implementando autenticação segura, operações de depósito, saque e transferência PIX, histórico de transações e persistência de dados com SQLite.',
    tags: ['Python', 'SQLite', 'OOP', 'Database'],
    category: 'personal',
    featured: false,
    links: { repo: 'https://github.com/Fesisp/Python-Banking-System', demo: '#' },
    gradient: 'from-green-600 to-emerald-500',
    color: '#10B981',
    icon: <Database size={40} />
  },
  {
    id: 8,
    name: 'Jogo da Forca em Console',
    title: 'Game Clássico com Gerenciamento de Estado',
    desc: 'Jogo da Forca desenvolvido em Java com arquitetura modular, banco de palavras categorizadas, sistema de pontuação e renderização progressiva de ASCII art.',
    tags: ['Java', 'Console', 'OOP', 'Game'],
    category: 'personal',
    featured: false,
    links: { repo: 'https://github.com/Fesisp/Java-Game-Console-Hangman', demo: '#' },
    gradient: 'from-yellow-600 to-orange-500',
    color: '#F59E0B',
    icon: <Code2 size={40} />
  },
  {
    id: 9,
    name: 'Sistema de Transações Financeiras',
    title: 'Backend Bancário com Repository Pattern',
    desc: 'Sistema de gestão bancária implementando três tipos polimórficos de contas com Repository Pattern. Gerencia clientes, transações completas e rendimentos automáticos.',
    tags: ['Java', 'OOP', 'Design Patterns', 'Maven'],
    category: 'personal',
    featured: false,
    links: { repo: 'https://github.com/Fesisp/Java-Financial-System-OOP', demo: '#' },
    gradient: 'from-indigo-600 to-purple-500',
    color: '#6366F1',
    icon: <Database size={40} />
  },
  {
    id: 10,
    name: 'Validador de Cartão com IA',
    title: 'Identificador de Bandeiras com GitHub Copilot',
    desc: 'Ferramenta desenvolvida com assistência de GitHub Copilot para identificar bandeiras de cartões e validar checksums usando algoritmo de Luhn. Inclui testes com Pytest e CI/CD.',
    tags: ['Python', 'GitHub Copilot', 'Pytest', 'CI/CD'],
    category: 'personal',
    featured: false,
    links: { repo: 'https://github.com/Fesisp/AI-AssistedCard-Validator', demo: '#' },
    gradient: 'from-pink-600 to-rose-500',
    color: '#EC4899',
    icon: <Cpu size={40} />
  },
  {
    id: 11,
    name: 'Sudoku com GUI e Console',
    title: 'Jogo Completo com Geração Automática',
    desc: 'Implementação completa de Sudoku em Java com GUI usando Swing e modo console. Geração automática de puzzles usando backtracking, três níveis de dificuldade e validação em tempo real.',
    tags: ['Java', 'Swing', 'Algorithms', 'OOP'],
    category: 'personal',
    featured: false,
    links: { repo: 'https://github.com/Fesisp/Java-Game-Sudoku-OOP', demo: '#' },
    gradient: 'from-red-600 to-rose-500',
    color: '#DC2626',
    icon: <Code2 size={40} />
  }
];

const Projects = ({ activeTech, onClearFilter }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState('featured'); // 'all', 'featured', 'simple'

  const filteredData = activeTech 
    ? projectsData.filter(p => p.tags.some(tag => tag.toLowerCase().includes(activeTech.toLowerCase())))
    : filter === 'featured'
    ? projectsData.filter(p => p.featured)
    : filter === 'simple'
    ? projectsData.filter(p => !p.featured)
    : projectsData;

  const formatIndex = (current, total) => {
    if (total === 0) return "00/00";
    return `${(current + 1).toString().padStart(2, '0')}/${total.toString().padStart(2, '0')}`;
  };

  const getCarouselItems = (projects) => projects.map(project => ({
    id: project.id,
    name: project.name,
    title: project.title,
    description: project.desc,
    links: project.links,
    tags: project.tags,
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
      <div className="container mx-auto px-6 mb-8">
        <h2 className="text-3xl font-bold text-center text-white relative inline-block left-1/2 -translate-x-1/2 mb-6">
          Projetos
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
        </h2>

        {/* Filter Buttons */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <button
            onClick={() => setFilter('featured')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              filter === 'featured'
                ? 'bg-primary text-black shadow-[0_0_15px_rgba(0,255,65,0.3)]'
                : 'bg-surface border border-white/10 text-gray-400 hover:border-primary/50 hover:text-white'
            }`}
          >
            Projetos em Destaque
          </button>
          <button
            onClick={() => setFilter('simple')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              filter === 'simple'
                ? 'bg-primary text-black shadow-[0_0_15px_rgba(0,255,65,0.3)]'
                : 'bg-surface border border-white/10 text-gray-400 hover:border-primary/50 hover:text-white'
            }`}
          >
            Projetos Simples
          </button>
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              filter === 'all'
                ? 'bg-primary text-black shadow-[0_0_15px_rgba(0,255,65,0.3)]'
                : 'bg-surface border border-white/10 text-gray-400 hover:border-primary/50 hover:text-white'
            }`}
          >
            Todos
          </button>
        </div>

        {activeTech && (
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-sm text-gray-400">Filtrando por: </span>
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
      </div>

      <div className="w-full max-w-[1400px] mx-auto flex flex-col gap-2">
        {filteredData.length === 0 ? (
          <div className="text-center text-gray-400 mt-10">
            Nenhum projeto encontrado com a tecnologia <span className="text-primary">{activeTech}</span>.
          </div>
        ) : (
          <div className="flex flex-col items-center w-full">
            <h3 className="text-lg font-bold text-white mb-2 pl-6 self-start border-l-4 border-primary ml-4 md:ml-20">
              Soluções & Arquitetura <span className="text-sm font-normal text-gray-400 ml-2">{formatIndex(currentIndex, filteredData.length)}</span>
            </h3>
            <div className="w-full flex justify-center -mt-4">
              <Carousel 
                key={`projects-${activeTech || 'all'}-${filteredData.length}`}
                items={getCarouselItems(filteredData)} 
                baseWidth={300} 
                autoplay={true} 
                autoplayDelay={4000}
                pauseOnHover={true}
                loop={true}
                round={false}
                onIndexChange={setCurrentIndex}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
