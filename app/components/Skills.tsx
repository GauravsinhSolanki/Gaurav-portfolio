import { skills } from '../content/profile';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Skills() {
  return (
    <section id="skills" className="section container-x" aria-labelledby="skills-title">
      <Reveal>
        <SectionHeading id="skills-title" eyebrow="Skills" title="What I work with." description="Grouped by where it sits in the stack. No ratings, just the tools I use." />
      </Reveal>
      <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((group, index) => (
          <Reveal
            key={group.title}
            delay={(index % 4) * 0.05}
            className={`bg-surface p-6 ${group.title === 'AI-assisted development' ? 'sm:col-span-2 lg:col-span-1' : ''}`}
          >
            <h3 className="title-3 text-ink">{group.title}</h3>
            <ul className="mt-4 flex flex-col gap-2">
              {group.items.map((item) => (
                <li key={item} className="body-6 flex gap-3 text-ink-2">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
