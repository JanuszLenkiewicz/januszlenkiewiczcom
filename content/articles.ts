import type { Lang } from './site';

/**
 * Rejestr artykułów — zasila WYŁĄCZNIE listę na /articles.
 * Treść każdego tekstu żyje w osobnym katalogu app/articles/{slug}/, więc każdy artykuł
 * może mieć własny układ, własne klocki i własną grafikę. Nic tu nie generuje treści.
 *
 * Każdy artykuł istnieje w dwóch językach. Układ składa się raz, a teksty podaje się
 * w obu wersjach — patrz app/articles/szablon/tresc.tsx.
 *
 * Żeby opublikować nowy tekst:
 *   1. skopiuj katalog app/articles/szablon na app/articles/twoj-slug, napisz obie wersje
 *      i usuń z page.tsx blokadę indeksowania (robots),
 *   2. dopisz tu wpis z tym samym slugiem — pojawi się na liście.
 */

/** Tekst w obu językach. */
export type Dwujezyczny = Record<Lang, string>;

export type Artykul = {
  slug: string;
  tytul: Dwujezyczny;
  lead: Dwujezyczny;
  /** ISO, np. '2026-08-08' */
  data: string;
  tag: Dwujezyczny;
  /** szacowany czas czytania w minutach */
  czas: number;
};

export const ARTYKULY: Artykul[] = [
  // Pierwszy prawdziwy tekst wchodzi tutaj. Szablon (app/articles/szablon)
  // celowo nie jest zarejestrowany — nie chcemy go publikować na liście.
];

export const artykulyOdNajnowszych = () => [...ARTYKULY].sort((a, b) => b.data.localeCompare(a.data));

export const formatujDate = (iso: string, jezyk: Lang) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString(jezyk === 'pl' ? 'pl-PL' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
