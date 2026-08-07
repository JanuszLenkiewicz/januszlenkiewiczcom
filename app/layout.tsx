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
    "LLM application engineer with 14 years of software engineering and two master's degrees — in psychology and pedagogy. I build production AI systems where the human has the final say.",
  openGraph: {
    title: 'Janusz Lenkiewicz — AI Engineer',
    description:
      'AI Engineering × psychology. Production LLM systems designed around people: multi-agent, RAG, realtime voice AI, model quality evaluation.',
    type: 'website',
    url: `${DOMENA}/`,
  },
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
