"""Buduje app/articles/hypothesis-instead-of-a-label/tresc.tsx z kopii roboczej A9 (wersja C, PL) i jej przekładu EN.
Akapity łączone parami (ta sama kolejność w obu plikach). Uruchomienie: python3 scripts/a9_tresc_z_kopii.py ~/localhost/my/03-linkedin/posty/w-produkcji/artykuly app/articles/hypothesis-instead-of-a-label/tresc.tsx"""
import re, sys, json
kat, wyj = sys.argv[1], sys.argv[2]
def czytaj(f, tytul, stop):
    t = open(f"{kat}/{f}").read()
    b = t.split(tytul, 1)[1]
    tresc, _, zrodla = b.partition(stop)
    tresc = re.sub(r'%%.*?%%', '', tresc, flags=re.S)
    return [p.strip() for p in tresc.split('\n\n') if p.strip()], re.sub(r'%%.*?%%', '', zrodla, flags=re.S)
pl, zr_pl = czytaj('A9-hipoteza-zamiast-etykiety.md', '# Hipoteza zamiast etykiety', '## Źródła')
en, _ = czytaj('A9-hipoteza-zamiast-etykiety-en.md', '# A hypothesis, not a label', '\n## Sources')
assert len(pl) == len(en)
grupy = []  # [(naglowek, [pozycje])]
for linia in zr_pl.splitlines():
    m = re.match(r'^\*\*(.+)\*\*$', linia.strip())
    if m: grupy.append((m.group(1), [])); continue
    if linia.startswith('- '): grupy[-1][1].append(linia[2:].strip())
NAZWY_EN = {'Psychologia': 'Psychology', 'Badania nad modelami AI': 'Research on AI models', 'Książki': 'Books'}
def jsx(s):
    s = s.replace('{', '&#123;').replace('}', '&#125;')
    czesci = re.split(r'\*\*(.+?)\*\*', s)
    if len(czesci) == 1: return json.dumps(s, ensure_ascii=False)
    out = ''.join(f'<strong>{c}</strong>' if i % 2 else c for i, c in enumerate(czesci))
    return '<>' + out + '</>'
def slownik(par):
    return '\n'.join(f'    b{i:02d}: {jsx(re.sub(r"^## ", "", p))},' for i, p in enumerate(par))
uklad = []
for i, p in enumerate(pl):
    if p.startswith('## '): uklad.append(f'          <h2>{{t.b{i:02d}}}</h2>')
    elif pl[i-1] == '## Na koniec': uklad.append(f'          <div className="art-dark">\n            <p>{{t.b{i:02d}}}</p>\n          </div>')
    else: uklad.append(f'          <p>{{t.b{i:02d}}}</p>')
    if p.startswith('Trzecie piętro opisuje socjologia'):
        uklad.append('\n          <blockquote className="art-pull">{t.cytat}</blockquote>\n')
def link(poz):
    m = re.search(r'(https?://\S+)$', poz)
    if not m: return f"      <li>{json.dumps(poz, ensure_ascii=False)[1:-1]}</li>"
    tekst = poz[:m.start()].rstrip(': ').rstrip()
    return f'      <li>{tekst}: <a href="{m.group(1)}">{m.group(1).replace("https://", "")}</a></li>'
zrodla_jsx = '\n'.join(
    f'          <h3>{{lang === "pl" ? {json.dumps(g, ensure_ascii=False)} : {json.dumps(NAZWY_EN[g])}}}</h3>\n          <ul>\n' + '\n'.join(link(p) for p in poz) + '\n          </ul>'
    for g, poz in grupy)
tsx = f'''\'use client\';

import Link from 'next/link';
import type {{ ReactNode }} from 'react';
import {{ T, useLang }} from '@/components/lang';
import type {{ Lang }} from '@/content/site';
import okladka from './okladka.jpg';

/**
 * Artykuł dwujęzyczny A9 „Hipoteza zamiast etykiety”, pełna wersja C zaakceptowana przez Janusza 9.11.2026.
 * PL = kopia robocza w vaulcie My: 03-linkedin/posty/w-produkcji/artykuly/A9-hipoteza-zamiast-etykiety.md (bez %% … %%).
 * EN = przekład akapit w akapit: A9-hipoteza-zamiast-etykiety-en.md w tym samym folderze.
 * Źródła = sekcja „## Źródła” wersji C. Plik generowany skryptem scripts/a9_tresc_z_kopii.py z obu kopii; zmiany wprowadzaj w kopiach, nie tutaj.
 * Wersja skrócona na LinkedIn (D) to osobny plik i nie trafia na tę stronę.
 * Okładka: rysunek tuszem i akwarelą (ai-engineer/www/linkedin/okladki/hipoteza-zamiast-etykiety-rysunek.jpg).
 */

type Blok = ReactNode;

const TRESC: Record<Lang, Record<string, Blok>> = {{
  pl: {{
    label: "ARTYKUŁ · AI I PSYCHOLOGIA",
    tytul: "Hipoteza zamiast etykiety",
    lead: "Mentor AI w mojej aplikacji zamienił zdanie napisane w złości w diagnozę. Skąd biorą się etykiety o ludziach, dlaczego system AI z pamięcią robi z nich akta i co zbudowałem zamiast diagnoz.",
    data: "11 listopada 2026",
    tag: "AI i psychologia",
    czas: "17 min czytania",
    cytat: "System AI z pamięcią to instytucja z aktami.",
    zrodlaNaglowek: "Źródła",
    alt: "Rysunek tuszem i akwarelą: zmęczony mężczyzna przy laptopie z wykresem w dół wylewa frustrację, a malutki archiwariusz na biurku zapisuje to na fiszce i chowa do szafki katalogowej. Podpis: „I’ll make a note of that.”",
{slownik(pl)}
  }},
  en: {{
    label: "ARTICLE · AI AND PSYCHOLOGY",
    tytul: "A hypothesis, not a label",
    lead: "The AI mentor in my app turned a sentence I wrote in anger into a diagnosis. Where labels about people come from, why an AI system with memory turns them into files, and what I built instead of diagnoses.",
    data: "11 November 2026",
    tag: "AI and psychology",
    czas: "17 min read",
    cytat: "An AI system with memory is an institution that keeps files.",
    zrodlaNaglowek: "Sources",
    alt: "Ink and watercolour cartoon: a tired man at a laptop with a falling chart vents his frustration, while a tiny archivist on the desk writes it on an index card and files it in a card catalogue. Caption: “I’ll make a note of that.”",
{slownik(en)}
  }},
}};

export function Tresc() {{
  const {{ lang }} = useLang();
  const t = TRESC[lang];

  return (
    <main className="subpage">
      <article className="narrow">
        <header className="article-head">
          <span className="label">{{t.label}}</span>
          <h1>{{t.tytul}}</h1>
          <p className="lead">{{t.lead}}</p>
          <div className="art-meta">
            <span>{{t.data}}</span>
            <span>{{t.tag}}</span>
            <span>{{t.czas}}</span>
          </div>
        </header>

        <div className="article-body">
          <figure>
            {{/* eslint-disable-next-line @next/next/no-img-element */}}
            <img src={{okladka.src}} width={{okladka.width}} height={{okladka.height}} alt={{String(t.alt)}} />
          </figure>

{chr(10).join(uklad)}

          <h2>{{t.zrodlaNaglowek}}</h2>
{zrodla_jsx}
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
}}
'''
open(wyj, 'w').write(tsx)
print('akapity', len(pl), 'źródła', sum(len(p) for _, p in grupy), [g for g, _ in grupy])
