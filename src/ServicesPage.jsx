import { THEME, gridBg, CornerTicks, SiteNav, SiteFooter, IntegrationsBanner } from './theme.jsx';

// hos-services-content.jsx - HOS AI Services detail page
// Depends on: hos-shared.jsx

const SERVICES_DETAIL = [
  {
    n: 'A.1', t: 'AI Audit',
    d: 'A two-week diagnostic across your operations. We map workflows, score AI-readiness per function, and pick the highest-leverage wedge - the one project that pays for the rest.',
    who: 'Leadership teams who know they need AI but not where to start.',
    get: ['Workflow map + AI-readiness scorecard', 'Ranked opportunity list, sized by $ impact', 'A recommended first project + budget'],
    time: '2 weeks · fixed fee',
  },
  {
    n: 'A.2', t: 'Custom Agents',
    d: 'Single-purpose agents tuned to one workflow - triage, drafting, routing, research - embedded directly in the tools your team already uses.',
    who: 'Teams buried in a repeatable, judgment-light task.',
    get: ['A working agent in your stack', 'Evals + guardrails for the specific task', 'Handoff runbook for your team'],
    time: '4–6 weeks',
  },
  {
    n: 'A.3', t: 'RAG Systems',
    d: 'Production-grade retrieval over your internal knowledge - policies, tickets, contracts, wikis - with the observability to trust it.',
    who: 'Orgs with knowledge trapped in thousands of documents.',
    get: ['Ingestion + indexing pipeline', 'Retrieval evals + accuracy benchmarks', 'A control plane for updates & access'],
    time: '4–8 weeks',
  },
  {
    n: 'A.4', t: 'Voice & WhatsApp Agents',
    d: 'Inbound and outbound voice AI, plus WhatsApp support agents - call handling, booking, pre-sales, post-sales, IVR replacement. We\'re model & vendor agnostic - we curate and select whatever infrastructure is best for your use case.',
    who: 'Teams who need judgment-assist over the phone or on WhatsApp, not just a chatbot.',
    get: ['A voice or WhatsApp agent scoped to real conversations', 'Guardrails on what it can/can\'t decide', 'Usage analytics + feedback loop'],
    time: '6–10 weeks',
  },
  {
    n: 'A.5', t: 'Evals & Ops',
    d: 'The unglamorous part. Monitoring, drift detection, regression tests, and the dashboard nobody else wants to build - so systems stay trustworthy after we leave.',
    who: 'Anyone who already has AI in production and no visibility into it.',
    get: ['Monitoring + alerting setup', 'Regression test suite', 'Monthly health report'],
    time: 'ongoing',
  },
  {
    n: 'A.6', t: 'Embedded Team',
    d: 'Fractional AI engineering - senior, async-first, month-to-month. For teams who want an ongoing partner, not a one-off project.',
    who: 'Companies scaling AI across multiple teams at once.',
    get: ['A dedicated senior engineer/researcher', 'Weekly ships, async standups', 'Cancel anytime, no lock-in'],
    time: 'monthly',
  },
];

const ServicesPage = () => {
  const { bg, ink, accent, muted, rule } = THEME;
  return (
    <div style={{ background: bg, color: ink, fontFamily: '"Geist Mono", monospace', minHeight: '100%' }} data-screen-label="Services">
      <SiteNav active="services" />

      <section style={{ position: 'relative', padding: '72px 48px 56px', backgroundImage: gridBg }}>
        <CornerTicks />
        <div style={{ fontSize: 11, color: accent, letterSpacing: '.3em', marginBottom: 24 }}>SERVICES</div>
        <h1 style={{ fontFamily: '"Geist", sans-serif', fontWeight: 600, fontSize: 80, lineHeight: .96, letterSpacing: '-0.05em', margin: '0 0 24px', maxWidth: 780 }}>
          Six ways we make AI <span style={{ color: accent }}>pay for itself.</span>
        </h1>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 18, lineHeight: 1.5, color: muted, maxWidth: 620 }}>
          Every engagement is scoped to a measurable outcome - hours reclaimed, cost cut, revenue created. Pick one, or run several in sequence.
        </p>
      </section>

      <IntegrationsBanner />

      <section style={{ padding: '96px 48px' }}>
        {SERVICES_DETAIL.map((s, i) => (
          <div key={s.n} style={{ display: 'grid', gridTemplateColumns: '80px 1fr 1fr', gap: 40, padding: '48px 0', borderTop: i === 0 ? 'none' : `1px solid ${rule}` }}>
            <div style={{ fontSize: 12, color: accent, letterSpacing: '.15em', fontFamily: '"Geist Mono", monospace' }}>{s.n}</div>
            <div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 16, flexWrap: 'wrap' }}>
                <h3 style={{ fontFamily: '"Geist", sans-serif', fontSize: 36, fontWeight: 600, letterSpacing: '-0.03em', margin: 0 }}>{s.t}</h3>
              </div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, lineHeight: 1.6, color: muted, margin: '0 0 16px' }}>{s.d}</p>
              <div style={{ fontSize: 12, color: ink, fontFamily: 'Inter, sans-serif' }}>
                <span style={{ color: muted }}>Best for: </span>{s.who}
              </div>
            </div>
            <div>
              <div style={{ fontSize: 10, color: muted, letterSpacing: '.15em', textTransform: 'uppercase', marginBottom: 14 }}>What you get</div>
              <ul style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, lineHeight: 1.8, color: ink, padding: 0, listStyle: 'none', margin: '0 0 20px' }}>
                {s.get.map(g => <li key={g}>→ {g}</li>)}
              </ul>
              <div style={{ fontFamily: '"Geist Mono", monospace', fontSize: 11, color: accent, letterSpacing: '.1em', paddingTop: 12, borderTop: `1px dashed ${rule}`, display: 'inline-block' }}>{s.time}</div>
            </div>
          </div>
        ))}
      </section>

      <SiteFooter heading="Pick a wedge." headingAccent="Let's start there." />
    </div>
  );
};

export default ServicesPage;
