import React, { useState } from 'react';
import { PROJECTS, SITE_CONFIG } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';
import ProjectModal from './ProjectModal';

export default function ProjectsSection() {
  const [ref, isVisible] = useInView();
  const [selectedProject, setSelectedProject] = useState(null);
  const githubUrl =
    SITE_CONFIG.socials.find((s) => s.type === 'github')?.url || 'https://github.com';

  return (
    <section id="projects" className="projects-section" ref={ref}>
      <div className={`container projects-layout reveal ${isVisible ? 'is-visible' : ''}`}>
        {/* Left Column Intro */}
        <div className="projects-intro">
          <span className="eyebrow-line">My Projects</span>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.75rem, 2.8vw, 2.3rem)' }}>
            Ideas. Code. <span className="gradient-text">Real Solutions.</span>
          </h2>
          <p>
            A selection of clean, responsive builds across fashion, travel, education, and craft
            e-commerce.
          </p>
          <a href={githubUrl} target="_blank" rel="noreferrer" className="btn btn-glass">
            View All on GitHub →
          </a>
        </div>

        {/* Right 4 Project Cards */}
        <div className="projects-cards">
          {PROJECTS.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-thumb">
                <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
                <span className="project-num">{project.number}</span>

                {/* Direct GitHub Repo Button */}
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.title} source code on GitHub`}
                  title="View GitHub Repo"
                  style={{
                    position: 'absolute',
                    top: '0.65rem',
                    right: '0.65rem',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'rgba(11, 14, 20, 0.82)',
                    border: '1px solid var(--border-subtle)',
                    display: 'grid',
                    placeItems: 'center',
                    color: 'var(--text-primary)',
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2C6.48 2 2 6.58 2 12.23C2 16.75 4.87 20.58 8.84 21.93C9.34 22.02 9.52 21.71 9.52 21.44C9.52 21.2 9.51 20.39 9.51 19.53C7 20 6.35 18.9 6.15 18.33C6.04 18.04 5.55 17.15 5.13 16.91C4.78 16.72 4.28 16.25 5.12 16.24C5.91 16.23 6.48 16.98 6.67 17.29C7.58 18.86 9.03 18.42 9.61 18.15C9.7 17.48 9.96 17.03 10.25 16.77C8.03 16.51 5.71 15.63 5.71 11.73C5.71 10.62 6.1 9.7 6.73 8.99C6.63 8.73 6.28 7.68 6.83 6.26C6.83 6.26 7.67 5.99 9.58 7.31C10.38 7.08 11.23 6.97 12.08 6.97C12.93 6.97 13.78 7.08 14.58 7.31C16.49 5.98 17.33 6.26 17.33 6.26C17.88 7.68 17.53 8.73 17.43 8.99C18.06 9.7 18.45 10.61 18.45 11.73C18.45 15.64 16.12 16.51 13.9 16.77C14.27 17.09 14.59 17.71 14.59 18.67C14.59 20.05 14.58 21.12 14.58 21.44C14.58 21.71 14.76 22.03 15.27 21.93C19.14 20.58 22 16.74 22 12.23C22 6.58 17.52 2 12 2Z" />
                  </svg>
                </a>
              </div>

              <div className="project-card-body">
                <h3>{project.title}</h3>
                <div className="project-cat">{project.category}</div>
                <p className="project-desc">{project.description}</p>

                <div className="project-btns">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-mini btn-mini-primary"
                  >
                    Live Demo ↗
                  </a>
                  <button
                    type="button"
                    className="btn-mini"
                    onClick={() => setSelectedProject(project)}
                  >
                    Case Study ↗
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}