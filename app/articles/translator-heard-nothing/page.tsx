import type { Metadata } from 'next';
import { Tresc } from './tresc';

/** Ukryty 10.11.2026 (decyzja Janusza): poza listą artykułów, bez indeksowania. */
export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: 'My translator heard nothing in the taxi | Janusz Lenkiewicz',
  description:
    'An offline iPhone translator that heard almost nothing in a taxi, and why the cause was not the model: notes on hearing, silence and timing for AI that works next to people.',
};

export default function StronaArtykulu() {
  return <Tresc />;
}
