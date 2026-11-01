import type { Metadata } from 'next';
import { Tresc } from './tresc';

export const metadata: Metadata = {
  title: 'A hypothesis, not a label | Janusz Lenkiewicz',
  description:
    'How an AI mentor turned one sentence written in anger into a diagnosis: labels in the head, between people and in the files, why an AI system with memory works like an institution with records, and what to build instead of diagnoses.',
};

export default function StronaArtykulu() {
  return <Tresc />;
}
