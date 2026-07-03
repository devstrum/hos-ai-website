import { THEME, gridBg, CornerTicks, SiteNav, SiteFooter, CONTACT_EMAIL, IntegrationsBanner, TrustedByBar, PartnersStrip, PAD_X, useIsMobile } from './theme.jsx';

// hos-home-content.jsx - HOS AI Homepage
// Depends on: hos-shared.jsx, roi-calculator.jsx

const HomePage = () => {
  const { bg, ink, accent, muted, rule } = THEME;
  const isMobile = useIsMobile();

  return (
    <div style={{ background: bg, color: ink, fontFamily: '"Geist Mono", monospace', minHeight: '100%' }} data-screen-label="Home">
      <SiteNav active="home" />

      {/* ─── HERO ─── */}
      <section style={{ position: 'relative', padding: `clamp(48px, 10vw, 72px) ${PAD_X} clamp(36px, 8vw, 56px)`, backgroundImage: gridBg }}>
        <CornerTicks />
        <div style={{ maxWidth: 900 }}>
          <div style={{ fontSize: 11, color: accent, letterSpacing: '.3em', marginBottom: 28, display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ width: 24, height: 1, background: accent }}></span>
            THE AI ARM OF HOUSE OF SHAFAQ · DUBAI
          </div>
          <h1 style={{ fontFamily: '"Geist", sans-serif', fontWeight: 600, fontSize: 'clamp(44px, 11vw, 104px)', lineHeight: .94, letterSpacing: '-0.05em', margin: 0 }}>
            AI that pays<br />for <span style={{ color: accent }}>itself.</span>
          </h1>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 19, lineHeight: 1.5, color: muted, maxWidth: 620, marginTop: 32 }}>
            We design and ship AI systems that cut labor costs and create new revenue - deployed in six weeks. Backed by House of Shafaq's network across Dubai.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 40, flexWrap: 'wrap' }}>
            <a href={`mailto:${CONTACT_EMAIL}`} style={{ textDecoration: 'none' }}>
              <button style={{ padding: '14px 26px', background: ink, color: bg, border: 0, fontSize: 12, fontWeight: 600, letterSpacing: '.18em', fontFamily: 'inherit', cursor: 'pointer' }}>BOOK INTAKE →</button>
            </a>
            <a href="/services" style={{ textDecoration: 'none' }}>
              <button style={{ padding: '14px 26px', background: bg, color: ink, border: `1px solid ${ink}`, fontSize: 12, fontWeight: 600, letterSpacing: '.18em', fontFamily: 'inherit', cursor: 'pointer' }}>SEE SERVICES</button>
            </a>
          </div>
          <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 24, maxWidth: 620 }}>
            {[['3.2×', 'avg ROI within 6 months'], ['$1.4M+', 'labor cost eliminated'], ['12+', 'systems shipped']].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: '"Geist", sans-serif', fontSize: 'clamp(22px, 4vw, 28px)', fontWeight: 600, letterSpacing: '-0.03em', color: ink }}>{n}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: muted, marginTop: 4, letterSpacing: '.05em' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TRUSTED BY ─── */}
      <TrustedByBar />

      {/* ─── SOCIAL PROOF ─── */}
      <div style={{ padding: `14px ${PAD_X}`, borderBottom: `1px solid ${rule}`, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', fontSize: 12, color: muted, fontFamily: '"Geist Mono", monospace' }}>
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
      <section id="work" style={{ padding: `0 ${PAD_X}`, borderTop: `1px solid ${ink}`, borderBottom: `1px solid ${ink}` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '32px 0 8px', flexWrap: 'wrap', gap: 12 }}>
          <h2 style={{ fontFamily: '"Geist", sans-serif', fontSize: 'clamp(28px, 6vw, 40px)', fontWeight: 600, letterSpacing: '-0.03em', margin: 0 }}>Selected work</h2>
          <a href="/work" style={{ fontSize: 11, color: muted, letterSpacing: '.15em', textDecoration: 'none' }}>VIEW ALL →</a>
        </div>
        {!isMobile && (
          <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr 200px 120px 100px', padding: '20px 0', borderBottom: `1px solid ${rule}`, fontSize: 11, letterSpacing: '.15em', color: muted }}>
            <span>NO.</span><span>ITEM</span><span>VERTICAL</span><span>OUTCOME</span><span>YEAR</span>
          </div>
        )}
        {[
          ['01', 'WhatsApp support agent', 'ENTERPRISE', '24/7 coverage', '2026'],
          ['02', 'Voice agent · pre & post-sales support', 'ENTERPRISE', 'instant response', '2026'],
          ['03', 'Documentation & admin automation', 'ENTERPRISE', '−40% admin hours', '2025'],
          ['04', 'Lead qualification & routing', 'ENTERPRISE', '2× qualified leads', '2025'],
        ].map(([n, item, v, o, y]) => (
          <a key={n} href="/work" style={{ textDecoration: 'none', color: 'inherit' }}>
            {isMobile ? (
              <div style={{ padding: '20px 0', borderBottom: `1px solid ${rule}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
                  <span style={{ color: accent, fontSize: 12 }}>{n}</span>
                  <span style={{ fontSize: 11, letterSpacing: '.15em', color: muted }}>{y} →</span>
                </div>
                <div style={{ fontFamily: '"Geist", sans-serif', fontSize: 19, letterSpacing: '-0.02em', marginBottom: 8 }}>{item}</div>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', fontSize: 11 }}>
                  <span style={{ letterSpacing: '.15em', color: muted }}>{v}</span>
                  <span style={{ color: ink, fontFamily: '"Geist Mono", monospace' }}>{o}</span>
                </div>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr 200px 120px 100px', padding: '24px 0', borderBottom: `1px solid ${rule}`, fontSize: 14, alignItems: 'baseline' }}>
                <span style={{ color: accent }}>{n}</span>
                <span style={{ fontFamily: '"Geist", sans-serif', fontSize: 22, letterSpacing: '-0.02em' }}>{item}</span>
                <span style={{ fontSize: 10, letterSpacing: '.15em', color: muted }}>{v}</span>
                <span style={{ fontSize: 12, color: ink, fontFamily: '"Geist Mono", monospace' }}>{o}</span>
                <span style={{ fontSize: 11, letterSpacing: '.15em', color: muted }}>{y} →</span>
              </div>
            )}
          </a>
        ))}
      </section>

      {/* ─── SERVICES TEASER ─── */}
      <section style={{ padding: `clamp(48px, 10vw, 96px) ${PAD_X}` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 48, flexWrap: 'wrap', gap: 12 }}>
          <div>
            <div style={{ fontSize: 11, color: accent, letterSpacing: '.3em', marginBottom: 16 }}>SERVICES</div>
            <h2 style={{ fontFamily: '"Geist", sans-serif', fontSize: 'clamp(32px, 6vw, 56px)', fontWeight: 600, letterSpacing: '-0.04em', margin: 0 }}>What we deliver.</h2>
          </div>
          <a href="/services" style={{ fontSize: 11, color: muted, letterSpacing: '.15em', textDecoration: 'none' }}>ALL SERVICES →</a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 1, background: rule, border: `1px solid ${rule}` }}>
          {[
            ['A.1', 'AI Audit', 'Two-week diagnostic. Map workflows, score AI-readiness, pick the wedge.'],
            ['A.2', 'Custom Agents', 'Single-purpose agents tuned to one workflow, embedded in your tools.'],
            ['A.3', 'RAG & Copilots', 'Production retrieval and copilots calibrated to your data and team.'],
          ].map(([n, t, d]) => (
            <a key={n} href="/services" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ background: bg, padding: 28, height: '100%', boxSizing: 'border-box' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
                  <span style={{ fontFamily: '"Geist", sans-serif', fontSize: 22, fontWeight: 600, letterSpacing: '-0.02em' }}>{t}</span>
                  <span style={{ fontSize: 10, color: accent, letterSpacing: '.15em' }}>{n}</span>
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, lineHeight: 1.55, color: muted, margin: 0 }}>{d}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ─── AUTHORITY STRIP ─── */}
      <section style={{ padding: `clamp(48px, 10vw, 96px) ${PAD_X}`, borderTop: `1px solid ${ink}` }}>
        <div style={{ fontSize: 11, color: accent, letterSpacing: '.3em', marginBottom: 16 }}>WHY HOS AI</div>
        <h2 style={{ fontFamily: '"Geist", sans-serif', fontSize: 'clamp(32px, 6vw, 56px)', fontWeight: 600, letterSpacing: '-0.04em', margin: '0 0 56px', maxWidth: 760 }}>Senior team. Warm doors in Dubai. Model agnostic.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 1, background: rule, border: `1px solid ${rule}` }}>
          {[
            ['Senior, not staffed-out', 'Everyone on your project has shipped production AI systems before. No account managers, no bench.'],
            ['Relationships, not cold outbound', "House of Shafaq's network opens doors across Dubai - every engagement starts warm, introduced, trusted."],
            ['Model & vendor agnostic', "We don't force one stack. We curate and select whatever model or vendor is best for your use case."],
          ].map(([t, d]) => (
            <div key={t} style={{ background: bg, padding: 32 }}>
              <div style={{ fontFamily: '"Geist", sans-serif', fontSize: 20, fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 12 }}>{t}</div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, lineHeight: 1.6, color: muted, margin: 0 }}>{d}</p>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter heading="Let's build your" headingAccent="AI arm." />
    </div>
  );
};

export default HomePage;
