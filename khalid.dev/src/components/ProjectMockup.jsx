import React from 'react';

export default function ProjectMockup({ project, instance = 'card' }) {
  const { id, mockupType, accent, secondaryAccent, title } = project;
  const gradientId = `grad-${id}-${instance}`;

  return (
    <div className="mockup-frame" aria-hidden="true">
      <div className="mockup-chrome">
        <span className="chrome-dot" />
        <span className="chrome-dot" />
        <span className="chrome-dot" />
        <span className="chrome-url">{title.toLowerCase().replace(/\s+/g, '-')}.app</span>
      </div>

      {mockupType === 'audio-studio' && (
        <div
          className="mockup-canvas"
          style={{
            gridTemplateColumns: '1.35fr 1fr',
            background: 'radial-gradient(circle at 35% 50%, rgba(212,255,79,0.12), #0d1017 70%)',
          }}
        >
          <div
            style={{
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '10px',
              display: 'grid',
              placeItems: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <svg viewBox="0 0 180 120" width="90%" height="90%">
              <circle cx="90" cy="60" r="46" fill="none" stroke="rgba(255,255,255,0.1)" strokeDasharray="3 4" />
              <circle cx="90" cy="60" r="28" fill="none" stroke={accent} strokeOpacity="0.45" />
              <circle cx="90" cy="60" r="7" fill={accent} />
              <circle cx="122" cy="40" r="5" fill={secondaryAccent} />
              <circle cx="58" cy="78" r="4" fill="#fff" />
            </svg>
          </div>
          <div style={{ display: 'grid', gap: '0.45rem' }}>
            {[78, 52, 90, 40].map((val, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  borderRadius: '8px',
                  padding: '0.45rem 0.6rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <div style={{ height: '4px', borderRadius: '99px', background: 'rgba(255,255,255,0.1)' }}>
                  <div style={{ width: `${val}%`, height: '100%', borderRadius: '99px', background: accent }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {mockupType === 'fintech-dashboard' && (
        <div className="mockup-canvas" style={{ gridTemplateRows: 'auto 1fr', background: '#0b1019' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
            {['$14.8M', '+18.4%', '0.02s'].map((metric, idx) => (
              <div
                key={metric}
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  borderRadius: '8px',
                  padding: '0.5rem',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <div style={{ fontSize: '0.58rem', color: '#8492a6', fontFamily: 'var(--font-mono)' }}>
                  METRIC 0{idx + 1}
                </div>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: idx === 1 ? accent : '#fff' }}>
                  {metric}
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              borderRadius: '10px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.06)',
              padding: '0.5rem',
              display: 'flex',
              alignItems: 'flex-end',
            }}
          >
            <svg viewBox="0 0 260 80" width="100%" height="100%" preserveAspectRatio="none">
              <defs>
                <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={accent} stopOpacity="0.35" />
                  <stop offset="100%" stopColor={accent} stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0 65 Q40 50 75 56 T145 34 T210 22 T260 10 L260 80 L0 80 Z"
                fill={`url(#${gradientId})`}
              />
              <path
                d="M0 65 Q40 50 75 56 T145 34 T210 22 T260 10"
                fill="none"
                stroke={accent}
                strokeWidth="2.5"
              />
            </svg>
          </div>
        </div>
      )}

      {mockupType === 'editorial-commerce' && (
        <div
          className="mockup-canvas"
          style={{
            gridTemplateColumns: '1fr 1fr',
            background: 'linear-gradient(135deg, #161310 0%, #0d0e12 100%)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '0.35rem' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: accent }}>
              COLLECTION 04
            </span>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, lineHeight: 1.05 }}>
              Sculpted Light Forms
            </div>
            <div
              style={{
                width: 'fit-content',
                padding: '0.3rem 0.7rem',
                borderRadius: '99px',
                background: accent,
                color: '#090a0d',
                fontSize: '0.62rem',
                fontWeight: 700,
              }}
            >
              CONFIGURE →
            </div>
          </div>
          <div
            style={{
              borderRadius: '10px',
              background: `radial-gradient(circle at 50% 35%, ${accent}, rgba(245,158,11,0.08) 65%)`,
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          />
        </div>
      )}

      {mockupType === 'design-system' && (
        <div className="mockup-canvas" style={{ gridTemplateColumns: '0.7fr 1.3fr', background: '#0e0f17' }}>
          <div
            style={{
              background: 'rgba(255,255,255,0.03)',
              borderRadius: '8px',
              padding: '0.5rem',
              display: 'grid',
              gap: '0.35rem',
              alignContent: 'start',
            }}
          >
            {['Tokens', 'Button', 'Dialog', 'Tabs'].map((item, i) => (
              <div
                key={item}
                style={{
                  fontSize: '0.62rem',
                  fontFamily: 'var(--font-mono)',
                  padding: '0.28rem 0.45rem',
                  borderRadius: '5px',
                  background: i === 0 ? 'rgba(167, 139, 250, 0.2)' : 'transparent',
                  color: i === 0 ? accent : '#8e92a4',
                }}
              >
                {item}
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gap: '0.5rem', alignContent: 'center' }}>
            <div style={{ display: 'flex', gap: '0.45rem' }}>
              {[accent, secondaryAccent, '#F4F2ED', '#1F2330'].map((swatch) => (
                <div
                  key={swatch}
                  style={{
                    flex: 1,
                    height: '32px',
                    borderRadius: '7px',
                    background: swatch,
                    border: '1px solid rgba(255,255,255,0.12)',
                  }}
                />
              ))}
            </div>
            <div
              style={{
                padding: '0.55rem 0.75rem',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span style={{ fontSize: '0.66rem', color: '#cfd3e0' }}>WCAG Contrast AAA</span>
              <span
                style={{
                  fontSize: '0.6rem',
                  padding: '0.18rem 0.45rem',
                  borderRadius: '99px',
                  background: 'rgba(52,211,153,0.18)',
                  color: secondaryAccent,
                }}
              >
                PASS
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}