import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LangProvider } from '@/components/lang';
import { DOMENA } from '@/content/kontakt';
import './globals.css';

const FAVICON =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%231A1A1A'/%3E%3Ctext x='16' y='22' font-family='Arial,sans-serif' font-size='14' font-weight='bold' fill='%23FFFFFF' text-anchor='middle'%3EJL%3C/text%3E%3C/svg%3E";

export const metadata: Metadata = {
  metadataBase: new URL(DOMENA),
  title: 'JANUSZ LENKIEWICZ | AI ENGINEER',
  description:
    "Founder of Trader AI Assistant and AI engineer. Process analysis, AI deployment in companies, effective AI agents and agentic process redesign — plus on-device AI on Mac and iPhone.",
  openGraph: {
    title: 'Janusz Lenkiewicz — Founder, Trader AI Assistant · AI Engineer',
    description:
      'I help companies use AI where it actually improves the work: process analysis, AI agents built into existing tools, measurement before and after.',
    type: 'website',
    url: `${DOMENA}/`,
  },
  twitter: { card: 'summary', creator: '@lenkiewj' },
  icons: { icon: FAVICON },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="color-scheme" content="only light" />
        <meta name="darkreader-lock" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Montserrat:wght@700;800&display=swap"
        />
      </head>
      <body>
        <LangProvider>
          <Header />
          {children}
          <Footer />
        </LangProvider>
      </body>
    </html>
  );
}
