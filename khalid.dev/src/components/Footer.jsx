import React from 'react';
import { SITE_CONFIG } from '../data/portfolioData';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function Footer() {
  const reducedMotion = useReducedMotion();
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: reducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-bar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          <a href="#home" className="brand" style={{ color: 'var(--text-primary)' }}>
            <span className="brand-badge" aria-hidden="true">
              K
            </span>
            <span>{SITE_CONFIG.brand}</span>
          </a>
          <span>Code • Create • Innovate</span>
        </div>

        <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span>
            © {year} {SITE_CONFIG.brand}. All rights reserved.
          </span>
          <button
            type="button"
            className="scroll-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
}