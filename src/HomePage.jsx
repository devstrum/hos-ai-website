import { THEME, gridBg, CornerTicks, SiteNav, SiteFooter, BOOKING_URL, IntegrationsBanner, TrustedByBar, PartnersStrip, PAD_X, Reveal, CountUp, SEO } from './theme.jsx';

// hos-home-content.jsx - HOS AI Homepage
// Depends on: hos-shared.jsx, roi-calculator.jsx

const FAQS = [
  ['What does an AI automation agency actually build?', "Production systems, not prototypes - WhatsApp support agents, inbound/outbound voice AI, RAG copilots over your internal knowledge, and lead-routing automation. Everything ships embedded in the tools your team already uses."],
  ['How fast can HOS AI deploy an AI system?', 'Most engagements go from audit to a live system in six weeks. A two-week AI audit maps your workflows and picks the highest-leverage wedge before any building starts.'],
  ['Do you only work with companies in Dubai or the UAE?', "No - House of Shafaq's network is based in Dubai, but HOS AI ships for clients across the UK, UAE, India, and Australia."],
  ['Are you tied to one AI model or vendor?', "No. We're model and vendor agnostic - we curate and select whichever model, voice AI platform (Ringg), or WhatsApp infrastructure (Meta's BSP) is right for the use case."],
];

