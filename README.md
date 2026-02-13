# 💻 Portfolio Profissional | Felipe da Silva Spínola

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

> Um portfólio interativo e imersivo com estética **Cyberpunk/Matrix**, desenvolvido para demonstrar habilidades em **Engenharia de Dados**, **Java**, **Python** e **Inteligência Artificial**.

## ✨ Funcionalidades Principais

### 🎨 Design & UX
- **Estética Cyberpunk**: Tema escuro imersivo com acentos em verde neon (#00ff41), inspirado em terminais de código e na estética Matrix.
- **Matrix Rain Effect**: Fundo animado com chuva de caracteres digitais, renderizado em Canvas para alta performance.
- **Cursor Personalizado**: Cursor interativo que reage a elementos clicáveis com animações de transformação e estados de hover.

### 🛠️ Seção Tech Stack (Interativa)
- **Infinite Marquee**: Faixa contínua de logos de tecnologias com animação suave.
- **Bento Grid Layout**: Organização moderna das habilidades em categorias (Backend, AI & Data, Cloud, Frontend).
- **Integração com Projetos**: **Funcionalidade Exclusiva!** Ao clicar em uma tecnologia (ex: Python), a lista de projetos é filtrada automaticamente para exibir apenas aqueles que utilizam a ferramenta selecionada.
- **Indicadores de Afinidade**: Ao selecionar ou passar o mouse sobre uma tecnologia, uma barra de progresso exibe o nível de proficiência com aquela ferramenta.

### 🗂️ Seção de Contato (Folder UI)
- **Interface de Pasta Interativa**: Design skeuomórfico de pasta que se abre em leque revelando três cartões de contato distintos:
  - **Profissional**: Links diretos para LinkedIn e GitHub.
  - **Direto**: Botões para copiar E-mail e abrir WhatsApp.
  - **Sistema**: Status do sistema e informações decorativas com estética de terminal.

### 🚀 Seção de Projetos (3D Carousel)
- **Carrossel 3D Personalizado**: Navegação de projetos com efeito de profundidade, rotação 3D e hierarquia visual (foco no item central).
- **Filtros Dinâmicos**:
  - Filtragem por categoria (Todos, Pessoais, Profissionais).
  - Filtragem por tecnologia (acionada via Tech Stack).
  - Contadores dinâmicos (ex: `01/04`) que se atualizam conforme a navegação.
- **Cards Detalhados**: Cada projeto exibe descrição, tags, links para repositório/demo e ícones temáticos.

## 🛠️ Tecnologias Utilizadas

- **Core**: React 18, Vite.
- **Estilização**: Tailwind CSS.
- **Animações**: Framer Motion (para transições complexas, scroll animations e carrossel 3D).
- **Ícones**: Lucide React, React Icons (Simple Icons).
- **Linguagens do Portfólio**: JavaScript (ES6+), CSS3 (Variáveis, 3D Transforms).

## 📂 Estrutura do Projeto

```
src/
├── components/
│   ├── reactbits/       # Componentes UI avançados (Carousel, LogoLoop)
│   ├── About.jsx        # Seção Sobre Mim
│   ├── Contact.jsx      # Seção de Contato
│   ├── Hero.jsx         # Seção Inicial (Cartão Holográfico)
│   ├── MatrixRain.jsx   # Efeito de fundo
│   ├── Navbar.jsx       # Navegação fixa
│   ├── Projects.jsx     # Seção de Projetos (Lógica de filtros)
│   └── Skills.jsx       # Seção de Habilidades (Lógica de seleção)
├── App.jsx              # Componente raiz e orquestração de estado global
└── main.jsx             # Ponto de entrada
```

## 🚀 Como Executar Localmente

### Pré-requisitos
- Node.js (v16 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/Fesisp/Site.git
   ```

2. Entre na pasta do projeto:
   ```bash
   cd Site
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

5. Acesse `http://localhost:5173` no seu navegador.

## 📦 Build para Produção

Para gerar a versão otimizada para deploy:

```bash
npm run build
```

Os arquivos estáticos serão gerados na pasta `dist/`.

---

<div align="center">
  Desenvolvido com 💻 e ☕ por <strong>Felipe da Silva Spínola</strong>
</div>   npm run dev
   ```

5. Acesse `http://localhost:5173` no seu navegador.

## 📦 Deploy

O projeto está configurado para deploy automático no **GitHub Pages**.

Para realizar o deploy manual:

```bash
npm run deploy
```

O site estará disponível em: `https://Fesisp.github.io/Site/`

## 📬 Contato

**Felipe da Silva Spínola**

- **LinkedIn**: [[linkedin.com/in/felipe-da-silva-spinola](https://www.linkedin.com/in/felipe-da-silva-spinola/)]
- **GitHub**: [github.com/Fesisp](https://github.com/Fesisp)
- **Email**: mrfelipefss@gmail.com

---

<p align="center">
  Desenvolvido com 💚 por Felipe da Silva Spínola
</p>
