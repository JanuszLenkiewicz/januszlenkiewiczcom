'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useLang } from '@/components/lang';
import { PrezentacjeChmura } from '@/components/prezentacja-chmura';
import { KARTY_AZURE, STRONA_AZURE, type KartaAzure } from '@/content/azure';

type Slajd =
  | { typ: 'tyt'; tytul: string; opis: string }
  | { typ: 'przerywnik'; tytul: string }
  | { typ: 'karta'; karta: KartaAzure };

export function Azure() {
  const { lang } = useLang();
  const s = STRONA_AZURE[lang];
  const [pokaz, setPokaz] = useState(false);
  const [i, setI] = useState(0);
  const sceneRef = useRef<HTMLDivElement>(null);
  const dotyk = useRef<{ x: number; y: number } | null>(null);

  const pojecia = KARTY_AZURE.filter((k) => k.rodzaj === 'pojecie');
  const uslugi = KARTY_AZURE.filter((k) => k.rodzaj === 'usluga');

  const slajdy: Slajd[] = [
    { typ: 'tyt', tytul: s.tytul, opis: s.lead },
    { typ: 'przerywnik', tytul: s.sekcja_pojecie },
    ...pojecia.map((karta): Slajd => ({ typ: 'karta', karta })),
    { typ: 'przerywnik', tytul: s.sekcja_usluga },
    ...uslugi.map((karta): Slajd => ({ typ: 'karta', karta })),
  ];
  const n = slajdy.length;

  const idz = useCallback((k: number) => setI(Math.max(0, Math.min(n - 1, k))), [n]);

  const otworz = () => {
    setI(0);
    setPokaz(true);
    try {
      document.documentElement.requestFullscreen?.().catch(() => {});
    } catch {
      /* brak pełnego ekranu — slajdy i tak zajmują całe okno */
    }
  };
  const zamknij = useCallback(() => {
    setPokaz(false);
    try {
      if (document.fullscreenElement) document.exitFullscreen?.().catch(() => {});
    } catch {
      /* jw. */
    }
  }, []);

  useEffect(() => {
    if (!pokaz) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const klawisz = (e: KeyboardEvent) => {
      if (e.key === 'Escape') zamknij();
      else if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        setI((x) => Math.min(n - 1, x + 1));
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        setI((x) => Math.max(0, x - 1));
      }
    };
    // wyjście z pełnego ekranu klawiszem Esc zamyka też prezentację
    const fs = () => {
      if (!document.fullscreenElement) setPokaz(false);
    };
    window.addEventListener('keydown', klawisz);
    document.addEventListener('fullscreenchange', fs);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', klawisz);
      document.removeEventListener('fullscreenchange', fs);
    };
  }, [pokaz, n, zamknij]);

  useEffect(() => {
    sceneRef.current?.scrollTo(0, 0);
  }, [i]);

  const karta = (k: KartaAzure) => {
    const t = k[lang];
    return (
      <article className={`az-card${k.wyroznienie ? ' az-hl' : ''}`} key={k.slug}>
        <h3>{t.nazwa}</h3>
        <p className="az-opis">{t.opis}</p>
        <ul>
          {t.punkty.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <p className="az-korzysc">
          <b>{s.korzysc}:</b> {t.korzysc}
        </p>
      </article>
    );
  };

  const sl = slajdy[i];

  return (
    <main className="subpage azure">
      <div className="container">
        <div className="page-head">
          <h1>{s.tytul}</h1>
          <p className="lead">{s.lead}</p>
          <button className="az-btn" onClick={otworz}>
            {s.pokaz}
          </button>
        </div>

        <PrezentacjeChmura
          platforma="azure"
          naglowek={
            lang === 'pl'
              ? 'Prezentacje: system agentów AI do przygotowania spotkań'
              : 'Presentations: an AI agent system for meeting preparation'
          }
        />

        <section className="az-sekcja">
          <h2>{s.sekcja_pojecie}</h2>
          <div className="az-grid">{pojecia.map(karta)}</div>
        </section>
        <section className="az-sekcja">
          <h2>{s.sekcja_usluga}</h2>
          <div className="az-grid">{uslugi.map(karta)}</div>
        </section>
      </div>

      {pokaz && (
        <div
          className="az-pokaz"
          role="dialog"
          aria-modal="true"
          aria-label={s.tytul}
          onTouchStart={(e) => {
            const t = e.touches[0];
            dotyk.current = { x: t.clientX, y: t.clientY };
          }}
          onTouchEnd={(e) => {
            const p = dotyk.current;
            dotyk.current = null;
            if (!p) return;
            const t = e.changedTouches[0];
            const dx = t.clientX - p.x;
            if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(t.clientY - p.y)) idz(i + (dx < 0 ? 1 : -1));
          }}
        >
          <div className="az-gora">
            <span>
              {i + 1} / {n}
            </span>
            <button className="az-wyjdz" onClick={zamknij}>
              {s.zamknij}
            </button>
          </div>
          <div
            className="az-scena"
            ref={sceneRef}
            onClick={(e) => {
              if ((e.target as HTMLElement).closest('button')) return;
              const polowa = e.currentTarget.getBoundingClientRect().width / 2;
              idz(i + (e.clientX - e.currentTarget.getBoundingClientRect().left < polowa / 2 ? -1 : 1));
            }}
          >
            {sl.typ === 'tyt' && (
              <div className="az-sl az-sl-tyt">
                <h2>{sl.tytul}</h2>
                <p className="az-sl-opis">{sl.opis}</p>
              </div>
            )}
            {sl.typ === 'przerywnik' && (
              <div className="az-sl az-sl-przer">
                <h2>{sl.tytul}</h2>
              </div>
            )}
            {sl.typ === 'karta' && (
              <div className={`az-sl${sl.karta.wyroznienie ? ' az-hl' : ''}`}>
                <h2>{sl.karta[lang].nazwa}</h2>
                <p className="az-sl-opis">{sl.karta[lang].opis}</p>
                <ul>
                  {sl.karta[lang].punkty.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <p className="az-korzysc">
                  <b>{s.korzysc}:</b> {sl.karta[lang].korzysc}
                </p>
              </div>
            )}
          </div>
          <div className="az-dol">
            <button className="az-nav" onClick={() => idz(i - 1)} disabled={i === 0} aria-label="Previous">
              ←
            </button>
            <div className="az-pasek">
              <i style={{ width: `${((i + 1) / n) * 100}%` }} />
            </div>
            <button className="az-nav" onClick={() => idz(i + 1)} disabled={i === n - 1} aria-label="Next">
              →
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
