import { useState } from 'react'
import InnerHero from '../components/InnerHero.jsx'
import { useSanityQuery } from '../hooks/useSanityQuery.js'
import { postsQuery } from '../sanity/queries.js'
import { fallbackPosts, fallbackFeaturedPost } from '../sanity/fallback.js'
import { getImageUrl } from '../sanity/client.js'

export default function BlogPage() {
  const [hovered, setHovered] = useState(null)

  const { data: posts } = useSanityQuery(postsQuery, fallbackPosts)
  const featured = posts[0] || fallbackFeaturedPost

  return (
    <div style={{ background: 'white' }}>
      <InnerHero
        title="Le Blog"
        subtitle="Actualités, conseils & inspirations"
        breadcrumb="Blog"
        img="/images/hero-2.jpg"
      />

      <div className="fc-blog-featured-wrap" style={{ padding: '56px 48px 0' }}>
        <div className="fc-blog-featured-inner" style={{ borderRadius: 28, overflow: 'hidden', display: 'flex', height: 380, cursor: 'pointer' }}>
          <div className="fc-blog-featured-img" style={{ flex: 1, background: `url(${getImageUrl(featured?.image, '/images/hero-port.jpg')}) center/cover no-repeat`, position: 'relative' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(rgba(3,48,89,0) 40%, rgba(3,48,89,0.7) 100%)' }} />
          </div>
          <div style={{ flex: 1, background: '#033059', padding: '48px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, fontFamily: 'Montserrat, sans-serif', color: '#F4A700', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>
                À la une
              </div>
              <h3 style={{ fontFamily: 'agenda, Nunito, sans-serif', fontWeight: 700, fontSize: 32, color: 'white', lineHeight: 1.2, marginBottom: 16 }}>
                {featured?.title}
              </h3>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, margin: 0 }}>
                {featured?.excerpt || "Tout ce que vous devez savoir avant d'amarrer au port de Ferté Confluences. Règles, équipements recommandés, et astuces pour plaisanciers."}
              </p>
            </div>
            <button style={{ height: 48, padding: '0 28px', borderRadius: 48, border: '1px solid rgba(255,255,255,0.4)', background: 'transparent', fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: 14, color: 'white', cursor: 'pointer', alignSelf: 'flex-start', marginTop: 24 }}>
              Lire l'article →
            </button>
          </div>
        </div>
      </div>

      <div className="fc-blog-content" style={{ padding: '48px 48px 80px' }}>
        <div className="fc-3col-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {posts.slice(0, 6).map((art, i) => (
            <div key={art._id}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{ borderRadius: 20, overflow: 'hidden', cursor: 'pointer', background: '#AAAAAA' }}>
              <div style={{ height: 220, position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, background: `url(${getImageUrl(art.image, '/images/marina.jpg')}) center/cover no-repeat`, transition: 'transform 0.4s', transform: hovered === i ? 'scale(1.05)' : 'scale(1)' }} />
                {hovered === i && <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(rgba(244,167,0,0) 0%, rgba(244,167,0,0.35) 100%)' }} />}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '10px 14px', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {(art.tags || []).map(tag => (
                    <span key={tag} style={{ height: 28, padding: '0 12px', borderRadius: 48, border: '1px solid white', fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: 11, color: 'white', display: 'flex', alignItems: 'center', background: 'rgba(3,48,89,0.2)', backdropFilter: 'blur(4px)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div style={{ background: '#033059', padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 10, color: '#F4A700', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    {art.category}
                  </div>
                  <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: 14, color: 'white', lineHeight: 1.3 }}>
                    {art.title}
                  </div>
                </div>
                <div style={{ width: 34, height: 34, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M5 12h14 M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
