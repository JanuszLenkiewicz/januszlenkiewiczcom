'use client';

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { dict, type Klucz, type Lang } from '@/content/site';

const KLUCZ_PAMIECI = 'jl_lang';

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: Klucz) => string };

const LangCtx = createContext<Ctx>({ lang: 'en', setLang: () => {}, t: (k) => dict.en[k] });

export function LangProvider({ children }: { children: ReactNode }) {
  // serwer i pierwszy render zawsze po angielsku — polski dociąga się po montażu,
  // więc w źródle strony (i dla robotów) jest stabilna wersja angielska
  const [lang, setLangState] = useState<Lang>('en');

  useEffect(() => {
    try {
      if (localStorage.getItem(KLUCZ_PAMIECI) === 'pl') setLangState('pl');
    } catch {
      /* prywatny tryb przeglądarki — zostajemy przy angielskim */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(KLUCZ_PAMIECI, l);
    } catch {
      /* jw. */
    }
  };

  return <LangCtx.Provider value={{ lang, setLang, t: (k) => dict[lang][k] }}>{children}</LangCtx.Provider>;
}

export const useLang = () => useContext(LangCtx);

type TProps = {
  k: Klucz;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
};

/**
 * Renderuje tekst z słownika. Część wartości zawiera znaczniki HTML (<strong>, listy
 * kompetencji), dlatego wstrzykujemy je jako HTML — treść pochodzi wyłącznie z content/site.ts,
 * czyli z naszego repozytorium, nigdy z zewnątrz.
 */
export function T({ k, as: Tag = 'span', className }: TProps) {
  const { t } = useLang();
  return <Tag className={className} dangerouslySetInnerHTML={{ __html: t(k) }} />;
}
