import type { Metadata } from 'next';
import { Lista } from './lista';

export const metadata: Metadata = {
  title: 'Articles | Janusz Lenkiewicz',
  description: 'Notes from building production AI systems — architecture decisions, evaluation, human-in-the-loop design.',
};

export default function StronaArtykulow() {
  return <Lista />;
}
