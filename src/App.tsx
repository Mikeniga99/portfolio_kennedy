import { useState, useEffect, useRef, useCallback, type CSSProperties, type FormEvent } from 'react'

const posterImg = new URL('./imports/Affiche_motivation.png', import.meta.url).href
const logoVideo = new URL('./imports/logo_animated.mp4', import.meta.url).href
const presentationVideo = new URL('./imports/videos/black-studio-presentation.mp4', import.meta.url).href
const closingVideo = new URL('./imports/videos/black-studio-souriez.mp4', import.meta.url).href
const ewaImg = new URL('./imports/portfolio/ewa.png', import.meta.url).href
const blackStudioCarteImg = new URL('./imports/portfolio/black-studio-carte.png', import.meta.url).href
const weekendCompteARebourImg = new URL('./imports/portfolio/weekend-artistique-compte-a-rebours.png', import.meta.url).href
const akossiwaLundiImg = new URL('./imports/portfolio/akossiwa-lundi.jpg', import.meta.url).href
const weekArtAfficheImg = new URL('./imports/portfolio/week-art-affiche-officielle.png', import.meta.url).href
const blackStudioGrandFormatImg = new URL('./imports/portfolio/black-studio-grand-format.jpg', import.meta.url).href
const koudiChipsImg = new URL('./imports/portfolio/koudi-chips-etiquette.jpg', import.meta.url).href

// Nouvelles images
const img1 = new URL('./imports/portfolio/1.jpg', import.meta.url).href
const img2 = new URL('./imports/portfolio/2.jpg', import.meta.url).href
const img3 = new URL('./imports/portfolio/3.jpg', import.meta.url).href
const img4 = new URL('./imports/portfolio/4.jpg', import.meta.url).href
const plan1Img = new URL('./imports/portfolio/Plan1.png', import.meta.url).href
const logo03Img = new URL('./imports/portfolio/Logo-03.png', import.meta.url).href
const lundi20Img = new URL('./imports/portfolio/Lundi 20.png', import.meta.url).href
const logoE2Img = new URL('./imports/portfolio/Logo E2-01.png', import.meta.url).href
const koudiBrushImg = new URL('./imports/portfolio/Koudi Brush.png', import.meta.url).href
const affichePub4Img = new URL('./imports/portfolio/Affiche Pub 4.jpg', import.meta.url).href
const logoMarathonImg = new URL('./imports/portfolio/Logo Marathon-01.jpg', import.meta.url).href
const affichePoterie2Img = new URL('./imports/portfolio/Affiche poterie 2.png', import.meta.url).href
const tanoush1Img = new URL('./imports/portfolio/Tanoush Lingerie-01.png', import.meta.url).href
const tanoush2Img = new URL('./imports/portfolio/Tanoush Lingerie-02.png', import.meta.url).href
const logoCurvyImg = new URL('./imports/portfolio/logo Curvy\'s Design-01.jpg', import.meta.url).href
const brandTanoushImg = new URL('./imports/portfolio/Brand Tanoush Lingeries.jpg', import.meta.url).href
const affichePackImg = new URL('./imports/portfolio/Affiche Pack et Abonnemments.jpg', import.meta.url).href
const logoKondoImg = new URL('./imports/portfolio/Logo Kondo_Plan de travail 1.png', import.meta.url).href
const bouillieImg = new URL('./imports/portfolio/Bouillie de RIz_Plan de travail 1.jpg', import.meta.url).href
const geminiImg = new URL('./imports/portfolio/Gemini_Generated_Image_xsqs96xsqs96xsqs.png', import.meta.url).href
const porchetSebaImg = new URL('./imports/portfolio/Porchet Seba_Plan de travail 1_Plan de travail 1_Plan de travail 1.png', import.meta.url).href

// ─── SVG Icons ──────────────────────────────────────────────────────────────

const SVGIcon = ({ type, color = 'currentColor', size = 20 }: { type: string, color?: string, size?: number }) => {
  const icons: Record<string, JSX.Element> = {
    logo: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />,
    branding: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    social: <path d="M18 8a3 3 0 01-3 3c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3zM6 15a3 3 0 01-3 3c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3zM18 19a3 3 0 01-3 3c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3zM8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />,
    packaging: <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16zM3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />,
    print: <path d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2M6 14h12v8H6z" />,
    email: <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6" />,
    phone: <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.89 12.89 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />,
    linkedin: <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z" />,
    arrowLeft: <path d="M19 12H5M12 19l-7-7 7-7" />,
    arrowRight: <path d="M5 12h14M12 5l7 7-7 7" />,
    star: <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />,
    award: <path d="M12 15l-2 5L9 9l11 4-5 2zm0 0l2 5 3-11-11 4 5 2z" />,
    briefcase: <><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" /></>,
  }

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
      {icons[type]}
    </svg>
  )
}

// ─── Data ──────────────────────────────────────────────────────────────────

const HERO_POSTERS = [
  { id: 0, category: '01 — SOCIAL MEDIA', badge: 'SOCIAL MEDIA DESIGN', title: 'Kennedy Rolland', accent: '#FF6B35', highlight: 'GRAPHISTE DESIGNER', image: weekendCompteARebourImg },
  { id: 1, category: '02 — BRANDING', badge: 'BRANDING DESIGN', title: 'Black Studio', accent: '#FFFFFF', highlight: 'IDENTITÉ VISUELLE', image: blackStudioCarteImg },
  { id: 2, category: '03 — PACKAGING', badge: 'PACKAGING DESIGN', title: 'Èwa', accent: '#FF6B35', highlight: 'PACKAGING', image: ewaImg },
  { id: 3, category: '04 — PRINT', badge: 'PRINT MEDIA', title: 'Week Art', accent: '#FFFFFF', highlight: 'PRINT DESIGN', image: weekArtAfficheImg },
  { id: 4, category: '05 — COMMUNICATION', badge: 'COMMUNICATION VISUELLE', title: 'Akossiwa', accent: '#FF6B35', highlight: 'SOCIAL MEDIA', image: akossiwaLundiImg },
]

