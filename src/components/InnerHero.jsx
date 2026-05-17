export default function InnerHero({ title, subtitle, breadcrumb, img }) {
  return (
    <div style={{ position: 'relative', height: 500, background: `url(${img}) center/cover no-repeat`, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(rgba(3,48,89,0.6) 3%, rgba(244,167,0,0.036) 100%)' }} />

      <div style={{ position: 'absolute', top: 96, left: 48, display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
        {['Accueil', '›', breadcrumb].map((t, i) => (
          <span key={i} style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>{t}</span>
        ))}
      </div>

      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12, padding: '0 24px', textAlign: 'center' }}>
        <h1 className="fc-inner-hero-title" style={{ fontFamily: 'agenda, Nunito, sans-serif', fontWeight: 500, fontSize: 80, letterSpacing: '-0.02em', color: 'white', lineHeight: 1 }}>
          {title}
        </h1>
        {subtitle && (
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: 20, color: 'rgba(255,255,255,0.85)', margin: 0 }}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}
