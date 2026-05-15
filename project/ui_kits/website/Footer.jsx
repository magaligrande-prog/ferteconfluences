// Footer.jsx — Ferté Confluences footer
// Exports: FCFooter to window

const FCFooter = ({ onNavigate }) => {
  const colNavyStyle = {
    background: '#033059', padding: '56px 64px',
    display: 'flex', flexDirection: 'column', gap: 40,
    flex: '0 0 380px',
  };
  const colWhiteStyle = {
    background: 'white', padding: '56px 64px',
    display: 'flex', flexDirection: 'column', gap: 40, flex: 1,
  };
  const colSkyStyle = {
    background: '#F5F5F5', padding: '56px 48px',
    display: 'flex', flexDirection: 'column', gap: 32, flex: 1,
  };

  const linkStyle = {
    display: 'block', fontFamily: 'Montserrat,sans-serif',
    fontWeight: 500, fontSize: 14, color: '#575757',
    cursor: 'pointer', marginBottom: 10,
    textDecoration: 'none', transition: 'color 0.2s',
  };

  const navLinks = [
    ['Activités & loisirs', 'activities'],
    ['Port de plaisance', 'port'],
    ['Événements', 'events'],
    ['Blog', 'blog'],
    ['Boutique', 'home'],
    ['Qui sommes-nous ?', 'about'],
    ['Engagements', 'about'],
  ];

  return React.createElement('footer', {
    style: { display: 'flex', flexDirection: 'row', width: '100%' }
  },
    // Navy column — logo + social
    React.createElement('div', { style: colNavyStyle },
      // Logo
      React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 4 } },
        React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 10 } },
          React.createElement('svg', { width: 44, height: 44, viewBox: '0 0 32 32', fill: 'none' },
            React.createElement('circle', { cx: 16, cy: 8, r: 3, stroke: 'white', strokeWidth: 1.8 }),
            React.createElement('line', { x1: 16, y1: 2, x2: 16, y2: 6, stroke: 'white', strokeWidth: 1.8 }),
            React.createElement('line', { x1: 16, y1: 11, x2: 16, y2: 26, stroke: 'white', strokeWidth: 1.8 }),
            React.createElement('path', { d: 'M7 26 Q16 19 25 26', stroke: 'white', strokeWidth: 1.8, fill: 'none' }),
            React.createElement('line', { x1: 7, y1: 26, x2: 4, y2: 24, stroke: 'white', strokeWidth: 1.8 }),
            React.createElement('line', { x1: 25, y1: 26, x2: 28, y2: 24, stroke: 'white', strokeWidth: 1.8 }),
            React.createElement('line', { x1: 9, y1: 17, x2: 23, y2: 17, stroke: 'white', strokeWidth: 1.8 }),
          ),
          React.createElement('div', null,
            React.createElement('div', { style: { display: 'flex', alignItems: 'baseline', gap: 5 } },
              React.createElement('span', { style: { fontFamily: 'agenda,Nunito,sans-serif', fontStyle: 'italic', fontWeight: 700, fontSize: 26, color: 'white' } }, 'Ferté'),
              React.createElement('span', { style: { fontFamily: 'agenda,Nunito,sans-serif', fontWeight: 600, fontSize: 20, color: 'white' } }, 'Confluences'),
            ),
            React.createElement('div', { style: { fontSize: 8, fontWeight: 700, fontFamily: 'Montserrat,sans-serif', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', marginTop: 3 } }, 'PORT LOISIRS DE LA MARNE')
          )
        )
      ),
      // Social
      React.createElement('div', null,
        React.createElement('div', { style: { fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontStyle: 'italic', fontSize: 18, color: '#D3E7F7', marginBottom: 16 } }, 'Explorez nos réseaux !'),
        React.createElement('div', { style: { display: 'flex', gap: 20 } },
          ['facebook', 'instagram', 'x'].map(platform =>
            React.createElement('div', {
              key: platform,
              style: { width: 40, height: 40, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }
            },
              platform === 'facebook' && React.createElement('svg', { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'white' }, React.createElement('path', { d: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' })),
              platform === 'instagram' && React.createElement('svg', { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'white', strokeWidth: 2 }, React.createElement('rect', { x: 2, y: 2, width: 20, height: 20, rx: 5, ry: 5 }), React.createElement('circle', { cx: 12, cy: 12, r: 4 }), React.createElement('circle', { cx: 17.5, cy: 6.5, r: 1.5, fill: 'white', stroke: 'none' })),
              platform === 'x' && React.createElement('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'white' }, React.createElement('path', { d: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63z' })),
            )
          )
        )
      ),
      // Contact
      React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 12 } },
        React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'Montserrat,sans-serif', fontWeight: 500, fontSize: 13, color: 'rgba(255,255,255,0.8)' } },
          React.createElement('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'rgba(255,255,255,0.6)', strokeWidth: 2 }, React.createElement('path', { d: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z' }), React.createElement('circle', { cx: 12, cy: 10, r: 3 })),
          'La Ferté-sous-Jouarre, 77260'
        ),
        React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'Montserrat,sans-serif', fontWeight: 500, fontSize: 13, color: 'rgba(255,255,255,0.8)' } },
          React.createElement('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'rgba(255,255,255,0.6)', strokeWidth: 2 }, React.createElement('path', { d: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' }), React.createElement('polyline', { points: '22,6 12,13 2,6' })),
          'contact@ferte-confluences.fr'
        ),
      )
    ),

    // White column — nav links
    React.createElement('div', { style: colWhiteStyle },
      React.createElement('div', { style: { fontFamily: 'agenda,Nunito,sans-serif', fontWeight: 700, fontSize: 20, color: '#033059' } }, 'Navigation'),
      React.createElement('div', { style: { columns: 2, gap: 32 } },
        navLinks.map(([label, page]) =>
          React.createElement('span', {
            key: label,
            onClick: () => onNavigate(page),
            style: { ...linkStyle, display: 'block' }
          }, label)
        )
      ),
      React.createElement('div', { style: { borderTop: '1px solid #E3E3E3', paddingTop: 24 } },
        React.createElement('div', { style: { fontSize: 11, fontFamily: 'Montserrat,sans-serif', fontWeight: 500, color: '#AAAAAA', display: 'flex', gap: 24 } },
          React.createElement('span', { style: { cursor: 'pointer' } }, 'Mentions légales'),
          React.createElement('span', { style: { cursor: 'pointer' } }, 'Politique de confidentialité'),
          React.createElement('span', { style: { cursor: 'pointer' } }, 'CGU'),
        )
      )
    ),

    // Sky column — newsletter
    React.createElement('div', { style: colSkyStyle },
      React.createElement('div', { style: { fontFamily: 'agenda,Nunito,sans-serif', fontWeight: 700, fontSize: 20, color: '#033059' } }, 'Restez informés'),
      React.createElement('p', { style: { fontFamily: 'Montserrat,sans-serif', fontWeight: 500, fontSize: 13, color: '#575757', lineHeight: 1.6 } }, 'Inscrivez-vous à notre newsletter pour recevoir nos actualités, événements et offres exclusives.'),
      React.createElement('div', { style: { display: 'flex', gap: 0, borderRadius: 48, overflow: 'hidden', border: '1px solid #E3E3E3', background: 'white' } },
        React.createElement('input', {
          type: 'email',
          placeholder: 'Votre adresse e-mail',
          style: { flex: 1, padding: '14px 20px', border: 'none', outline: 'none', fontFamily: 'Montserrat,sans-serif', fontSize: 13, fontWeight: 500, color: '#033059', background: 'transparent' }
        }),
        React.createElement('button', {
          style: { padding: '14px 24px', background: '#033059', border: 'none', color: 'white', fontFamily: 'Montserrat,sans-serif', fontWeight: 600, fontSize: 13, cursor: 'pointer', borderRadius: '0 48px 48px 0' }
        }, "S'inscrire")
      ),
      React.createElement('div', { style: { fontSize: 11, fontFamily: 'Montserrat,sans-serif', fontWeight: 500, color: '#AAAAAA', marginTop: 'auto' } }, '© 2025 Ferté Confluences — Tous droits réservés')
    )
  );
};

Object.assign(window, { FCFooter });
