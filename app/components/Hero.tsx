import { ArrowRight, DownloadSimple, EnvelopeSimple, GithubLogo, LinkedinLogo } from '@phosphor-icons/react/dist/ssr';
import { about, heroStats, profile } from '../content/profile';
import Reveal from './Reveal';

export default function Hero() {
  return (
    <section id="top" className="container-x pb-16 pt-32 sm:pb-20 sm:pt-40 lg:pb-24 lg:pt-48" aria-labelledby="hero-title">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end lg:gap-16">
        <div className="max-w-[680px]">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface py-1 pl-2 pr-3 caption-4 text-ink-2">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {profile.available}
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="body-5 mt-6 text-ink-2">
              {profile.name}
              <span className="text-ink-3"> · </span>
              {profile.role} at {profile.company}
            </p>
            <h1 id="hero-title" className="heading-1 mt-3">
              <span className="hero-gradient block">{profile.heroTitle[0]}</span>
              <span className="hero-gradient block">{profile.heroTitle[1]}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="lead mt-6 text-ink-2">{about.lead}</p>
            <p className="figure caption-1 mt-4 text-ink-3">{profile.stack}</p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#work" className="btn btn-primary">
                View my work
                <ArrowRight size={18} weight="bold" aria-hidden="true" />
              </a>
              <a href="#contact" className="btn btn-secondary">
                Contact me
              </a>
              <a href={profile.resumePath} download="Gaurav_Solanki_Resume.pdf" className="btn btn-secondary">
                <DownloadSimple size={18} weight="bold" aria-hidden="true" />
                Download resume
              </a>
            </div>
            <ul className="mt-8 flex items-center gap-2" aria-label="Profiles">
              <li>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="icon-btn">
                  <GithubLogo size={20} aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="icon-btn">
                  <LinkedinLogo size={20} aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href={`mailto:${profile.email}`} aria-label="Send an email" className="icon-btn">
                  <EnvelopeSimple size={20} aria-hidden="true" />
                </a>
              </li>
            </ul>
          </Reveal>
        </div>

        {/* Proof panel */}
        <Reveal delay={0.2} className="lg:justify-self-end">
          <dl className="card grid grid-cols-2 gap-px overflow-hidden bg-line p-0" aria-label="Key numbers">
            {heroStats.map((stat) => (
              <div key={stat.label} className="bg-surface p-6">
                <dd className="figure text-4xl text-ink">{stat.value}</dd>
                <dt className="caption-2 mt-2 text-ink-2">{stat.label}</dt>
              </div>
            ))}
          </dl>
          <p className="caption-5 mt-3 text-ink-3">Two years at BrokerLift. Numbers as of {new Date().getFullYear()}.</p>
        </Reveal>
      </div>
    </section>
  );
}
