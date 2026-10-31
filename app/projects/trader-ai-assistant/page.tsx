import type { Metadata } from 'next';
import { Tresc } from './tresc';

export const metadata: Metadata = {
  title: 'Trader AI Assistant: how I’m building it | Janusz Lenkiewicz',
  description:
    'Behind the scenes of Trader AI Assistant, a mentoring platform for traders with AI agents: the design decisions, the mechanisms enforced in code, and where things stand today.',
};

export default function StronaProjektu() {
  return <Tresc />;
}
