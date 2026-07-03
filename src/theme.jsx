import React from 'react';

// hos-shared.jsx - HOS AI branded THEME, nav/footer, partner data.
// Fork of site-shared.jsx - Scafld files are untouched and kept separately.
// Depends on: nothing (self-contained logo). Load before content files.

const THEME = {
  bg: '#ffffff',
  ink: '#0e1a2b',
  accent: '#1d4ed8',
  accentDeep: '#14329e',
  warm: '#c95f3b',
  muted: 'rgba(14,26,43,.55)',
  rule: 'rgba(14,26,43,.1)',
};

const gridBg = `repeating-linear-gradient(0deg, ${THEME.rule}, ${THEME.rule} 1px, transparent 1px, transparent 32px), repeating-linear-gradient(90deg, ${THEME.rule}, ${THEME.rule} 1px, transparent 1px, transparent 32px)`;

const CornerTicks = () => (
  <React.Fragment>
    {[0, 1, 2, 3].map(i => (
      <div key={i} style={{
        position: 'absolute',
        top: i < 2 ? 14 : 'auto', bottom: i >= 2 ? 14 : 'auto',
        left: i % 2 === 0 ? 14 : 'auto', right: i % 2 === 1 ? 14 : 'auto',
        width: 14, height: 14,
        borderLeft: i % 2 === 0 ? `2px solid ${THEME.ink}` : 'none',
        borderRight: i % 2 === 1 ? `2px solid ${THEME.ink}` : 'none',
        borderTop: i < 2 ? `2px solid ${THEME.ink}` : 'none',
        borderBottom: i >= 2 ? `2px solid ${THEME.ink}` : 'none',
      }} />
    ))}
  </React.Fragment>
);

// ─── HOS AI wordmark - same bracket-mark visual system as Scafld, re-skinned ───
const HOSLogo = ({ height = 22, onDark = false, accent = THEME.accent }) => {
  const ink = onDark ? '#fafaf7' : THEME.ink;
  const m = height * 1.0;
  const fs = height * 0.95;
  const stroke = Math.max(2, height * 0.085);
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: height * 0.3 }}>
      <svg viewBox="0 0 60 80" style={{ width: m * 0.75, height: m, flexShrink: 0 }}>
        <g fill="none" stroke={ink} strokeWidth={stroke} strokeLinecap="square">
          <path d="M30 6 L6 6 L6 74 L30 74" />
          <path d="M30 6 L54 6 L54 74 L30 74" />
          <line x1="6" y1="40" x2="54" y2="40" />
        </g>
        <circle cx="30" cy="40" r={stroke * 1.4} fill={accent} />
      </svg>
      <span style={{ fontFamily: '"Geist", sans-serif', fontWeight: 600, fontSize: fs, letterSpacing: '-0.03em', lineHeight: 1, color: ink, display: 'inline-flex', alignItems: 'baseline', gap: fs * 0.14 }}>
        HOS
        <span style={{ fontSize: fs * 0.62, fontWeight: 600, color: accent, letterSpacing: '.08em' }}>AI</span>
      </span>
    </div>
  );
};

const CONTACT = {
  address: '101, Barsha Valley, Al Barsha, Dubai, UAE',
  email: 'hello@ai.houseofshafaq.com',
  phone: '+971 4 575 7813',
  hours: 'Monday – Friday · 9am – 5pm',
};

const NAV_LINKS = [
  { key: 'home', label: 'Home', href: '/' },
  { key: 'services', label: 'Services', href: '/services' },
  { key: 'work', label: 'Work', href: '/work' },
  { key: 'about', label: 'About', href: '/about' },
];

const CONTACT_EMAIL = 'hello@ai.houseofshafaq.com';

