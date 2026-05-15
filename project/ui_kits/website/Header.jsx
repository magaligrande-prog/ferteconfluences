// Header.jsx — Ferté Confluences navigation header
// Exports: FCHeader to window

const FCHeader = ({ currentPage, onNavigate }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const navItems = [
    { id: 'home',       label: 'Accueil' },
    { id: 'activities', label: 'Activités & loisirs' },
    { id: 'port',       label: 'Port de plaisance' },
    { id: 'events',     label: 'Événements' },
    { id: 'blog',       label: 'Blog' },
  ];

  const headerStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    background: scrolled
      ? 'rgba(3,48,89,0.97)'
      : 'linear-gradient(rgb(3,48,89) 0%, rgba(3,48,89,0) 100%)',
    backdropFilter: scrolled ? 'blur(8px)' : 'none',
    transition: 'all 0.3s ease',
    padding: '0 48px',
    height: 80,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  };

  const logoStyle = {
    display: 'flex', flexDirection: 'column', alignItems: 'center',
    cursor: 'pointer', gap: 0,
  };

  return React.createElement('header', { style: headerStyle },
    // Left nav
    React.createElement('nav', {
      style: { display: 'flex', gap: 32, alignItems: 'center' }
    },
      navItems.slice(0, 3).map(item =>
        React.createElement('button', {
          key: item.id,
          onClick: () => onNavigate(item.id),
          style: {
            background: 'none', border: 'none', cursor: 'pointer',
            fontSize: 15, fontWeight: 500, fontFamily: 'Montserrat,sans-serif',
            color: 'white', padding: '28px 0', position: 'relative',
            borderBottom: currentPage === item.id ? '2px solid white' : '2px solid transparent',
            transition: 'border-color 0.2s',
          }
        }, item.label)
      )
    ),

    // Logo center
    React.createElement('div', { style: logoStyle, onClick: () => onNavigate('home') },
      React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 8 } },
        // Anchor mark
        React.createElement('svg', { width: 32, height: 32, viewBox: '0 0 32 32', fill: 'none' },
          React.createElement('circle', { cx: 16, cy: 8, r: 3, stroke: 'white', strokeWidth: 1.8 }),
          React.createElement('line', { x1: 16, y1: 2, x2: 16, y2: 6, stroke: 'white', strokeWidth: 1.8 }),
          React.createElement('line', { x1: 16, y1: 11, x2: 16, y2: 26, stroke: 'white', strokeWidth: 1.8 }),
          React.createElement('path', { d: 'M7 26 Q16 19 25 26', stroke: 'white', strokeWidth: 1.8, fill: 'none' }),
          React.createElement('line', { x1: 7, y1: 26, x2: 4, y2: 24, stroke: 'white', strokeWidth: 1.8 }),
          React.createElement('line', { x1: 25, y1: 26, x2: 28, y2: 24, stroke: 'white', strokeWidth: 1.8 }),
          React.createElement('line', { x1: 9, y1: 17, x2: 23, y2: 17, stroke: 'white', strokeWidth: 1.8 }),
        ),
        React.createElement('div', null,
          React.createElement('div', {
            style: { display: 'flex', alignItems: 'baseline', gap: 4 }
          },
            React.createElement('span', {
              style: { fontFamily: 'agenda,Nunito,sans-serif', fontStyle: 'italic', fontWeight: 700, fontSize: 22, color: 'white', lineHeight: 1 }
            }, 'Ferté'),
            React.createElement('span', {
              style: { fontFamily: 'agenda,Nunito,sans-serif', fontWeight: 600, fontSize: 17, color: 'white', lineHeight: 1 }
            }, 'Confluences'),
          )
        )
      ),
      React.createElement('div', {
        style: { fontSize: 8, fontWeight: 700, fontFamily: 'Montserrat,sans-serif', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', marginTop: 2 }
      }, 'PORT LOISIRS DE LA MARNE')
    ),

    // Right nav
    React.createElement('div', { style: { display: 'flex', gap: 28, alignItems: 'center' } },
      navItems.slice(3).map(item =>
        React.createElement('button', {
          key: item.id,
          onClick: () => onNavigate(item.id),
          style: {
            background: 'none', border: 'none', cursor: 'pointer',
            fontSize: 15, fontWeight: 500, fontFamily: 'Montserrat,sans-serif',
            color: 'white', padding: '28px 0', position: 'relative',
            borderBottom: currentPage === item.id ? '2px solid white' : '2px solid transparent',
            transition: 'border-color 0.2s',
          }
        }, item.label)
      ),
      React.createElement('button', {
        onClick: () => onNavigate('about'),
        style: {
          height: 40, padding: '0 20px', borderRadius: 48,
          border: '1px solid rgba(255,255,255,0.5)',
          fontSize: 13, fontWeight: 600, fontFamily: 'Montserrat,sans-serif',
          color: 'white', background: 'transparent', cursor: 'pointer',
          display: 'flex', alignItems: 'center', gap: 8,
          transition: 'border-color 0.2s, background 0.2s',
        }
      },
        React.createElement('svg', { width: 14, height: 14, viewBox: '0 0 24 24', fill: 'none', stroke: 'white', strokeWidth: 2 },
          React.createElement('circle', { cx: 11, cy: 11, r: 8 }),
          React.createElement('path', { d: 'm21 21-4.35-4.35' })
        ),
        'Qui sommes-nous ?'
      ),
      React.createElement('span', {
        style: { fontSize: 12, fontWeight: 500, fontFamily: 'Montserrat,sans-serif', color: 'rgba(255,255,255,0.7)', cursor: 'pointer' }
      }, 'FR | EN')
    )
  );
};

Object.assign(window, { FCHeader });
