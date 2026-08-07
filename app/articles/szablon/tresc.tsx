'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import { T, useLang } from '@/components/lang';
import type { Lang } from '@/content/site';

/**
 * WZORZEC ARTYKUŁU DWUJĘZYCZNEGO
 *
 * Układ (JSX niżej) piszesz RAZ. Teksty podajesz w obu wersjach w obiekcie TRESC —
 * dzięki temu wersje nie mogą się rozjechać układem, a przełącznik EN/PL w menu
 * przełącza też artykuł.
 *
 * Wartości mogą być zwykłym tekstem albo kawałkiem JSX — jeśli w zdaniu potrzebujesz
 * pogrubienia, odnośnika czy kodu, wpisz je wprost, tak jak w akapicie drugim.
 */

type Blok = ReactNode;

const TRESC: Record<Lang, Record<string, Blok>> = {
  pl: {
    label: 'SZABLON — PODGLĄD KLOCKÓW UKŁADU',
    tytul: 'Tytuł artykułu wchodzi tutaj i może być długi na dwa wiersze',
    lead: 'Lead: jedno–dwa zdania, które mówią, o czym jest tekst i dlaczego ktoś ma go przeczytać. Większy stopień pisma niż reszta, żeby wchodziło się w tekst miękko.',
    data: '8 sierpnia 2026',
    tag: 'Architektura',
    czas: '7 min czytania',
    otwarcie:
      'Akapit otwierający. Szerokość kolumny jest celowo ograniczona do około 820 pikseli — przy dłuższym wierszu oko gubi początek następnej linii, a tekst techniczny czyta się wolniej niż powieść.',
    srodtytul1: 'Śródtytuł drugiego poziomu',
    akapit2: (
      <>
        Zwykły akapit z <strong>wyróżnieniem</strong>, <a href="#">odnośnikiem</a> i fragmentem kodu
        w tekście: <code>scrollIntoView()</code>.
      </>
    ),
    punkt1: 'Punkt listy — krótki i konkretny.',
    punkt2: 'Drugi punkt, który może być dłuższy i zajmować dwa wiersze bez utraty czytelności.',
    cytat:
      'Cytat wyciągnięty na wierzch. Używaj go, kiedy chcesz, żeby jedno zdanie zostało w głowie po zamknięciu karty.',
    ramkaNaglowek: 'Wniosek',
    ramka: 'Ramka na wniosek, ostrzeżenie albo definicję. Wyróżnia się tłem i lewą krawędzią, nie krzycząc kolorem.',
    srodtytul2: 'Klocki do składania układu',
    kolumnyWstep: 'Poniżej dwie kolumny — dobre do zestawień „przed / po” albo „mit / fakt”.',
    lewaH: 'Lewa kolumna',
    lewa: 'Na wąskim ekranie kolumny same układają się jedna pod drugą.',
    prawaH: 'Prawa kolumna',
    prawa: 'Bez dodatkowej pracy z Twojej strony.',
    czarny: 'Blok na czarnym tle — ten sam akcent, co panel na stronie głównej i sekcja „podejście”. Dobry na puentę albo wyróżnioną tezę.',
    srodtytul3: 'Kod i ilustracje',
    ilustracja: 'miejsce na ilustrację',
    podpis: 'Podpis pod ilustracją — mówi, co widać, a nie powtarza tytułu.',
    zamkniecie: 'Akapit zamykający. Dalej stopka artykułu z powrotami — na wąskim ekranie zawija się do jednej kolumny.',
  },
  en: {
    label: 'TEMPLATE — LAYOUT BUILDING BLOCKS',
    tytul: 'The article title goes here and may run to two lines',
    lead: 'Lead: one or two sentences saying what the text is about and why anyone should read it. Set larger than the body so the reader eases into the piece.',
    data: '8 August 2026',
    tag: 'Architecture',
    czas: '7 min read',
    otwarcie:
      'Opening paragraph. The column is deliberately capped at around 820 pixels — any wider and the eye loses the start of the next line, and technical writing already reads slower than a novel.',
    srodtytul1: 'A second-level heading',
    akapit2: (
      <>
        A plain paragraph with <strong>emphasis</strong>, a <a href="#">link</a> and an inline code
        fragment: <code>scrollIntoView()</code>.
      </>
    ),
    punkt1: 'A list item — short and concrete.',
    punkt2: 'A second item, which may run longer and take two lines without hurting readability.',
    cytat: 'A pull quote. Use it when you want one sentence to stay in the reader’s head after they close the tab.',
    ramkaNaglowek: 'Takeaway',
    ramka: 'A box for a takeaway, a warning or a definition. It stands out through background and left edge, without shouting in colour.',
    srodtytul2: 'Blocks for composing the layout',
    kolumnyWstep: 'Two columns below — good for “before / after” or “myth / fact” comparisons.',
    lewaH: 'Left column',
    lewa: 'On a narrow screen the columns stack by themselves.',
    prawaH: 'Right column',
    prawa: 'With no extra work on your side.',
    czarny: 'A block on black — the same accent as the panel on the home page and the approach section. Good for a closing point or a highlighted claim.',
    srodtytul3: 'Code and images',
    ilustracja: 'image goes here',
    podpis: 'Caption under the image — says what is shown instead of repeating the title.',
    zamkniecie: 'Closing paragraph. Below it the article footer with the way back — it wraps to one column on a narrow screen.',
  },
};

export function Tresc() {
  const { lang } = useLang();
  const t = TRESC[lang];

  return (
    <main className="subpage">
      <article className="narrow">
        <header className="article-head">
          <span className="label">{t.label}</span>
          <h1>{t.tytul}</h1>
          <p className="lead">{t.lead}</p>
          <div className="art-meta">
            <span>{t.data}</span>
            <span>{t.tag}</span>
            <span>{t.czas}</span>
          </div>
        </header>

        <div className="article-body">
          <p>{t.otwarcie}</p>

          <h2>{t.srodtytul1}</h2>
          <p>{t.akapit2}</p>

          <ul>
            <li>{t.punkt1}</li>
            <li>{t.punkt2}</li>
          </ul>

          <blockquote className="art-pull">{t.cytat}</blockquote>

          <div className="art-callout">
            <b>{t.ramkaNaglowek}</b>
            {t.ramka}
          </div>

          <h2>{t.srodtytul2}</h2>
          <p>{t.kolumnyWstep}</p>

          <div className="art-cols">
            <div>
              <h3>{t.lewaH}</h3>
              <p>{t.lewa}</p>
            </div>
            <div>
              <h3>{t.prawaH}</h3>
              <p>{t.prawa}</p>
            </div>
          </div>

          <div className="art-dark">
            <p>{t.czarny}</p>
          </div>

          <h2>{t.srodtytul3}</h2>
          <pre>
            <code>{`const goTo = (el, behavior) =>
  el.scrollIntoView({ behavior, block: 'start' });`}</code>
          </pre>

          <figure>
            {/* Obrazy wrzucaj do public/articles/{slug}/ i podawaj ścieżkę od korzenia */}
            <div className="art-placeholder">{t.ilustracja}</div>
            <figcaption>{t.podpis}</figcaption>
          </figure>

          <p>{t.zamkniecie}</p>
        </div>

        <footer className="article-foot">
          <Link href="/articles">
            ← <T k="articles_back" />
          </Link>
          <Link href="/">
            <T k="articles_home" />
          </Link>
        </footer>
      </article>
    </main>
  );
}
