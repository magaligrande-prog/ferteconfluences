// HomePage.jsx — Ferté Confluences homepage
// Exports: FCHomePage to window

const FCHomePage = ({ onNavigate }) => {
  const [hoveredCard, setHoveredCard] = React.useState(null);

  const activities = [
    { icon: '⚓', label: 'Activités & loisirs', sub: 'Nautisme & sport' },
    { icon: '⛵', label: 'Port de plaisance', sub: 'Amarrage & services' },
    { icon: '🏠', label: 'Hébergements insolites', sub: 'Séjours fluviaux' },
    { icon: '🎉', label: 'Événements', sub: 'Festivals & foires' },
  ];

  const events = [
    { title: 'Festival des 2 rivières', date: 'du 11 au 18 juin', img: '../../assets/images/marina.jpg', bg: '#3a5a7a' },
    { title: 'Foire Paysanne', date: 'du 11 au 18 juin', img: '../../assets/images/riverside.jpg', bg: '#7a6040' },
    { title: 'Triathlon de la Ferté', date: 'du 21 septembre', img: '../../assets/images/events.png', bg: '#4a5a3a' },
  ];

  const articles = [
    { category: 'Le Blog', title: 'Les bonnes pratiques du plaisancier', tags: ['Amarrage', 'Équipement'], img: '../../assets/images/marina.jpg' },
    { category: 'Activités', title: 'Les 5 meilleures balades en canoë', tags: ['Loisirs', 'Nature'], img: '../../assets/images/riverside.jpg' },
    { category: 'Port', title: 'Arrivée par voie fluviale : mode d\'emploi', tags: ['Navigation', 'Conseils'], img: '../../assets/images/hero-2.jpg' },
  ];

  const commitments = [
    { title: 'Excellence nautique', img: '../../assets/images/marina.jpg' },
    { title: 'Accessibilité tarifaire', img: '../../assets/images/activities.png' },
    { title: 'Vision durable', img: '../../assets/images/riverside.jpg' },
  ];

  return React.createElement('div', { style: { background: 'white' } },

    // ── HERO ──────────────────────────────────────────────────────
    React.createElement('div', {
      style: {
        position: 'relative', height: '100vh', minHeight: 700,
        background: `url(../../assets/images/hero-port.jpg) center/cover no-repeat`,
        overflow: 'hidden',
      }
    },
      // Gold tint
      React.createElement('div', { style: { position: 'absolute', inset: 0, background: 'rgba(217,149,0,0.06)' } }),
      // Navy gradient header fade
      React.createElement('div', { style: { position: 'absolute', top: 0, left: 0, right: 0, height: 280, background: 'linear-gradient(rgb(3,48,89) 0%, rgba(3,48,89,0) 100%)' } }),

      // Hero text
      React.createElement('div', { style: { position: 'absolute', left: 128, top: '38%' } },
        React.createElement('div', {
          style: { fontFamily: 'agenda,Nunito,sans-serif', fontStyle: 'italic', fontWeight: 700, fontSize: 88, lineHeight: 1, letterSpacing: '-0.02em', color: 'white', marginBottom: 12 }
        }, 'Bienvenue'),
        React.createElement('div', {
          style: { fontFamily: 'Montserrat,sans-serif', fontWeight: 500, fontSize: 32, lineHeight: 1.2, letterSpacing: '-0.01em', color: 'white', marginBottom: 40 }
        }, 'à Ferté Confluences port loisirs,', React.createElement('br'), 'Découvrez la Destination Marne entre Paris et Épernay'),

        // Category pills
        React.createElement('div', { style: { display: 'flex', gap: 20, flexWrap: 'wrap' } },
          activities.map((act, i) =>
            React.createElement('button', {
              key: i,
              onClick: () => onNavigate(i === 0 ? 'activities' : i === 1 ? 'port' : 'events'),
              style: {
                display: 'flex', alignItems: 'center', gap: 12,
                height: 72, padding: '0 28px',
                borderRadius: 48, background: 'white',
                fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: 17, color: '#033059',
                border: hoveredCard === `act${i}` ? '1px solid #F4A700' : '1px solid transparent',
                boxShadow: hoveredCard === `act${i}` ? '0 0 32px rgba(244,167,0,0.3)' : 'none',
                cursor: 'pointer', backdropFilter: 'blur(8px)',
                transition: 'all 0.2s',
              },
              onMouseEnter: () => setHoveredCard(`act${i}`),
              onMouseLeave: () => setHoveredCard(null),
            },
              React.createElement('svg', { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: '#033059', strokeWidth: 2 },
                i === 0 && React.createElement('path', { d: 'M2 19 Q12 11 22 19 M2 22 h20 M12 6 v5' }),
                i === 1 && [React.createElement('circle', { key: 'c', cx: 12, cy: 8, r: 3 }), React.createElement('line', { key: 'l1', x1: 12, y1: 2, x2: 12, y2: 5 }), React.createElement('line', { key: 'l2', x1: 12, y1: 11, x2: 12, y2: 22 }), React.createElement('line', { key: 'l3', x1: 4, y1: 18, x2: 20, y2: 18 })],
                i === 2 && [React.createElement('rect', { key: 'r', x: 1, y: 4, width: 22, height: 16, rx: 3 }), React.createElement('path', { key: 'p', d: 'M1 10 h22' })],
                i === 3 && [React.createElement('rect', { key: 'r', x: 3, y: 4, width: 18, height: 18, rx: 2 }), React.createElement('path', { key: 'p', d: 'M16 2v4 M8 2v4 M3 10 h18' })],
              ),
              act.label
            )
          )
        )
      ),

      // Large watermark logo
      React.createElement('div', {
        style: { position: 'absolute', right: 60, top: '25%', opacity: 0.12, pointerEvents: 'none' }
      },
        React.createElement('svg', { width: 520, height: 520, viewBox: '0 0 32 32', fill: 'none' },
          React.createElement('circle', { cx: 16, cy: 8, r: 3, stroke: 'white', strokeWidth: 0.6 }),
          React.createElement('line', { x1: 16, y1: 2, x2: 16, y2: 6, stroke: 'white', strokeWidth: 0.6 }),
          React.createElement('line', { x1: 16, y1: 11, x2: 16, y2: 26, stroke: 'white', strokeWidth: 0.6 }),
          React.createElement('path', { d: 'M7 26 Q16 19 25 26', stroke: 'white', strokeWidth: 0.6, fill: 'none' }),
          React.createElement('line', { x1: 7, y1: 26, x2: 4, y2: 24, stroke: 'white', strokeWidth: 0.6 }),
          React.createElement('line', { x1: 25, y1: 26, x2: 28, y2: 24, stroke: 'white', strokeWidth: 0.6 }),
          React.createElement('line', { x1: 9, y1: 17, x2: 23, y2: 17, stroke: 'white', strokeWidth: 0.6 }),
        )
      ),

      // Wave divider
      React.createElement('div', { style: { position: 'absolute', bottom: -2, left: 0, right: 0 } },
        React.createElement('svg', { viewBox: '0 0 1920 128', xmlns: 'http://www.w3.org/2000/svg', style: { display: 'block', width: '100%' }, preserveAspectRatio: 'none' },
          React.createElement('path', { d: 'M0,64 C320,128 640,0 960,64 C1280,128 1600,0 1920,64 L1920,128 L0,128 Z', fill: 'white' })
        )
      )
    ),

    // ── EVENTS SECTION ────────────────────────────────────────────
    React.createElement('div', {
      style: { background: '#F3F3F3', padding: '72px 80px', borderRadius: 32, margin: '0 32px 48px' }
    },
      React.createElement('div', { style: { textAlign: 'center', marginBottom: 56 } },
        React.createElement('h2', { style: { fontFamily: 'agenda,Nunito,sans-serif', fontWeight: 500, fontSize: 44, color: '#575757', lineHeight: 1, marginBottom: 8 } }, 'Événements à la une'),
        React.createElement('p', { style: { fontFamily: 'Montserrat,sans-serif', fontWeight: 500, fontSize: 14, color: '#AAAAAA' } }, 'Un pur plaisir local')
      ),
      React.createElement('div', { style: { display: 'flex', gap: 28, justifyContent: 'center' } },
        events.map((evt, i) =>
          React.createElement('div', {
            key: i,
            style: { flex: '1', maxWidth: 380, borderRadius: 20, overflow: 'hidden', position: 'relative', aspectRatio: '9/16', maxHeight: 560, cursor: 'pointer', background: evt.bg },
            onMouseEnter: () => setHoveredCard(`evt${i}`),
            onMouseLeave: () => setHoveredCard(null),
          },
            React.createElement('div', { style: { position: 'absolute', inset: 0, background: `url(${evt.img}) center/cover no-repeat`, transition: 'transform 0.4s ease', transform: hoveredCard === `evt${i}` ? 'scale(1.04)' : 'scale(1)' } }),
            React.createElement('div', { style: { position: 'absolute', inset: 0, background: 'rgba(90,61,0,0.25)', transition: 'opacity 0.3s', opacity: hoveredCard === `evt${i}` ? 0.5 : 0.3 } }),
            React.createElement('div', { style: { position: 'absolute', bottom: 0, left: 0, right: 0, height: '55%', background: 'linear-gradient(rgba(3,48,89,0) 0%, rgba(3,48,89,0.9) 100%)' } }),
            React.createElement('div', { style: { position: 'absolute', bottom: 24, left: 0, right: 0, textAlign: 'center', padding: '0 20px', textShadow: '0 0 24px rgba(106,72,0,0.5)' } },
              React.createElement('div', { style: { fontFamily: 'agenda,Nunito,sans-serif', fontWeight: 700, fontSize: 28, color: 'white', lineHeight: 1.1, marginBottom: 8 } }, evt.title),
              React.createElement('div', { style: { fontFamily: 'Montserrat,sans-serif', fontWeight: 500, fontSize: 14, color: 'rgba(255,255,255,0.9)' } }, evt.date)
            )
          )
        )
      ),
      React.createElement('div', { style: { textAlign: 'center', marginTop: 48 } },
        React.createElement('button', {
          onClick: () => onNavigate('events'),
          style: { height: 52, padding: '0 32px', borderRadius: 48, border: '1px solid #033059', background: 'white', fontFamily: 'Montserrat,sans-serif', fontWeight: 500, fontSize: 15, color: '#033059', cursor: 'pointer' }
        }, 'Découvrir tout nos événements →')
      )
    ),

    // ── ARTICLES SECTION ──────────────────────────────────────────
    React.createElement('div', { style: { padding: '72px 80px 48px' } },
      React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 } },
        React.createElement('div', null,
          React.createElement('h2', { style: { fontFamily: 'agenda,Nunito,sans-serif', fontWeight: 500, fontSize: 44, color: '#575757', lineHeight: 1, marginBottom: 8 } }, 'Activités à la une'),
          React.createElement('p', { style: { fontFamily: 'Montserrat,sans-serif', fontWeight: 500, fontSize: 14, color: '#AAAAAA' } }, 'Découvrez nos meilleures expériences')
        ),
        React.createElement('div', { style: { display: 'flex', gap: 12 } },
          ['←', '→'].map((arrow, i) =>
            React.createElement('button', {
              key: i,
              style: { width: 56, height: 56, borderRadius: '50%', background: 'white', border: '1px solid #E3E3E3', cursor: 'pointer', fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center' }
            }, arrow)
          )
        )
      ),
      React.createElement('div', { style: { display: 'flex', gap: 24 } },
        articles.map((art, i) =>
          React.createElement('div', {
            key: i,
            style: { flex: 1, borderRadius: 24, overflow: 'hidden', cursor: 'pointer', background: '#AAAAAA' },
            onMouseEnter: () => setHoveredCard(`art${i}`),
            onMouseLeave: () => setHoveredCard(null),
            onClick: () => onNavigate('blog'),
          },
            // Image area
            React.createElement('div', { style: { height: 280, position: 'relative', overflow: 'hidden' } },
              React.createElement('div', { style: { position: 'absolute', inset: 0, background: `url(${art.img}) center/cover no-repeat`, transition: 'transform 0.4s', transform: hoveredCard === `art${i}` ? 'scale(1.05)' : 'scale(1)' } }),
              hoveredCard === `art${i}` && React.createElement('div', { style: { position: 'absolute', inset: 0, background: 'linear-gradient(rgba(244,167,0,0) 0%, rgba(244,167,0,0.4) 100%)' } }),
              // Heart
              React.createElement('div', { style: { position: 'absolute', top: 14, right: 14, width: 32, height: 32, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' } },
                React.createElement('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'white', strokeWidth: 2 },
                  React.createElement('path', { d: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z' })
                )
              ),
              // Tags
              React.createElement('div', { style: { position: 'absolute', bottom: 0, left: 0, right: 0, padding: '12px 16px', display: 'flex', gap: 8 } },
                art.tags.map(tag =>
                  React.createElement('span', { key: tag, style: { height: 32, padding: '0 14px', borderRadius: 48, border: '1px solid white', fontFamily: 'Montserrat,sans-serif', fontWeight: 500, fontSize: 12, color: 'white', display: 'flex', alignItems: 'center', background: 'rgba(3,48,89,0.2)', backdropFilter: 'blur(4px)' } }, tag)
                )
              )
            ),
            // Card body
            React.createElement('div', {
              style: { background: '#033059', padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }
            },
              React.createElement('div', null,
                React.createElement('div', { style: { fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: 11, color: 'rgba(255,255,255,0.7)', marginBottom: 6 } }, art.category),
                React.createElement('div', { style: { fontFamily: 'Montserrat,sans-serif', fontWeight: 500, fontSize: 16, color: 'white', lineHeight: 1.3, textDecoration: hoveredCard === `art${i}` ? 'underline' : 'none' } }, art.title)
              ),
              React.createElement('div', { style: { width: 40, height: 40, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 } },
                React.createElement('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'white', strokeWidth: 2 },
                  React.createElement('path', { d: 'M5 12h14 M12 5l7 7-7 7' })
                )
              )
            )
          )
        )
      )
    ),

    // ── ABOUT / VISION SECTION ────────────────────────────────────
    React.createElement('div', { style: { padding: '72px 80px 48px' } },
      React.createElement('div', { style: { display: 'flex', gap: 32, alignItems: 'stretch' } },
        // Navy text panel
        React.createElement('div', {
          style: { flex: 1, background: '#033059', borderRadius: 32, padding: '56px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }
        },
          React.createElement('div', null,
            React.createElement('h2', { style: { fontFamily: 'agenda,Nunito,sans-serif', fontWeight: 500, fontSize: 40, color: 'white', lineHeight: 1.1, marginBottom: 32 } }, 'Notre vision des Confluences'),
            React.createElement('p', { style: { fontFamily: 'Montserrat,sans-serif', fontWeight: 500, fontSize: 15, color: 'rgba(255,255,255,0.85)', lineHeight: 1.8 } }, 'À la Ferté-sous-Jouarre, entre Épernay et Paris, le Port de Loisirs Ferté Confluences s\'affirme comme une nouvelle place forte du tourisme fluvial et des loisirs durables. Il allie escale touristique et lieu de vie paisible pour plaisanciers. Véritable quartier tourné vers l\'eau, il réunit nature, culture et convivialité.')
          ),
          React.createElement('button', {
            onClick: () => onNavigate('about'),
            style: { height: 52, padding: '0 32px', borderRadius: 48, border: '1px solid rgba(255,255,255,0.4)', background: 'transparent', fontFamily: 'Montserrat,sans-serif', fontWeight: 500, fontSize: 14, color: 'white', cursor: 'pointer', alignSelf: 'flex-start', marginTop: 40 }
          }, 'Découvrir notre histoire →')
        ),
        // Image grid
        React.createElement('div', { style: { flex: 1, display: 'flex', flexDirection: 'column', gap: 24 } },
          React.createElement('div', { style: { flex: 1, borderRadius: 24, overflow: 'hidden', minHeight: 200 } },
            React.createElement('div', { style: { width: '100%', height: '100%', background: `url(../../assets/images/hero-2.jpg) center/cover no-repeat`, minHeight: 220 } })
          ),
          React.createElement('div', { style: { flex: 1, borderRadius: 24, overflow: 'hidden' } },
            React.createElement('div', { style: { width: '100%', height: '100%', background: `url(../../assets/images/activities.png) center/cover no-repeat`, minHeight: 220 } })
          )
        )
      )
    ),

    // ── ENGAGEMENTS ───────────────────────────────────────────────
    React.createElement('div', { style: { padding: '72px 80px 96px', textAlign: 'center' } },
      React.createElement('h2', { style: { fontFamily: 'agenda,Nunito,sans-serif', fontWeight: 500, fontSize: 44, color: '#575757', marginBottom: 8 } }, 'Engagements'),
      React.createElement('p', { style: { fontFamily: 'Montserrat,sans-serif', fontWeight: 500, fontSize: 14, color: '#AAAAAA', marginBottom: 56 } }, 'Nos valeurs profondes'),
      React.createElement('div', { style: { display: 'flex', gap: 24 } },
        commitments.map((c, i) =>
          React.createElement('div', {
            key: i,
            style: { flex: 1, borderRadius: 28, overflow: 'hidden', position: 'relative', height: 400, cursor: 'pointer' }
          },
            React.createElement('div', { style: { position: 'absolute', inset: 0, background: `url(${c.img}) center/cover no-repeat` } }),
            React.createElement('div', { style: { position: 'absolute', inset: 0, background: 'rgba(244,167,0,0.05)' } }),
            React.createElement('div', { style: { position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%', background: 'linear-gradient(rgba(3,48,89,0) 0%, rgb(3,48,89) 100%)' } }),
            React.createElement('div', { style: { position: 'absolute', bottom: 28, left: 0, right: 0, textAlign: 'center', fontFamily: 'agenda,Nunito,sans-serif', fontWeight: 700, fontSize: 26, color: 'white' } }, c.title)
          )
        )
      ),
      React.createElement('button', {
        onClick: () => onNavigate('about'),
        style: { marginTop: 48, height: 52, padding: '0 32px', borderRadius: 48, border: '1px solid #033059', background: 'white', fontFamily: 'Montserrat,sans-serif', fontWeight: 500, fontSize: 15, color: '#033059', cursor: 'pointer' }
      }, 'Découvrir tout nos engagements →')
    )

  );
};

Object.assign(window, { FCHomePage });
