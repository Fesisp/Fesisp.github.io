import React, { useState } from 'react';
import { Code2, Database, Cloud, Terminal, Cpu, Coffee, Server, Globe, Layout, GitBranch, Box } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SiPython, SiMicrosoftazure, SiReact, SiJavascript, SiTypescript, SiTailwindcss, SiDocker, SiGit, SiPostgresql, SiMongodb, SiOpenai, SiSpring, SiMicrosoft } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const techLogos = [
  { node: <SiPython className="text-[#3776AB]" />, title: "Python", usage: "Backend, Automação, PyPI", affinity: 95 },
  { node: <FaJava className="text-[#007396]" />, title: "Java", usage: "Spring Boot, Microservices, Games", affinity: 80 },
  { node: <SiDocker className="text-[#2496ED]" />, title: "Docker", usage: "Containerização, Microserviços", affinity: 85 },
  { node: <SiReact className="text-[#61DAFB]" />, title: "React", usage: "Portfolio Interativo", affinity: 80 },
  { node: <SiTailwindcss className="text-[#06B6D4]" />, title: "Tailwind", usage: "Portfolio Interativo", affinity: 85 },
  { node: <SiGit className="text-[#F05032]" />, title: "Git", usage: "Controle de Versão, CI/CD", affinity: 90 },
  { node: <SiPostgresql className="text-[#4169E1]" />, title: "PostgreSQL", usage: "Banco de Dados Relacional", affinity: 75 },
  { node: <Database className="text-gray-400" />, title: "SQLite", usage: "Sistemas Bancários", affinity: 80 },
  { node: <Terminal className="text-gray-400" />, title: "Shell Script", usage: "Automação de Infraestrutura", affinity: 85 },
];

const skillsData = {
  "Backend & Automação": [
    { name: 'Python', icon: <SiPython className="text-[#3776AB]" />, usage: "Backend, Automação, PyPI", affinity: 95 },
    { name: 'Java', icon: <FaJava className="text-[#007396]" />, usage: "Spring Boot, Microservices, Games", affinity: 80 },
    { name: 'Spring Boot', icon: <SiSpring className="text-[#6DB33F]" />, usage: "Microserviços Enterprise", affinity: 75 },
    { name: 'Flask', icon: <Code2 className="text-gray-400" />, usage: "APIs REST Python", affinity: 85 },
  ],
  "Infra & Cloud": [
    { name: 'Docker', icon: <SiDocker className="text-[#2496ED]" />, usage: "Containerização, Microserviços", affinity: 85 },
    { name: 'Docker Compose', icon: <Box className="text-[#2496ED]" />, usage: "Orquestração de Containers", affinity: 80 },
    { name: 'Linux', icon: <Terminal className="text-gray-400" />, usage: "Administração de Servidores", affinity: 85 },
    { name: 'Git', icon: <SiGit className="text-[#F05032]" />, usage: "Controle de Versão", affinity: 90 },
    { name: 'GitHub Actions', icon: <GitBranch className="text-gray-400" />, usage: "CI/CD Pipelines", affinity: 75 },
  ],
  "Databases": [
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#4169E1]" />, usage: "Banco Relacional", affinity: 75 },
    { name: 'SQLite', icon: <Database className="text-gray-400" />, usage: "Sistemas Bancários", affinity: 80 },
  ],
  "Frontend": [
    { name: 'React', icon: <SiReact className="text-[#61DAFB]" />, usage: "Portfolio Pessoal", affinity: 80 },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" />, usage: "Portfolio Pessoal", affinity: 85 },
    { name: 'Framer Motion', icon: <Layout className="text-purple-500" />, usage: "Animações React", affinity: 70 },
  ]
};

