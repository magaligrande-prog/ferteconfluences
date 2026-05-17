import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import AnchorIcon from './AnchorIcon.jsx'

const NAV_LEFT = [
  { path: '/',          label: 'Accueil' },
  { path: '/activites', label: 'Activités & loisirs' },
  { path: '/port',      label: 'Port de plaisance' },
]
const NAV_RIGHT = [
  { path: '/evenements', label: 'Événements' },
  { path: '/blog',       label: 'Blog' },
]
const ALL_NAV = [
  ...NAV_LEFT,
  ...NAV_RIGHT,
  { path: '/qui-sommes-nous', label: 'Qui sommes-nous ?' },
]

const navLinkStyle = (active) => ({
  background: 'none', border: 'none', cursor: 'pointer',
  fontSize: 15, fontWeight: 500, fontFamily: 'Montserrat, sans-serif',
  color: 'white', padding: '28px 0', textDecoration: 'none', display: 'block',
  borderBottom: active ? '2px solid white' : '2px solid transparent',
  transition: 'border-color 0.2s',
})

export default function Header() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // close menu on route change
  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <>
      <header className="fc-header" style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled
          ? 'rgba(3,48,89,0.97)'
          : 'linear-gradient(rgb(3,48,89) 0%, rgba(3,48,89,0) 100%)',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        transition: 'background 0.3s ease',
        padding: '0 48px', height: 80,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Left nav (desktop) */}
        <nav className="fc-nav-left" style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
          {NAV_LEFT.map(({ path, label }) => (
            <Link key={path} to={path} style={navLinkStyle(pathname === path)}>{label}</Link>
          ))}
        </nav>

        {/* Logo */}
        <Link to="/" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none', gap: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <AnchorIcon size={32} />
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
              <span style={{ fontFamily: 'agenda, Nunito, sans-serif', fontStyle: 'italic', fontWeight: 700, fontSize: 22, color: 'white', lineHeight: 1 }}>Ferté</span>
              <span style={{ fontFamily: 'agenda, Nunito, sans-serif', fontWeight: 600, fontSize: 17, color: 'white', lineHeight: 1 }}>Confluences</span>
            </div>
          </div>
          <div style={{ fontSize: 8, fontWeight: 700, fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', marginTop: 2 }}>
            PORT LOISIRS DE LA MARNE
          </div>
        </Link>

        {/* Right nav (desktop) */}
        <div className="fc-nav-right" style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
          {NAV_RIGHT.map(({ path, label }) => (
            <Link key={path} to={path} style={navLinkStyle(pathname === path)}>{label}</Link>
          ))}
          <Link to="/qui-sommes-nous" style={{
            height: 40, padding: '0 20px', borderRadius: 48,
            border: '1px solid rgba(255,255,255,0.5)',
            fontSize: 13, fontWeight: 600, fontFamily: 'Montserrat, sans-serif',
            color: 'white', background: 'transparent', cursor: 'pointer',
            display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none',
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            Qui sommes-nous ?
          </Link>
          <span style={{ fontSize: 12, fontWeight: 500, fontFamily: 'Montserrat, sans-serif', color: 'rgba(255,255,255,0.7)', cursor: 'pointer' }}>
            FR | EN
          </span>
        </div>

        {/* Hamburger (mobile only — hidden on desktop via CSS) */}
        <button
          className="fc-hamburger"
          onClick={() => setMenuOpen(v => !v)}
          style={{
            display: 'none', /* CSS shows it on mobile */
            background: 'none', border: 'none', cursor: 'pointer',
            flexDirection: 'column', gap: 5, padding: 4,
          }}
          aria-label="Menu"
        >
          <span style={{ display: 'block', width: 24, height: 2, background: 'white', borderRadius: 2, transition: 'all 0.25s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <span style={{ display: 'block', width: 24, height: 2, background: 'white', borderRadius: 2, opacity: menuOpen ? 0 : 1, transition: 'opacity 0.2s' }} />
          <span style={{ display: 'block', width: 24, height: 2, background: 'white', borderRadius: 2, transition: 'all 0.25s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
        </button>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 99,
          background: 'rgba(3,48,89,0.97)', backdropFilter: 'blur(8px)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          gap: 8,
        }}>
          {ALL_NAV.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              style={{
                fontFamily: 'agenda, Nunito, sans-serif', fontWeight: 500, fontSize: 32,
                color: pathname === path ? '#F4A700' : 'white',
                textDecoration: 'none', padding: '10px 0',
                borderBottom: pathname === path ? '2px solid #F4A700' : '2px solid transparent',
                transition: 'color 0.2s',
              }}
            >
              {label}
            </Link>
          ))}
          <span style={{ marginTop: 24, fontSize: 14, fontWeight: 500, fontFamily: 'Montserrat, sans-serif', color: 'rgba(255,255,255,0.6)', cursor: 'pointer' }}>
            FR | EN
          </span>
        </div>
      )}
    </>
  )
}
