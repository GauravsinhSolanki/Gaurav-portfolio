type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  id?: string;
};

export default function SectionHeading({ eyebrow, title, description, id }: Props) {
  return (
    <div className="max-w-[680px]">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className="heading-3 mt-3">
        {title}
      </h2>
      {description ? <p className="body-3 mt-4 text-ink-2">{description}</p> : null}
    </div>
  );
}
