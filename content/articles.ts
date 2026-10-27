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
  // Szablon (app/articles/szablon) celowo nie jest zarejestrowany — nie chcemy go publikować na liście.
  {
    slug: 'translator-heard-nothing',
    tytul: {
      pl: 'W taksówce mój tłumacz nic nie usłyszał. Model nie był problemem.',
      en: 'My translator heard nothing in the taxi. The model wasn’t the problem.',
    },
    lead: {
      pl: 'Błąd słyszenia wygląda jak błąd myślenia. Notatki z budowy tłumacza na iPhone’a o tym, czego AI potrzebuje, zanim zacznie działać obok ludzi.',
      en: 'A hearing error looks like a thinking error. Notes from building an iPhone translator on what AI needs before it can work next to people.',
    },
    data: '2026-10-27',
    tag: { pl: 'AI na urządzeniu', en: 'On-device AI' },
    czas: 8,
  },
];

export const artykulyOdNajnowszych = () => [...ARTYKULY].sort((a, b) => b.data.localeCompare(a.data));

export const formatujDate = (iso: string, jezyk: Lang) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString(jezyk === 'pl' ? 'pl-PL' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
