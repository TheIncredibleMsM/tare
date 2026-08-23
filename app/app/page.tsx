const principles = [
  "Assessment should support human judgment, not replace it.",
  "No single response defines a candidate.",
  "Different organizations may value different reasoning profiles.",
  "A narrative assessment is not a diagnosis of personality or mental health.",
  "Privacy, accessibility, bias testing, and employer-specific validation are essential—not optional finishing touches.",
];

const pilotSteps = [
  {
    number: "01",
    title: "Define what matters",
    copy: "We begin by learning how your firm understands strong judgment and performance.",
  },
  {
    number: "02",
    title: "Experience the prototype",
    copy: "A small test group completes The Weigh Station in a controlled pilot.",
  },
  {
    number: "03",
    title: "Study the patterns",
    copy: "We examine whether the experience surfaces useful distinctions—without treating any single decision as universally correct.",
  },
  {
    number: "04",
    title: "Shape what comes next",
    copy: "Your feedback informs further development, accessibility work, and employer-specific validation.",
  },
];

function Wordmark() {
  return (
    <a className="wordmark" href="#top" aria-label="Tare home">
      <span>Tare</span>
      <svg viewBox="0 0 176 16" role="presentation" aria-hidden="true">
        <path d="M2 8c27 0 47 1 69 3 13 1 25 2 35 0 22-4 37-7 68-6" />
      </svg>
    </a>
  );
}

