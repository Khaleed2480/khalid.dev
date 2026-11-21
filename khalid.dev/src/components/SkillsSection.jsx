import React from 'react';
import { TECH_STACK, WHAT_I_BRING } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

export default function SkillsSection() {
  const [ref, isVisible] = useInView();

  return (
    <section id="skills" className="skills-section" ref={ref}>
      <div className={`container skills-bento reveal ${isVisible ? 'is-visible' : ''}`}>
        {/* Left Panel: Technologies */}
        <div className="bento-panel">
          <span className="eyebrow-line">My Skills &amp; Expertise</span>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)' }}>
            Technologies <span className="gradient-text">I Bring to the Table.</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', margin: 0 }}>
            A practical frontend stack focused on clean architecture, responsive styling, and fast
            user interfaces.
          </p>

          <div className="skills-grid-pills">
            {TECH_STACK.slice(0, 9).map((skill) => (
              <div key={skill.name} className="skill-chip">
                <span className="tech-dot" style={{ background: skill.color }} aria-hidden="true" />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '1.5rem' }}>
            <a href="#projects" className="btn btn-glass">
              See Them in Action →
            </a>
          </div>
        </div>

        {/* Right Panel: What I Bring */}
        <div className="bento-panel">
          <span className="eyebrow-line">What I Bring</span>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)' }}>
            More Than <span className="gradient-text">Just Code.</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', margin: 0 }}>
            I combine visual judgment, problem-solving, and solid engineering habits to ship reliable
            digital products.
          </p>

          <div className="bring-list">
            {WHAT_I_BRING.map((item) => (
              <div key={item} className="bring-item">
                <span className="bring-check" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '1.5rem' }}>
            <a href="#contact" className="btn btn-gradient">
              Start a Conversation →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}