import { aiSection } from '../content/profile';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function AiPipeline() {
  const [first, ...rest] = aiSection.items;
  return (
    <section id="ai" className="section container-x" aria-labelledby="ai-title">
      <Reveal>
        <SectionHeading id="ai-title" eyebrow="AI pipeline" title={aiSection.title} description={aiSection.intro} />
      </Reveal>

      {/* Full width band: the headline fact at display size, the rest as a two column list beside it */}
      <Reveal className="mt-12">
        <div className="card grid gap-8 bg-raised p-6 sm:p-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 lg:p-12">
          <div className="flex flex-col justify-between gap-8">
            <p className="figure text-7xl text-accent lg:text-8xl">{first.stat}</p>
            <div>
              <h3 className="heading-5 text-ink">{first.title}</h3>
              <p className="body-3 mt-3 max-w-[480px] text-ink-2">{first.text}</p>
            </div>
          </div>
          <ul className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
            {rest.map((item) => (
              <li key={item.title} className="flex flex-col bg-surface p-6">
                <p className="figure text-3xl text-ink">{item.stat}</p>
                <h3 className="title-3 mt-4 text-ink">{item.title}</h3>
                <p className="body-6 mt-2 text-ink-2">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal className="mt-6">
        <p className="caption-2 max-w-[680px] text-ink-3">{aiSection.note}</p>
      </Reveal>
    </section>
  );
}
