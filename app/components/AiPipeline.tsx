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

      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        <Reveal className="lg:row-span-2">
          <article className="card flex h-full flex-col justify-between border-accent/40 bg-raised p-6 sm:p-8">
            <p className="figure text-6xl text-accent">{first.stat}</p>
            <div className="mt-10">
              <h3 className="title-1 text-ink">{first.title}</h3>
              <p className="body-3 mt-3 text-ink-2">{first.text}</p>
            </div>
          </article>
        </Reveal>
        {rest.map((item, index) => (
          <Reveal key={item.title} delay={(index + 1) * 0.05}>
            <article className="card flex h-full flex-col p-6">
              <p className="figure text-4xl text-ink">{item.stat}</p>
              <h3 className="title-2 mt-6 text-ink">{item.title}</h3>
              <p className="body-6 mt-2 text-ink-2">{item.text}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-6">
        <p className="caption-2 max-w-[680px] text-ink-3">{aiSection.note}</p>
      </Reveal>
    </section>
  );
}
