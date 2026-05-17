import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSanityQuery } from '../hooks/useSanityQuery.js'
import { eventsQuery, postsQuery, engagementsQuery } from '../sanity/queries.js'
import { fallbackEvents, fallbackPosts, fallbackEngagements, formatEventDate } from '../sanity/fallback.js'
import { getImageUrl } from '../sanity/client.js'

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
    <path d="M5 12h14 M12 5l7 7-7 7" />
  </svg>
)

export default function HomePage() {
  const [hoveredCard, setHoveredCard] = useState(null)
  const navigate = useNavigate()

  const { data: events }      = useSanityQuery(eventsQuery,      fallbackEvents)
  const { data: posts }       = useSanityQuery(postsQuery,       fallbackPosts.slice(0, 3))
  const { data: engagements } = useSanityQuery(engagementsQuery, fallbackEngagements)

  const quickLinks = [
    { path: '/activites',  label: 'Activités & loisirs',   icon: <path d="M2 19 Q12 11 22 19 M2 22 h20 M12 6 v5" /> },
    { path: '/port',       label: 'Port de plaisance',      icon: <><circle cx="12" cy="8" r="3" /><line x1="12" y1="2" x2="12" y2="5" /><line x1="12" y1="11" x2="12" y2="22" /><line x1="4" y1="18" x2="20" y2="18" /></> },
    { path: '/',           label: 'Hébergements insolites', icon: <><rect x="1" y="4" width="22" height="16" rx="3" /><path d="M1 10 h22" /></> },
    { path: '/evenements', label: 'Événements',             icon: <><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4 M8 2v4 M3 10 h18" /></> },
  ]

  return (
    <div style={{ background: 'white' }}>
      {/* HERO */}
      <div style={{ position: 'relative', height: '100vh', minHeight: 700, background: "url('/images/hero-port.jpg') center/cover no-repeat", overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(217,149,0,0.06)' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 280, background: 'linear-gradient(rgb(3,48,89) 0%, rgba(3,48,89,0) 100%)' }} />

        <div className="fc-hero-content" style={{ position: 'absolute', left: 128, top: '38%' }}>
          <div className="fc-hero-title" style={{ fontFamily: 'agenda, Nunito, sans-serif', fontStyle: 'italic', fontWeight: 700, fontSize: 88, lineHeight: 1, letterSpacing: '-0.02em', color: 'white', marginBottom: 12 }}>
            Bienvenue
          </div>
          <div className="fc-hero-subtitle" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: 32, lineHeight: 1.2, letterSpacing: '-0.01em', color: 'white', marginBottom: 40 }}>
            à Ferté Confluences port loisirs,<br />Découvrez la Destination Marne entre Paris et Épernay
          </div>
          <div className="fc-hero-pills" style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            {quickLinks.map((item, i) => (
              <button key={i} onClick={() => navigate(item.path)}
                onMouseEnter={() => setHoveredCard(`ql${i}`)}
                onMouseLeave={() => setHoveredCard(null)}
                className="fc-hero-pill"
                style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  height: 72, padding: '0 28px', borderRadius: 48, background: 'white',
                  fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 17, color: '#033059',
                  border: hoveredCard === `ql${i}` ? '1px solid #F4A700' : '1px solid transparent',
                  boxShadow: hoveredCard === `ql${i}` ? '0 0 32px rgba(244,167,0,0.3)' : 'none',
                  cursor: 'pointer', transition: 'all 0.2s',
                }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#033059" strokeWidth="2">{item.icon}</svg>
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="fc-hero-watermark" style={{ position: 'absolute', right: 60, top: '25%', opacity: 0.12, pointerEvents: 'none' }}>
          <svg width="520" height="520" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="8" r="3" stroke="white" strokeWidth="0.6" />
            <line x1="16" y1="2" x2="16" y2="6" stroke="white" strokeWidth="0.6" />
            <line x1="16" y1="11" x2="16" y2="26" stroke="white" strokeWidth="0.6" />
            <path d="M7 26 Q16 19 25 26" stroke="white" strokeWidth="0.6" fill="none" />
            <line x1="7" y1="26" x2="4" y2="24" stroke="white" strokeWidth="0.6" />
            <line x1="25" y1="26" x2="28" y2="24" stroke="white" strokeWidth="0.6" />
            <line x1="9" y1="17" x2="23" y2="17" stroke="white" strokeWidth="0.6" />
          </svg>
        </div>

        <div style={{ position: 'absolute', bottom: -2, left: 0, right: 0 }}>
          <svg viewBox="0 0 1920 128" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }} preserveAspectRatio="none">
            <path d="M0,64 C320,128 640,0 960,64 C1280,128 1600,0 1920,64 L1920,128 L0,128 Z" fill="white" />
          </svg>
        </div>
      </div>

      {/* EVENTS */}
      <div className="fc-events-wrap" style={{ background: '#F3F3F3', padding: '72px 80px', borderRadius: 32, margin: '0 32px 48px' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <h2 style={{ fontFamily: 'agenda, Nunito, sans-serif', fontWeight: 500, fontSize: 44, color: '#575757', lineHeight: 1, marginBottom: 8 }}>
            Événements à la une
          </h2>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: 14, color: '#AAAAAA', margin: 0 }}>Un pur plaisir local</p>
        </div>

        <div className="fc-events-row" style={{ display: 'flex', gap: 28, justifyContent: 'center' }}>
          {events.slice(0, 3).map((evt, i) => (
            <div key={evt._id}
              className="fc-event-card"
              onMouseEnter={() => setHoveredCard(`evt${i}`)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ flex: '1', maxWidth: 380, borderRadius: 20, overflow: 'hidden', position: 'relative', aspectRatio: '9/16', maxHeight: 560, cursor: 'pointer', background: '#3a5a7a' }}>
              <div style={{ position: 'absolute', inset: 0, background: `url(${getImageUrl(evt.image, `/images/marina.jpg`)}) center/cover no-repeat`, transition: 'transform 0.4s ease', transform: hoveredCard === `evt${i}` ? 'scale(1.04)' : 'scale(1)' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(90,61,0,0.25)', transition: 'opacity 0.3s', opacity: hoveredCard === `evt${i}` ? 0.5 : 0.3 }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '55%', background: 'linear-gradient(rgba(3,48,89,0) 0%, rgba(3,48,89,0.9) 100%)' }} />
              <div style={{ position: 'absolute', bottom: 24, left: 0, right: 0, textAlign: 'center', padding: '0 20px', textShadow: '0 0 24px rgba(106,72,0,0.5)' }}>
                <div style={{ fontFamily: 'agenda, Nunito, sans-serif', fontWeight: 700, fontSize: 28, color: 'white', lineHeight: 1.1, marginBottom: 8 }}>{evt.title}</div>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: 14, color: 'rgba(255,255,255,0.9)' }}>{formatEventDate(evt)}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <button onClick={() => navigate('/evenements')}
            style={{ height: 52, padding: '0 32px', borderRadius: 48, border: '1px solid #033059', background: 'white', fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: 15, color: '#033059', cursor: 'pointer' }}>
            Découvrir tout nos événements →
          </button>
        </div>
      </div>

      {/* ARTICLES */}
      <div className="fc-articles-wrap" style={{ padding: '72px 80px 48px' }}>
        <div className="fc-articles-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
          <div>
            <h2 style={{ fontFamily: 'agenda, Nunito, sans-serif', fontWeight: 500, fontSize: 44, color: '#575757', lineHeight: 1, marginBottom: 8 }}>
              Activités à la une
            </h2>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: 14, color: '#AAAAAA', margin: 0 }}>Découvrez nos meilleures expériences</p>
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            {['←', '→'].map((arrow, i) => (
              <button key={i} style={{ width: 56, height: 56, borderRadius: '50%', background: 'white', border: '1px solid #E3E3E3', cursor: 'pointer', fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {arrow}
              </button>
            ))}
          </div>
        </div>

        <div className="fc-articles-row" style={{ display: 'flex', gap: 24 }}>
          {posts.slice(0, 3).map((art, i) => (
            <div key={art._id}
              onClick={() => navigate('/blog')}
              onMouseEnter={() => setHoveredCard(`art${i}`)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ flex: 1, borderRadius: 24, overflow: 'hidden', cursor: 'pointer', background: '#AAAAAA' }}>
              <div style={{ height: 280, position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, background: `url(${getImageUrl(art.image, `/images/marina.jpg`)}) center/cover no-repeat`, transition: 'transform 0.4s', transform: hoveredCard === `art${i}` ? 'scale(1.05)' : 'scale(1)' }} />
                {hoveredCard === `art${i}` && <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(rgba(244,167,0,0) 0%, rgba(244,167,0,0.4) 100%)' }} />}
                <div style={{ position: 'absolute', top: 14, right: 14, width: 32, height: 32, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '12px 16px', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {(art.tags || []).map(tag => (
                    <span key={tag} style={{ height: 32, padding: '0 14px', borderRadius: 48, border: '1px solid white', fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: 12, color: 'white', display: 'flex', alignItems: 'center', background: 'rgba(3,48,89,0.2)', backdropFilter: 'blur(4px)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div style={{ background: '#033059', padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
                <div>
                  <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 11, color: 'rgba(255,255,255,0.7)', marginBottom: 6 }}>{art.category}</div>
                  <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: 16, color: 'white', lineHeight: 1.3 }}>{art.title}</div>
                </div>
                <div style={{ width: 40, height: 40, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <ArrowIcon />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* VISION */}
      <div className="fc-vision-wrap" style={{ padding: '72px 80px 48px' }}>
        <div className="fc-vision-row" style={{ display: 'flex', gap: 32, alignItems: 'stretch' }}>
          <div style={{ flex: 1, background: '#033059', borderRadius: 32, padding: '56px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h2 style={{ fontFamily: 'agenda, Nunito, sans-serif', fontWeight: 500, fontSize: 40, color: 'white', lineHeight: 1.1, marginBottom: 32 }}>
                Notre vision des Confluences
              </h2>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: 15, color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, margin: 0 }}>
                À la Ferté-sous-Jouarre, entre Épernay et Paris, le Port de Loisirs Ferté Confluences s'affirme comme une nouvelle place forte du tourisme fluvial et des loisirs durables. Il allie escale touristique et lieu de vie paisible pour plaisanciers. Véritable quartier tourné vers l'eau, il réunit nature, culture et convivialité.
              </p>
            </div>
            <button onClick={() => navigate('/qui-sommes-nous')}
              style={{ marginTop: 40, height: 52, padding: '0 32px', borderRadius: 48, border: '1px solid rgba(255,255,255,0.4)', background: 'transparent', fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: 14, color: 'white', cursor: 'pointer', alignSelf: 'flex-start' }}>
              Découvrir notre histoire →
            </button>
          </div>
          <div className="fc-vision-images" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div style={{ flex: 1, borderRadius: 24, overflow: 'hidden', minHeight: 200 }}>
              <div style={{ width: '100%', height: '100%', background: "url('/images/hero-2.jpg') center/cover no-repeat", minHeight: 220 }} />
            </div>
            <div style={{ flex: 1, borderRadius: 24, overflow: 'hidden' }}>
              <div style={{ width: '100%', height: '100%', background: "url('/images/activities.png') center/cover no-repeat", minHeight: 220 }} />
            </div>
          </div>
        </div>
      </div>

      {/* ENGAGEMENTS */}
      <div className="fc-engagements-wrap" style={{ padding: '72px 80px 96px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'agenda, Nunito, sans-serif', fontWeight: 500, fontSize: 44, color: '#575757', marginBottom: 8 }}>Engagements</h2>
        <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: 14, color: '#AAAAAA', margin: '0 0 56px' }}>Nos valeurs profondes</p>
        <div className="fc-engagements-row" style={{ display: 'flex', gap: 24 }}>
          {engagements.map((c) => (
            <div key={c._id} className="fc-engagement-card" style={{ flex: 1, borderRadius: 28, overflow: 'hidden', position: 'relative', height: 400, cursor: 'pointer' }}>
              <div style={{ position: 'absolute', inset: 0, background: `url(${getImageUrl(c.image, `/images/marina.jpg`)}) center/cover no-repeat` }} />
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(244,167,0,0.05)' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%', background: 'linear-gradient(rgba(3,48,89,0) 0%, rgb(3,48,89) 100%)' }} />
              <div style={{ position: 'absolute', bottom: 28, left: 0, right: 0, textAlign: 'center', fontFamily: 'agenda, Nunito, sans-serif', fontWeight: 700, fontSize: 26, color: 'white' }}>
                {c.title}
              </div>
            </div>
          ))}
        </div>
        <button onClick={() => navigate('/qui-sommes-nous')}
          style={{ marginTop: 48, height: 52, padding: '0 32px', borderRadius: 48, border: '1px solid #033059', background: 'white', fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: 15, color: '#033059', cursor: 'pointer' }}>
          Découvrir tout nos engagements →
        </button>
      </div>
    </div>
  )
}