const PORTFOLIO_ITEMS = [
  { id: 0, category: 'PACKAGING', title: 'ÈWA — LE GOÛT DE CHEZ NOUS', year: '2025', tags: ['Packaging', 'Branding'], img: ewaImg },
  { id: 1, category: 'BRANDING', title: 'BLACK STUDIO — CARTE DE VISITE', year: '2025', tags: ['Identité', 'Print'], img: blackStudioCarteImg },
  { id: 2, category: 'SOCIAL MEDIA', title: 'WEEKEND ARTISTIQUE — COMPTE À REBOURS', year: '2026', tags: ['Event', 'Instagram'], img: weekendCompteARebourImg },
  { id: 3, category: 'SOCIAL MEDIA', title: 'ASS. AKOSSIWA — POST MOTIVATION', year: '2025', tags: ['Association', 'Post'], img: akossiwaLundiImg },
  { id: 4, category: 'PRINT', title: 'WEEK ART — AFFICHE OFFICIELLE', year: '2026', tags: ['Affiche', 'Sponsors'], img: weekArtAfficheImg },
  { id: 5, category: 'PRINT MEDIA', title: 'BLACK STUDIO — GRAND FORMAT', year: '2025', tags: ['Kakémono', 'Bâche'], img: blackStudioGrandFormatImg },
  { id: 6, category: 'PACKAGING', title: 'KOUDI CHIPS — ÉTIQUETTE', year: '2025', tags: ['Packaging', 'Label'], img: koudiChipsImg },
  { id: 7, category: 'DESIGN', title: 'CREATION 1', year: '2025', tags: ['Design'], img: img1 },
  { id: 8, category: 'DESIGN', title: 'CREATION 2', year: '2025', tags: ['Design'], img: img2 },
  { id: 9, category: 'DESIGN', title: 'CREATION 3', year: '2025', tags: ['Design'], img: img3 },
  { id: 10, category: 'DESIGN', title: 'CREATION 4', year: '2025', tags: ['Design'], img: img4 },
  { id: 11, category: 'PLAN', title: 'PLANNING 1', year: '2025', tags: ['Layout'], img: plan1Img },
  { id: 12, category: 'LOGO', title: 'LOGO DESIGN 03', year: '2025', tags: ['Logo'], img: logo03Img },
  { id: 13, category: 'SOCIAL MEDIA', title: 'POST LUNDI 20', year: '2025', tags: ['Post'], img: lundi20Img },
  { id: 14, category: 'LOGO', title: 'LOGO E2', year: '2025', tags: ['Logo'], img: logoE2Img },
  { id: 15, category: 'BRANDING', title: 'KOUDI BRUSH', year: '2025', tags: ['Branding'], img: koudiBrushImg },
  { id: 16, category: 'PRINT', title: 'AFFICHE PUB 4', year: '2025', tags: ['Affiche'], img: affichePub4Img },
  { id: 17, category: 'LOGO', title: 'LOGO MARATHON', year: '2025', tags: ['Logo'], img: logoMarathonImg },
  { id: 18, category: 'PRINT', title: 'AFFICHE POTERIE', year: '2025', tags: ['Affiche'], img: affichePoterie2Img },
  { id: 19, category: 'BRANDING', title: 'TANOUSH LINGERIE 1', year: '2025', tags: ['Branding'], img: tanoush1Img },
  { id: 20, category: 'BRANDING', title: 'TANOUSH LINGERIE 2', year: '2025', tags: ['Branding'], img: tanoush2Img },
  { id: 21, category: 'LOGO', title: 'LOGO CURVY\'S DESIGN', year: '2025', tags: ['Logo'], img: logoCurvyImg },
  { id: 22, category: 'BRANDING', title: 'BRAND TANOUSH', year: '2025', tags: ['Branding'], img: brandTanoushImg },
  { id: 23, category: 'PRINT', title: 'PACK ABONNEMENTS', year: '2025', tags: ['Affiche'], img: affichePackImg },
  { id: 24, category: 'LOGO', title: 'LOGO KONDO', year: '2025', tags: ['Logo'], img: logoKondoImg },
  { id: 25, category: 'PACKAGING', title: 'BOUILLIE DE RIZ', year: '2025', tags: ['Packaging'], img: bouillieImg },
  { id: 26, category: 'ART', title: 'AI GENERATED', year: '2025', tags: ['Art'], img: geminiImg },
  { id: 27, category: 'PRINT', title: 'PORCHET SEBA', year: '2025', tags: ['Affiche'], img: porchetSebaImg },
]

const SERVICES = [
  { icon: 'logo', title: 'Logo Design', desc: "Identité visuelle percutante, mémorable, déclinée en tous formats vectoriels.", wa: "Bonjour, je veux un logo pour mon entreprise." },
  { icon: 'branding', title: 'Branding', desc: "Charte graphique complète — couleurs, typographies, guidelines, papeterie.", wa: "Bonjour, je souhaite une charte graphique complète pour ma marque." },
  { icon: 'social', title: 'Social Media', desc: "Posts, stories et bannières optimisés pour chaque plateforme digitale.", wa: "Bonjour, j'ai besoin de visuels pour mes réseaux sociaux." },
  { icon: 'packaging', title: 'Packaging', desc: "Design d'emballage attractif qui se distingue en rayon et en ligne.", wa: "Bonjour, je voudrais un design de packaging pour mes produits." },
  { icon: 'print', title: 'Print Media', desc: "Affiches, flyers, brochures calibrés pour l'impression professionnelle.", wa: "Bonjour, je souhaite réaliser des supports d'impression (flyers, affiches, etc.)." },
]

const SKILLS = [
  { name: 'Photoshop', level: 95 },
  { name: 'Illustrator', level: 90 },
  { name: 'InDesign', level: 85 },
  { name: 'Figma', level: 80 },
  { name: 'ChatGPT · Gemini', level: 72 },
]

const EXPERIENCE = [
  { period: '2026 – maintenant', role: 'Graphiste', company: 'DiGIVERSE', location: 'Bénin' },
  { period: '2020 – 2025', role: 'Graphiste & Sérigraphe', company: 'EBENE COMMUNICATION', location: 'Niger' },
  { period: '2023 – 2024', role: 'Réceptionniste', company: 'IMEDIA', location: 'Niger' },
  { period: 'Freelance', role: 'Graphiste Designer', company: 'Training Interpreting & Business (TIB)', location: 'Bénin' },
  { period: 'Bénévole', role: 'Graphiste Designer', company: 'Ass Kossiwa', location: 'Bénin' },
]

