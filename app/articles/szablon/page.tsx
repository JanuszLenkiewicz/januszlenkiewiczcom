import type { Metadata } from 'next';
import Link from 'next/link';
import { T } from '@/components/lang';

/**
 * SZABLON ARTYKUŁU — nie jest wpisany do rejestru w content/articles.ts, więc nie pojawia się
 * na liście, i ma noindex, więc nie trafi do wyszukiwarek. Służy do dwóch rzeczy:
 * podejrzenia wszystkich dostępnych klocków układu i skopiowania jako punkt startu nowego tekstu.
 *
 * Nowy artykuł: skopiuj ten katalog na app/articles/twoj-slug, podmień treść, usuń noindex
 * i dopisz wpis do ARTYKULY w content/articles.ts.
 */

export const metadata: Metadata = {
  title: 'Szablon artykułu | Janusz Lenkiewicz',
  robots: { index: false, follow: false },
};

export default function Szablon() {
  return (
    <main className="subpage">
      <article className="narrow">
        <header className="article-head">
          <span className="label">SZABLON — PODGLĄD KLOCKÓW UKŁADU</span>
          <h1>Tytuł artykułu wchodzi tutaj i może być długi na dwa wiersze</h1>
          <p className="lead">
            Lead: jedno–dwa zdania, które mówią, o czym jest tekst i dlaczego ktoś ma go przeczytać.
            Większy stopień pisma niż reszta, żeby wchodziło się w tekst miękko.
          </p>
          <div className="art-meta">
            <span>8 sierpnia 2026</span>
            <span className="badge">PL</span>
            <span>Architektura</span>
            <span>7 min czytania</span>
          </div>
        </header>

        <div className="article-body">
          <p>
            Akapit otwierający. Szerokość kolumny jest celowo ograniczona do około 820 pikseli —
            przy dłuższym wierszu oko gubi początek następnej linii, a tekst techniczny czyta się
            wolniej niż powieść.
          </p>

          <h2>Śródtytuł drugiego poziomu</h2>
          <p>
            Zwykły akapit z <strong>wyróżnieniem</strong>, <a href="#">odnośnikiem</a> i fragmentem
            kodu w tekście: <code>scrollIntoView()</code>.
          </p>

          <ul>
            <li>Punkt listy — krótki i konkretny.</li>
            <li>Drugi punkt, który może być dłuższy i zajmować dwa wiersze bez utraty czytelności.</li>
          </ul>

          <blockquote className="art-pull">
            Cytat wyciągnięty na wierzch. Używaj go, kiedy chcesz, żeby jedno zdanie zostało
            w głowie po zamknięciu karty.
          </blockquote>

          <div className="art-callout">
            <b>Wniosek</b>
            Ramka na wniosek, ostrzeżenie albo definicję. Wyróżnia się tłem i lewą krawędzią,
            nie krzycząc kolorem.
          </div>

          <h2>Klocki do składania układu</h2>
          <p>Poniżej dwie kolumny — dobre do zestawień „przed / po” albo „mit / fakt”.</p>

          <div className="art-cols">
            <div>
              <h3>Lewa kolumna</h3>
              <p>Na wąskim ekranie kolumny same układają się jedna pod drugą.</p>
            </div>
            <div>
              <h3>Prawa kolumna</h3>
              <p>Bez dodatkowej pracy z Twojej strony.</p>
            </div>
          </div>

          <div className="art-dark">
            <p>
              Blok na czarnym tle — ten sam akcent, co panel na stronie głównej i sekcja
              „podejście”. Dobry na puentę albo wyróżnioną tezę.
            </p>
          </div>

          <h2>Kod i ilustracje</h2>
          <pre>
            <code>{`const goTo = (el, behavior) =>
  el.scrollIntoView({ behavior, block: 'start' });`}</code>
          </pre>

          <figure>
            {/* Obrazy wrzucaj do public/articles/{slug}/ i podawaj ścieżkę od korzenia */}
            <div style={{ background: 'var(--light)', border: '1px solid var(--line)', padding: '80px 0', textAlign: 'center', color: 'var(--gray)', fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
              miejsce na ilustrację
            </div>
            <figcaption>Podpis pod ilustracją — mówi, co widać, a nie powtarza tytułu.</figcaption>
          </figure>

          <p>
            Akapit zamykający. Dalej stopka artykułu z powrotami — na wąskim ekranie zawija się
            do jednej kolumny.
          </p>
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