const SiteNav = ({ active }) => (
  <React.Fragment>
  <style>{`
    .hos-client-link img { filter: grayscale(1); opacity: .7; transition: filter .15s ease, opacity .15s ease; }
    .hos-client-link span { color: ${THEME.muted}; transition: color .15s ease; }
    .hos-client-link:hover img { filter: none; opacity: 1; }
    .hos-client-link:hover span { color: ${THEME.ink}; }
  `}</style>
  <header style={{
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '20px 48px', borderBottom: `1px solid ${THEME.rule}`,
    position: 'sticky', top: 0, background: THEME.bg, zIndex: 50,
  }}>
    <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12 }}>
      <HOSLogo height={22} accent={THEME.accent} />
    </a>
    <nav style={{ display: 'flex', gap: 28, fontSize: 12, letterSpacing: '.1em', textTransform: 'uppercase' }}>
      {NAV_LINKS.map(l => (
        <a key={l.key} href={l.href} style={{
          color: l.key === active ? THEME.ink : THEME.muted,
          textDecoration: 'none', display: 'flex', alignItems: 'baseline', gap: 4,
        }}>
          {l.label}
        </a>
      ))}
    </nav>
    <a href={`mailto:${CONTACT_EMAIL}`} style={{ textDecoration: 'none' }}>
      <button style={{ padding: '8px 16px', background: THEME.ink, color: THEME.bg, border: 0, fontSize: 11, fontWeight: 600, letterSpacing: '.15em', fontFamily: 'inherit', cursor: 'pointer' }}>
        BOOK INTAKE
      </button>
    </a>
  </header>
  </React.Fragment>
);

const SiteFooter = ({ heading = "Let's build your", headingAccent = 'AI arm.' }) => (
  <section id="contact" style={{ padding: '120px 48px', borderTop: `1px solid ${THEME.ink}` }}>
    <h2 style={{ fontFamily: '"Geist", sans-serif', fontSize: 88, fontWeight: 600, letterSpacing: '-0.05em', margin: '0 0 32px', lineHeight: 1 }}>
      {heading}<br /><span style={{ color: THEME.accent }}>{headingAccent}</span>
    </h2>
    <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
      <a href={`mailto:${CONTACT_EMAIL}`} style={{ textDecoration: 'none' }}>
        <button style={{ padding: '18px 28px', background: THEME.ink, color: THEME.bg, border: 0, fontSize: 12, fontWeight: 600, letterSpacing: '.2em', fontFamily: 'inherit', cursor: 'pointer' }}>BOOK INTAKE →</button>
      </a>
      <span style={{ fontSize: 13, color: THEME.muted, fontFamily: '"Geist Mono", monospace' }}>
        or email <span style={{ color: THEME.ink, borderBottom: `1px solid ${THEME.accent}` }}>{CONTACT_EMAIL}</span>
      </span>
    </div>
    <div style={{ marginTop: 56, borderLeft: `2px solid ${THEME.accent}`, paddingLeft: 20, maxWidth: 640 }}>
      <p style={{ fontFamily: '"Geist", sans-serif', fontSize: 17, fontWeight: 500, letterSpacing: '-0.01em', lineHeight: 1.45, margin: '0 0 10px', fontStyle: 'italic' }}>
        "Every founder in my network asks me who's building their AI. Now I have an answer."
      </p>
      <div style={{ fontSize: 12, color: THEME.muted, fontFamily: 'Inter, sans-serif' }}>Saad Mohammed · Founder, House of Shafaq</div>
    </div>
    <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24, paddingTop: 32, borderTop: `1px solid ${THEME.rule}` }}>
      {[['ADDRESS', CONTACT.address], ['EMAIL', CONTACT.email], ['PHONE', CONTACT.phone], ['HOURS', CONTACT.hours]].map(([l, v]) => (
        <div key={l}>
          <div style={{ fontSize: 10, color: THEME.accent, letterSpacing: '.15em', marginBottom: 6, fontFamily: '"Geist Mono", monospace' }}>{l}</div>
          <div style={{ fontSize: 13, color: THEME.ink, fontFamily: 'Inter, sans-serif', lineHeight: 1.4 }}>{v}</div>
        </div>
      ))}
    </div>
    <footer style={{ marginTop: 40, paddingTop: 24, borderTop: `1px solid ${THEME.rule}`, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 16 }}>
      <div style={{ display: 'flex', gap: 32, alignItems: 'baseline', flexWrap: 'wrap' }}>
        <HOSLogo height={18} accent={THEME.accent} />
        <span style={{ fontSize: 11, color: THEME.muted, letterSpacing: '.1em', fontFamily: '"Geist Mono", monospace' }}>HOS AI · THE AI ARM OF HOUSE OF SHAFAQ · OPERATED BY DEVSTRUM LLP OUTSIDE THE UAE · © 2026 · AI.HOUSEOFSHAFAQ.COM</span>
      </div>
      <nav style={{ display: 'flex', gap: 20, fontSize: 11, color: THEME.muted, letterSpacing: '.1em', fontFamily: '"Geist Mono", monospace' }}>
        {NAV_LINKS.map(l => <a key={l.key} href={l.href} style={{ color: THEME.muted, textDecoration: 'none' }}>{l.label.toUpperCase()}</a>)}
      </nav>
    </footer>
  </section>
);