// ─── Hook: scroll reveal ────────────────────────────────────────────────────

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('revealed'); io.unobserve(e.target) } }),
      { threshold: 0.12 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

// ─── Hook: skill bars ──────────────────────────────────────────────────────

function useSkillBars() {
  useEffect(() => {
    const bars = document.querySelectorAll<HTMLElement>('.skill-bar-fill')
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          const el = e.target as HTMLElement
          const level = el.dataset.level ?? '0'
          setTimeout(() => { el.style.width = level + '%' }, 200)
          io.unobserve(el)
        }
      }),
      { threshold: 0.3 }
    )
    bars.forEach((b) => io.observe(b))
    return () => io.disconnect()
  }, [])
}

// ─── Nav ──────────────────────────────────────────────────────────────────

function Nav({ accent }: { accent: string }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = ['À PROPOS', 'PORTFOLIO', 'SERVICES', 'COMMANDE', 'CONTACT']
  const hrefs = ['#a-propos', '#portfolio', '#services', '#commande', '#contact']

  const linkStyle: CSSProperties = {
    fontFamily: 'Oswald, sans-serif',
    fontSize: '0.72rem',
    letterSpacing: '0.14em',
    color: 'rgba(223,221,218,0.65)',
    textDecoration: 'none',
    transition: 'color 0.25s',
  }

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 9999,
        background: scrolled ? 'rgba(0,0,0,0.98)' : 'rgba(0,0,0,0.8)',
        backdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${accent}28`,
        transition: 'all 0.4s ease',
      }}>
        <div className="section-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <video src={logoVideo} autoPlay muted loop playsInline
              style={{ height: 40, width: 'auto', objectFit: 'contain', filter: 'brightness(1.1)' }} />
            <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: '1rem', letterSpacing: '0.1em', color: '#dfddda' }}>
              BLACK<span style={{ color: accent, transition: 'color 0.5s' }}>STUDIO</span>
            </span>
          </div>

          {/* Desktop */}
          <div className="desktop-nav" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            {links.map((label, i) => (
              <a key={label} href={hrefs[i]} style={linkStyle}
                onMouseEnter={(e) => (e.currentTarget.style.color = accent)}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(223,221,218,0.65)')}>
                {label}
              </a>
            ))}
            <a href="#commande" style={{
              fontFamily: 'Oswald, sans-serif', fontSize: '0.72rem', letterSpacing: '0.14em',
              padding: '0.45rem 1.1rem', border: `1px solid ${accent}`, color: accent,
              textDecoration: 'none', transition: 'all 0.3s',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.background = accent; e.currentTarget.style.color = '#000' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = accent }}>
              COMMANDER
            </a>
          </div>

          {/* Hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="mobile-menu-btn"
            style={{ display: 'none', flexDirection: 'column', background: 'none', border: 'none', cursor: 'pointer', padding: 8, gap: 5 }}>
            <span style={{ display: 'block', width: 22, height: 2, background: accent, transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(4px,5px)' : 'none' }} />
            <span style={{ display: 'block', width: 22, height: 2, background: accent, transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', width: 22, height: 2, background: accent, transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(4px,-5px)' : 'none' }} />
          </button>
        </div>

        {/* Mobile menu */}
        <div style={{
          maxHeight: menuOpen ? 400 : 0, overflow: 'hidden',
          transition: 'max-height 0.4s ease',
          background: '#000', borderTop: menuOpen ? `1px solid ${accent}22` : 'none',
        }}>
          <div style={{ padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {links.map((label, i) => (
              <a key={label} href={hrefs[i]} onClick={() => setMenuOpen(false)}
                style={{ fontFamily: 'Oswald, sans-serif', fontSize: '1.4rem', letterSpacing: '0.08em', color: '#dfddda', textDecoration: 'none' }}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────

function Hero({ onAccentChange }: { onAccentChange: (c: string) => void }) {
  const [activeSlide, setActiveSlide] = useState(0)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const activePoster = HERO_POSTERS[activeSlide]
  const accent = activePoster.accent

  useEffect(() => {
    const t = setInterval(() => {
      setActiveSlide((p) => (p + 1) % HERO_POSTERS.length)
    }, 4200)
    return () => clearInterval(t)
  }, [])

  useEffect(() => { onAccentChange(accent) }, [accent, onAccentChange])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const cx = (e.clientX - rect.left) / rect.width - 0.5
    const cy = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: cy * -9, y: cx * 10 })
  }, [])

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        background: '#090909',
        display: 'flex',
        alignItems: 'center',
        isolation: 'isolate',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
    >
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `radial-gradient(circle at 50% 100%, ${accent}24 0%, rgba(10,10,10,0.42) 28%, rgba(0,0,0,0.82) 60%, rgba(0,0,0,1) 100%)`,
        transition: 'background 0.8s ease',
        zIndex: 0,
      }} />

      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        pointerEvents: 'none',
      }}>
        {HERO_POSTERS.map((poster, index) => (
          <div
            key={poster.id}
            style={{
              position: 'absolute',
              inset: 0,
              opacity: index === activeSlide ? 1 : 0,
              transition: 'opacity 1s ease',
            }}
          >
            <img
              src={poster.image}
              alt={poster.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                filter: 'brightness(0.28) saturate(0.8) contrast(1.2)',
                transform: 'scale(1.12)',
              }}
            />
          </div>
        ))}
      </div>

      <div className="hero-bg-text" style={{
        position: 'absolute',
        left: '-2vw',
        top: '7vh',
        fontFamily: 'Archivo Black, sans-serif',
        fontSize: 'clamp(7rem, 21vw, 25rem)',
        lineHeight: 0.8,
        letterSpacing: '-0.08em',
        color: 'rgba(255,255,255,0.08)',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
        zIndex: 1,
      }}>
        WEB FULL STACK
      </div>

      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
        maskImage: 'radial-gradient(circle at center, black 62%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      <div
        className="hero-tilt"
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: 1440,
          margin: '0 auto',
          padding: '5rem 3rem 4rem',
          textAlign: 'center',
          transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: 'transform 0.15s ease-out',
        }}
      >
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.6rem',
          border: `1px solid ${accent}`,
          padding: '0.45rem 0.9rem',
          marginBottom: '1.6rem',
          background: 'rgba(0,0,0,0.1)',
        }}>
          <SVGIcon type="star" color={accent} size={14} />
          <span style={{ fontFamily: 'Oswald, sans-serif', fontSize: '0.7rem', letterSpacing: '0.18em', color: accent }}>
            {activePoster.badge}
          </span>
        </div>

        <div className="hero-title" style={{
          fontFamily: 'Archivo Black, sans-serif',
          fontSize: 'clamp(4.2rem, 8vw, 9rem)',
          lineHeight: 0.9,
          letterSpacing: '-0.06em',
          color: '#f7f3ee',
          textTransform: 'uppercase',
          margin: 0,
          textShadow: '0 0 24px rgba(0,0,0,0.5)',
        }}>
          <span style={{ display: 'block' }}>Kennedy</span>
          <span style={{ display: 'block', color: accent, transition: 'color 0.6s ease' }}>Rolland</span>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.6rem',
          marginTop: '1.2rem',
          flexWrap: 'wrap',
          fontFamily: 'Oswald, sans-serif',
          letterSpacing: '0.2em',
          fontSize: '0.75rem',
          color: 'rgba(255,255,255,0.7)',
          textTransform: 'uppercase',
        }}>
          <span>{activePoster.highlight}</span>
          <span style={{ color: accent }}>•</span>
          <span>Black Studio</span>
        </div>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '2.6rem' }}>
          <a href="#portfolio" style={{
            fontFamily: 'Oswald, sans-serif',
            fontSize: '0.82rem',
            letterSpacing: '0.14em',
            padding: '0.9rem 2.3rem',
            background: accent,
            color: '#111',
            textDecoration: 'none',
            fontWeight: 700,
            border: `1px solid ${accent}`,
            boxShadow: `0 0 30px ${accent}4d`,
            transition: 'all 0.25s ease',
          }}>
            Voir le portfolio
          </a>
          <a href="#commande" style={{
            fontFamily: 'Oswald, sans-serif',
            fontSize: '0.82rem',
            letterSpacing: '0.14em',
            padding: '0.9rem 2.3rem',
            border: `1px solid ${accent}`,
            color: '#fff',
            textDecoration: 'none',
            fontWeight: 700,
            background: 'rgba(0,0,0,0.12)',
            transition: 'all 0.25s ease',
          }}>
            Commander
          </a>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '2.8rem' }}>
          {HERO_POSTERS.map((_, i) => (
            <button key={i} onClick={() => setActiveSlide(i)} aria-label={`Afficher la carte ${i + 1}`} style={{
              width: i === activeSlide ? 30 : 8,
              height: 4,
              border: 'none',
              borderRadius: 0,
              background: i === activeSlide ? accent : 'rgba(255,255,255,0.28)',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
              padding: 0,
            }} />
          ))}
        </div>
      </div>

      <div
        className="hero-corner-image"
        style={{
          position: 'absolute',
          right: '2rem',
          bottom: '1.5rem',
          width: 'min(18vw, 270px)',
          minWidth: 180,
          height: 'min(30vw, 360px)',
          minHeight: 220,
          zIndex: 3,
          border: `1px solid ${accent}88`,
          boxShadow: `0 0 28px ${accent}44, 0 20px 40px rgba(0,0,0,0.8)`,
          background: '#111',
          overflow: 'hidden',
        }}
      >
        <img
          src={activePoster.image}
          alt={activePoster.title}
          style={{
            width: '100%',
            height: '100%',
            display: 'block',
            objectFit: 'cover',
          }}
        />
      </div>

      <div style={{ position: 'absolute', right: '3rem', bottom: '2rem', zIndex: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem' }}>
        <span style={{ fontFamily: 'Oswald, sans-serif', fontSize: '0.6rem', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.55)', writingMode: 'vertical-rl' }}>Defiler</span>
        <div style={{ width: 1, height: 58, background: `linear-gradient(to bottom, ${accent}, rgba(255,255,255,0))` }} />
      </div>
    </section>
  )
}

// ─── Presentation Video ─────────────────────────────────────────────────────

function Presentation({ accent }: { accent: string }) {
  return (
    <section style={{ padding: 'var(--section-spacing) 0', background: '#000' }}>
      <div className="section-container">
        <div data-reveal style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
          <span style={{ fontFamily: 'Oswald, sans-serif', fontSize: '0.7rem', letterSpacing: '0.2em', color: accent, display: 'block', marginBottom: '0.2rem' }}>— PRÉSENTATION</span>
          <h2 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#dfddda', margin: 0, lineHeight: 0.9 }}>
            CE QUE<br /><span style={{ color: accent }}>JE FAIS</span>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'rgba(223,221,218,0.55)', marginTop: '1rem', maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>
            Focus, créativité et inspiration — un aperçu de l'activité de Black Studio.
          </p>
        </div>

        <div data-reveal data-delay="1" style={{
          maxWidth: 900, margin: '0 auto', position: 'relative',
          border: `1px solid ${accent}33`, boxShadow: `0 30px 90px rgba(0,0,0,0.7), 0 0 60px ${accent}14`,
          overflow: 'hidden', background: '#0a0a0a',
        }}>
          <video src={presentationVideo} autoPlay muted loop playsInline controls
            style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div>
      </div>
    </section>
  )
}

// ─── About ────────────────────────────────────────────────────────────────

function About({ accent }: { accent: string }) {
  useSkillBars()
  return (
    <section id="a-propos" style={{ padding: 'var(--section-spacing) 0', background: '#000' }}>
      <div className="section-container">
        <div data-reveal style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <span style={{ fontFamily: 'Oswald, sans-serif', fontSize: '0.7rem', letterSpacing: '0.2em', color: accent, display: 'block', marginBottom: '0.2rem' }}>— À PROPOS</span>
          <h2 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#dfddda', margin: 0, lineHeight: 0.9 }}>
            SOSSOU<br /><span style={{ color: accent }}>KENNEDY</span>
          </h2>
        </div>

        <div className="about-grid">
          {/* Bio */}
          <div>
            <p data-reveal style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'rgba(223,221,218,0.8)', marginBottom: '2rem' }}>
              Graphiste Designer. Mon moteur ? Un mélange de dynamisme, d'une créativité toujours en éveil et d'un solide sens des responsabilités. Je m'engage à livrer des visuels percutants qui répondent pleinement à vos attentes et à vos délais.
            </p>

            <div data-reveal data-delay="1" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
              {['Contrat', 'Freelance', 'Commande'].map((tag) => (
                <span key={tag} style={{ fontFamily: 'Oswald, sans-serif', fontSize: '0.7rem', letterSpacing: '0.14em', padding: '0.3rem 0.8rem', border: `1px solid ${accent}55`, color: accent }}>
                  {tag}
                </span>
              ))}
            </div>

            {/* Experience */}
            <div data-reveal data-delay="2">
              <h3 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '0.7rem', letterSpacing: '0.2em', color: 'rgba(223,221,218,0.4)', marginBottom: '1.5rem' }}>EXPÉRIENCE</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {EXPERIENCE.map((exp, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <span style={{ fontFamily: 'Oswald, sans-serif', fontSize: '0.68rem', color: accent, minWidth: 90, paddingTop: 2 }}>{exp.period}</span>
                    <div>
                      <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '0.9rem', color: '#dfddda' }}>{exp.role}</div>
                      <div style={{ fontSize: '0.82rem', color: 'rgba(223,221,218,0.5)' }}>{exp.company} · {exp.location}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 data-reveal style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '0.7rem', letterSpacing: '0.2em', color: 'rgba(223,221,218,0.4)', marginBottom: '1.2rem' }}>LOGICIELS</h3>
            <div data-reveal data-delay="1" style={{ display: 'flex', gap: '0.7rem', flexWrap: 'wrap' }}>
              {SKILLS.map((skill) => (
                <span key={skill.name} style={{
                  fontFamily: 'Oswald, sans-serif', fontSize: '0.8rem', letterSpacing: '0.05em',
                  color: '#dfddda', padding: '0.4rem 0.9rem', border: '1px solid rgba(223,221,218,0.12)',
                  background: 'rgba(255,255,255,0.02)'
                }}>
                  {skill.name}
                </span>
              ))}
            </div>

            {/* Education */}
            <div data-reveal data-delay="2" style={{ marginTop: '2.5rem' }}>
              <h3 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '0.7rem', letterSpacing: '0.2em', color: 'rgba(223,221,218,0.4)', marginBottom: '1.2rem' }}>FORMATION</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ borderLeft: `2px solid ${accent}`, paddingLeft: '1rem' }}>
                  <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: '0.9rem', color: '#dfddda' }}>Maintenance Informatique & Graphisme</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(223,221,218,0.5)' }}>Centre TCI Bénin · Cotonou</div>
                </div>
                <div style={{ borderLeft: `2px solid rgba(223,221,218,0.15)`, paddingLeft: '1rem' }}>
                  <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: '0.9rem', color: '#dfddda' }}>Baccalauréat Série B</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(223,221,218,0.5)' }}>Complexe La Merveille · Cotonou</div>
                </div>
              </div>
            </div>

            {/* Langues */}
            <div data-reveal data-delay="3" style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem' }}>
              {['Français', 'Mina'].map((lang) => (
                <div key={lang} style={{ textAlign: 'center', padding: '0.75rem 1.5rem', border: `1px solid rgba(223,221,218,0.12)` }}>
                  <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: '0.85rem', color: '#dfddda' }}>{lang}</div>
                  <div style={{ fontSize: '0.7rem', color: 'rgba(223,221,218,0.4)', marginTop: 2 }}>Langue</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Portfolio (3D Coverflow) ──────────────────────────────────────────────

function Portfolio({ accent }: { accent: string }) {
  const [active, setActive] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const total = PORTFOLIO_ITEMS.length

  useEffect(() => {
    if (isPaused) return
    const t = setInterval(() => setActive((p) => (p + 1) % total), 4500)
    return () => clearInterval(t)
  }, [total, isPaused])

  const getCardTransform = (i: number) => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const offset = i - active;
    const abs = Math.abs(offset);
    if (abs > (isMobile ? 1 : 2)) return null;

    const xOffset = isMobile ? 140 : 260;

    return {
      transform: `translateX(${offset * xOffset}px) translateZ(${-abs * 110}px) rotateY(${-offset * 26}deg) scale(${abs === 0 ? 1 : abs === 1 ? 0.84 : 0.68})`,
      opacity: abs === 0 ? 1 : abs === 1 ? 0.65 : 0.35,
      zIndex: 10 - abs,
      transition: 'all 0.65s cubic-bezier(0.22,1,0.36,1)',
    }
  }

  return (
    <section id="portfolio" style={{ padding: 'var(--section-spacing) 0', background: '#060606', overflow: 'hidden' }}>
      <div className="section-container">
        <div data-reveal style={{ marginBottom: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem' }}>
          <div>
            <span style={{ fontFamily: 'Oswald, sans-serif', fontSize: '0.7rem', letterSpacing: '0.2em', color: accent, display: 'block', marginBottom: '0.2rem' }}>— PORTFOLIO</span>
            <h2 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#dfddda', margin: 0, lineHeight: 0.9 }}>
              MES<br /><span style={{ color: accent }}>CRÉATIONS</span>
            </h2>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button onClick={() => setActive((p) => (p - 1 + total) % total)}
              style={{ width: 44, height: 44, border: `1px solid rgba(223,221,218,0.2)`, background: 'none', color: '#dfddda', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = accent; e.currentTarget.style.color = accent }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(223,221,218,0.2)'; e.currentTarget.style.color = '#dfddda' }}>
              <SVGIcon type="arrowLeft" size={18} />
            </button>
            <button onClick={() => setActive((p) => (p + 1) % total)}
              style={{ width: 44, height: 44, border: `1px solid rgba(223,221,218,0.2)`, background: 'none', color: '#dfddda', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = accent; e.currentTarget.style.color = accent }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(223,221,218,0.2)'; e.currentTarget.style.color = '#dfddda' }}>
              <SVGIcon type="arrowRight" size={18} />
            </button>
          </div>
        </div>

        {/* 3D Coverflow */}
        <div className="coverflow-container" style={{
          position: 'relative', height: (typeof window !== 'undefined' && window.innerWidth < 600) ? 340 : 420, display: 'flex', alignItems: 'center', justifyContent: 'center',
          perspective: '1400px', perspectiveOrigin: '50% 50%',
        }}>
          {PORTFOLIO_ITEMS.map((item, i) => {
            const style = getCardTransform(i)
            if (!style) return null
            const isActive = i === active
            const isMobile = typeof window !== 'undefined' && window.innerWidth < 600;
            const cardW = isMobile ? 220 : 280;
            const cardH = isMobile ? 300 : 380;

            return (
              <div key={item.id}
                onClick={() => setActive(i)}
                onMouseDown={() => setIsPaused(true)}
                onMouseUp={() => setIsPaused(false)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => setIsPaused(false)}
                style={{
                  position: 'absolute', width: cardW, height: cardH,
                  cursor: 'pointer', ...style,
                }}>
                <div style={{
                  width: '100%', height: '100%', overflow: 'hidden', position: 'relative',
                  boxShadow: isActive ? `0 0 40px ${accent}55, 0 20px 60px rgba(0,0,0,0.8)` : '0 10px 30px rgba(0,0,0,0.6)',
                  transition: 'box-shadow 0.6s',
                  background: '#0a0a0a',
                  padding: '8px',
                  boxSizing: 'border-box',
                  border: `1px solid ${isActive ? accent + '44' : 'rgba(223,221,218,0.08)'}`,
                }}>
                  <img src={item.img} alt={item.title}
                    style={{
                      width: '100%', height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      borderRadius: '2px'
                    }} />
                  <div style={{
                    position: 'absolute', inset: 8,
                    background: isActive ? `linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)` : 'rgba(0,0,0,0.5)',
                    transition: 'background 0.5s',
                    borderRadius: '2px'
                  }} />
                  {isActive && (
                    <div style={{ position: 'absolute', bottom: 8, left: 8, right: 8, padding: '1.2rem' }}>
                      <span style={{ fontFamily: 'Oswald, sans-serif', fontSize: '0.65rem', letterSpacing: '0.18em', color: accent, display: 'block', marginBottom: '0.4rem' }}>
                        {item.category}
                      </span>
                      <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#dfddda' }}>{item.title}</div>
                      <div style={{ display: 'flex', gap: '0.4rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                        {item.tags.map((tag) => (
                          <span key={tag} style={{ fontSize: '0.65rem', padding: '0.2rem 0.5rem', background: `${accent}22`, color: accent, fontFamily: 'Oswald, sans-serif', letterSpacing: '0.08em' }}>{tag}</span>
                        ))}
                      </div>
                      <span style={{ fontSize: '0.75rem', color: 'rgba(223,221,218,0.4)', fontFamily: 'Oswald, sans-serif' }}>{item.year}</span>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '2.5rem' }}>
          {PORTFOLIO_ITEMS.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} style={{
              width: i === active ? 28 : 6, height: 4, background: i === active ? accent : 'rgba(223,221,218,0.25)',
              border: 'none', cursor: 'pointer', padding: 0, transition: 'all 0.4s',
            }} />
          ))}
        </div>

        {/* CTA */}
        <div data-reveal style={{ textAlign: 'center', marginTop: '4rem' }}>
          <a href="#commande" style={{
            fontFamily: 'Oswald, sans-serif', fontSize: '0.78rem', letterSpacing: '0.14em',
            padding: '0.8rem 2.5rem', border: `1px solid ${accent}`, color: accent,
            textDecoration: 'none', transition: 'all 0.3s', display: 'inline-block',
          }}
            onMouseEnter={(e) => { e.currentTarget.style.background = accent; e.currentTarget.style.color = '#000' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = accent }}>
            COMMANDER UNE CRÉATION
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── Services (Flip Cards) ─────────────────────────────────────────────────

function Services({ accent }: { accent: string }) {
  const [flipped, setFlipped] = useState<number | null>(null)

  return (
    <section id="services" style={{ padding: 'var(--section-spacing) 0', background: '#000' }}>
      <div className="section-container">
        <div data-reveal style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <span style={{ fontFamily: 'Oswald, sans-serif', fontSize: '0.7rem', letterSpacing: '0.2em', color: accent, display: 'block', marginBottom: '0.2rem' }}>— SERVICES</span>
          <h2 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#dfddda', margin: 0, lineHeight: 0.9 }}>
            MES<br /><span style={{ color: accent }}>PRESTATIONS</span>
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'rgba(223,221,218,0.5)', marginTop: '1rem' }}>Cliquez sur une carte pour voir les détails</p>
        </div>

        <div className="services-grid" style={{ display: 'grid', gap: '1.5rem' }}>
          {SERVICES.map((svc, i) => (
            <div key={svc.title} data-reveal data-delay={String(i + 1)}
              className="flip-card" style={{ height: 340 }}
              onClick={() => setFlipped(flipped === i ? null : i)}>
              <div className={`flip-card-inner${flipped === i ? ' flipped' : ''}`}>

                {/* Front */}
                <div className="flip-front" style={{
                  background: '#0a0a0a', border: '1px solid rgba(223,221,218,0.08)',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  padding: '2rem 1.5rem', textAlign: 'center', transition: 'border-color 0.3s',
                }}>
                  <div style={{ marginBottom: '1.5rem', color: accent }}>
                    <SVGIcon type={svc.icon} size={42} color={accent} />
                  </div>
                  <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '1.1rem', letterSpacing: '0.06em', color: '#dfddda', marginBottom: '0.75rem' }}>{svc.title}</div>
                  <div style={{ marginTop: 'auto', paddingTop: '1.5rem', fontSize: '0.7rem', color: 'rgba(223,221,218,0.3)', letterSpacing: '0.1em', fontFamily: 'Oswald, sans-serif' }}>CLIQUER ↻</div>
                </div>

                {/* Back */}
                <div className="flip-back" style={{
                  background: `linear-gradient(135deg, ${accent}18 0%, #0a0a0a 60%)`,
                  border: `1px solid ${accent}44`,
                  display: 'flex', flexDirection: 'column', padding: '2rem 1.5rem',
                  justifyContent: 'space-between',
                }}>
                  <div>
                    <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: '1rem', color: accent, marginBottom: '1rem' }}>{svc.title}</div>
                    <p style={{ fontSize: '0.85rem', lineHeight: 1.7, color: 'rgba(223,221,218,0.75)' }}>{svc.desc}</p>
                  </div>
                  <div>
                    <a href={`https://wa.me/2290192811861?text=${encodeURIComponent(svc.wa)}`} target="_blank" rel="noopener noreferrer" style={{
                      fontFamily: 'Oswald, sans-serif', fontSize: '0.7rem', letterSpacing: '0.12em',
                      padding: '0.5rem 1.25rem', background: accent, color: '#000', textDecoration: 'none',
                      fontWeight: 600, display: 'inline-block', transition: 'opacity 0.2s',
                    }}
                      onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
                      onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}>
                      COMMANDER
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Order Form ────────────────────────────────────────────────────────────

