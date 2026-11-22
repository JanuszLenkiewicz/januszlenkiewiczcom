'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useLang } from '@/components/lang';
import { PREZENTACJE_CHMURA, type Prezentacja } from '@/content/prezentacje-chmura';
import { FILMY_CHMURA, type Film } from '@/content/filmy-chmura';

type Platforma = 'azure' | 'vertex';

/** Etykiety interfejsu (treść slajdów pochodzi wyłącznie z content/prezentacje-chmura.ts). */
const UI = {
  pl: {
    uruchom: 'Uruchom prezentację',
    zamknij: 'Zamknij (Esc)',
    problem: 'Problem',
    rozwiazanie: 'Rozwiązanie',
    efekt: 'Efekt',
    poprzedni: 'Poprzedni slajd',
    nastepny: 'Następny slajd',
  },
  en: {
    uruchom: 'Start presentation',
    zamknij: 'Close (Esc)',
    problem: 'Problem',
    rozwiazanie: 'Solution',
    efekt: 'Result',
    poprzedni: 'Previous slide',
    nastepny: 'Next slide',
  },
} as const;

/** Lista prezentacji platformy (kafelki-przyciski) + pełnoekranowy tryb prezentacji. */
export function PrezentacjeChmura({ platforma, naglowek }: { platforma: Platforma; naglowek?: string }) {
  const { lang } = useLang();
  const [otwarta, setOtwarta] = useState<Prezentacja | null>(null);
  const [otwartyFilm, setOtwartyFilm] = useState<Film | null>(null);
  const lista = PREZENTACJE_CHMURA[platforma];
  const filmy = FILMY_CHMURA[platforma];
  const u = UI[lang];

  return (
    <section className="az-sekcja az-prez">
      {naglowek && <h2>{naglowek}</h2>}
      <div className="az-grid">
        {lista.map((p) => (
          <button className="az-prez-kafel" key={p.id} onClick={() => setOtwarta(p)}>
            <h3>{p[lang].tytul}</h3>
            <span className="az-prez-pod">{p[lang].podtytul}</span>
            <span className="az-opis">{p[lang].opis_listy}</span>
            <span className="az-prez-start">{u.uruchom} →</span>
          </button>
        ))}
        {filmy.map((f) => (
          <button className="az-prez-kafel az-film-kafel" key={f.youtubeId} onClick={() => setOtwartyFilm(f)}>
            <h3>{f[lang].tytul}</h3>
            <span className="az-prez-pod">{f[lang].podtytul}</span>
            <span className="az-opis">{f[lang].opis}</span>
            <span className="az-prez-start">
              <span aria-hidden="true">▶ </span>
              {f[lang].przycisk}
            </span>
          </button>
        ))}
      </div>
      {otwartyFilm && <OdtwarzaczFilmu film={otwartyFilm} onZamknij={() => setOtwartyFilm(null)} />}
      {otwarta && <Pokaz prez={otwarta} onZamknij={() => setOtwarta(null)} />}
    </section>
  );
}

/** Pełnoekranowa nakładka z odtwarzaczem YouTube; po zamknięciu iframe znika z DOM (film przestaje grać). */
function OdtwarzaczFilmu({ film, onZamknij }: { film: Film; onZamknij: () => void }) {
  const { lang } = useLang();
  const u = UI[lang];
  const tytul = film[lang].tytul;

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const klawisz = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onZamknij();
    };
    window.addEventListener('keydown', klawisz);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', klawisz);
    };
  }, [onZamknij]);

  return (
    <div className="az-pokaz az-film-pokaz" role="dialog" aria-modal="true" aria-label={tytul}>
      <div className="az-gora">
        <span>{tytul}</span>
        <button className="az-wyjdz" onClick={onZamknij} autoFocus>
          {u.zamknij}
        </button>
      </div>
      <div className="az-film-ramka">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${film.youtubeId}?autoplay=1&rel=0`}
          title={tytul}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      </div>
    </div>
  );
}

function Pokaz({ prez, onZamknij }: { prez: Prezentacja; onZamknij: () => void }) {
  const { lang } = useLang();
  const u = UI[lang];
  const tresc = prez[lang];
  const slajdy = tresc.slajdy;
  const n = slajdy.length;
  const [i, setI] = useState(0);
  const sceneRef = useRef<HTMLDivElement>(null);
  const dotyk = useRef<{ x: number; y: number } | null>(null);
  const idz = useCallback((k: number) => setI(Math.max(0, Math.min(n - 1, k))), [n]);

  // pełny ekran po otwarciu; brak zgody przeglądarki nie przeszkadza (nakładka i tak zajmuje całe okno)
  useEffect(() => {
    try {
      document.documentElement.requestFullscreen?.().catch(() => {});
    } catch {
      /* jw. */
    }
    return () => {
      try {
        if (document.fullscreenElement) document.exitFullscreen?.().catch(() => {});
      } catch {
        /* jw. */
      }
    };
  }, []);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const klawisz = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onZamknij();
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
      if (!document.fullscreenElement) onZamknij();
    };
    window.addEventListener('keydown', klawisz);
    document.addEventListener('fullscreenchange', fs);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', klawisz);
      document.removeEventListener('fullscreenchange', fs);
    };
  }, [n, onZamknij]);

  useEffect(() => {
    sceneRef.current?.scrollTo(0, 0);
  }, [i]);

  const sl = slajdy[i];

  return (
    <div
      className="az-pokaz"
      role="dialog"
      aria-modal="true"
      aria-label={tresc.tytul}
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
        <button className="az-wyjdz" onClick={onZamknij}>
          {u.zamknij}
        </button>
      </div>
      <div
        className="az-scena"
        ref={sceneRef}
        onClick={(e) => {
          if ((e.target as HTMLElement).closest('button')) return;
          const r = e.currentTarget.getBoundingClientRect();
          idz(i + (e.clientX - r.left < r.width / 4 ? -1 : 1));
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
            <p className="az-sl-opis">{sl.opis}</p>
          </div>
        )}
        {sl.typ === 'karta' && (
          <div className="az-sl">
            <p className="az-etykieta">{sl.etykieta}</p>
            <h2>{sl.tytul}</h2>
            {sl.problem && (
              <p className="az-problem">
                <b>{u.problem}</b>
                {sl.problem}
              </p>
            )}
            <p className="az-sl-opis">
              {sl.problem && <b className="az-roz">{u.rozwiazanie}: </b>}
              {sl.opis}
            </p>
            {sl.punkty.length > 0 && (
              <ul>
                {sl.punkty.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            )}
            {sl.korzysc && (
              <p className="az-korzysc">
                <b>{u.efekt}:</b> {sl.korzysc}
              </p>
            )}
          </div>
        )}
      </div>
      <div className="az-dol">
        <button className="az-nav" onClick={() => idz(i - 1)} disabled={i === 0} aria-label={u.poprzedni}>
          ←
        </button>
        <div className="az-pasek">
          <i style={{ width: `${((i + 1) / n) * 100}%` }} />
        </div>
        <button className="az-nav" onClick={() => idz(i + 1)} disabled={i === n - 1} aria-label={u.nastepny}>
          →
        </button>
      </div>
    </div>
  );
}
