import { education } from '../content/profile';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Education() {
  return (
    <section id="education" className="section container-x" aria-labelledby="education-title">
      <Reveal>
        <SectionHeading id="education-title" eyebrow="Education" title="Two degrees in computer science and engineering." />
      </Reveal>
      <ul className="mt-12 grid gap-4 lg:grid-cols-2">
        {education.map((entry, index) => (
          <Reveal key={entry.institution} as="li" delay={index * 0.05}>
            <article className="card flex h-full flex-col p-6 sm:p-8">
              <p className="figure caption-1 text-accent">{entry.period}</p>
              <h3 className="title-1 mt-2 text-ink">{entry.degree}</h3>
              <p className="body-6 mt-1 text-ink-2">
                {entry.institution}
                <span className="text-ink-3"> · </span>
                {entry.location}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Highlights">
                <li className="pill border-accent/40 text-ink">{entry.grade}</li>
                {entry.highlights.map((highlight) => (
                  <li key={highlight} className="pill">
                    {highlight}
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-line pt-6">
                <h4 className="title-4 text-ink">Focus areas</h4>
                <p className="body-6 mt-2 text-ink-2">{entry.focus.join(', ')}</p>
              </div>
              {entry.activities ? (
                <div className="mt-6">
                  <h4 className="title-4 text-ink">Beyond academics</h4>
                  <p className="body-6 mt-2 text-ink-2">{entry.activities.join(', ')}</p>
                </div>
              ) : null}
            </article>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
