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
  // 'translator-heard-nothing' ukryty 10.11.2026 (decyzja Janusza): wstawiony bez redakcji, żeby coś było na stronie.
  // Strona zostaje pod starym adresem z noindex, ale nie ma jej na liście ani w linkach.
  {
    slug: 'who-thinks-first',
    tytul: {
      pl: 'Najpierw sam, potem AI',
      en: 'Who thinks first: you or the AI?',
    },
    lead: {
      pl: 'Po trzech miesiącach z podpowiedziami AI doświadczeni lekarze bez nich znajdowali mniej zmian przedrakowych. Dlaczego kolejność myślenia to decyzja projektowa i jak pilnuje jej kod wokół modelu.',
      en: 'After three months of AI hints, experienced doctors found fewer precancerous growths without them. Why the order of thinking is a design decision, and how the code around the model enforces it.',
    },
    data: '2026-11-03',
    tag: { pl: 'AI i psychologia', en: 'AI and psychology' },
    czas: 11,
  },
];

export const artykulyOdNajnowszych = () => [...ARTYKULY].sort((a, b) => b.data.localeCompare(a.data));

export const formatujDate = (iso: string, jezyk: Lang) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString(jezyk === 'pl' ? 'pl-PL' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