const Skills = ({ onSkillSelect, activeTech }) => {
  const handleSkillClick = (skillName) => {
    if (onSkillSelect) {
      onSkillSelect(activeTech === skillName ? null : skillName);
    }
  };

  return (
    <section id="skills" className="py-20 bg-surface/30 border-y border-white/5">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-12 relative inline-block left-1/2 -translate-x-1/2">
          Tech Stack
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
        </h2>

        {/* Infinite Marquee */}
        <div className="mb-12 -mx-6 md:-mx-0 overflow-hidden mask-linear-fade relative z-10 py-4 pb-20">
          <motion.div 
            className="flex gap-4 w-max"
            animate={{ x: "-50%" }}
            transition={{ 
              duration: 60, 
              ease: "linear", 
              repeat: Infinity 
            }}
          >
            {[...techLogos, ...techLogos, ...techLogos, ...techLogos].map((item, index) => {
              const isSelected = activeTech === item.title;
              return (
                <div 
                  key={index}
                  onClick={() => handleSkillClick(item.title)}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-lg border transition-all group backdrop-blur-sm cursor-pointer ${
                    isSelected 
                      ? 'bg-white/10 border-primary scale-105 shadow-[0_0_15px_rgba(0,255,65,0.3)]' 
                      : 'bg-white/5 border-white/5 hover:border-primary hover:bg-white/10 hover:scale-105'
                  }`}
                >
                  <span className="text-xl">{item.node}</span>
                  <span className={`text-xs font-bold transition-colors ${isSelected ? 'text-primary' : 'text-white group-hover:text-primary'}`}>
                    {item.title}
                  </span>
                  
                  {/* Usage Tooltip */}
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-48 bg-surface border border-primary/30 p-3 rounded-lg shadow-xl z-50 pointer-events-none"
                      >
                        <p className="text-[10px] text-gray-300 text-center leading-tight mb-2">
                          <span className="text-primary font-bold block mb-1">Uso:</span>
                          {item.usage}
                        </p>
                        
                        {/* Affinity Bar */}
                        <div className="w-full bg-black/50 h-1.5 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${item.affinity}%` }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="h-full bg-primary shadow-[0_0_10px_#00ff41]"
                          />
                        </div>
                        <div className="flex justify-between text-[9px] text-gray-400 mt-1">
                          <span>Afinidade</span>
                          <span>{item.affinity}%</span>
                        </div>

                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-surface border-t border-l border-primary/30 transform rotate-45"></div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {Object.entries(skillsData).map(([category, skills], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-surface/50 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-colors relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                {idx === 0 && <Terminal size={64} />}
                {idx === 1 && <Cpu size={64} />}
                {idx === 2 && <Cloud size={64} />}
                {idx === 3 && <Layout size={64} />}
              </div>

              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-8 bg-primary rounded-full"></span>
                {category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <div 
                    key={skill.name}
                    className="relative group/skill cursor-pointer"
                    onClick={() => handleSkillClick(skill.name)}
                  >
                    <div className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${activeTech === skill.name ? 'bg-white/10 border border-primary shadow-[0_0_10px_rgba(0,255,65,0.3)]' : 'bg-white/5 border border-white/5 hover:bg-white/10 hover:border-primary/50'}`}>
                      <span className="text-lg">{skill.icon}</span>
                      <span className={`text-sm ${activeTech === skill.name ? 'text-primary font-bold' : 'text-gray-300 group-hover/skill:text-white'}`}>{skill.name}</span>
                    </div>
                    
                    {/* Hover Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-black/90 border border-white/10 p-3 rounded text-[10px] text-gray-300 opacity-0 group-hover/skill:opacity-100 transition-opacity pointer-events-none z-20">
                      <span className="text-primary font-bold block mb-1">Uso:</span>
                      <p className="mb-2">{skill.usage}</p>
                      
                      {/* Affinity Bar */}
                      <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                        <div 
                          style={{ width: `${skill.affinity}%` }}
                          className="h-full bg-primary shadow-[0_0_5px_#00ff41]"
                        />
                      </div>
                      <div className="flex justify-between text-[9px] text-gray-500 mt-1">
                        <span>Afinidade</span>
                        <span>{skill.affinity}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
