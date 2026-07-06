import React from 'react';
import { THEME, gridBg, CornerTicks, SiteNav, SiteFooter, FaviconOrInitials, PAD_X } from './theme.jsx';

// hos-case-study-content.jsx - HOS AI Work page: featured AI case study + project index
// (real House of Shafaq brand/production projects, AI systems shipped, and Ringg partner work)

const CASE = {
  tag: 'FEATURED CASE STUDY · LOGISTICS · MIDMARKET · 6 WEEKS',
  headline: ['We cut ops labor cost ', 'by ', ['64%', true], ' in one quarter.'],
  summary: 'A regional 3PL had 14 analysts manually triaging exception tickets - refunds, misroutes, delays. We built a domain-tuned agent that pre-classifies, drafts responses, and routes. Analysts now review, not write.',
  metrics: [['64%', 'labor cost ↓'], ['14→6', 'analyst hours/day'], ['$310K', 'annual savings']],
  problem: 'Exception volume had grown 3x in two years without headcount. Analysts spent 80% of their day on repetitive triage - reading tickets, checking systems of record, drafting the same handful of response types.',
  approach: 'A two-week audit showed 70% of tickets fell into 6 repeatable categories. We scoped a single agent: classify, draft, route - with a human review step for anything below a confidence threshold.',
  build: 'Weeks 3–5: built the classifier on 18 months of historical tickets, wired it into their existing helpdesk via API, and ran it in shadow mode against live traffic before going active.',
  result: 'Live since week 6. Auto-resolution rose from 0% to 71%, average resolution time dropped from 13.5 minutes to 4.2, and the team reallocated 3 analysts to higher-value escalation work instead of backfilling headcount.',
  quote: { text: 'We stopped hiring for this role. The team that\'s left does better work and actually likes their job again.', name: 'VP of Operations', context: 'Regional 3PL · Enterprise client' },
};

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
  const { bg, ink, accent, accentDeep, warm, muted, rule } = THEME;
  return (
    <div style={{ background: bg, color: ink, fontFamily: '"Geist Mono", monospace', minHeight: '100%' }} data-screen-label="Work">
      <SiteNav active="work" />

      <section style={{ position: 'relative', padding: `clamp(48px, 10vw, 72px) ${PAD_X} clamp(32px, 8vw, 48px)`, backgroundImage: gridBg }}>
        <CornerTicks />
        <div style={{ fontSize: 11, color: muted, letterSpacing: '.2em', marginBottom: 16 }}>{CASE.tag}</div>
        <h1 style={{ fontFamily: '"Geist", sans-serif', fontSize: 'clamp(36px, 8vw, 72px)', fontWeight: 600, letterSpacing: '-0.04em', margin: '0 0 28px', lineHeight: 1.05, maxWidth: 820 }}>
          {CASE.headline.map((part, i) => Array.isArray(part) ? <span key={i} style={{ color: accent }}>{part[0]}</span> : <React.Fragment key={i}>{part}</React.Fragment>)}
        </h1>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 18, lineHeight: 1.55, color: muted, maxWidth: 680, marginBottom: 40 }}>{CASE.summary}</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 24, maxWidth: 560, paddingTop: 32, borderTop: `1px solid ${rule}` }}>
          {CASE.metrics.map(([n, l]) => (
            <div key={l}>
              <div style={{ fontFamily: '"Geist", sans-serif', fontSize: 'clamp(24px, 5vw, 34px)', fontWeight: 600, letterSpacing: '-0.03em', color: ink }}>{n}</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: muted, marginTop: 4, letterSpacing: '.05em' }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Narrative */}
      <section style={{ padding: `clamp(48px, 10vw, 96px) ${PAD_X}`, borderTop: `1px solid ${ink}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 64 }}>
          <div>
            {[['PROBLEM', CASE.problem], ['APPROACH', CASE.approach], ['BUILD', CASE.build]].map(([label, text]) => (
              <div key={label} style={{ marginBottom: 40 }}>
                <div style={{ fontSize: 11, color: accent, letterSpacing: '.2em', marginBottom: 12 }}>{label}</div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, lineHeight: 1.65, color: 'rgba(14,26,43,.8)', margin: 0 }}>{text}</p>
              </div>
            ))}

            {/* Saad credit */}
            <div style={{ borderLeft: `2px solid ${accent}`, paddingLeft: 20, marginTop: 8 }}>
              <p style={{ fontFamily: '"Geist", sans-serif', fontSize: 17, fontWeight: 500, letterSpacing: '-0.01em', lineHeight: 1.45, margin: '0 0 10px', fontStyle: 'italic' }}>
                "This is exactly the kind of work I want HOS AI known for - measurable, fast, no fluff."
              </p>
              <div style={{ fontSize: 12, color: muted, fontFamily: 'Inter, sans-serif' }}>Saad Mohammed · Founder, House of Shafaq</div>
            </div>
          </div>

          <div>
            <div style={{ fontSize: 11, color: accent, letterSpacing: '.2em', marginBottom: 12 }}>RESULT</div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, lineHeight: 1.65, color: 'rgba(14,26,43,.8)', margin: '0 0 32px' }}>{CASE.result}</p>

            {/* Dashboard visual */}
            <div style={{ border: `2px solid ${ink}`, background: '#fafbfd', padding: 24, marginBottom: 32 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: muted, letterSpacing: '.15em', marginBottom: 18 }}>
                <span>EXCEPTIONS · LAST 30D</span><span>▾ ALL ROUTES</span>
              </div>
              <svg viewBox="0 0 480 180" style={{ width: '100%' }}>
                {[120, 132, 108, 145, 138, 88, 64, 58, 51, 46, 42, 39, 41, 38, 35].map((v, i) => {
                  const recent = i >= 6;
                  return <rect key={i} x={i * 30 + 10} y={170 - v} width="22" height={v} fill={recent ? accent : 'rgba(14,26,43,.2)'} />;
                })}
                <line x1="0" y1="170" x2="480" y2="170" stroke={ink} strokeWidth="0.8" />
                <line x1="190" y1="20" x2="190" y2="170" stroke={warm} strokeWidth="1" strokeDasharray="3 3" />
                <text x="194" y="32" fontSize="9" fontFamily="Geist Mono" fill={warm} letterSpacing="1">HOS AI SHIPPED →</text>
              </svg>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginTop: 24, paddingTop: 20, borderTop: `1px solid ${rule}` }}>
                {[['Auto-resolved', '71%', '+18pp'], ['Avg. resolution', '4.2m', '-9.3m'], ['CSAT', '4.8', '+0.4']].map(([label, value, trend]) => (
                  <div key={label}>
                    <div style={{ fontSize: 9, color: muted, letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 4, fontFamily: 'Inter, sans-serif' }}>{label}</div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                      <span style={{ fontFamily: '"Geist", sans-serif', fontSize: 20, fontWeight: 600, letterSpacing: '-0.02em' }}>{value}</span>
                      <span style={{ fontFamily: '"Geist Mono", monospace', fontSize: 10, color: accentDeep }}>{trend}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Client quote */}
            <div style={{ borderLeft: `2px solid ${accent}`, paddingLeft: 20 }}>
              <p style={{ fontFamily: '"Geist", sans-serif', fontSize: 20, fontWeight: 500, letterSpacing: '-0.01em', lineHeight: 1.4, margin: '0 0 12px', fontStyle: 'italic' }}>
                "{CASE.quote.text}"
              </p>
              <div style={{ fontSize: 12, color: muted, fontFamily: 'Inter, sans-serif' }}>{CASE.quote.name} · {CASE.quote.context}</div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: `0 ${PAD_X} clamp(48px, 10vw, 96px)` }}>
        <a href="/#work" style={{ fontSize: 12, color: muted, letterSpacing: '.15em', textDecoration: 'none', borderBottom: `1px solid ${rule}`, paddingBottom: 2 }}>← BACK TO ALL WORK</a>
      </section>

      {/* AI systems shipped */}
      <section style={{ padding: `clamp(48px, 10vw, 96px) ${PAD_X}`, borderTop: `1px solid ${ink}` }}>
        <div style={{ fontSize: 11, color: accent, letterSpacing: '.3em', marginBottom: 16 }}>AI SYSTEMS SHIPPED</div>
        <h2 style={{ fontFamily: '"Geist", sans-serif', fontSize: 'clamp(28px, 6vw, 44px)', fontWeight: 600, letterSpacing: '-0.04em', margin: '0 0 48px' }}>What we build, to name a few.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 1, background: rule, border: `1px solid ${rule}` }}>
          {AI_PROJECTS.map(([t, d, o]) => (
            <div key={t} style={{ background: bg, padding: 24 }}>
              <div style={{ fontFamily: '"Geist", sans-serif', fontSize: 18, fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 10 }}>{t}</div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, lineHeight: 1.6, color: muted, margin: '0 0 14px' }}>{d}</p>
              <div style={{ fontSize: 11, color: accent, fontFamily: '"Geist Mono", monospace' }}>{o}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Ringg-powered deployments */}
      <section style={{ padding: `0 ${PAD_X} clamp(48px, 10vw, 96px)` }}>
        <div style={{ fontSize: 11, color: accent, letterSpacing: '.3em', marginBottom: 16 }}>VOICE & WHATSAPP · VIA RINGG</div>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: muted, maxWidth: 560, margin: '0 0 24px' }}>Our preferred voice AI partner Ringg's success stories in the region include:</p>
        <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
          {RINGG_PROJECTS.map(c => (
            <div key={c.name} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <FaviconOrInitials name={c.name} domain={c.domain} size={22} />
              <span style={{ fontFamily: '"Geist", sans-serif', fontSize: 16, color: ink }}>{c.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* House of Shafaq brand & production projects */}
      <section style={{ padding: `0 ${PAD_X} clamp(48px, 10vw, 96px)` }}>
        <div style={{ fontSize: 11, color: accent, letterSpacing: '.3em', marginBottom: 16 }}>BRAND & PRODUCTION WORK · VIA HOUSE OF SHAFAQ</div>
        <h2 style={{ fontFamily: '"Geist", sans-serif', fontSize: 'clamp(24px, 5vw, 36px)', fontWeight: 600, letterSpacing: '-0.03em', margin: '0 0 12px' }}>The network's own track record.</h2>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: muted, maxWidth: 620, margin: '0 0 40px' }}>
          HOS AI is backed by House of Shafaq's decade of brand and production work across the region - a sample below, more at{' '}
          <a href="https://www.houseofshafaq.com/projects" target="_blank" rel="noopener" style={{ color: ink, borderBottom: `1px solid ${accent}`, textDecoration: 'none' }}>houseofshafaq.com/projects</a>.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 1, background: rule, border: `1px solid ${rule}` }}>
          {HOS_PROJECTS.map(([t, cat, href]) => (
            <a key={t} href={href} target="_blank" rel="noopener" className="hos-card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ background: bg, padding: 22, height: '100%', boxSizing: 'border-box' }}>
                <div style={{ fontSize: 9, color: muted, letterSpacing: '.15em', marginBottom: 10 }}>{cat.toUpperCase()}</div>
                <div style={{ fontFamily: '"Geist", sans-serif', fontSize: 15, fontWeight: 600, letterSpacing: '-0.01em', lineHeight: 1.3 }}>{t}</div>
                <div style={{ fontSize: 11, color: accent, marginTop: 10 }}>VIEW PROJECT →</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <SiteFooter heading="Want a result" headingAccent="like this one?" />
    </div>
  );
};

export default CaseStudyPage;
