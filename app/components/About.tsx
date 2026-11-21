import { MapPin } from '@phosphor-icons/react/dist/ssr';
import { about, profile } from '../content/profile';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <section id="about" className="section container-x" aria-labelledby="about-title">
      <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-16">
        <Reveal>
          <SectionHeading id="about-title" eyebrow="About" title="From the first requirements call to production." />
          <p className="caption-1 mt-6 flex items-start gap-2 text-ink-2">
            <MapPin size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-accent" />
            <span>
              {profile.location}
              <span className="caption-2 block text-ink-3">{profile.workMode}</span>
            </span>
          </p>
        </Reveal>
        <Reveal delay={0.1} className="max-w-[680px]">
          <div className="flex flex-col gap-6">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="lead text-ink-2">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
