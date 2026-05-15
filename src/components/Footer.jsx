import { useState } from 'react'
import { Link } from 'react-router-dom'
import AnchorIcon from './AnchorIcon.jsx'

const NAV_LINKS = [
  ['Activités & loisirs', '/activites'],
  ['Port de plaisance', '/port'],
  ['Événements', '/evenements'],
  ['Blog', '/blog'],
  ['Boutique', '/'],
  ['Qui sommes-nous ?', '/qui-sommes-nous'],
  ['Engagements', '/qui-sommes-nous'],
]

export default function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer style={{ display: 'flex', width: '100%' }}>
      {/* Navy column */}
      <div style={{ background: '#033059', padding: '56px 64px', display: 'flex', flexDirection: 'column', gap: 40, flex: '0 0 380px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <AnchorIcon size={44} />
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 5 }}>
              <span style={{ fontFamily: 'agenda, Nunito, sans-serif', fontStyle: 'italic', fontWeight: 700, fontSize: 26, color: 'white' }}>Ferté</span>
              <span style={{ fontFamily: 'agenda, Nunito, sans-serif', fontWeight: 600, fontSize: 20, color: 'white' }}>Confluences</span>
            </div>
            <div style={{ fontSize: 8, fontWeight: 700, fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', marginTop: 3 }}>
              PORT LOISIRS DE LA MARNE
            </div>
          </div>
        </div>

        <div>
          <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontStyle: 'italic', fontSize: 18, color: '#D3E7F7', marginBottom: 16 }}>
            Explorez nos réseaux !
          </div>
          <div style={{ display: 'flex', gap: 20 }}>
            {[
              { key: 'fb', icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="white" /> },
              { key: 'ig', icon: <><rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="2" fill="none" /><circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2" fill="none" /><circle cx="17.5" cy="6.5" r="1.5" fill="white" /></> },
              { key: 'x', icon: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63z" fill="white" /> },
            ].map(({ key, icon }) => (
              <div key={key} style={{ width: 40, height: 40, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <svg width="18" height="18" viewBox="0 0 24 24">{icon}</svg>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: 13, color: 'rgba(255,255,255,0.8)' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
            </svg>
            La Ferté-sous-Jouarre, 77260
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: 13, color: 'rgba(255,255,255,0.8)' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
            </svg>
            contact@ferte-confluences.fr
          </div>
        </div>
      </div>

      {/* White column */}
      <div style={{ background: 'white', padding: '56px 64px', display: 'flex', flexDirection: 'column', gap: 40, flex: 1 }}>
        <div style={{ fontFamily: 'agenda, Nunito, sans-serif', fontWeight: 700, fontSize: 20, color: '#033059' }}>Navigation</div>
        <div style={{ columns: 2, gap: 32 }}>
          {NAV_LINKS.map(([label, path]) => (
            <Link key={label} to={path} style={{ display: 'block', fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: 14, color: '#575757', textDecoration: 'none', marginBottom: 10, transition: 'color 0.2s' }}>
              {label}
            </Link>
          ))}
        </div>
        <div style={{ borderTop: '1px solid #E3E3E3', paddingTop: 24 }}>
          <div style={{ fontSize: 11, fontFamily: 'Montserrat, sans-serif', fontWeight: 500, color: '#AAAAAA', display: 'flex', gap: 24 }}>
            <span style={{ cursor: 'pointer' }}>Mentions légales</span>
            <span style={{ cursor: 'pointer' }}>Politique de confidentialité</span>
            <span style={{ cursor: 'pointer' }}>CGU</span>
          </div>
        </div>
      </div>

      {/* Gray column — newsletter */}
      <div style={{ background: '#F5F5F5', padding: '56px 48px', display: 'flex', flexDirection: 'column', gap: 32, flex: 1 }}>
        <div style={{ fontFamily: 'agenda, Nunito, sans-serif', fontWeight: 700, fontSize: 20, color: '#033059' }}>Restez informés</div>
        <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: 13, color: '#575757', lineHeight: 1.6, margin: 0 }}>
          Inscrivez-vous à notre newsletter pour recevoir nos actualités, événements et offres exclusives.
        </p>
        <div style={{ display: 'flex', borderRadius: 48, overflow: 'hidden', border: '1px solid #E3E3E3', background: 'white' }}>
          <input
            type="email"
            placeholder="Votre adresse e-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{ flex: 1, padding: '14px 20px', border: 'none', outline: 'none', fontFamily: 'Montserrat, sans-serif', fontSize: 13, fontWeight: 500, color: '#033059', background: 'transparent' }}
          />
          <button style={{ padding: '14px 24px', background: '#033059', border: 'none', color: 'white', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: 13, cursor: 'pointer', borderRadius: '0 48px 48px 0' }}>
            S'inscrire
          </button>
        </div>
        <div style={{ fontSize: 11, fontFamily: 'Montserrat, sans-serif', fontWeight: 500, color: '#AAAAAA', marginTop: 'auto' }}>
          © 2025 Ferté Confluences — Tous droits réservés
        </div>
      </div>
    </footer>
  )
}
