'use client';

import { useState, type FormEvent } from 'react';
import { ArrowUpRight, EnvelopeSimple, GithubLogo, LinkedinLogo, PaperPlaneTilt } from '@phosphor-icons/react/dist/ssr';
import { profile } from '../content/profile';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const FORM_ENDPOINT = 'https://formspree.io/f/xzdbnkvz';
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Fields = { name: string; email: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;
type Status = 'idle' | 'sending' | 'sent' | 'failed';

const links = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: EnvelopeSimple, external: false },
  { label: 'LinkedIn', value: `in/${profile.linkedinHandle}`, href: profile.linkedin, icon: LinkedinLogo, external: true },
  { label: 'GitHub', value: `@${profile.githubHandle}`, href: profile.github, icon: GithubLogo, external: true },
];

function validate(fields: Fields): Errors {
  const errors: Errors = {};
  if (!fields.name.trim()) errors.name = 'Add your name so I know who is writing.';
  if (!fields.email.trim()) errors.email = 'Add an email address so I can reply.';
  else if (!EMAIL_PATTERN.test(fields.email.trim())) errors.email = 'That email address does not look complete.';
  if (!fields.message.trim()) errors.message = 'Add a message.';
  return errors;
}

export default function Contact() {
  const [fields, setFields] = useState<Fields>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');

  const update = (key: keyof Fields) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields((previous) => ({ ...previous, [key]: event.target.value }));
    if (errors[key]) setErrors((previous) => ({ ...previous, [key]: undefined }));
  };

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(fields);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus('sending');
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: fields.name.trim(),
          email: fields.email.trim(),
          message: fields.message.trim(),
          _subject: `Portfolio contact from ${fields.name.trim()}`,
          _replyto: fields.email.trim(),
        }),
      });
      if (!response.ok) throw new Error(`Form service returned ${response.status}`);
      setStatus('sent');
      setFields({ name: '', email: '', message: '' });
    } catch {
      setStatus('failed');
    }
  }

  return (
    <section id="contact" className="section container-x" aria-labelledby="contact-title">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_480px] lg:gap-16">
        <Reveal>
          <SectionHeading
            id="contact-title"
            eyebrow="Contact"
            title="Hiring, or have a product to ship?"
            description="Send a message here or reach me directly. I reply to every real message."
          />
          <ul className="mt-10 flex flex-col gap-2">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="card flex items-center gap-4 p-4 transition-colors duration-300 ease-out hover:border-line-strong hover:bg-raised"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-raised text-accent">
                    <link.icon size={20} aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="title-4 block text-ink">{link.label}</span>
                    <span className="caption-2 block truncate text-ink-2">{link.value}</span>
                  </span>
                  <ArrowUpRight size={18} aria-hidden="true" className="text-ink-3" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} noValidate className="card flex flex-col gap-4 p-6 sm:p-8" aria-describedby="form-status">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="caption-1 block text-ink-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={fields.name}
                  onChange={update('name')}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className={`field mt-2 ${errors.name ? 'field-error' : ''}`}
                />
                {errors.name ? (
                  <p id="name-error" className="caption-2 mt-2 text-red-400">
                    {errors.name}
                  </p>
                ) : null}
              </div>
              <div>
                <label htmlFor="email" className="caption-1 block text-ink-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={fields.email}
                  onChange={update('email')}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className={`field mt-2 ${errors.email ? 'field-error' : ''}`}
                />
                {errors.email ? (
                  <p id="email-error" className="caption-2 mt-2 text-red-400">
                    {errors.email}
                  </p>
                ) : null}
              </div>
            </div>
            <div>
              <label htmlFor="message" className="caption-1 block text-ink-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={fields.message}
                onChange={update('message')}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
                className={`field mt-2 resize-y ${errors.message ? 'field-error' : ''}`}
              />
              {errors.message ? (
                <p id="message-error" className="caption-2 mt-2 text-red-400">
                  {errors.message}
                </p>
              ) : null}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button type="submit" className="btn btn-primary" disabled={status === 'sending'} aria-busy={status === 'sending'}>
                <PaperPlaneTilt size={18} weight="bold" aria-hidden="true" />
                {status === 'sending' ? 'Sending' : 'Send message'}
              </button>
              <p id="form-status" role="status" aria-live="polite" className="caption-2 text-ink-2">
                {status === 'sent' ? 'Message sent. I will reply by email.' : null}
                {status === 'failed' ? (
                  <>
                    Sending failed. Email me at <a href={`mailto:${profile.email}`} className="text-ink underline underline-offset-4">{profile.email}</a> instead.
                  </>
                ) : null}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
