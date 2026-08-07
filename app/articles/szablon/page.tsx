import type { Metadata } from 'next';
import { Tresc } from './tresc';

/**
 * SZABLON ARTYKUŁU — nie jest wpisany do rejestru w content/articles.ts, więc nie pojawia się
 * na liście, i ma noindex, więc nie trafi do wyszukiwarek. Służy do podejrzenia klocków układu
 * i do skopiowania jako punkt startu nowego tekstu (razem z plikiem tresc.tsx obok).
 *
 * Przy prawdziwym artykule: podmień tytuł i opis, USUŃ pole robots, dopisz wpis do ARTYKULY.
 */
export const metadata: Metadata = {
  title: 'Szablon artykułu | Janusz Lenkiewicz',
  robots: { index: false, follow: false },
};

export default function StronaSzablonu() {
  return <Tresc />;
}
