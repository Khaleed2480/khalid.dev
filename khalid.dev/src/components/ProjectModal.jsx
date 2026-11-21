import React, { useEffect } from 'react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
    >
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '1rem',
            marginBottom: '1.25rem',
          }}
        >
          <div>
            <span className="eyebrow-line" style={{ marginBottom: '0.4rem' }}>
              {project.number} / {project.category}
            </span>
            <h3
              id="modal-title"
              className="section-title"
              style={{ marginBottom: 0, fontSize: 'clamp(1.5rem, 3vw, 2.1rem)' }}
            >
              {project.title}
            </h3>
          </div>

          <button type="button" className="modal-close" onClick={onClose} aria-label="Close case study">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <p style={{ color: 'var(--text-secondary)', marginTop: 0 }}>{project.overview}</p>

        <h4
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            color: 'var(--accent-solid)',
            marginBottom: '0.4rem',
          }}
        >
          KEY HIGHLIGHTS
        </h4>
        <ul className="modal-highlights">
          {project.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.5rem' }}>
          {project.stack.map((tech) => (
            <span
              key={tech}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                padding: '0.3rem 0.7rem',
                borderRadius: '999px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-secondary)',
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn-gradient">
            View Live Site ↗
          </a>
          <a href={project.repoUrl} target="_blank" rel="noreferrer" className="btn btn-glass">
            GitHub Repo ↗
          </a>
        </div>
      </div>
    </div>
  );
}