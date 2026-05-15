// InnerPages.jsx — Activities, Blog, About pages
// Exports: FCActivitiesPage, FCBlogPage, FCAboutPage to window

// ── Shared inner hero ─────────────────────────────────────────────
const FCInnerHero = ({ title, subtitle, breadcrumb, img }) =>
  React.createElement('div', {
    style: { position: 'relative', height: 500, background: `url(${img}) center/cover no-repeat`, overflow: 'hidden' }
  },
    React.createElement('div', { style: { position: 'absolute', inset: 0, background: 'linear-gradient(rgba(3,48,89,0.6) 3%, rgba(244,167,0,0.036) 100%)' } }),
    React.createElement('div', { style: { position: 'absolute', top: 96, left: 48, display: 'flex', gap: 8, alignItems: 'center' } },
      ['Accueil', '›', breadcrumb].map((t, i) =>
        React.createElement('span', { key: i, style: { fontFamily: 'Montserrat,sans-serif', fontWeight: 500, fontSize: 13, color: 'rgba(255,255,255,0.7)' } }, t)
      )
    ),
    React.createElement('div', { style: { position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12 } },
      React.createElement('h1', { style: { fontFamily: 'agenda,Nunito,sans-serif', fontWeight: 500, fontSize: 80, letterSpacing: '-0.02em', color: 'white', lineHeight: 1, textAlign: 'center' } }, title),
      subtitle && React.createElement('p', { style: { fontFamily: 'Montserrat,sans-serif', fontWeight: 500, fontSize: 20, color: 'rgba(255,255,255,0.85)' } }, subtitle)
    )
  );

// ── Activities Page ───────────────────────────────────────────────
const FCActivitiesPage = ({ onNavigate }) => {
  const [activeFilter, setActiveFilter] = React.useState('Tout');
  const [hovered, setHovered] = React.useState(null);

  const filters = ['Tout', 'Nautisme', 'Sport', 'Famille', 'Culture', 'Gastronomie'];

  const activities = [
    { title: 'Canoë & Kayak', cat: 'Nautisme', desc: 'Descendez la Marne au fil de l\'eau.', img: '../../assets/images/riverside.jpg' },
    { title: 'Vélo sur les berges', cat: 'Sport', desc: 'Parcourez les pistes cyclables en bord de Marne.', img: '../../assets/images/hero-2.jpg' },
    { title: 'Bateau électrique', cat: 'Nautisme', desc: 'Navigation calme et éco-responsable.', img: '../../assets/images/marina.jpg' },
    { title: 'Pêche fluviale', cat: 'Famille', desc: 'Activité en plein air pour petits et grands.', img: '../../assets/images/activities.png' },
    { title: 'Initiation voile', cat: 'Nautisme', desc: 'Cours et stages pour tous niveaux.', img: '../../assets/images/riverside.jpg' },
    { title: 'Randonnée riverside', cat: 'Sport', desc: 'Chemins balisés au bord de la Marne.', img: '../../assets/images/hero-port.jpg' },
  ];

  const filtered = activeFilter === 'Tout' ? activities : activities.filter(a => a.cat === activeFilter);

  return React.createElement('div', { style: { background: 'white' } },
    React.createElement(FCInnerHero, {
      title: 'Activités & loisirs',
      subtitle: 'Plaisirs de l\'eau et de la nature',
      breadcrumb: 'Activités & loisirs',
      img: '../../assets/images/hero-2.jpg',
    }),

    // Filter bar
    React.createElement('div', { style: { background: '#F5F5F5', padding: '16px 48px', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' } },
      React.createElement('span', { style: { fontFamily: 'Montserrat,sans-serif', fontWeight: 500, fontSize: 14, color: '#575757' } }, 'Affinez vos envies'),
      React.createElement('div', { style: { width: 1, height: 24, background: '#E3E3E3', margin: '0 8px' } }),
      filters.map(f =>
        React.createElement('button', {
          key: f,
          onClick: () => setActiveFilter(f),
          style: {
            height: 40, padding: '0 20px', borderRadius: 48, cursor: 'pointer',
            fontFamily: 'Montserrat,sans-serif', fontWeight: 500, fontSize: 13,
            background: activeFilter === f ? '#033059' : 'white',
            color: activeFilter === f ? 'white' : '#575757',
            border: activeFilter === f ? '1px solid #033059' : '1px solid #E3E3E3',
            transition: 'all 0.2s',
          }
        }, f)
      )
    ),

    // Activity grid
    React.createElement('div', { style: { padding: '56px 48px 80px' } },
      React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 } },
        filtered.map((act, i) =>
          React.createElement('div', {
            key: i,
            style: { borderRadius: 24, overflow: 'hidden', cursor: 'pointer', background: '#AAAAAA' },
            onMouseEnter: () => setHovered(i),
            onMouseLeave: () => setHovered(null),
          },
            React.createElement('div', { style: { height: 260, position: 'relative', overflow: 'hidden' } },
              React.createElement('div', { style: { position: 'absolute', inset: 0, background: `url(${act.img}) center/cover no-repeat`, transition: 'transform 0.4s', transform: hovered === i ? 'scale(1.05)' : 'scale(1)' } }),
              hovered === i && React.createElement('div', { style: { position: 'absolute', inset: 0, background: 'linear-gradient(rgba(244,167,0,0) 0%, rgba(244,167,0,0.35) 100%)' } }),
              React.createElement('span', { style: { position: 'absolute', top: 16, left: 16, height: 30, padding: '0 14px', borderRadius: 48, border: '1px solid white', fontFamily: 'Montserrat,sans-serif', fontWeight: 500, fontSize: 12, color: 'white', display: 'flex', alignItems: 'center', background: 'rgba(3,48,89,0.25)', backdropFilter: 'blur(4px)' } }, act.cat)
            ),
            React.createElement('div', { style: { background: '#033059', padding: '18px 22px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' } },
              React.createElement('div', null,
                React.createElement('div', { style: { fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: 16, color: 'white', marginBottom: 4 } }, act.title),
                React.createElement('div', { style: { fontFamily: 'Montserrat,sans-serif', fontWeight: 500, fontSize: 13, color: 'rgba(255,255,255,0.7)' } }, act.desc)
              ),
              React.createElement('div', { style: { width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 } },
                React.createElement('svg', { width: 14, height: 14, viewBox: '0 0 24 24', fill: 'none', stroke: 'white', strokeWidth: 2 },
                  React.createElement('path', { d: 'M5 12h14 M12 5l7 7-7 7' })
                )
              )
            )
          )
        )
      )
    )
  );
};

