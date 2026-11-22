// Filmy YouTube (niepubliczne) do podstron /azure i /vertex. Plik edytowany ręcznie
// (w przeciwieństwie do generowanego content/prezentacje-chmura.ts).

export type TrescFilmu = { tytul: string; podtytul: string; opis: string; przycisk: string };
export type Film = { youtubeId: string; pl: TrescFilmu; en: TrescFilmu };

export const FILMY_CHMURA: Record<'azure' | 'vertex', Film[]> = {
  azure: [],
  vertex: [
    {
      youtubeId: 'ktAJCB1U-0M',
      pl: {
        tytul: 'Film: Google Cloud i Vertex AI: technologie',
        podtytul: 'Ta sama prezentacja z omówieniem lektora (9 min)',
        opis: 'Każdy slajd z komentarzem: jaką rolę pełni dana usługa w systemie agentów.',
        przycisk: 'Odtwórz film →',
      },
      en: {
        tytul: 'Video: Google Cloud and Vertex AI: technologies',
        podtytul: 'The same presentation with voice-over commentary (9 min, narration in Polish)',
        opis: 'Every slide with commentary on the role of each service in the agent system.',
        przycisk: 'Play video →',
      },
    },
  ],
};
