import type { Metadata } from 'next';
import { Tresc } from './tresc';

export const metadata: Metadata = {
  title: 'Who thinks first: you or the AI? | Janusz Lenkiewicz',
  description:
    'After three months of AI hints, experienced doctors did worse without them. Cognitive offloading, why the order of thinking is a design decision, and the harness that enforces it in an AI mentoring platform.',
  alternates: { canonical: '/articles/who-thinks-first' },
  openGraph: {
    title: 'Who thinks first: you or the AI?',
    description:
      'After three months of AI hints, experienced doctors did worse without them. Why the order of thinking is a design decision, and where my own platform keeps that rule and where it does not yet.',
    type: 'article',
    url: '/articles/who-thinks-first',
    publishedTime: '2026-11-03',
    authors: ['Janusz Lenkiewicz'],
  },
  twitter: { card: 'summary_large_image', creator: '@lenkiewj' },
};

export default function StronaArtykulu() {
  return <Tresc />;
}