const favSrc = (domain) => `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
const initials = (name) => name.split(' ').map(w => w[0]).join('').slice(0, 2);

const FaviconOrInitials = ({ name, domain, size = 20 }) => {
  const [failed, setFailed] = React.useState(!domain);
  if (failed) {
    return (
      <span style={{ width: size, height: size, borderRadius: 4, background: THEME.rule, color: THEME.muted, fontSize: size * 0.45, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '"Geist", sans-serif', flexShrink: 0 }}>
        {initials(name)}
      </span>
    );
  }
  return (
    <img
      src={favSrc(domain)}
      alt={name}
      width={size} height={size}
      onError={() => setFailed(true)}
      style={{ borderRadius: 4, display: 'block', flexShrink: 0 }}
    />
  );
};

// ─── Partner / integration data ───
const INTEGRATIONS = [
  { name: 'Ringg', domain: 'ringg.ai' },
  { name: 'Meta', domain: 'about.meta.com' },
  { name: 'Tabatalk', domain: 'tabatalk.com' },
  { name: 'Vapi', domain: 'vapi.ai' },
  { name: 'Retell', domain: 'retellai.com' },
  { name: 'Zoho', domain: 'zoho.com' },
  { name: 'HubSpot', domain: 'hubspot.com' },
  { name: 'Salesforce', domain: 'salesforce.com' },
  { name: 'Slack', domain: 'slack.com' },
  { name: 'Notion', domain: 'notion.so' },
];

const IntegrationsBanner = ({ label = 'INTEGRATES WITH THE TOOLS YOU ALREADY RUN' }) => (
  <div style={{ borderTop: `1px solid ${THEME.rule}`, borderBottom: `1px solid ${THEME.rule}`, padding: '22px 48px', display: 'flex', alignItems: 'center', gap: 40, flexWrap: 'wrap' }}>
    <span style={{ fontSize: 10, color: THEME.muted, letterSpacing: '.2em', fontFamily: '"Geist Mono", monospace', whiteSpace: 'nowrap' }}>{label}</span>
    <div style={{ display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
      {INTEGRATIONS.map((it) => (
        <div key={it.name} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <FaviconOrInitials name={it.name} domain={it.domain} size={20} />
          <span style={{ fontFamily: '"Geist", sans-serif', fontWeight: 600, fontSize: 15, letterSpacing: '-0.01em', color: THEME.ink, opacity: .85 }}>{it.name}</span>
        </div>
      ))}
    </div>
  </div>
);

// HOS AI's own clients
const TRUSTED_BY = [
  { name: 'SpotDraft', domain: 'spotdraft.com', href: 'https://spotdraft.com' },
  { name: 'Amara Hospital', domain: 'amarahospital.com', href: 'https://amarahospital.com' },
  { name: 'Peak Performance', domain: 'peakperformancesr.com', href: 'https://peakperformancesr.com' },
  { name: 'Active Audiology', domain: 'activeaudiology.com.au', href: 'https://activeaudiology.com.au' },
  { name: 'Prax Physio', domain: 'praxphysio.uk', href: 'https://praxphysio.uk' },
  { name: 'Saad Sells', domain: null, href: 'https://www.instagram.com/saadsells' },
];

const TrustedByBar = ({ label = 'CLIENTS ACROSS UK · UAE · INDIA · AUSTRALIA' }) => (
  <div style={{ padding: '28px 48px', display: 'flex', alignItems: 'center', gap: 40, flexWrap: 'wrap' }}>
    <span style={{ fontSize: 10, color: THEME.muted, letterSpacing: '.2em', fontFamily: '"Geist Mono", monospace', whiteSpace: 'nowrap' }}>{label}</span>
    <div style={{ display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
      {TRUSTED_BY.map((c) => (
        <a key={c.name} href={c.href} target="_blank" rel="noopener" className="hos-client-link" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
          <FaviconOrInitials name={c.name} domain={c.domain} size={18} />
          <span style={{ fontFamily: '"Geist", sans-serif', fontWeight: 500, fontSize: 14, letterSpacing: '-0.01em' }}>{c.name}</span>
        </a>
      ))}
    </div>
  </div>
);

// Ringg's success stories - shown once, inside the Partners strip
const RINGG_SUCCESS = [
  { name: 'noon', domain: 'noon.com', href: 'https://www.noon.com' },
  { name: 'Tabby', domain: 'tabby.ai', href: 'https://tabby.ai' },
  { name: 'Tamara', domain: 'tamara.co', href: 'https://tamara.co' },
];

// Preferred-partner callout (Ringg + Meta) - use ONCE per page.
const PartnersStrip = () => {
  const { ink, accent, muted, rule, bg } = THEME;
  return (
    <section style={{ padding: '56px 48px', borderTop: `1px solid ${ink}`, borderBottom: `1px solid ${rule}` }}>
      <div style={{ fontSize: 11, color: accent, letterSpacing: '.3em', marginBottom: 24 }}>PREFERRED PARTNERS</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
            <FaviconOrInitials name="Ringg" domain="ringg.ai" size={30} />
            <span style={{ fontFamily: '"Geist", sans-serif', fontSize: 28, fontWeight: 600, letterSpacing: '-0.03em' }}>Ringg</span>
            <span style={{ fontSize: 9, color: accent, letterSpacing: '.1em', border: `1px solid ${accent}`, borderRadius: 3, padding: '2px 6px', fontFamily: '"Geist Mono", monospace' }}>VOICE AI · UAE</span>
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, lineHeight: 1.6, color: muted, margin: '0 0 16px', maxWidth: 460 }}>
            Our preferred voice AI infrastructure. We're model & vendor agnostic - Ringg is what we curate and select for most conversational deployments in the UAE.
          </p>
          <div style={{ fontSize: 10, color: muted, letterSpacing: '.15em', marginBottom: 10 }}>SUCCESS STORIES · BUILT ON RINGG</div>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            {RINGG_SUCCESS.map(c => (
              <a key={c.name} href={c.href} target="_blank" rel="noopener" className="hos-client-link" style={{ display: 'flex', alignItems: 'center', gap: 6, textDecoration: 'none' }}>
                <FaviconOrInitials name={c.name} domain={c.domain} size={16} />
                <span style={{ fontFamily: '"Geist", sans-serif', fontSize: 13 }}>{c.name}</span>
              </a>
            ))}
          </div>
        </div>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
            <FaviconOrInitials name="Meta" domain="about.meta.com" size={30} />
            <span style={{ fontFamily: '"Geist", sans-serif', fontSize: 28, fontWeight: 600, letterSpacing: '-0.03em' }}>Meta</span>
            <span style={{ fontSize: 9, color: accent, letterSpacing: '.1em', border: `1px solid ${accent}`, borderRadius: 3, padding: '2px 6px', fontFamily: '"Geist Mono", monospace' }}>WHATSAPP BSP</span>
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, lineHeight: 1.6, color: muted, margin: 0, maxWidth: 460 }}>
            Preferred partnership for WhatsApp Business Solution Provider support - the backbone of our WhatsApp agent deployments.
          </p>
        </div>
      </div>
    </section>
  );
};

export { THEME, gridBg, CornerTicks, HOSLogo, SiteNav, SiteFooter, NAV_LINKS, CONTACT, CONTACT_EMAIL, IntegrationsBanner, TrustedByBar, PartnersStrip, FaviconOrInitials, TRUSTED_BY, RINGG_SUCCESS, INTEGRATIONS };
