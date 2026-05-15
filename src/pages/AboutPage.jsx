import InnerHero from '../components/InnerHero.jsx'

const VALUES = [
  {
    title: 'Excellence nautique',
    desc: 'Un port de plaisance aux standards premium, alliant modernité et tradition fluviale.',
    icon: <path d="M2 15 Q7 9 12 15 Q17 21 22 15 M2 9 Q7 3 12 9 Q17 15 22 9" />,
  },
  {
    title: 'Accessibilité tarifaire',
    desc: "Des tarifs équitables pour que chacun puisse profiter du plaisir de l'eau.",
    icon: <path d="M12 2v20 M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />,
  },
  {
    title: 'Vision durable',
    desc: "Un engagement fort pour la préservation de l'écosystème de la Marne.",
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  },
  {
    title: 'Ancrage territorial',
    desc: 'Un port profondément ancré dans le tissu local de la Seine-et-Marne.',
    icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75" /></>,
  },
]

export default function AboutPage() {
  return (
    <div style={{ background: 'white' }}>
      <InnerHero
        title="Qui sommes-nous ?"
        subtitle={null}
        breadcrumb="Qui sommes-nous ?"
        img="/images/hero-2.jpg"
      />

      {/* Mission */}
      <div style={{ padding: '80px 80px 56px', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ fontFamily: 'agenda, Nunito, sans-serif', fontWeight: 700, fontStyle: 'italic', fontSize: 18, color: '#F4A700', marginBottom: 24, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Notre mission
          </div>
          <p style={{ fontFamily: 'agenda, Nunito, sans-serif', fontWeight: 500, fontSize: 32, color: '#033059', lineHeight: 1.6, margin: 0 }}>
            Ferté Confluences, c'est à la fois une escale touristique et un lieu de vie paisible pour plaisanciers. Véritable quartier tourné vers l'eau, il réunit nature, culture et convivialité.
          </p>
        </div>
      </div>

      {/* Story + image */}
      <div style={{ padding: '0 80px 80px', display: 'flex', gap: 48, alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontFamily: 'agenda, Nunito, sans-serif', fontWeight: 700, fontSize: 40, color: '#033059', marginBottom: 24, lineHeight: 1.1 }}>
            Ferté Confluences – Port loisirs de la Marne
          </h2>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: 15, color: '#575757', lineHeight: 1.8, marginBottom: 20 }}>
            À la Ferté-sous-Jouarre, entre Épernay et Paris, le Port de Loisirs Ferté Confluences s'affirme comme une nouvelle place forte du tourisme fluvial et des loisirs durables.
          </p>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: 15, color: '#575757', lineHeight: 1.8, margin: 0 }}>
            Son ambition : faire de ses confluences un port de plaisance remarquable et incontournable dans le tourisme fluvial, en mettant en avant la richesse naturelle et culturelle de la Marne.
          </p>
        </div>
        <div style={{ flex: 1, borderRadius: 28, overflow: 'hidden', height: 400 }}>
          <div style={{ width: '100%', height: '100%', background: "url('/images/marina.jpg') center/cover no-repeat" }} />
        </div>
      </div>

      {/* Values */}
      <div style={{ background: '#F5F5F5', padding: '80px', borderRadius: '32px 32px 0 0' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <h2 style={{ fontFamily: 'agenda, Nunito, sans-serif', fontWeight: 500, fontSize: 44, color: '#575757' }}>
            Nos valeurs
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
          {VALUES.map((v, i) => (
            <div key={i} style={{ background: 'white', borderRadius: 20, padding: '36px 40px', display: 'flex', gap: 24, alignItems: 'flex-start' }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#D3E7F7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#033059" strokeWidth="2">
                  {v.icon}
                </svg>
              </div>
              <div>
                <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 18, color: '#033059', marginBottom: 8 }}>{v.title}</h3>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: 14, color: '#575757', lineHeight: 1.6, margin: 0 }}>{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
