import React from 'react';
import { TECH_STACK } from '../data/portfolioData';

export default function TechMarquee() {
  const repeated = [...TECH_STACK, ...TECH_STACK];

  return (
    <section className="tech-strip" aria-label="Technologies I work with">
      <div className="container tech-strip-inner">
        <span className="tech-label">Tech I Work With:</span>

        <div className="tech-marquee-wrap">
          <div className="tech-marquee-track">
            {repeated.map((tech, idx) => (
              <div key={`${tech.name}-${idx}`} className="tech-pill">
                <span className="tech-dot" style={{ background: tech.color }} aria-hidden="true" />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}