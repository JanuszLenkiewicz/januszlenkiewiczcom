/**
 * Rejestr artykułów — zasila WYŁĄCZNIE listę na /articles.
 * Treść każdego tekstu żyje w osobnym pliku app/articles/{slug}/page.tsx, więc każdy artykuł
 * może mieć własny układ, własne klocki i własną grafikę. Nic tu nie generuje treści.
 *
 * Żeby opublikować nowy tekst:
 *   1. skopiuj katalog app/articles/szablon na app/articles/twoj-slug i napisz treść,
 *   2. dopisz tu wpis z tym samym slugiem — pojawi się na liście.
 */

export type Artykul = {
  slug: string;
  tytul: string;
  lead: string;
  /** ISO, np. '2026-08-08' */
  data: string;
  jezyk: 'pl' | 'en';
  tag: string;
  /** szacowany czas czytania w minutach */
  czas: number;
};

export const ARTYKULY: Artykul[] = [
  // Pierwszy prawdziwy tekst wchodzi tutaj. Szablon (app/articles/szablon)
  // celowo nie jest zarejestrowany — nie chcemy go publikować na liście.
];

export const artykulyOdNajnowszych = () => [...ARTYKULY].sort((a, b) => b.data.localeCompare(a.data));

export const formatujDate = (iso: string, jezyk: 'pl' | 'en') =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString(jezyk === 'pl' ? 'pl-PL' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
