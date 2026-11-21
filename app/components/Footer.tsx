import { EnvelopeSimple, GithubLogo, LinkedinLogo } from '@phosphor-icons/react/dist/ssr';
import { profile } from '../content/profile';

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-x flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="title-3 text-ink">{profile.name}</p>
          <p className="caption-2 mt-1 text-ink-3">
            © {new Date().getFullYear()} · {profile.role} · {profile.location}
          </p>
        </div>
        <ul className="flex items-center gap-2" aria-label="Profiles">
          <li>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="icon-btn">
              <GithubLogo size={20} aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="icon-btn">
              <LinkedinLogo size={20} aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href={`mailto:${profile.email}`} aria-label="Send an email" className="icon-btn">
              <EnvelopeSimple size={20} aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
