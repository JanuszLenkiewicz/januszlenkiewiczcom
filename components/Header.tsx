'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { SEKCJE } from '@/content/sections';
import { T, useLang } from './lang';

export function Header() {
  const { lang, setLang } = useLang();
  const [otwarte, setOtwarte] = useState(false);
  const sciezka = usePathname();

  // klik w sekcję, na której już jesteśmy, nie zmienia trasy — przewijamy wtedy ręcznie
  const klikSekcji = (slug: string) => {
    if (sciezka !== `/${slug}`) return;
    document.getElementById(slug)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const linki = (mobilne: boolean) => (
    <>
      {SEKCJE.map(({ slug, klucz }) => (
        <Link
          key={slug}
          href={`/${slug}`}
          scroll={false}
          className={sciezka === `/${slug}` ? 'active' : undefined}
          onClick={() => {
            klikSekcji(slug);
            if (mobilne) setOtwarte(false);
          }}
        >
          <T k={klucz} />
        </Link>
      ))}
      <Link
        href="/articles"
        className={sciezka.startsWith('/articles') ? 'active' : undefined}
        onClick={() => mobilne && setOtwarte(false)}
      >
        <T k="nav_articles" />
      </Link>
    </>
  );

  return (
    <>
      <header className="site-header">
        <Link href="/" className="brand">
          JANUSZ LENKIEWICZ
        </Link>
        <div className="nav-right">
          <nav className="desktop">{linki(false)}</nav>
          <div className="lang">
            <button className={lang === 'en' ? 'active' : undefined} onClick={() => setLang('en')}>
              EN
            </button>
            <span>·</span>
            <button className={lang === 'pl' ? 'active' : undefined} onClick={() => setLang('pl')}>
              PL
            </button>
          </div>
          <button className="menu-btn" aria-label="Menu" onClick={() => setOtwarte((o) => !o)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>
      <nav className={otwarte ? 'mobile open' : 'mobile'}>{linki(true)}</nav>
    </>
  );
}
