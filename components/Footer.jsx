// components/Footer.jsx
import React from "react";

export default function Footer({ contact = {} }) {
  return (
    <footer id="contact" className="site-footer">
      <div className="container">
        <h3>Contato</h3>
        {/* Links sociais dinâmicos */}
        <div className="social-links" style={{padding: '1rem 0', display: 'flex', justifyContent: 'center', gap: '1rem', fontSize: '1.5rem'}}>
          <a href={contact.linkedin || '#'} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{color: 'var(--muted)'}}><i className='bx bxl-linkedin-square'></i></a>
          <a href={contact.github || '#'} target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{color: 'var(--muted)'}}><i className='bx bxl-github'></i></a>
          <a href={contact.whatsapp || '#'} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" style={{color: 'var(--muted)'}}><i className='bx bxl-whatsapp'></i></a>
        </div>
        <p>Me encontre em <a href={"mailto:" + (contact.email||"you@example.com")}>{contact.email||"you@example.com"}</a></p>
        {/* Nome do autor dinâmico */}
        <div style={{marginTop:12}}>&copy; Desenvolvido por {contact.author || "Seu Nome"} • 2025</div>
      </div>
    </footer>
  );
}