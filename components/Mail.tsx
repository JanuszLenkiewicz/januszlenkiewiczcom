'use client';

import { useEffect, useState } from 'react';

/**
 * Adres składany dopiero w przeglądarce — w kodzie źródłowym strony nie ma go w postaci
 * tekstowej, więc automaty zbierające adresy regexem (bez wykonywania JS) nic nie znajdą.
 */
export function useAdres() {
  const [adres, setAdres] = useState('');
  useEffect(() => {
    setAdres(atob('ai5sZW5raWV3aWN6') + String.fromCharCode(64) + atob('bWUuY29t'));
  }, []);
  return adres;
}

export function MailLink({ children, className }: { children?: React.ReactNode; className?: string }) {
  const adres = useAdres();
  return (
    <a className={className} href={adres ? `mailto:${adres}` : '#'}>
      {children ?? <Adres />}
    </a>
  );
}

/** Sam tekst adresu — do wstawienia w środek istniejącego odnośnika. */
export function Adres() {
  const adres = useAdres();
  return <span>{adres || '·····'}</span>;
}
