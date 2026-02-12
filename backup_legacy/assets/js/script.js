// --- Typing Effect ---
const roles = ["Analista de Dados", "Desenvolvedor Python", "Engenheiro de Dados"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedTextSpan = document.getElementById("typed-text");

function type() {
  const currentRole = roles[roleIndex];
  if (isDeleting) {
    typedTextSpan.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedTextSpan.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentRole.length) {
    isDeleting = true;
    setTimeout(type, 2000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(type, 500);
  } else {
    setTimeout(type, isDeleting ? 50 : 100);
  }
}
document.addEventListener("DOMContentLoaded", type);

// --- New Features Logic (Projects, Skills, Certs) ---
(function() {
    // --- Projects Data & Logic ---
    const personalProjects = [
        {
            icon: 'bx-building',
            gradient: 'linear-gradient(135deg,#0ea5a4,#2563eb)',
            title: 'Simulador Bancário',
            desc: 'Sistema completo de operações bancárias com interface web moderna.',
            tags: ['JavaScript','Python','Flask'],
            status: 'complete',
            repo: '#',
            demo: '#'
        },
        {
            icon: 'bx-credit-card',
            gradient: 'linear-gradient(135deg,#2563eb,#22c55e)',
            title: 'Validador de Cartão',
            desc: 'Algoritmo de Luhn com identificação de bandeira e validação em tempo real.',
            tags: ['JavaScript','Algoritmos','UX'],
            status: 'complete',
            repo: '#',
            demo: '#'
        },
        {
            icon: 'bx-microphone',
            gradient: 'linear-gradient(135deg,#ec4899,#db2777)',
            title: 'Podcast Gen AI',
            desc: 'Gerador de podcasts com IA generativa e síntese de voz.',
            tags: ['Python','IA','APIs'],
            status: 'progress',
            repo: '#',
            demo: '#'
        },
        {
            icon: 'bx-bot',
            gradient: 'linear-gradient(135deg,#8b5cf6,#6366f1)',
            title: 'ChatBot Assistente',
            desc: 'Assistente virtual com NLP para atendimento automatizado.',
            tags: ['Python','NLP','Flask'],
            status: 'progress',
            repo: '#',
            demo: '#'
        },
        {
            icon: 'bx-lock-alt',
            gradient: 'linear-gradient(135deg,#ef4444,#b91c1c)',
            title: 'Projeto Confidencial',
            desc: 'Sistema de criptografia e segurança de dados sensíveis.',
            tags: ['Python','Segurança','Crypto'],
            status: 'secret',
            repo: null,
            demo: null
        },
        {
            icon: 'bx-chart',
            gradient: 'linear-gradient(135deg,#f59e0b,#d97706)',
            title: 'Dashboard Analytics',
            desc: 'Painel de métricas em tempo real com visualizações interativas.',
            tags: ['JavaScript','D3.js','WebSocket'],
            status: 'progress',
            repo: '#',
            demo: '#'
        }
    ];

    const professionalProjects = [
        {
            icon: 'bxl-microsoft',
            gradient: 'linear-gradient(135deg,#0078d4,#003b6f)',
            title: 'Azure AI Lab',
            desc: 'Integração completa de serviços cognitivos Azure: Speech, Language e Vision.',
            tags: ['Azure','IA','Python'],
            status: 'complete',
            repo: '#',
            demo: '#'
        },
        {
            icon: 'bx-network-chart',
            gradient: 'linear-gradient(135deg,#1e3a8a,#0ea5a4)',
            title: 'API de Inventário',
            desc: 'Sistema CRUD robusto com autenticação JWT e documentação OpenAPI.',
            tags: ['Django','API','PostgreSQL'],
            status: 'complete',
            repo: '#',
            demo: '#'
        },
        {
            icon: 'bx-line-chart',
            gradient: 'linear-gradient(135deg,#8b5cf6,#7c3aed)',
            title: 'Pipeline ETL Corporativo',
            desc: 'Pipeline de dados escalável processando 1M+ registros/dia.',
            tags: ['Python','Airflow','Azure'],
            status: 'complete',
            repo: '#',
            demo: '#'
        },
        {
            icon: 'bx-shield',
            gradient: 'linear-gradient(135deg,#dc2626,#991b1b)',
            title: 'Sistema Estratégico',
            desc: 'Plataforma de análise de dados classificados e inteligência.',
            tags: ['Confidencial'],
            status: 'secret',
            repo: null,
            demo: null
        }
    ];

    let personalIndex = 0;
    let professionalIndex = 0;

    function renderProject(project) {
        // Using new classes: project-card, project-cover, project-body, project-tags, tag
        const buttons = [];
        if (project.repo) buttons.push(`<a href="${project.repo}" target="_blank" class="btn-sm btn-outline"><i class='bx bxl-github'></i> Code</a>`);
        if (project.demo) buttons.push(`<a href="${project.demo}" target="_blank" class="btn-sm"><i class='bx bx-play-circle'></i> Live</a>`);
        
        const actionHtml = buttons.length > 0 ? `<div class="project-actions">${buttons.join('')}</div>` : '';

        return `
            <div class="project-card">
                <div class="project-cover" style="background:${project.gradient}">
                    <i class='bx ${project.icon}'></i>
                </div>
                <div class="project-body">
                    <h3 style="margin-bottom:0.5rem">${project.title}</h3>
                    <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:1rem">${project.desc}</p>
                    <div class="project-tags">
                        ${project.tags.map(t => `<span class="tag">${t}</span>`).join('')}
                    </div>
                    ${actionHtml}
                </div>
            </div>
        `;
    }

    function updateProjects() {
        const pDisplay = document.getElementById('personal-project-display');
        const profDisplay = document.getElementById('professional-project-display');
        
        if(pDisplay) {
            pDisplay.innerHTML = renderProject(personalProjects[personalIndex]);
            document.getElementById('personal-counter').textContent = `${String(personalIndex + 1).padStart(2,'0')}/${String(personalProjects.length).padStart(2,'0')}`;
            document.getElementById('personal-prev').disabled = personalIndex === 0;
            document.getElementById('personal-next').disabled = personalIndex === personalProjects.length - 1;
        }
        
        if(profDisplay) {
            profDisplay.innerHTML = renderProject(professionalProjects[professionalIndex]);
            document.getElementById('professional-counter').textContent = `${String(professionalIndex + 1).padStart(2,'0')}/${String(professionalProjects.length).padStart(2,'0')}`;
            document.getElementById('professional-prev').disabled = professionalIndex === 0;
            document.getElementById('professional-next').disabled = professionalIndex === professionalProjects.length - 1;
        }
    }

    // Event Listeners for Projects
    const pPrev = document.getElementById('personal-prev');
    if(pPrev) {
        pPrev.addEventListener('click', () => { if(personalIndex > 0) { personalIndex--; updateProjects(); } });
        document.getElementById('personal-next').addEventListener('click', () => { if(personalIndex < personalProjects.length - 1) { personalIndex++; updateProjects(); } });
        document.getElementById('professional-prev').addEventListener('click', () => { if(professionalIndex > 0) { professionalIndex--; updateProjects(); } });
        document.getElementById('professional-next').addEventListener('click', () => { if(professionalIndex < professionalProjects.length - 1) { professionalIndex++; updateProjects(); } });
        updateProjects();
    }

    // --- Skills Logic ---
    const techItems = document.querySelectorAll('.tech-item');
    const skillDisplay = document.getElementById('skill-display');
    
    // Filter Logic
    document.querySelectorAll('.skill-filter button').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.skill-filter button').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const level = btn.getAttribute('data-level');
            techItems.forEach(item => {
                if(level === 'all' || item.getAttribute('data-category') === level) {
                    item.style.display = 'flex'; // Restore flex display
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Selection Logic
    techItems.forEach(item => {
        item.addEventListener('click', () => {
            // Toggle selection
            item.classList.toggle('selected');
            
            // Update Display Area
            const selectedItems = document.querySelectorAll('.tech-item.selected');
            if(selectedItems.length === 0) {
                skillDisplay.style.display = 'none';
            } else {
                skillDisplay.style.display = 'block';
                let html = '<div style="display:grid; gap:1rem;">';
                selectedItems.forEach(sel => {
                    const name = sel.getAttribute('data-skill');
                    const level = sel.getAttribute('data-level');
                    const cat = sel.getAttribute('data-category');
                    let color = '#60a5fa';
                    if(cat === 'intermediario') color = '#22c55e';
                    if(cat === 'avancado') color = '#fb923c';
                    if(cat === 'expert') color = '#a855f7';
                    
                    html += `
                        <div>
                            <div style="display:flex; justify-content:space-between; margin-bottom:0.3rem">
                                <span style="font-weight:600">${name}</span>
                                <span style="color:${color}; font-size:0.85rem">${cat.toUpperCase()} (${level}%)</span>
                            </div>
                            <div class="skill-track">
                                <div class="skill-fill" style="width:${level}%; background:${color}"></div>
                            </div>
                        </div>
                    `;
                });
                html += '</div>';
                skillDisplay.innerHTML = html;
            }
        });
    });

    // --- Certificates Logic ---
    const certificates = [
        [
            { title: 'Azure AI Fundamentals', org: 'Microsoft', icon: 'bxl-microsoft', gradient: 'linear-gradient(135deg,#0078d4,#50e6ff)' },
            { title: 'Azure Data Fundamentals', org: 'Microsoft', icon: 'bxl-microsoft', gradient: 'linear-gradient(135deg,#0078d4,#00bcf2)' },
            { title: 'Python para Data Science', org: 'IBM', icon: 'bxl-python', gradient: 'linear-gradient(135deg,#3776ab,#ffd43b)' }
        ],
        [
            { title: 'SQL Avançado', org: 'DataCamp', icon: 'bx-data', gradient: 'linear-gradient(135deg,#03ef62,#0ac7a0)' },
            { title: 'Docker Essentials', org: 'Docker', icon: 'bxl-docker', gradient: 'linear-gradient(135deg,#0db7ed,#2496ed)' },
            { title: 'Git & GitHub', org: 'LinkedIn Learning', icon: 'bxl-git', gradient: 'linear-gradient(135deg,#f34f29,#f05033)' }
        ],
        [
            { title: 'Power BI Specialist', org: 'Microsoft', icon: 'bx-bar-chart-alt-2', gradient: 'linear-gradient(135deg,#f2c811,#f28a0a)' },
            { title: 'Machine Learning Foundation', org: 'Coursera', icon: 'bx-brain', gradient: 'linear-gradient(135deg,#6366f1,#8b5cf6)' },
            { title: 'Cybersecurity Fundamentals', org: 'IBM', icon: 'bx-shield', gradient: 'linear-gradient(135deg,#ef4444,#dc2626)' }
        ]
    ];
    
    let certPage = 0;
    
    function renderCertificates() {
        const display = document.getElementById('cert-display');
        if(!display) return;
        
        display.innerHTML = certificates[certPage].map(cert => `
            <div class="project-card">
                <div class="project-cover" style="background:${cert.gradient}; height:140px">
                    <i class='bx ${cert.icon}' style="font-size:3rem"></i>
                </div>
                <div class="project-body" style="text-align:center">
                    <h3 style="font-size:1rem; margin-bottom:0.3rem">${cert.title}</h3>
                    <p style="color:var(--text-muted); font-size:0.85rem">${cert.org}</p>
                </div>
            </div>
        `).join('');
        
        document.getElementById('cert-counter').textContent = `${String(certPage + 1).padStart(2, '0')}/${String(certificates.length).padStart(2, '0')}`;
        document.getElementById('cert-prev').disabled = certPage === 0;
        document.getElementById('cert-next').disabled = certPage === certificates.length - 1;
    }
    
    const cPrev = document.getElementById('cert-prev');
    if(cPrev) {
        cPrev.addEventListener('click', () => { if(certPage > 0) { certPage--; renderCertificates(); } });
        document.getElementById('cert-next').addEventListener('click', () => { if(certPage < certificates.length - 1) { certPage++; renderCertificates(); } });
        renderCertificates();
    }
})();

// --- Badge Physics (Simplified for Performance) ---
const badge = document.getElementById('badge');
let isDragging = false;
let startX;
let currentRotation = 0;

if(badge) {
  badge.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    badge.style.cursor = 'grabbing';
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const delta = e.clientX - startX;
    currentRotation = delta * 0.5;
    badge.style.transform = `rotateY(${currentRotation}deg) rotateX(${delta * 0.1}deg)`;
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
    badge.style.cursor = 'grab';
    badge.style.transition = 'transform 1s ease-out';
    badge.style.transform = 'rotateY(0deg) rotateX(0deg)';
    setTimeout(() => { badge.style.transition = ''; }, 1000);
  });
}

// --- Utils ---
function copyToClipboard(text, msg) {
  navigator.clipboard.writeText(text).then(() => {
    alert(msg);
  });
}

// --- Mobile Menu ---
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if(hamburger) {
    hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = hamburger.querySelector('i');
    if(navLinks.classList.contains('active')) {
        icon.classList.remove('bx-menu');
        icon.classList.add('bx-x');
    } else {
        icon.classList.remove('bx-x');
        icon.classList.add('bx-menu');
    }
    });
}

// --- Navbar Scroll Effect ---
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// --- Matrix Rain (Optimized) ---
const canvas = document.getElementById('matrix-bg');
if(canvas) {
    const ctx = canvas.getContext('2d');
    
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    const cols = Math.floor(width / 20);
    const ypos = Array(cols).fill(0);
    
    function matrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, width, height);
    
    ctx.fillStyle = '#0f0';
    ctx.font = '15pt monospace';
    
    ypos.forEach((y, ind) => {
        const text = String.fromCharCode(Math.random() * 128);
        const x = ind * 20;
        ctx.fillText(text, x, y);
        if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
        else ypos[ind] = y + 20;
    });
    }
    setInterval(matrix, 50);
    
    window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    });
}

// --- ScrollSpy (Active Link Highlight) ---
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}, observerOptions);

sections.forEach(section => observer.observe(section));