function Order({ accent }: { accent: string }) {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    name: '', email: '', phone: '', service: '', description: '', deadline: '',
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const message = `Bonjour Black Studio, voici une nouvelle commande :
*Nom :* ${form.name}
*Email :* ${form.email}
*Téléphone :* ${form.phone || 'Non renseigné'}
*Service :* ${form.service}
*Détails :* ${form.description}
*Délai :* ${form.deadline || 'Non renseigné'}`

    window.open(`https://wa.me/2290192811861?text=${encodeURIComponent(message)}`, '_blank')
    setSent(true)
  }

  const inputStyle: CSSProperties = {
    width: '100%', padding: '0.85rem 1rem',
    background: '#0a0a0a', border: '1px solid rgba(223,221,218,0.12)',
    color: '#dfddda', fontFamily: 'Inter, sans-serif', fontSize: '0.9rem',
    outline: 'none', transition: 'border-color 0.3s',
    boxSizing: 'border-box',
  }

  return (
    <section id="commande" style={{ padding: 'var(--section-spacing) 0', background: '#060606' }}>
      <div className="section-container">
        <div data-reveal style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <span style={{ fontFamily: 'Oswald, sans-serif', fontSize: '0.7rem', letterSpacing: '0.2em', color: accent, display: 'block', marginBottom: '0.2rem' }}>— COMMANDE</span>
          <h2 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#dfddda', margin: 0, lineHeight: 0.9 }}>
            PASSER<br /><span style={{ color: accent }}>UNE COMMANDE</span>
          </h2>
        </div>

        <div className="order-grid">
          {/* Info */}
          <div data-reveal>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(223,221,218,0.7)', marginBottom: '2.5rem' }}>
              Décrivez votre projet et je vous réponds sous 24h avec un devis personnalisé.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { label: 'EMAIL', value: 'rollandkennedy72@gmail.com' },
                { label: 'TÉLÉPHONE', value: '+229 01 92 87 18 67' },
                { label: 'DISPONIBILITÉ', value: 'Contrat · Freelance · Commande' },
              ].map((item) => (
                <div key={item.label}>
                  <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: '0.65rem', letterSpacing: '0.2em', color: accent, marginBottom: '0.25rem' }}>{item.label}</div>
                  <div style={{ fontSize: '0.9rem', color: '#dfddda' }}>{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div data-reveal data-delay="1">
            {sent ? (
              <div style={{ textAlign: 'center', padding: '4rem 2rem', border: `1px solid ${accent}44`, background: `${accent}08` }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
                <h3 style={{ fontFamily: 'Oswald, sans-serif', fontSize: '1.5rem', color: accent, marginBottom: '0.75rem' }}>COMMANDE ENVOYÉE</h3>
                <p style={{ fontSize: '0.9rem', color: 'rgba(223,221,218,0.6)', marginBottom: '2rem' }}>Merci ! Je vous réponds sous 24h.</p>
                <button onClick={() => setSent(false)} style={{
                  fontFamily: 'Oswald, sans-serif', fontSize: '0.75rem', letterSpacing: '0.12em',
                  padding: '0.6rem 1.5rem', border: `1px solid ${accent}`, background: 'none', color: accent, cursor: 'pointer',
                }}>
                  NOUVELLE COMMANDE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div className="responsive-grid-2">
                  <div>
                    <label style={{ fontFamily: 'Oswald, sans-serif', fontSize: '0.65rem', letterSpacing: '0.15em', color: 'rgba(223,221,218,0.5)', display: 'block', marginBottom: '0.4rem' }}>NOM COMPLET *</label>
                    <input required style={inputStyle} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      onFocus={(e) => (e.target.style.borderColor = accent)} onBlur={(e) => (e.target.style.borderColor = 'rgba(223,221,218,0.12)')} />
                  </div>
                  <div>
                    <label style={{ fontFamily: 'Oswald, sans-serif', fontSize: '0.65rem', letterSpacing: '0.15em', color: 'rgba(223,221,218,0.5)', display: 'block', marginBottom: '0.4rem' }}>EMAIL *</label>
                    <input required type="email" style={inputStyle} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                      onFocus={(e) => (e.target.style.borderColor = accent)} onBlur={(e) => (e.target.style.borderColor = 'rgba(223,221,218,0.12)')} />
                  </div>
                </div>
                <div className="responsive-grid-2">
                  <div>
                    <label style={{ fontFamily: 'Oswald, sans-serif', fontSize: '0.65rem', letterSpacing: '0.15em', color: 'rgba(223,221,218,0.5)', display: 'block', marginBottom: '0.4rem' }}>TÉLÉPHONE</label>
                    <input style={inputStyle} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      onFocus={(e) => (e.target.style.borderColor = accent)} onBlur={(e) => (e.target.style.borderColor = 'rgba(223,221,218,0.12)')} />
                  </div>
                  <div>
                    <label style={{ fontFamily: 'Oswald, sans-serif', fontSize: '0.65rem', letterSpacing: '0.15em', color: 'rgba(223,221,218,0.5)', display: 'block', marginBottom: '0.4rem' }}>SERVICE *</label>
                    <select required style={{ ...inputStyle, cursor: 'pointer' }} value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                      onFocus={(e) => (e.target.style.borderColor = accent)} onBlur={(e) => (e.target.style.borderColor = 'rgba(223,221,218,0.12)')}>
                      <option value="">Choisir...</option>
                      <option>Logo Design</option>
                      <option>Branding</option>
                      <option>Social Media</option>
                      <option>Packaging</option>
                      <option>Print Media</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label style={{ fontFamily: 'Oswald, sans-serif', fontSize: '0.65rem', letterSpacing: '0.15em', color: 'rgba(223,221,218,0.5)', display: 'block', marginBottom: '0.4rem' }}>DESCRIPTION DU PROJET *</label>
                  <textarea required rows={4} style={{ ...inputStyle, resize: 'vertical' }} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })}
                    onFocus={(e) => (e.target.style.borderColor = accent)} onBlur={(e) => (e.target.style.borderColor = 'rgba(223,221,218,0.12)')} />
                </div>
                <div className="responsive-grid-2">
                  <div>
                    <label style={{ fontFamily: 'Oswald, sans-serif', fontSize: '0.65rem', letterSpacing: '0.15em', color: 'rgba(223,221,218,0.5)', display: 'block', marginBottom: '0.4rem' }}>DÉLAI SOUHAITÉ</label>
                    <select style={{ ...inputStyle, cursor: 'pointer' }} value={form.deadline} onChange={(e) => setForm({ ...form, deadline: e.target.value })}
                      onFocus={(e) => (e.target.style.borderColor = accent)} onBlur={(e) => (e.target.style.borderColor = 'rgba(223,221,218,0.12)')}>
                      <option value="">Choisir...</option>
                      <option>Urgent (48h)</option>
                      <option>1 semaine</option>
                      <option>2 semaines</option>
                      <option>1 mois</option>
                      <option>Pas de contrainte</option>
                    </select>
                  </div>
                </div>
                <button type="submit" style={{
                  fontFamily: 'Oswald, sans-serif', fontSize: '0.85rem', letterSpacing: '0.14em',
                  padding: '1rem', background: accent, color: '#000', border: 'none',
                  cursor: 'pointer', fontWeight: 700, marginTop: '0.5rem',
                  transition: 'opacity 0.2s',
                }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.88')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}>
                  ENVOYER MA COMMANDE →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Contact ──────────────────────────────────────────────────────────────

function Contact({ accent }: { accent: string }) {
  return (
    <section id="contact" style={{ padding: 'var(--section-spacing) 0', background: '#000' }}>
      <div className="section-container">
        <div data-reveal style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <span style={{ fontFamily: 'Oswald, sans-serif', fontSize: '0.7rem', letterSpacing: '0.2em', color: accent, display: 'block', marginBottom: '0.2rem' }}>— CONTACT</span>
          <h2 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#dfddda', margin: 0, lineHeight: 0.9 }}>
            PARLONS<br /><span style={{ color: accent }}>DE VOTRE PROJET</span>
          </h2>
        </div>

        <div className="responsive-grid-3" style={{ display: 'grid', gap: '2rem' }}>
          {[
            { label: 'EMAIL', value: 'rollandkennedy72@gmail.com', link: 'mailto:rollandkennedy72@gmail.com', icon: 'email' },
            { label: 'TÉLÉPHONE', value: '+229 01 92 87 18 67\n+229 01 61 10 83 03', link: 'tel:+22901928718 67', icon: 'phone' },
            { label: 'LINKEDIN', value: 'Kennedy Rolland', link: '#', icon: 'linkedin' },
          ].map((item, i) => (
            <a key={item.label} data-reveal data-delay={String(i + 1)} href={item.link}
              style={{
                display: 'block', padding: '2rem', border: '1px solid rgba(223,221,218,0.08)',
                textDecoration: 'none', transition: 'all 0.3s', background: '#0a0a0a',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = accent; e.currentTarget.style.background = `${accent}08` }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(223,221,218,0.08)'; e.currentTarget.style.background = '#0a0a0a' }}>
              <div style={{ marginBottom: '0.75rem', color: accent }}>
                <SVGIcon type={item.icon} size={28} color={accent} />
              </div>
              <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: '0.65rem', letterSpacing: '0.2em', color: 'rgba(223,221,218,0.4)', marginBottom: '0.5rem' }}>{item.label}</div>
              <div style={{ fontSize: '0.9rem', color: '#dfddda', whiteSpace: 'pre-line' }}>{item.value}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Closing Video ──────────────────────────────────────────────────────────

function ClosingVideo({ accent }: { accent: string }) {
  return (
    <section style={{ padding: 'var(--section-spacing) 0', background: '#060606' }}>
      <div className="section-container">
        <div data-reveal style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
          <span style={{ fontFamily: 'Oswald, sans-serif', fontSize: '0.7rem', letterSpacing: '0.2em', color: accent, display: 'block', marginBottom: '0.2rem' }}>— EN IMAGES</span>
          <h2 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#dfddda', margin: 0, lineHeight: 0.9 }}>
            SOURIEZ<br /><span style={{ color: accent }}>AVEC NOUS</span>
          </h2>
        </div>

        <div data-reveal data-delay="1" style={{
          maxWidth: 460, margin: '0 auto', position: 'relative',
          border: `1px solid ${accent}33`, boxShadow: `0 30px 90px rgba(0,0,0,0.7), 0 0 60px ${accent}14`,
          overflow: 'hidden', background: '#0a0a0a',
        }}>
          <video src={closingVideo} autoPlay muted loop playsInline controls
            style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────

function Footer({ accent }: { accent: string }) {
  return (
    <footer style={{ padding: '2.5rem 0', borderTop: '1px solid rgba(223,221,218,0.08)', background: '#000' }}>
      <div className="section-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <video src={logoVideo} autoPlay muted loop playsInline style={{ height: 32, width: 'auto', objectFit: 'contain' }} />
          <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.1em', color: '#dfddda' }}>
            BLACK<span style={{ color: accent }}>STUDIO</span>
          </span>
        </div>
        <span style={{ fontFamily: 'Oswald, sans-serif', fontSize: '0.7rem', letterSpacing: '0.1em', color: 'rgba(223,221,218,0.3)' }}>
          copyright 2026 MiDIGITAL
        </span>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {['LOGO', 'BRANDING', 'SOCIAL', 'PACKAGING', 'PRINT'].map((cat) => (
            <span key={cat} style={{ fontFamily: 'Oswald, sans-serif', fontSize: '0.62rem', letterSpacing: '0.14em', color: 'rgba(223,221,218,0.3)' }}>{cat}</span>
          ))}
        </div>
      </div>
    </footer>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────

export default function App() {
  const [accent, setAccent] = useState('#FF6B35')
  useScrollReveal()

  return (
    <div style={{ background: '#000', minHeight: '100vh' }}>
      <Nav accent={accent} />
      <Hero onAccentChange={setAccent} />
      <Presentation accent={accent} />
      <About accent={accent} />
      <Portfolio accent={accent} />
      <Services accent={accent} />
      <Order accent={accent} />
      <Contact accent={accent} />
      <ClosingVideo accent={accent} />
      <Footer accent={accent} />
    </div>
  )
}