function Navigation() {
  const links = [
    ["Home", "#top"],
    ["Products", "#weigh-station"],
    ["Our Mission", "#approach"],
    ["About", "#origin"],
    ["Responsible Assessment", "#responsibility"],
    ["Contact", "#pilot-interest"],
  ];

  return (
    <>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map(([label, href]) => (
          <a href={href} key={href}>{label}</a>
        ))}
      </nav>
      <details className="mobile-nav">
        <summary>Menu</summary>
        <nav aria-label="Mobile navigation">
          {links.map(([label, href]) => (
            <a href={href} key={href}>{label}</a>
          ))}
        </nav>
      </details>
    </>
  );
}

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <Wordmark />
        <Navigation />
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">A more thoughtful way to assess judgment</p>
          <h1 id="hero-title">See how candidates think when the answer isn’t obvious.</h1>
          <p className="hero-intro">
            Tare creates immersive, story-based assessments that give candidates
            meaningful decisions to navigate—and give employers a richer view of
            how they reason through ambiguity, uncertainty, and consequence.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#pilot-interest">Become a pilot partner</a>
            <a className="button button-secondary" href="#weigh-station">Learn about The Weigh Station</a>
          </div>
          <p className="pilot-note">
            <span aria-hidden="true">✦</span>
            Now seeking law-firm partners to help test and responsibly validate our first assessment prototype.
          </p>
        </div>
        <div className="hero-art" aria-hidden="true">
          <img src="/tare-luminous-hero.png" alt="" />
        </div>
      </section>

      <section className="section problem" aria-labelledby="problem-title">
        <div className="section-kicker">The limitation</div>
        <div className="split-heading">
          <h2 id="problem-title">Some qualities cannot be found on a résumé.</h2>
          <div className="prose">
            <p>A résumé can document experience. An interview can reveal preparation and presence. But neither always shows what happens when a candidate must weigh incomplete information, question an authority, revise an assumption, or make a decision without a perfectly correct answer.</p>
            <p>Many assessments simplify people into scores by measuring what is easiest to count. Tare begins with a different question:</p>
            <blockquote>What could we learn if candidates were given something meaningful to decide?</blockquote>
          </div>
        </div>
      </section>

      <section className="section approach" id="approach" aria-labelledby="approach-title">
        <div className="section-kicker">The Tare approach</div>
        <div className="approach-grid">
          <h2 id="approach-title">Give judgment somewhere meaningful to appear.</h2>
          <div className="path-mark" aria-hidden="true"><i /><i /><i /></div>
          <div className="prose">
            <p>Tare replaces abstract prompts with immersive situations. Candidates encounter incomplete information, competing values, and decisions with genuine narrative consequences.</p>
            <p>The goal is not to discover a single correct answer. It is to observe patterns in how someone gathers information, weighs competing considerations, responds to uncertainty, and revises their thinking as circumstances change.</p>
            <p>Those patterns can then become one carefully considered part of a structured human review.</p>
          </div>
        </div>
      </section>

      <section className="section product" id="weigh-station" aria-labelledby="product-title">
        <div className="product-card">
          <div className="product-label">
            <span>Our first product</span>
            <span>Pilot-stage prototype</span>
          </div>
          <div className="product-grid">
            <div>
              <p className="eyebrow">The Weigh Station</p>
              <h2 id="product-title">An assessment you experience—not simply complete.</h2>
            </div>
            <div className="prose">
              <p>Tare’s first prototype, <em>The Weigh Station</em>, places candidates inside a strange station beyond the fog. As its newest attendant, each candidate must evaluate travelers, question incomplete accounts, and make consequential decisions about who may pass.</p>
              <p>The experience is designed to preserve ambiguity rather than remove it. Choices unfold within a cohesive story, allowing reasoning to emerge through action instead of self-description.</p>
              <p className="product-status">Initially designed for law-firm hiring</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section pilot" aria-labelledby="pilot-title">
        <div className="section-kicker">A collaborative pilot</div>
        <div className="pilot-heading">
          <h2 id="pilot-title">Help us learn what thoughtful assessment should look like.</h2>
          <p>Tare is seeking law firms willing to help test and responsibly shape its first assessment.</p>
        </div>
        <ol className="steps">
          {pilotSteps.map((step) => (
            <li key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </li>
          ))}
        </ol>
        <a className="button button-primary" href="#pilot-interest">Become a pilot partner</a>
      </section>

      <section className="section responsibility" id="responsibility" aria-labelledby="responsibility-title">
        <div className="responsibility-intro">
          <div className="section-kicker">Responsible assessment</div>
          <h2 id="responsibility-title">Human complexity deserves careful handling.</h2>
        </div>
        <ul className="principles">
          {principles.map((principle) => <li key={principle}>{principle}</li>)}
        </ul>
      </section>

      <section className="section origin" id="origin" aria-labelledby="origin-title">
        <div className="origin-story">
          <div className="section-kicker">Where the idea began</div>
          <h2 id="origin-title">Tare began with a simple observation.</h2>
          <p>Place two people inside the same story and they may notice different dangers, trust different voices, ask different questions, and reach different conclusions.</p>
          <p>Those differences are not distractions from judgment. They are where judgment becomes visible.</p>
          <p>Tare was created to explore whether meaningful, story-driven decisions can help organizations understand candidates with greater depth—and greater care.</p>
        </div>
        <aside className="name-story" aria-labelledby="name-title">
          <span className="name-mark" aria-hidden="true">T</span>
          <h3 id="name-title">Why “Tare”?</h3>
          <p>In weighing, the tare is what must be accounted for before the object itself can be understood accurately.</p>
          <p>Tare takes its name from that act of careful consideration: looking beyond the obvious measurement and accounting for the context surrounding it.</p>
        </aside>
      </section>

      <section className="closing" id="pilot-interest" aria-labelledby="closing-title">
        <p className="eyebrow">An invitation to early partners</p>
        <h2 id="closing-title">Help build an assessment worthy of the people it evaluates.</h2>
        <p>We are looking for thoughtful law-firm partners who are willing to question familiar hiring tools, test an early prototype, and help determine what this approach can responsibly become.</p>
        <p className="contact-pending">Pilot conversations are opening soon. Contact details will be added here before launch.</p>
      </section>

      <footer>
        <Wordmark />
        <p>Immersive assessment, built with care.</p>
        <nav aria-label="Footer navigation">
          <a href="#weigh-station">Products</a>
          <a href="#approach">Our Mission</a>
          <a href="#origin">About</a>
          <a href="#responsibility">Responsible Assessment</a>
        </nav>
        <p className="footer-note">Tare and The Weigh Station are currently in pilot-stage development.</p>
      </footer>
    </main>
  );
}
