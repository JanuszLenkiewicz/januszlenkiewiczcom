import type { Metadata } from 'next';
import { Azure } from './azure';

/**
 * Ukryta podstrona: bez linku w menu i stopce, bez wpisu w rejestrach sekcji,
 * noindex/nofollow. Dane generuje ai-engineer/www/azure/eksport_strona.py (content/azure.ts).
 */
export const metadata: Metadata = {
  title: 'Microsoft Azure | Janusz Lenkiewicz',
  robots: { index: false, follow: false },
};

export default function StronaAzure() {
  return <Azure />;
}
