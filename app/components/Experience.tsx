import { experience, impactStats } from '../content/profile';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Experience() {
  return (
    <section id="experience" className="section container-x" aria-labelledby="experience-title">
      <Reveal>
        <SectionHeading
          id="experience-title"
          eyebrow="Experience"
          title="Two companies, three roles, products in daily use."
        />
      </Reveal>

      <ol className="mt-12 flex flex-col gap-6">
        {experience.map((job, index) => (
          <Reveal key={`${job.company}-${job.role}`} as="li" delay={index * 0.05}>
            <article className="card grid gap-6 p-6 sm:p-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-12">
              <header>
                <p className="figure caption-1 text-accent">{job.period}</p>
                <h3 className="title-1 mt-2 text-ink">{job.role}</h3>
                <p className="body-6 mt-1 text-ink-2">{job.company}</p>
                <p className="caption-2 mt-1 text-ink-3">{job.location}</p>
              </header>
              <ul className="flex flex-col gap-3">
                {job.bullets.map((bullet) => (
                  <li key={bullet.text} className="body-3 flex gap-3 text-ink-2">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>
                      {bullet.lead ? <span className="body-1 text-ink">{bullet.lead} </span> : null}
                      {bullet.text}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </ol>

      <Reveal className="mt-12">
        <h3 className="title-2 text-ink">Impact by the numbers</h3>
        <dl className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3 lg:grid-cols-6">
          {impactStats.map((stat) => (
            <div key={stat.label} className="bg-surface p-6">
              <dd className="figure text-3xl text-ink">{stat.value}</dd>
              <dt className="caption-2 mt-2 text-ink-2">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
