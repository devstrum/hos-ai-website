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
  muted: 'rgba(14,26,43,.7)',
  rule: 'rgba(14,26,43,.1)',
};

const gridBg = `repeating-linear-gradient(0deg, ${THEME.rule}, ${THEME.rule} 1px, transparent 1px, transparent 32px), repeating-linear-gradient(90deg, ${THEME.rule}, ${THEME.rule} 1px, transparent 1px, transparent 32px)`;

// Shared responsive gutter - fluid between phone and desktop.
const PAD_X = 'clamp(20px, 6vw, 48px)';

// Tracks a single breakpoint via matchMedia - used to switch layouts
// (nav, table-like grids) that can't be solved with pure CSS (clamp/auto-fit).
const useIsMobile = (breakpoint = 760) => {
  const query = `(max-width: ${breakpoint}px)`;
  const [isMobile, setIsMobile] = React.useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false
  );
  React.useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = (e) => setIsMobile(e.matches);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, [query]);
  return isMobile;
};

const usePrefersReducedMotion = () => {
  const query = '(prefers-reduced-motion: reduce)';
  const [reduced, setReduced] = React.useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false
  );
  React.useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = (e) => setReduced(e.matches);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);
  return reduced;
};

// Fades + lifts an element into place the first time it scrolls into view.
// Pass `as` to control the rendered tag (e.g. "section") so it doesn't add
// an extra wrapper div around layout-sensitive elements.
const Reveal = ({ children, delay = 0, y = 16, as: Tag = 'div', style, ...rest }) => {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  const reducedMotion = usePrefersReducedMotion();

  React.useEffect(() => {
    if (reducedMotion) { setVisible(true); return; }
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    observer.observe(node);
    return () => observer.disconnect();
  }, [reducedMotion]);

  return (
    <Tag
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : `translateY(${y}px)`,
        transition: `opacity .6s ease ${delay}s, transform .6s ease ${delay}s`,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

// Counts up to a value like "3.2×", "$1.4M+", or "12+" once it scrolls into
// view - only the numeric portion animates, prefix/suffix stay put.
const CountUp = ({ value, duration = 1200 }) => {
  const ref = React.useRef(null);
  const [started, setStarted] = React.useState(false);
  const [display, setDisplay] = React.useState(value);
  const reducedMotion = usePrefersReducedMotion();
  // Memoized on `value` (not recomputed every render) - otherwise the fresh
  // array from .match() on each render would retrigger the effects below
  // forever, restarting the animation before it ever finishes.
  const match = React.useMemo(() => String(value).match(/^([^0-9.]*)([0-9]+(?:\.[0-9]+)?)(.*)$/), [value]);

  React.useEffect(() => {
    if (reducedMotion || !match) return;
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setStarted(true);
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [reducedMotion, match]);

  React.useEffect(() => {
    if (!started || !match) return;
    const [, prefix, numStr, suffix] = match;
    const target = parseFloat(numStr);
    const decimals = (numStr.split('.')[1] || '').length;
    const startTime = performance.now();
    let frame;
    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(`${prefix}${(target * eased).toFixed(decimals)}${suffix}`);
      if (progress < 1) frame = requestAnimationFrame(tick);
      else setDisplay(value);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, match, duration, value]);

  return <span ref={ref}>{match ? display : value}</span>;
};

const SITE_URL = 'https://ai.houseofshafaq.com';

// Sets per-page title/meta/canonical/OG tags and JSON-LD structured data.
// This runs client-side (the site is a Vite SPA) - Google and Bing execute
// JS and pick this up, but crawlers that don't render JS (some AI answer
// engines) only see the static defaults baked into index.html.
const SEO = ({ title, description, path = '/', jsonLd }) => {
  React.useEffect(() => {
    const fullTitle = title ? `${title} · HOS AI` : 'HOS AI · The AI arm of House of Shafaq';
    document.title = fullTitle;

    const upsertMeta = (attr, key, content) => {
      let tag = document.head.querySelector(`meta[${attr}="${key}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, key);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    if (description) {
      upsertMeta('name', 'description', description);
      upsertMeta('property', 'og:description', description);
      upsertMeta('name', 'twitter:description', description);
    }
    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('name', 'twitter:title', fullTitle);
    upsertMeta('property', 'og:url', `${SITE_URL}${path}`);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${SITE_URL}${path}`);

    let script = document.getElementById('seo-jsonld');
    if (jsonLd) {
      if (!script) {
        script = document.createElement('script');
        script.id = 'seo-jsonld';
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    } else if (script) {
      script.remove();
    }
  }, [title, description, path, jsonLd]);

  return null;
};

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

// ─── HOS AI wordmark ───
const HOSLogo = ({ height = 22, onDark = false, accent = THEME.accent }) => {
  const ink = onDark ? '#fafaf7' : THEME.ink;
  const fs = height * 0.95;
  return (
    <span style={{ fontFamily: '"Geist", sans-serif', fontWeight: 600, fontSize: fs, letterSpacing: '-0.03em', lineHeight: 1, color: ink, display: 'inline-flex', alignItems: 'baseline', gap: fs * 0.14 }}>
      HOS
      <span style={{ fontSize: fs * 0.62, fontWeight: 600, color: accent, letterSpacing: '.08em' }}>AI</span>
    </span>
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
const BOOKING_URL = 'https://calendar.app.google/oUsGs4GDQw5cNn4E8';

const SiteNav = ({ active }) => {
  const isMobile = useIsMobile();
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => { if (!isMobile) setOpen(false); }, [isMobile]);

  return (
  <React.Fragment>
  <style>{`
    .hos-client-link img { filter: grayscale(1); opacity: .7; transition: filter .15s ease, opacity .15s ease; }
    .hos-client-link span { color: ${THEME.muted}; transition: color .15s ease; }
    .hos-client-link:hover img { filter: none; opacity: 1; }
    .hos-client-link:hover span { color: ${THEME.ink}; }
    .hos-success-link span { transition: color .15s ease, border-color .15s ease; }
    .hos-success-link:hover span { color: ${THEME.ink}; border-color: ${THEME.accent}; }
    @keyframes hos-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
    .hos-marquee-track { animation: hos-marquee 30s linear infinite; }
    .hos-marquee-track:hover { animation-play-state: paused; }
    .hos-card-link { display: block; transition: transform .15s ease, box-shadow .15s ease; }
    .hos-card-link:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(14,26,43,.1); position: relative; z-index: 1; }
    button { transition: transform .15s ease, box-shadow .15s ease, opacity .15s ease; }
    button:hover { transform: translateY(-1px); }
    button:active { transform: translateY(0); }
    a { transition: color .15s ease, border-color .15s ease, opacity .15s ease; }
    @media (prefers-reduced-motion: reduce) {
      * { animation-duration: .001ms !important; animation-iteration-count: 1 !important; transition-duration: .001ms !important; }
    }
  `}</style>
  <header style={{
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: `16px ${PAD_X}`, borderBottom: `1px solid ${THEME.rule}`,
    position: 'sticky', top: 0, background: THEME.bg, zIndex: 50,
  }}>
    <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
      <HOSLogo height={22} accent={THEME.accent} />
    </a>

    {!isMobile && (
      <React.Fragment>
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
        <a href={BOOKING_URL} target="_blank" rel="noopener" style={{ textDecoration: 'none' }}>
          <button style={{ padding: '8px 16px', background: THEME.ink, color: THEME.bg, border: 0, fontSize: 11, fontWeight: 600, letterSpacing: '.15em', fontFamily: 'inherit', cursor: 'pointer', whiteSpace: 'nowrap' }}>
            BOOK INTAKE
          </button>
        </a>
      </React.Fragment>
    )}

    {isMobile && (
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
        <a href={BOOKING_URL} target="_blank" rel="noopener" style={{ textDecoration: 'none', flexShrink: 0 }}>
          <button style={{ padding: '8px 12px', background: THEME.ink, color: THEME.bg, border: 0, fontSize: 10, fontWeight: 600, letterSpacing: '.1em', fontFamily: 'inherit', cursor: 'pointer', whiteSpace: 'nowrap' }}>
            BOOK INTAKE
          </button>
        </a>
        <button
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          style={{ background: 'transparent', border: 0, padding: 8, cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 5, flexShrink: 0 }}
        >
          <span style={{ width: 22, height: 2, background: THEME.ink, transition: 'transform .15s ease', transform: open ? 'translateY(7px) rotate(45deg)' : 'none' }} />
          <span style={{ width: 22, height: 2, background: THEME.ink, opacity: open ? 0 : 1, transition: 'opacity .15s ease' }} />
          <span style={{ width: 22, height: 2, background: THEME.ink, transition: 'transform .15s ease', transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
        </button>
      </div>
    )}
  </header>

  {isMobile && open && (
    <nav style={{
      display: 'flex', flexDirection: 'column', gap: 4,
      padding: `12px ${PAD_X} 24px`, borderBottom: `1px solid ${THEME.rule}`,
      position: 'sticky', top: 57, background: THEME.bg, zIndex: 49,
    }}>
      {NAV_LINKS.map(l => (
        <a key={l.key} href={l.href} onClick={() => setOpen(false)} style={{
          color: l.key === active ? THEME.ink : THEME.muted,
          textDecoration: 'none', fontSize: 15, letterSpacing: '.05em', textTransform: 'uppercase',
          padding: '14px 0', borderBottom: `1px solid ${THEME.rule}`,
        }}>
          {l.label}
        </a>
      ))}
      <a href={BOOKING_URL} target="_blank" rel="noopener" style={{ textDecoration: 'none', marginTop: 16 }}>
        <button style={{ width: '100%', padding: '14px 16px', background: THEME.ink, color: THEME.bg, border: 0, fontSize: 12, fontWeight: 600, letterSpacing: '.15em', fontFamily: 'inherit', cursor: 'pointer' }}>
          BOOK INTAKE
        </button>
      </a>
    </nav>
  )}
  </React.Fragment>
  );
};

const SiteFooter = ({ heading = "Let's build your", headingAccent = 'AI arm.' }) => {
  return (
  <section id="contact" style={{ padding: `clamp(56px, 14vw, 120px) ${PAD_X}`, borderTop: `1px solid ${THEME.ink}`, textAlign: 'center' }}>
    <h2 style={{ fontFamily: '"Geist", sans-serif', fontSize: 'clamp(38px, 9vw, 88px)', fontWeight: 600, letterSpacing: '-0.05em', margin: '0 0 32px', lineHeight: 1 }}>
      {heading}<br /><span style={{ color: THEME.accent }}>{headingAccent}</span>
    </h2>
    <div style={{ display: 'flex', gap: 16, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
      <a href={BOOKING_URL} target="_blank" rel="noopener" style={{ textDecoration: 'none' }}>
        <button style={{ padding: '18px 28px', background: THEME.ink, color: THEME.bg, border: 0, fontSize: 12, fontWeight: 600, letterSpacing: '.2em', fontFamily: 'inherit', cursor: 'pointer' }}>BOOK INTAKE →</button>
      </a>
      <span style={{ fontSize: 13, color: THEME.muted, fontFamily: '"Geist Mono", monospace' }}>
        or email <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: THEME.ink, borderBottom: `1px solid ${THEME.accent}`, textDecoration: 'none' }}>{CONTACT_EMAIL}</a>
      </span>
    </div>
    <div style={{ marginTop: 56, maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>
      <span style={{ display: 'inline-block', width: 24, height: 2, background: THEME.accent, marginBottom: 16 }} />
      <p style={{ fontFamily: '"Geist", sans-serif', fontSize: 17, fontWeight: 500, letterSpacing: '-0.01em', lineHeight: 1.45, margin: '0 0 10px', fontStyle: 'italic' }}>
        "Every founder in my network asks me who's building their AI. Now I have an answer."
      </p>
      <div style={{ fontSize: 12, color: THEME.muted, fontFamily: 'Inter, sans-serif' }}>Saad Mohammed · Founder, House of Shafaq</div>
    </div>
    <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 24, paddingTop: 32, borderTop: `1px solid ${THEME.rule}` }}>
      {[['ADDRESS', CONTACT.address], ['EMAIL', CONTACT.email], ['PHONE', CONTACT.phone], ['HOURS', CONTACT.hours]].map(([l, v]) => (
        <div key={l}>
          <div style={{ fontSize: 10, color: THEME.accent, letterSpacing: '.15em', marginBottom: 6, fontFamily: '"Geist Mono", monospace' }}>{l}</div>
          <div style={{ fontSize: 13, color: THEME.ink, fontFamily: 'Inter, sans-serif', lineHeight: 1.4 }}>{v}</div>
        </div>
      ))}
    </div>
    <footer style={{ marginTop: 40, paddingTop: 24, borderTop: `1px solid ${THEME.rule}`, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
      <div style={{ display: 'flex', gap: 32, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
        <HOSLogo height={18} accent={THEME.accent} />
        <span style={{ fontSize: 11, color: THEME.muted, letterSpacing: '.1em', fontFamily: '"Geist Mono", monospace' }}>HOS AI · THE AI ARM OF HOUSE OF SHAFAQ · OPERATED BY DEVSTRUM LLP OUTSIDE THE UAE · © 2026 · AI.HOUSEOFSHAFAQ.COM</span>
      </div>
      <nav style={{ display: 'flex', gap: 20, fontSize: 11, color: THEME.muted, letterSpacing: '.1em', fontFamily: '"Geist Mono", monospace', justifyContent: 'center', flexWrap: 'wrap' }}>
        {NAV_LINKS.map(l => <a key={l.key} href={l.href} style={{ color: THEME.muted, textDecoration: 'none' }}>{l.label.toUpperCase()}</a>)}
      </nav>
    </footer>
  </section>
  );
};

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

const IntegrationsBanner = ({ label = 'INTEGRATES WITH THE TOOLS YOU ALREADY RUN' }) => {
  return (
  <div style={{ borderTop: `1px solid ${THEME.rule}`, borderBottom: `1px solid ${THEME.rule}`, padding: `18px ${PAD_X}`, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, textAlign: 'center' }}>
    <span style={{ fontSize: 10, color: THEME.muted, letterSpacing: '.2em', fontFamily: '"Geist Mono", monospace' }}>{label}</span>
    <div style={{
      overflow: 'hidden', width: '100%', minWidth: 0,
      maskImage: 'linear-gradient(90deg, transparent, black 24px, black calc(100% - 24px), transparent)',
      WebkitMaskImage: 'linear-gradient(90deg, transparent, black 24px, black calc(100% - 24px), transparent)',
    }}>
      <div className="hos-marquee-track" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 32, width: 'max-content', margin: '0 auto' }}>
        {[...INTEGRATIONS, ...INTEGRATIONS].map((it, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
            <FaviconOrInitials name={it.name} domain={it.domain} size={20} />
            <span style={{ fontFamily: '"Geist", sans-serif', fontWeight: 600, fontSize: 15, letterSpacing: '-0.01em', color: THEME.ink, opacity: .85, whiteSpace: 'nowrap' }}>{it.name}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

// HOS AI's own clients
const TRUSTED_BY = [
  { name: 'SpotDraft', domain: 'spotdraft.com', href: 'https://spotdraft.com' },
  { name: 'Amara Hospital', domain: 'amarahospital.com', href: 'https://amarahospital.com' },
  { name: 'Peak Performance', domain: 'peakperformancesr.com', href: 'https://peakperformancesr.com' },
  { name: 'Active Audiology', domain: 'activeaudiology.com.au', href: 'https://activeaudiology.com.au' },
  { name: 'Prax Physio', domain: 'praxphysio.uk', href: 'https://praxphysio.uk' },
  { name: 'Saad Sells', domain: null, href: 'https://www.instagram.com/saadsells' },
];

const TrustedByBar = ({ label = 'CLIENTS ACROSS UK · UAE · INDIA · AUSTRALIA' }) => {
  const isMobile = useIsMobile();
  return (
  <div style={{ padding: `20px ${PAD_X}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: isMobile ? 14 : 16, textAlign: 'center' }}>
    <span style={{ fontSize: 10, color: THEME.muted, letterSpacing: '.2em', fontFamily: '"Geist Mono", monospace' }}>{label}</span>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: isMobile ? 20 : 32, flexWrap: 'wrap' }}>
      {TRUSTED_BY.map((c) => (
        <a key={c.name} href={c.href} target="_blank" rel="noopener" className="hos-client-link" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
          <FaviconOrInitials name={c.name} domain={c.domain} size={18} />
          <span style={{ fontFamily: '"Geist", sans-serif', fontWeight: 500, fontSize: 14, letterSpacing: '-0.01em' }}>{c.name}</span>
        </a>
      ))}
    </div>
  </div>
  );
};

// Preferred-partner callout (Ringg + Meta) - use ONCE per page.
const PartnersStrip = () => {
  const { ink, accent, muted, rule, bg } = THEME;
  return (
    <section style={{ padding: `40px ${PAD_X}`, borderTop: `1px solid ${ink}`, borderBottom: `1px solid ${rule}`, textAlign: 'center' }}>
      <div style={{ fontSize: 11, color: accent, letterSpacing: '.3em', marginBottom: 24 }}>PREFERRED PARTNERS</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginBottom: 14, flexWrap: 'wrap' }}>
            <FaviconOrInitials name="Ringg" domain="ringg.ai" size={30} />
            <span style={{ fontFamily: '"Geist", sans-serif', fontSize: 'clamp(22px, 4vw, 28px)', fontWeight: 600, letterSpacing: '-0.03em' }}>Ringg</span>
            <span style={{ fontSize: 9, color: accent, letterSpacing: '.1em', border: `1px solid ${accent}`, borderRadius: 3, padding: '2px 6px', fontFamily: '"Geist Mono", monospace' }}>VOICE AI · UAE</span>
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, lineHeight: 1.6, color: muted, margin: '0 auto', maxWidth: 460 }}>
            Our preferred voice AI infrastructure. We're model & vendor agnostic - Ringg is what we curate and select for most conversational deployments in the UAE.
          </p>
        </div>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginBottom: 14, flexWrap: 'wrap' }}>
            <FaviconOrInitials name="Meta" domain="about.meta.com" size={30} />
            <span style={{ fontFamily: '"Geist", sans-serif', fontSize: 'clamp(22px, 4vw, 28px)', fontWeight: 600, letterSpacing: '-0.03em' }}>Meta</span>
            <span style={{ fontSize: 9, color: accent, letterSpacing: '.1em', border: `1px solid ${accent}`, borderRadius: 3, padding: '2px 6px', fontFamily: '"Geist Mono", monospace' }}>WHATSAPP BSP</span>
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, lineHeight: 1.6, color: muted, margin: '0 auto', maxWidth: 460 }}>
            Preferred partnership for WhatsApp Business Solution Provider support - the backbone of our WhatsApp agent deployments.
          </p>
        </div>
      </div>
    </section>
  );
};

export { THEME, gridBg, CornerTicks, HOSLogo, SiteNav, SiteFooter, NAV_LINKS, CONTACT, CONTACT_EMAIL, BOOKING_URL, IntegrationsBanner, TrustedByBar, PartnersStrip, FaviconOrInitials, TRUSTED_BY, INTEGRATIONS, PAD_X, useIsMobile, Reveal, CountUp, SEO, SITE_URL };
