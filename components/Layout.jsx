// components/Layout.jsx
import React, { useEffect } from "react";
import Script from 'next/script';
import siteData from '../data/site'; // Importe os dados

export default function Layout({ children }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.matrixToggle = function () {
        const c = document.getElementById('matrix-bg');
        if (!c) return;
        if (c.style.display === 'none' || c.style.opacity === '0') {
          c.style.display = '';
          c.style.opacity = c.getAttribute('data-default-opacity') || '0.32';
        } else {
          c.setAttribute('data-default-opacity', c.style.opacity || '0.32');
          c.style.opacity = '0';
        }
      };
    }
  }, []);

  // Puxe o nome e os links de contato dos dados
  const { contact } = siteData;
  const authorName = contact.author || "Seu Nome";

  return (
    <div className="site-root">
      <Script src="/matrix-bg.js" strategy="afterInteractive" />
      <header className="site-header">
        <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'1rem'}}>
          {/* AGORA O NOME É DINÂMICO */}
          <a href="#" className="logo">{authorName}</a>
          <nav className="nav" style={{display:'flex',gap:'1rem'}}>
            <a href="#skills">Habilidades</a> {/* Corrigido de "about" para "skills" */}
            <a href="#work">Projetos</a>
            <a href="#certificates">Certificados</a>
            <a href="#contact">Contato</a>
          </nav>
          <button onClick={() => { if (typeof window !== 'undefined' && window.matrixToggle) window.matrixToggle(); }} aria-label="Toggle background" style={{background:'transparent',border:'1px solid rgba(0,255,65,0.12)',color:'#00ff41',padding:'6px 10px',borderRadius:8}}>BG</button>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}