import type { Klucz } from './site';

/**
 * Sekcje strony głównej. Każda ma własny adres bez kratki (np. /approach), który podaje
 * tę samą przewijaną stronę otwartą na danej sekcji — dzięki temu link do sekcji da się
 * skopiować i wysłać, a strona zostaje jednym ciągiem do przewinięcia.
 */
export const SEKCJE = [
  { slug: 'projects', klucz: 'nav_projects' },
  { slug: 'skills', klucz: 'nav_skills' },
  { slug: 'about', klucz: 'nav_about' },
  { slug: 'approach', klucz: 'nav_approach' },
  { slug: 'contact', klucz: 'nav_contact' },
] as const satisfies ReadonlyArray<{ slug: string; klucz: Klucz }>;

export type SekcjaSlug = (typeof SEKCJE)[number]['slug'];

export const czySekcja = (v: string): v is SekcjaSlug => SEKCJE.some((s) => s.slug === v);
