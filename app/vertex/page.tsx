import type { Metadata } from 'next';
import { Vertex } from './vertex';

/**
 * Ukryta podstrona: bez linku w menu i stopce, bez wpisu w rejestrach sekcji,
 * noindex/nofollow. Dane prezentacji generuje ai-engineer/www/prezentacje_chmura/eksport_strona.py
 * (content/prezentacje-chmura.ts).
 */
export const metadata: Metadata = {
  title: 'Google Cloud · Vertex AI | Janusz Lenkiewicz',
  robots: { index: false, follow: false },
};

export default function StronaVertex() {
  return <Vertex />;
}
