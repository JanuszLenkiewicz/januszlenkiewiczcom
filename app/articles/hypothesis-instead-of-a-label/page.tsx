import type { Metadata } from 'next';
import { Tresc } from './tresc';

export const metadata: Metadata = {
  title: 'A hypothesis, not a label | Janusz Lenkiewicz',
  description:
    'How an AI mentor turned one sentence written in anger into a diagnosis: labels in the head, between people and in the files, why an AI system with memory works like an institution that keeps files, and what to build instead of diagnoses.',
  alternates: { canonical: '/articles/hypothesis-instead-of-a-label' },
  openGraph: {
    title: 'A hypothesis, not a label',
    description:
      'I wrote “as if”, the AI mentor answered “it is”. Where labels about people come from, why an AI system with memory turns them into files, and what I built instead of diagnoses.',
    type: 'article',
    url: '/articles/hypothesis-instead-of-a-label',
    publishedTime: '2026-11-10',
    authors: ['Janusz Lenkiewicz'],
  },
  twitter: { card: 'summary_large_image', creator: '@lenkiewj' },
};

export default function StronaArtykulu() {
  return <Tresc />;
}
