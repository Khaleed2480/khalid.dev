import React, { useState } from 'react';
import { ABOUT_INFO, SITE_CONFIG } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

export default function AboutSection() {
  const [ref, isVisible] = useInView();
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className={`container about-grid reveal ${isVisible ? 'is-visible' : ''}`}>
        {/* Left: About Photo */}
        <div className="about-photo-wrap">
          <div className="about-photo-card">
            {!imgError ? (
              <img
                src={SITE_CONFIG.aboutImage}
                alt={`${SITE_CONFIG.name} portrait`}
                className="portrait-img"
                loading="lazy"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="portrait-fallback" style={{ height: '100%' }}>
                <div className="portrait-monogram">K</div>
                <span style={{ fontSize: '0.82rem' }}>
                  Add your photo at <code>public/images/about.jpg</code>
                </span>
              </div>
            )}

            <div className="about-role-pill">
              <span className="status-dot" aria-hidden="true" />
              <span>{SITE_CONFIG.role}</span>
            </div>
          </div>
        </div>

        {/* Center: Bio */}
        <div className="about-copy">
          <span className="eyebrow-line">{ABOUT_INFO.eyebrow}</span>
          <h2 className="section-title">
            {ABOUT_INFO.headlineStart}{' '}
            <span className="gradient-text">{ABOUT_INFO.headlineGradient}</span>{' '}
            {ABOUT_INFO.headlineEnd}
          </h2>
          <p>{ABOUT_INFO.bio}</p>
        </div>

        {/* Right: Key Pillars */}
        <div>
          <div className="about-pillars">
            {ABOUT_INFO.pillars.map((pillar) => (
              <div key={pillar} className="pillar-item">
                <span className="pillar-icon" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span>{pillar}</span>
              </div>
            ))}
          </div>

          <a href="#skills" className="btn btn-glass">
            Explore Skills →
          </a>
        </div>
      </div>
    </section>
  );
}