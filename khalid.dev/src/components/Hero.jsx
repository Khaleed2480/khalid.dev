import React, { useState } from 'react';
import { SITE_CONFIG } from '../data/portfolioData';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function Hero() {
  const reducedMotion = useReducedMotion();
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [imgError, setImgError] = useState(false);

  const handlePointerMove = (e) => {
    if (reducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const normX = (e.clientX - rect.left) / Math.max(rect.width, 1) - 0.5;
    const normY = (e.clientY - rect.top) / Math.max(rect.height, 1) - 0.5;
    setOffset({ x: normX, y: normY });
  };

  const handlePointerLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  const badgeTransform = (depth) =>
    reducedMotion
      ? undefined
      : {
          transform: `translate3d(${offset.x * depth}px, ${offset.y * depth}px, 0)`,
        };

  return (
    <section
      id="home"
      className="hero"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {/* Subtle natural cursor-reactive atmospheric glow */}
      <div
        className="hero-ambient"
        aria-hidden="true"
        style={{
          background: reducedMotion
            ? 'radial-gradient(circle at 72% 45%, rgba(243, 208, 146, 0.08), transparent 48%)'
            : `radial-gradient(600px circle at ${55 + offset.x * 24}% ${45 + offset.y * 24}%, rgba(243, 208, 146, 0.1), rgba(224, 122, 95, 0.05) 45%, transparent 72%)`,
        }}
      />

      <div className="container hero-grid">
        <div>
          <div className="status-badge">
            <span className="status-dot" aria-hidden="true" />
            <span>{SITE_CONFIG.availability}</span>
          </div>

          <h1 className="hero-title">
            {SITE_CONFIG.heroHeadlineStart}{' '}
            <span className="gradient-text">{SITE_CONFIG.heroHeadlineGradient}</span>
          </h1>

          <p className="hero-sub">{SITE_CONFIG.heroSubheadline}</p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-gradient">
              Explore My Work →
            </a>
            <a href="#contact" className="btn btn-glass">
              Let’s Work Together →
            </a>
          </div>

          <div className="scroll-hint">
            <svg width="15" height="20" viewBox="0 0 16 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <rect x="1.5" y="1.5" width="13" height="21" rx="6.5" />
              <line x1="8" y1="6" x2="8" y2="10" />
            </svg>
            <span>Scroll to explore</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="portrait-ring">
            <div className="portrait-card">
              {!imgError ? (
                <img
                  src={SITE_CONFIG.heroImage}
                  alt={`${SITE_CONFIG.name} — ${SITE_CONFIG.role}`}
                  className="portrait-img"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="portrait-fallback">
                  <div className="portrait-monogram">K</div>
                  <strong style={{ color: 'var(--text-primary)' }}>{SITE_CONFIG.brand}</strong>
                  <span style={{ fontSize: '0.82rem', marginTop: '0.35rem' }}>
                    Add your photo at <code>public/images/hero.jpg</code>
                  </span>
                </div>
              )}
            </div>

            {/* Subtle cursor-reactive glass cards */}
            <div className="float-badge float-badge-1" style={badgeTransform(-18)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="1.7">
                <circle cx="12" cy="12" r="2.2" fill="#38BDF8" />
                <ellipse cx="12" cy="12" rx="10" ry="4.2" />
                <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
                <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
              </svg>
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, lineHeight: 1.1 }}>React</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>
                  Building Clean UI
                </div>
              </div>
            </div>

            <div className="float-badge float-badge-2" style={badgeTransform(14)}>
              &lt;/&gt;
            </div>

            <div className="float-badge float-badge-3" style={badgeTransform(-22)}>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 800, lineHeight: 1 }}>
                  {SITE_CONFIG.projectsCount}
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>
                  Featured Projects
                </div>
              </div>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2DD4BF" strokeWidth="2">
                <path d="M4 20V14M10 20V9M16 20V12M22 20V5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}