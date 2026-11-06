import type { Metadata } from 'next';
import { Tresc } from './tresc';

/**
 * UKRYTA KOPIA ARCHIWALNA — wersja A9 z 31.10.2026 (pełna, przed edycją Janusza), zachowana na jego prośbę
 * z 6.11.2026, gdy artykuł pod adresem /articles/hypothesis-instead-of-a-label dostanie nową wersję z kopii roboczej.
 * Nie jest wpisana do rejestru content/articles.ts (nie ma jej na liście) i ma noindex. Może posłużyć technicznemu
 * bliźniakowi A9T (plan: my/03-linkedin/posty/w-produkcji/artykuly/A9T-plan-blizniak-techniczny.md).
 */
export const metadata: Metadata = {
  title: 'A hypothesis, not a label (archive 31.10.2026) | Janusz Lenkiewicz',
  robots: { index: false, follow: false },
};

export default function StronaArtykulu() {
  return <Tresc />;
}
