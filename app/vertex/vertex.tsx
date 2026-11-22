'use client';

import { useLang } from '@/components/lang';
import { PrezentacjeChmura } from '@/components/prezentacja-chmura';

const TEKSTY = {
  pl: {
    tytul: 'Google Cloud · Vertex AI',
    lead: 'System agentów AI zbudowany w całości na Google Cloud, z warstwą AI na Vertex AI i agentami w ADK.',
    sekcja: 'Prezentacje: system agentów AI do przygotowania spotkań',
  },
  en: {
    tytul: 'Google Cloud · Vertex AI',
    lead: 'An AI agent system built entirely on Google Cloud, with its AI layer on Vertex AI and agents in ADK.',
    sekcja: 'Presentations: an AI agent system for meeting preparation',
  },
} as const;

export function Vertex() {
  const { lang } = useLang();
  const s = TEKSTY[lang];
  return (
    <main className="subpage azure vertex">
      <div className="container">
        <div className="page-head">
          <h1>{s.tytul}</h1>
          <p className="lead">{s.lead}</p>
        </div>
        <PrezentacjeChmura platforma="vertex" naglowek={s.sekcja} />
      </div>
    </main>
  );
}