const HomePage = () => {
  const { bg, ink, accent, muted, rule } = THEME;

  return (
    <div style={{ background: bg, color: ink, fontFamily: '"Geist Mono", monospace', minHeight: '100%' }} data-screen-label="Home">
      <SEO
        title="AI Automation Agency & Consultancy in Dubai"
        description="HOS AI is a Dubai-based AI automation agency and consultancy. We design and ship WhatsApp agents, voice AI, RAG copilots, and workflow automation for businesses across the UK, UAE, India, and Australia — deployed in six weeks."
        path="/"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: FAQS.map(([q, a]) => ({
            '@type': 'Question',
            name: q,
            acceptedAnswer: { '@type': 'Answer', text: a },
          })),
        }}
      />
      <SiteNav active="home" />

      {/* ─── HERO ─── */}
      <section style={{ position: 'relative', padding: `clamp(48px, 10vw, 72px) ${PAD_X} clamp(36px, 8vw, 56px)`, backgroundImage: gridBg, textAlign: 'center' }}>
        <CornerTicks />
        <Reveal style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ fontSize: 11, color: accent, letterSpacing: '.3em', marginBottom: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
            <span style={{ width: 24, height: 1, background: accent }}></span>
            THE AI ARM OF HOUSE OF SHAFAQ · DUBAI
            <span style={{ width: 24, height: 1, background: accent }}></span>
          </div>
          <h1 style={{ fontFamily: '"Geist", sans-serif', fontWeight: 600, fontSize: 'clamp(44px, 11vw, 104px)', lineHeight: .94, letterSpacing: '-0.05em', margin: 0 }}>
            AI that pays<br />for <span style={{ color: accent }}>itself.</span>
          </h1>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 19, lineHeight: 1.5, color: muted, maxWidth: 620, margin: '32px auto 0' }}>
            We design and ship AI systems that cut labor costs and create new revenue - deployed in six weeks. Backed by House of Shafaq's network across Dubai.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 40, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={BOOKING_URL} target="_blank" rel="noopener" style={{ textDecoration: 'none' }}>
              <button style={{ padding: '14px 26px', background: ink, color: bg, border: 0, fontSize: 12, fontWeight: 600, letterSpacing: '.18em', fontFamily: 'inherit', cursor: 'pointer' }}>BOOK INTAKE →</button>
            </a>
            <a href="/services" style={{ textDecoration: 'none' }}>
              <button style={{ padding: '14px 26px', background: bg, color: ink, border: `1px solid ${ink}`, fontSize: 12, fontWeight: 600, letterSpacing: '.18em', fontFamily: 'inherit', cursor: 'pointer' }}>SEE SERVICES</button>
            </a>
          </div>
          <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 24, maxWidth: 620, marginLeft: 'auto', marginRight: 'auto' }}>
            {[['3.2×', 'avg ROI within 6 months'], ['$1.4M+', 'labor cost eliminated'], ['12+', 'systems shipped']].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: '"Geist", sans-serif', fontSize: 'clamp(22px, 4vw, 28px)', fontWeight: 600, letterSpacing: '-0.03em', color: ink }}><CountUp value={n} /></div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: muted, marginTop: 4, letterSpacing: '.05em' }}>{l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ─── TRUSTED BY ─── */}
      <TrustedByBar />

      {/* ─── SOCIAL PROOF ─── */}
      <div style={{ padding: `14px ${PAD_X}`, borderBottom: `1px solid ${rule}`, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, flexWrap: 'wrap', fontSize: 12, color: muted, fontFamily: '"Geist Mono", monospace', textAlign: 'center' }}>
        <span>SEE THE WORK BEHIND THE NETWORK →</span>
        <a href="https://www.instagram.com/houseofshafaq/" target="_blank" rel="noopener" style={{ color: ink, borderBottom: `1px solid ${accent}`, textDecoration: 'none' }}>@houseofshafaq</a>
        <span style={{ opacity: .5 }}>·</span>
        <span>incl. SaadSells</span>
      </div>

      {/* ─── PARTNERS ─── */}
      <PartnersStrip />

      {/* ─── INTEGRATIONS ─── */}
      <IntegrationsBanner />

      {/* ─── WORK INDEX TEASER ─── */}
      <Reveal as="section" id="work" style={{ padding: `0 ${PAD_X}`, borderTop: `1px solid ${ink}`, borderBottom: `1px solid ${ink}`, textAlign: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: '32px 0 8px' }}>
          <h2 style={{ fontFamily: '"Geist", sans-serif', fontSize: 'clamp(28px, 6vw, 40px)', fontWeight: 600, letterSpacing: '-0.03em', margin: 0 }}>Selected work</h2>
          <a href="/work" style={{ fontSize: 11, color: muted, letterSpacing: '.15em', textDecoration: 'none' }}>VIEW ALL →</a>
        </div>
        {[
          ['01', 'WhatsApp support agent', 'ENTERPRISE', '24/7 coverage', '2026'],
          ['02', 'Voice agent · pre & post-sales support', 'ENTERPRISE', 'instant response', '2026'],
          ['03', 'Documentation & admin automation', 'ENTERPRISE', '−40% admin hours', '2025'],
          ['04', 'Lead qualification & routing', 'ENTERPRISE', '2× qualified leads', '2025'],
        ].map(([n, item, v, o, y]) => (
          <a key={n} href="/work" className="hos-card-link" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
            <div style={{ padding: '24px 0', borderBottom: `1px solid ${rule}` }}>
              <div style={{ fontSize: 11, letterSpacing: '.15em', color: accent, marginBottom: 8 }}>{n} · {y}</div>
              <div style={{ fontFamily: '"Geist", sans-serif', fontSize: 'clamp(19px, 3vw, 22px)', letterSpacing: '-0.02em', marginBottom: 10 }}>{item}</div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap', fontSize: 11 }}>
                <span style={{ letterSpacing: '.15em', color: muted }}>{v}</span>
                <span style={{ color: ink, fontFamily: '"Geist Mono", monospace' }}>{o}</span>
              </div>
            </div>
          </a>
        ))}
      </Reveal>

      {/* ─── SERVICES TEASER ─── */}
      <Reveal as="section" style={{ padding: `clamp(48px, 10vw, 96px) ${PAD_X}`, textAlign: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, marginBottom: 48 }}>
          <div style={{ fontSize: 11, color: accent, letterSpacing: '.3em' }}>SERVICES</div>
          <h2 style={{ fontFamily: '"Geist", sans-serif', fontSize: 'clamp(32px, 6vw, 56px)', fontWeight: 600, letterSpacing: '-0.04em', margin: 0 }}>What we deliver.</h2>
          <a href="/services" style={{ fontSize: 11, color: muted, letterSpacing: '.15em', textDecoration: 'none' }}>ALL SERVICES →</a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 1, background: rule, border: `1px solid ${rule}` }}>
          {[
            ['A.1', 'AI Audit', 'Two-week diagnostic. Map workflows, score AI-readiness, pick the wedge.'],
            ['A.2', 'Custom Agents', 'Single-purpose agents tuned to one workflow, embedded in your tools.'],
            ['A.3', 'RAG & Copilots', 'Production retrieval and copilots calibrated to your data and team.'],
          ].map(([n, t, d], i) => (
            <Reveal key={n} as="a" href="/services" delay={i * 0.08} className="hos-card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ background: bg, padding: 28, height: '100%', boxSizing: 'border-box' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, marginBottom: 14 }}>
                  <span style={{ fontSize: 10, color: accent, letterSpacing: '.15em' }}>{n}</span>
                  <span style={{ fontFamily: '"Geist", sans-serif', fontSize: 22, fontWeight: 600, letterSpacing: '-0.02em' }}>{t}</span>
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, lineHeight: 1.6, color: muted, margin: 0 }}>{d}</p>
                <div style={{ fontSize: 11, color: accent, letterSpacing: '.1em', marginTop: 16 }}>LEARN MORE →</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>

      {/* ─── AUTHORITY STRIP ─── */}
      <Reveal as="section" style={{ padding: `clamp(48px, 10vw, 96px) ${PAD_X}`, borderTop: `1px solid ${ink}`, textAlign: 'center' }}>
        <div style={{ fontSize: 11, color: accent, letterSpacing: '.3em', marginBottom: 16 }}>WHY HOS AI</div>
        <h2 style={{ fontFamily: '"Geist", sans-serif', fontSize: 'clamp(32px, 6vw, 56px)', fontWeight: 600, letterSpacing: '-0.04em', margin: '0 auto 56px', maxWidth: 760 }}>Senior team. Warm doors in Dubai. Model agnostic.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 1, background: rule, border: `1px solid ${rule}` }}>
          {[
            ['Senior, not staffed-out', 'Everyone on your project has shipped production AI systems before. No account managers, no bench.'],
            ['Relationships, not cold outbound', "House of Shafaq's network opens doors across Dubai - every engagement starts warm, introduced, trusted."],
            ['Model & vendor agnostic', "We don't force one stack. We curate and select whatever model or vendor is best for your use case."],
          ].map(([t, d]) => (
            <div key={t} style={{ background: bg, padding: 32 }}>
              <div style={{ fontFamily: '"Geist", sans-serif', fontSize: 20, fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 12 }}>{t}</div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, lineHeight: 1.6, color: muted, margin: 0 }}>{d}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* ─── FAQ ─── */}
      <Reveal as="section" style={{ padding: `clamp(48px, 10vw, 96px) ${PAD_X}`, borderTop: `1px solid ${ink}`, textAlign: 'center' }}>
        <div style={{ fontSize: 11, color: accent, letterSpacing: '.3em', marginBottom: 16 }}>FAQ</div>
        <h2 style={{ fontFamily: '"Geist", sans-serif', fontSize: 'clamp(32px, 6vw, 56px)', fontWeight: 600, letterSpacing: '-0.04em', margin: '0 auto 56px', maxWidth: 760 }}>Common questions.</h2>
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'left' }}>
          {FAQS.map(([q, a], i) => (
            <div key={q} style={{ padding: '24px 0', borderTop: i === 0 ? `1px solid ${rule}` : 'none', borderBottom: `1px solid ${rule}` }}>
              <div style={{ fontFamily: '"Geist", sans-serif', fontSize: 18, fontWeight: 600, letterSpacing: '-0.01em', marginBottom: 10 }}>{q}</div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, lineHeight: 1.6, color: muted, margin: 0 }}>{a}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <SiteFooter heading="Let's build your" headingAccent="AI arm." />
    </div>
  );
};

export default HomePage;