// ── Blog Page ─────────────────────────────────────────────────────
const FCBlogPage = ({ onNavigate }) => {
  const [hovered, setHovered] = React.useState(null);

  const articles = [
    { category: 'Nautisme', title: 'Les bonnes pratiques du plaisancier', date: '12 mai 2025', tags: ['Amarrage', 'Équipement'], img: '../../assets/images/marina.jpg' },
    { category: 'Loisirs', title: 'Les 5 meilleures balades en canoë sur la Marne', date: '8 mai 2025', tags: ['Canoë', 'Nature'], img: '../../assets/images/riverside.jpg' },
    { category: 'Port', title: 'Arrivée par voie fluviale : mode d\'emploi complet', date: '2 mai 2025', tags: ['Navigation', 'Conseils'], img: '../../assets/images/hero-2.jpg' },
    { category: 'Événements', title: 'Festival des 2 rivières : programme complet', date: '28 avril 2025', tags: ['Festival', 'Culture'], img: '../../assets/images/events.png' },
    { category: 'Gastronomie', title: 'La guinguette du port : les saveurs de la Marne', date: '20 avril 2025', tags: ['Restaurant', 'Local'], img: '../../assets/images/activities.png' },
    { category: 'Nature', title: 'Découvrir la biodiversité des berges', date: '15 avril 2025', tags: ['Écologie', 'Randonnée'], img: '../../assets/images/hero-port.jpg' },
  ];

  return React.createElement('div', { style: { background: 'white' } },
    React.createElement(FCInnerHero, {
      title: 'Le Blog',
      subtitle: 'Actualités, conseils & inspirations',
      breadcrumb: 'Blog',
      img: '../../assets/images/hero-2.jpg',
    }),

    // Featured article
    React.createElement('div', { style: { padding: '56px 48px 0' } },
      React.createElement('div', { style: { borderRadius: 28, overflow: 'hidden', display: 'flex', height: 380, cursor: 'pointer' } },
        React.createElement('div', { style: { flex: 1, background: `url(../../assets/images/hero-port.jpg) center/cover no-repeat`, position: 'relative' } },
          React.createElement('div', { style: { position: 'absolute', inset: 0, background: 'linear-gradient(rgba(3,48,89,0) 40%, rgba(3,48,89,0.7) 100%)' } })
        ),
        React.createElement('div', { style: { flex: 1, background: '#033059', padding: '48px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' } },
          React.createElement('div', null,
            React.createElement('div', { style: { fontSize: 11, fontWeight: 700, fontFamily: 'Montserrat,sans-serif', color: '#F4A700', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 } }, 'À la une'),
            React.createElement('h3', { style: { fontFamily: 'agenda,Nunito,sans-serif', fontWeight: 700, fontSize: 32, color: 'white', lineHeight: 1.2, marginBottom: 16 } }, 'Les bonnes pratiques du plaisancier'),
            React.createElement('p', { style: { fontFamily: 'Montserrat,sans-serif', fontWeight: 500, fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7 } }, 'Tout ce que vous devez savoir avant d\'amarrer au port de Ferté Confluences. Règles, équipements recommandés, et astuces pour plaisanciers.')
          ),
          React.createElement('button', { style: { height: 48, padding: '0 28px', borderRadius: 48, border: '1px solid rgba(255,255,255,0.4)', background: 'transparent', fontFamily: 'Montserrat,sans-serif', fontWeight: 500, fontSize: 14, color: 'white', cursor: 'pointer', alignSelf: 'flex-start' } }, 'Lire l\'article →')
        )
      )
    ),

    // Grid
    React.createElement('div', { style: { padding: '48px 48px 80px' } },
      React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 } },
        articles.map((art, i) =>
          React.createElement('div', {
            key: i,
            style: { borderRadius: 20, overflow: 'hidden', cursor: 'pointer', background: '#AAAAAA' },
            onMouseEnter: () => setHovered(i),
            onMouseLeave: () => setHovered(null),
          },
            React.createElement('div', { style: { height: 220, position: 'relative', overflow: 'hidden' } },
              React.createElement('div', { style: { position: 'absolute', inset: 0, background: `url(${art.img}) center/cover no-repeat`, transition: 'transform 0.4s', transform: hovered === i ? 'scale(1.05)' : 'scale(1)' } }),
              hovered === i && React.createElement('div', { style: { position: 'absolute', inset: 0, background: 'linear-gradient(rgba(244,167,0,0) 0%, rgba(244,167,0,0.35) 100%)' } }),
              React.createElement('div', { style: { position: 'absolute', bottom: 0, left: 0, right: 0, padding: '10px 14px', display: 'flex', gap: 8 } },
                art.tags.map(tag => React.createElement('span', { key: tag, style: { height: 28, padding: '0 12px', borderRadius: 48, border: '1px solid white', fontFamily: 'Montserrat,sans-serif', fontWeight: 500, fontSize: 11, color: 'white', display: 'flex', alignItems: 'center', background: 'rgba(3,48,89,0.2)', backdropFilter: 'blur(4px)' } }, tag))
              )
            ),
            React.createElement('div', { style: { background: '#033059', padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' } },
              React.createElement('div', null,
                React.createElement('div', { style: { fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: 10, color: '#F4A700', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.06em' } }, art.category),
                React.createElement('div', { style: { fontFamily: 'Montserrat,sans-serif', fontWeight: 500, fontSize: 14, color: 'white', lineHeight: 1.3 } }, art.title)
              ),
              React.createElement('div', { style: { width: 34, height: 34, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 } },
                React.createElement('svg', { width: 14, height: 14, viewBox: '0 0 24 24', fill: 'none', stroke: 'white', strokeWidth: 2 }, React.createElement('path', { d: 'M5 12h14 M12 5l7 7-7 7' }))
              )
            )
          )
        )
      )
    )
  );
};

// ── About Page ────────────────────────────────────────────────────
const FCAboutPage = ({ onNavigate }) => {
  const values = [
    { icon: '🌊', title: 'Excellence nautique', desc: 'Un port de plaisance aux standards premium, alliant modernité et tradition fluviale.' },
    { icon: '💰', title: 'Accessibilité tarifaire', desc: 'Des tarifs équitables pour que chacun puisse profiter du plaisir de l\'eau.' },
    { icon: '🌿', title: 'Vision durable', desc: 'Un engagement fort pour la préservation de l\'écosystème de la Marne.' },
    { icon: '🤝', title: 'Ancrage territorial', desc: 'Un port profondément ancré dans le tissu local de la Seine-et-Marne.' },
  ];

  const team = [
    { name: 'Direction du Port', role: 'Management & développement' },
    { name: 'Capitainerie', role: 'Navigation & sécurité' },
    { name: 'Animation & Loisirs', role: 'Événements & activités' },
    { name: 'Accueil & Services', role: 'Hébergements & restauration' },
  ];

  return React.createElement('div', { style: { background: 'white' } },
    React.createElement(FCInnerHero, {
      title: 'Qui sommes-nous ?',
      subtitle: null,
      breadcrumb: 'Qui sommes-nous ?',
      img: '../../assets/images/hero-2.jpg',
    }),

    // Mission
    React.createElement('div', { style: { padding: '80px 80px 56px', textAlign: 'center' } },
      React.createElement('div', { style: { maxWidth: 800, margin: '0 auto' } },
        React.createElement('div', { style: { fontFamily: 'agenda,Nunito,sans-serif', fontWeight: 700, fontStyle: 'italic', fontSize: 18, color: '#F4A700', marginBottom: 24, textTransform: 'uppercase', letterSpacing: '0.06em' } }, 'Notre mission'),
        React.createElement('p', { style: { fontFamily: 'agenda,Nunito,sans-serif', fontWeight: 500, fontSize: 32, color: '#033059', lineHeight: 1.6 } }, 'Ferté Confluences, c\'est à la fois une escale touristique et un lieu de vie paisible pour plaisanciers. Véritable quartier tourné vers l\'eau, il réunit nature, culture et convivialité.')
      )
    ),

    // Story + image
    React.createElement('div', { style: { padding: '0 80px 80px', display: 'flex', gap: 48, alignItems: 'center' } },
      React.createElement('div', { style: { flex: 1 } },
        React.createElement('h2', { style: { fontFamily: 'agenda,Nunito,sans-serif', fontWeight: 700, fontSize: 40, color: '#033059', marginBottom: 24, lineHeight: 1.1 } }, 'Ferté Confluences – Port loisirs de la Marne'),
        React.createElement('p', { style: { fontFamily: 'Montserrat,sans-serif', fontWeight: 500, fontSize: 15, color: '#575757', lineHeight: 1.8, marginBottom: 20 } }, 'À la Ferté-sous-Jouarre, entre Épernay et Paris, le Port de Loisirs Ferté Confluences s\'affirme comme une nouvelle place forte du tourisme fluvial et des loisirs durables.'),
        React.createElement('p', { style: { fontFamily: 'Montserrat,sans-serif', fontWeight: 500, fontSize: 15, color: '#575757', lineHeight: 1.8 } }, 'Son ambition : faire de ses confluences un port de plaisance remarquable et incontournable dans le tourisme fluvial, en mettant en avant la richesse naturelle et culturelle de la Marne.')
      ),
      React.createElement('div', { style: { flex: 1, borderRadius: 28, overflow: 'hidden', height: 400 } },
        React.createElement('div', { style: { width: '100%', height: '100%', background: `url(../../assets/images/marina.jpg) center/cover no-repeat` } })
      )
    ),

    // Values
    React.createElement('div', { style: { background: '#F5F5F5', padding: '80px', borderRadius: '32px 32px 0 0' } },
      React.createElement('div', { style: { textAlign: 'center', marginBottom: 56 } },
        React.createElement('h2', { style: { fontFamily: 'agenda,Nunito,sans-serif', fontWeight: 500, fontSize: 44, color: '#575757' } }, 'Nos valeurs'),
      ),
      React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 } },
        values.map((v, i) =>
          React.createElement('div', { key: i, style: { background: 'white', borderRadius: 20, padding: '36px 40px', display: 'flex', gap: 24, alignItems: 'flex-start' } },
            React.createElement('div', { style: { width: 56, height: 56, borderRadius: '50%', background: '#D3E7F7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 } },
              React.createElement('svg', { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: '#033059', strokeWidth: 2 },
                i === 0 && React.createElement('path', { d: 'M2 15 Q7 9 12 15 Q17 21 22 15 M2 9 Q7 3 12 9 Q17 15 22 9' }),
                i === 1 && React.createElement('path', { d: 'M12 2v20 M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' }),
                i === 2 && [React.createElement('path', { key: 'p', d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' })],
                i === 3 && [React.createElement('path', { key: 'p', d: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' }), React.createElement('circle', { key: 'c', cx: 9, cy: 7, r: 4 }), React.createElement('path', { key: 'p2', d: 'M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75' })]
              )
            ),
            React.createElement('div', null,
              React.createElement('h3', { style: { fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: 18, color: '#033059', marginBottom: 8 } }, v.title),
              React.createElement('p', { style: { fontFamily: 'Montserrat,sans-serif', fontWeight: 500, fontSize: 14, color: '#575757', lineHeight: 1.6 } }, v.desc)
            )
          )
        )
      )
    )
  );
};

Object.assign(window, { FCInnerHero, FCActivitiesPage, FCBlogPage, FCAboutPage });
