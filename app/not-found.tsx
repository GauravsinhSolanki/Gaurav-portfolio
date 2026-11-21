import Link from 'next/link';
import { ArrowLeft } from '@phosphor-icons/react/dist/ssr';

export default function NotFound() {
  return (
    <main id="main" className="container-x flex min-h-screen flex-col items-center justify-center py-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="heading-2 mt-4 max-w-[680px]">This page does not exist.</h1>
      <p className="body-3 mt-4 max-w-[480px] text-ink-2">
        The link may be old or mistyped. Everything on this site lives on the home page.
      </p>
      <Link href="/" className="btn btn-primary mt-8">
        <ArrowLeft size={18} weight="bold" aria-hidden="true" />
        Back to the home page
      </Link>
    </main>
  );
}
