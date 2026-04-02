# Portfolio | Felipe da Silva Spínola

Portfólio pessoal desenvolvido com React, Vite e Tailwind CSS, com foco em performance visual, animações e apresentação de projetos.

## Stack

- React 18
- Vite 8
- Tailwind CSS
- Framer Motion
- Lucide React + React Icons

## Funcionalidades

- Tema escuro com estética cyberpunk
- Fundo animado estilo Matrix
- Seção de habilidades com filtro integrado aos projetos
- Carrossel 3D de projetos
- Contato com cópia rápida de e-mail e links diretos

## Executar localmente

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
```

## Segurança e qualidade

- `npm run check`: executa lint + build para validação local/CI.
- `npm run audit`: verifica vulnerabilidades de dependências (nível alto/crítico).
- Source maps desativados em produção para reduzir exposição de código-fonte.
- Segredos devem permanecer fora do front-end (usar variáveis de ambiente no provedor).

## Deploy

```bash
npm run deploy
```

Publicado em: `https://fesisp.github.io/`
