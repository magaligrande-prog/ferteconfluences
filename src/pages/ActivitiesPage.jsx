import { useState } from 'react'
import InnerHero from '../components/InnerHero.jsx'
import { useSanityQuery } from '../hooks/useSanityQuery.js'
import { activitiesQuery } from '../sanity/queries.js'
import { fallbackActivities } from '../sanity/fallback.js'
import { getImageUrl } from '../sanity/client.js'

const FILTERS = ['Tout', 'Nautisme', 'Sport', 'Famille', 'Culture', 'Gastronomie']

export default function ActivitiesPage() {
  const [activeFilter, setActiveFilter] = useState('Tout')
  const [hovered, setHovered] = useState(null)

  const { data: activities } = useSanityQuery(activitiesQuery, fallbackActivities)

  const filtered = activeFilter === 'Tout'
    ? activities
    : activities.filter(a => a.category === activeFilter)

  return (
    <div style={{ background: 'white' }}>
      <InnerHero
        title="Activités & loisirs"
        subtitle="Plaisirs de l'eau et de la nature"
        breadcrumb="Activités & loisirs"
        img="/images/photo-marina-landscape.jpg"
      />

      <div className="fc-activities-filter" style={{ background: '#F5F5F5', padding: '16px 48px', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
        <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: 14, color: '#575757', whiteSpace: 'nowrap' }}>Affinez vos envies</span>
        <div style={{ width: 1, height: 24, background: '#E3E3E3', margin: '0 4px', flexShrink: 0 }} />
        {FILTERS.map(f => (
          <button key={f} onClick={() => setActiveFilter(f)} style={{
            height: 40, padding: '0 20px', borderRadius: 48, cursor: 'pointer',
            fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: 13,
            background: activeFilter === f ? '#033059' : 'white',
            color: activeFilter === f ? 'white' : '#575757',
            border: activeFilter === f ? '1px solid #033059' : '1px solid #E3E3E3',
            transition: 'all 0.2s', whiteSpace: 'nowrap',
          }}>
            {f}
          </button>
        ))}
      </div>

      <div className="fc-activities-content" style={{ padding: '56px 48px 80px' }}>
        <div className="fc-3col-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {filtered.map((act, i) => (
            <div key={act._id}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{ borderRadius: 24, overflow: 'hidden', cursor: 'pointer', background: '#AAAAAA' }}>
              <div style={{ height: 260, position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, background: `url(${getImageUrl(act.image, '/images/marina.jpg')}) center/cover no-repeat`, transition: 'transform 0.4s', transform: hovered === i ? 'scale(1.05)' : 'scale(1)' }} />
                {hovered === i && <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(rgba(244,167,0,0) 0%, rgba(244,167,0,0.35) 100%)' }} />}
                <span style={{ position: 'absolute', top: 16, left: 16, height: 30, padding: '0 14px', borderRadius: 48, border: '1px solid white', fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: 12, color: 'white', display: 'flex', alignItems: 'center', background: 'rgba(3,48,89,0.25)', backdropFilter: 'blur(4px)' }}>
                  {act.category}
                </span>
              </div>
              <div style={{ background: '#033059', padding: '18px 22px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 16, color: 'white', marginBottom: 4 }}>{act.title}</div>
                  <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>{act.description}</div>
                </div>
                <div style={{ width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
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
