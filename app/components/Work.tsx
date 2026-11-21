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
      {/* Numbered ledger: two columns of hairline separated rows inside one bordered frame */}
      <Reveal className="mt-12">
        <ol className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {work.map((item, index) => (
            <li key={item.title} className="group grid grid-cols-[48px_minmax(0,1fr)] gap-4 bg-surface p-6 transition-colors duration-300 ease-out hover:bg-raised sm:p-8">
              <p className="figure caption-1 pt-1 text-accent">{String(index + 1).padStart(2, '0')}</p>
              <article className="flex h-full flex-col">
                <h3 className="title-1 text-ink">{item.title}</h3>
                <p className="body-6 mt-2 flex-1 text-ink-2">{item.text}</p>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
                  {item.tags.map((tag) => (
                    <li key={tag} className="pill">
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
