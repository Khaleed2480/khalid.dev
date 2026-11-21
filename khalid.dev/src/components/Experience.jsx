import React, { useState } from 'react';
import { EXPERIENCE } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

export default function Experience() {
  const [openIndex, setOpenIndex] = useState(0);
  const [ref, isVisible] = useInView();

  return (
    <section
      id="experience"
      className="section"
      ref={ref}
      style={{ borderTop: '1px solid var(--border-subtle)' }}
    >
      <div className={`container reveal ${isVisible ? 'is-visible' : ''}`}>
        <span className="eyebrow">Track Record</span>
        <h2 className="section-heading">Experience & Impact</h2>

        <div className="exp-list">
          {EXPERIENCE.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={item.company} className="exp-item">
                <button
                  type="button"
                  className="exp-trigger"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                >
                  <span className="exp-period">{item.period}</span>
                  <span className="exp-role">
                    {item.role}
                    <span className="exp-company">@ {item.company}</span>
                  </span>
                  <span
                    aria-hidden="true"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '1.25rem',
                      color: isOpen ? 'var(--accent-primary)' : 'var(--text-muted)',
                    }}
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="exp-content">
                    <p style={{ margin: 0 }}>{item.summary}</p>
                    <ul className="exp-highlights">
                      {item.highlights.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}