import React from 'react';
import { User, Briefcase, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 border-b border-white/5">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-16 relative inline-block left-1/2 -translate-x-1/2">
          Minha Jornada
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Who Am I */}
          <div className="bg-surface border border-white/5 p-8 rounded-2xl hover:border-primary/30 transition-all group">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-surface-hover rounded-lg text-primary group-hover:scale-110 transition-transform">
                <User size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">Quem Sou</h3>
            </div>
            <p className="text-gray-400 leading-loose mb-6">
              Nascido em Manaus e com vivência no Rio de Janeiro, hoje construo minha carreira em <strong>Boa Vista (RR)</strong>, trazendo na bagagem uma combinação rara: a disciplina militar e a inovação da engenharia de software.
            </p>
            <p className="text-gray-400 leading-loose">
              <strong>Bacharelando em Ciência da Computação</strong> e prestes a concluir Tecnologia em Segurança Pública, meu objetivo é unir a robustez da infraestrutura (DevOps/SRE) com a criatividade do desenvolvimento Backend para criar soluções que impactem vidas e negócios globalmente.
            </p>
            
            <div className="flex gap-8 mt-8 pt-8 border-t border-white/5">
              <div>
                <h4 className="text-3xl font-bold text-primary">5+</h4>
                <span className="text-sm text-gray-500">Anos Exp.</span>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-secondary">20+</h4>
                <span className="text-sm text-gray-500">Projetos</span>
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="bg-surface border border-white/5 p-8 rounded-2xl hover:border-primary/30 transition-all">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-surface-hover rounded-lg text-secondary">
                <Briefcase size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">Experiência</h3>
            </div>

            <div className="space-y-8 relative pl-4 border-l border-white/10">
              <div className="relative pl-6">
                <span className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-primary shadow-[0_0_0_4px_rgba(10,10,10,1)]"></span>
                <span className="text-xs font-mono text-primary mb-1 block">Nov 2025 - Atual</span>
                <h4 className="text-white font-bold">Técnico de Suporte Sênior</h4>
                <span className="text-sm text-gray-500 block mb-2">Positivo S+ (DNIT)</span>
                <p className="text-sm text-gray-400">Atuação vai além do suporte tradicional: combino infraestrutura, automação e desenvolvimento para garantir a continuidade de serviços críticos do DNIT.</p>
              </div>

              <div className="relative pl-6">
                <span className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-gray-600 shadow-[0_0_0_4px_rgba(10,10,10,1)]"></span>
                <span className="text-xs font-mono text-gray-500 mb-1 block">2023 - Nov 2025</span>
                <h4 className="text-white font-bold">Desenvolvedor Full Stack</h4>
                <span className="text-sm text-gray-500 block mb-2">Secretaria de Educação - RR</span>
                <p className="text-sm text-gray-400">Idealizei e desenvolvi o <strong>"Ambiente Escolar Digital"</strong>, uma plataforma SaaS completa que modernizou o controle acadêmico da instituição.</p>
              </div>

              <div className="relative pl-6">
                <span className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-gray-600 shadow-[0_0_0_4px_rgba(10,10,10,1)]"></span>
                <span className="text-xs font-mono text-gray-500 mb-1 block">2019 - 2023</span>
                <h4 className="text-white font-bold">Técnico de TI & Analista de Dados</h4>
                <span className="text-sm text-gray-500 block mb-2">Exército Brasileiro</span>
                <p className="text-sm text-gray-400">Desenvolvimento de dashboards estratégicos em <strong>Power BI</strong> para logística e comando. Gestão de infraestrutura de TI sob pressão e informações críticas.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
