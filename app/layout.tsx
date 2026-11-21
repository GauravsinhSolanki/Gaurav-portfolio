import type { Metadata, Viewport } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { profile } from './content/profile';

const title = `${profile.name} | ${profile.role}`;
const description =
  'Full Stack Software Engineer at BrokerLift shipping insurance SaaS through an AI product pipeline. React, TypeScript, Python, FastAPI, AWS. 8 insurance products built, 6 live.';

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title,
  description,
  keywords: [
    'Gaurav Solanki',
    'full stack software engineer',
    'React',
    'TypeScript',
    'Python',
    'FastAPI',
    'AWS',
    'insurance SaaS',
    'AI product pipeline',
    'Toronto',
  ],
  authors: [{ name: profile.name, url: profile.siteUrl }],
  creator: profile.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: profile.siteUrl,
    siteName: profile.name,
    title,
    description,
    locale: 'en_CA',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#181818',
  colorScheme: 'dark',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-screen font-sans">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
