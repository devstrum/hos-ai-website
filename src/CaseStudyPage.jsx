import { THEME, gridBg, CornerTicks, SiteNav, SiteFooter, FaviconOrInitials, PAD_X } from './theme.jsx';

// hos-case-study-content.jsx - HOS AI Work page: project index
// (real House of Shafaq brand/production projects, AI systems shipped, and Ringg partner work)

// AI systems HOS AI has shipped - the Home page teasers, in full
const AI_PROJECTS = [
  ['WhatsApp support agent', 'Built on Meta\'s WhatsApp BSP · handles pre-sales, post-sales & FAQ deflection', '24/7 coverage'],
  ['Voice agent · pre & post-sales', 'Built on Ringg · inbound/outbound call handling, booking, follow-up', 'instant response'],
  ['Documentation & admin automation', 'Internal knowledge retrieval, drafting, and back-office workflows', '−40% admin hours'],
  ['Lead qualification & routing', 'Scores and routes inbound leads to the right rep in real time', '2× qualified leads'],
];

// Real House of Shafaq brand & production work - linked out to houseofshafaq.com
const HOS_PROJECTS = [
  ['Mokobara Ads', 'Mid-level ads', 'https://www.houseofshafaq.com/projects/mokobara-ads'],
  ['Honest Bowl · Organic Content', 'Reels', 'https://www.houseofshafaq.com/projects/honest-bowl'],
  ['Rebel Foods · Adrenaline Campaign', 'Mid-level ads', 'https://www.houseofshafaq.com/projects/the-500-calorie-project'],
  ['Dubai Cares Video', 'Reels', 'https://www.houseofshafaq.com/projects/dubai-cares-video'],
  ['SaadSells · Organic Content', 'Reels', 'https://www.houseofshafaq.com/projects/saadsells-organic-content'],
  ['Adil Qadri Perfumes', 'Reels', 'https://www.houseofshafaq.com/projects/adil-qadri-organic-content'],
  ['Brands for Less · Eid Campaign', 'Mid-level ads', 'https://www.houseofshafaq.com/projects/eid-campaign'],
  ['Kibs', 'Mid-level ads', 'https://www.houseofshafaq.com/projects/kibs'],
];

// Voice/WhatsApp deployments via our Ringg partnership
const RINGG_PROJECTS = [
  { name: 'noon', domain: 'noon.com' },
  { name: 'Tabby', domain: 'tabby.ai' },
  { name: 'Tamara', domain: 'tamara.co' },
];

const CaseStudyPage = () => {
  const { bg, ink, accent, muted, rule } = THEME;
  return (
    <div style={{ background: bg, color: ink, fontFamily: '"Geist Mono", monospace', minHeight: '100%' }} data-screen-label="Work">
      <SiteNav active="work" />

      <section style={{ position: 'relative', padding: `clamp(48px, 10vw, 72px) ${PAD_X} clamp(32px, 8vw, 48px)`, backgroundImage: gridBg, textAlign: 'center' }}>
        <CornerTicks />
        <div style={{ fontSize: 11, color: accent, letterSpacing: '.3em', marginBottom: 24 }}>OUR WORK</div>
        <h1 style={{ fontFamily: '"Geist", sans-serif', fontSize: 'clamp(36px, 8vw, 72px)', fontWeight: 600, letterSpacing: '-0.04em', margin: '0 auto 28px', lineHeight: 1.05, maxWidth: 820 }}>
          What we build, <span style={{ color: accent }}>to name a few.</span>
        </h1>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 18, lineHeight: 1.55, color: muted, maxWidth: 680, margin: '0 auto' }}>
          AI systems shipped for clients across the UK, UAE, India, and Australia, plus the Ringg-powered voice/WhatsApp deployments and House of Shafaq production work behind the network.
        </p>
      </section>

      {/* AI systems shipped */}
      <section style={{ padding: `clamp(48px, 10vw, 96px) ${PAD_X}`, borderTop: `1px solid ${ink}`, textAlign: 'center' }}>
        <div style={{ fontSize: 11, color: accent, letterSpacing: '.3em', marginBottom: 16 }}>AI SYSTEMS SHIPPED</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 1, background: rule, border: `1px solid ${rule}`, marginTop: 24 }}>
          {AI_PROJECTS.map(([t, d, o]) => (
            <div key={t} style={{ background: bg, padding: 24, textAlign: 'center' }}>
              <div style={{ fontFamily: '"Geist", sans-serif', fontSize: 18, fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 10 }}>{t}</div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, lineHeight: 1.6, color: muted, margin: '0 0 14px' }}>{d}</p>
              <div style={{ fontSize: 11, color: accent, fontFamily: '"Geist Mono", monospace' }}>{o}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Ringg-powered deployments */}
      <section style={{ padding: `0 ${PAD_X} clamp(48px, 10vw, 96px)`, textAlign: 'center' }}>
        <div style={{ fontSize: 11, color: accent, letterSpacing: '.3em', marginBottom: 16 }}>VOICE & WHATSAPP · VIA RINGG</div>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: muted, maxWidth: 560, margin: '0 auto 24px' }}>Our preferred voice AI partner Ringg's success stories in the region include:</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap' }}>
          {RINGG_PROJECTS.map(c => (
            <div key={c.name} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <FaviconOrInitials name={c.name} domain={c.domain} size={22} />
              <span style={{ fontFamily: '"Geist", sans-serif', fontSize: 16, color: ink }}>{c.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* House of Shafaq brand & production projects */}
      <section style={{ padding: `0 ${PAD_X} clamp(48px, 10vw, 96px)`, textAlign: 'center' }}>
        <div style={{ fontSize: 11, color: accent, letterSpacing: '.3em', marginBottom: 16 }}>BRAND & PRODUCTION WORK · VIA HOUSE OF SHAFAQ</div>
        <h2 style={{ fontFamily: '"Geist", sans-serif', fontSize: 'clamp(24px, 5vw, 36px)', fontWeight: 600, letterSpacing: '-0.03em', margin: '0 0 12px' }}>The network's own track record.</h2>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: muted, maxWidth: 620, margin: '0 auto 40px' }}>
          HOS AI is backed by House of Shafaq's decade of brand and production work across the region - a sample below, more at{' '}
          <a href="https://www.houseofshafaq.com/projects" target="_blank" rel="noopener" style={{ color: ink, borderBottom: `1px solid ${accent}`, textDecoration: 'none' }}>houseofshafaq.com/projects</a>.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 1, background: rule, border: `1px solid ${rule}` }}>
          {HOS_PROJECTS.map(([t, cat, href]) => (
            <a key={t} href={href} target="_blank" rel="noopener" className="hos-card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ background: bg, padding: 22, height: '100%', boxSizing: 'border-box', textAlign: 'center' }}>
                <div style={{ fontSize: 9, color: muted, letterSpacing: '.15em', marginBottom: 10 }}>{cat.toUpperCase()}</div>
                <div style={{ fontFamily: '"Geist", sans-serif', fontSize: 15, fontWeight: 600, letterSpacing: '-0.01em', lineHeight: 1.3 }}>{t}</div>
                <div style={{ fontSize: 11, color: accent, marginTop: 10 }}>VIEW PROJECT →</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <SiteFooter heading="Let's build" headingAccent="what's next." />
    </div>
  );
};

export default CaseStudyPage;
