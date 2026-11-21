import { work } from '../content/profile';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Work() {
  return (
    <section id="work" className="section container-x" aria-labelledby="work-title">
      <Reveal>
        <SectionHeading
          id="work-title"
          eyebrow="Selected work"
          title="Shipped at BrokerLift."
          description="Client and product names are left out on purpose. Every item below is from the experience above."
        />
      </Reveal>
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {work.map((item, index) => (
          <Reveal key={item.title} as="li" delay={(index % 3) * 0.05}>
            <article className="card flex h-full flex-col p-6 transition-colors duration-300 ease-out hover:border-line-strong">
              <p className="figure caption-4 text-ink-3">{String(index + 1).padStart(2, '0')}</p>
              <h3 className="title-1 mt-4 text-ink">{item.title}</h3>
              <p className="body-6 mt-2 flex-1 text-ink-2">{item.text}</p>
              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
                {item.tags.map((tag) => (
                  <li key={tag} className="pill">
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
