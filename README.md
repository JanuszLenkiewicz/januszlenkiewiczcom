# januszlenkiewicz.com

Osobista strona Janusza Lenkiewicza — **Founder, Trader AI Assistant · AI Engineer**: analiza procesów, wdrożenia AI w firmach, agenci AI, AI na urządzeniu. Wizytówka dla klientów i rekruterów. Wersja z 2026-07-15 zastąpiła starą stronę (Psycholog · Developer · Twórca; Reparse/Rozkładnia/CalmParent) — poprzednia wersja w [`archive/stara-strona-2026/`](archive/stara-strona-2026/).

## Deploy

**Vercel** (Next.js, App Router) z gałęzi `main`, domena `januszlenkiewicz.com`. **Każdy push do `main` publikuje stronę na żywo.** Pracuj na gałęzi i scalaj dopiero po akceptacji Janusza. Stary statyczny `index.html` w katalogu głównym nie jest już serwowany (zostaje jako archiwum obok `archive/`).

## Treść — źródła prawdy

Teksty obu wersji językowych są w `content/site.ts` (od 24.10.2026 przepisane pod analizę procesów, wdrożenia AI, agentów i AI na urządzeniu). Fakty biograficzne i opisy projektów pochodzą z CV w prywatnym repo kampanii (`cv/cv-pl.md`, `cv/cv-en.md`) i są zgodne z LinkedIn; przy rozjeździe wygrywa CV. Zasada twardej uczciwości: zero zawyżania, projekty opisane tak, jak działają. Projekt „Atelier” opisywany bez danych osobowych uczestniczki.

## Podgląd lokalny

```bash
npm ci && npm run build && npx next start -p 3010
# → http://localhost:3010
```

## Artykuły — jak artykuł z LinkedIna trafia na stronę

Każdy artykuł ma na stronie wersję polską i angielską (przełącznik EN/PL w menu). Mechanika: `content/articles.ts` (rejestr, opis w nagłówku pliku) + katalog `app/articles/{slug}/` (`page.tsx` z metadanymi, `tresc.tsx` z tekstami obu wersji i układem). Slug jest angielski, bo strona domyślnie pokazuje wersję angielską.

Skąd bierzemy tekst:

1. **Wersja polska** to kopia robocza artykułu w vaulcie My (`my/03-linkedin/posty/w-produkcji/artykuly/A{n}-{slug}.md`) albo oryginał w repo `ai-engineer` (`www/linkedin/artykuly/{slug}.md`), jeśli już istnieje. Przenosimy go dosłownie, bez notatek `%% … %%`. Wersję, która trafiła na stronę (commit kopii), zapisujemy w komentarzu na górze `tresc.tsx`.
2. **Wersja angielska** to przekład tego samego tekstu (pisze Opus). Gdy oryginał ma już angielską wersję do publikacji na LinkedInie, bierzemy ją.
3. **Źródła** z sekcji „Komentarz ze źródłami” trafiają na stronę jako sekcja „Sources / Źródła” na końcu artykułu (DOI jako linki).
4. Po wpisaniu: `npm run build`, podgląd na `localhost:3010` w obu językach i na wąskim ekranie, potem gałąź `feat/artykul-{slug}` i **scalenie do `main` dopiero po akceptacji Janusza** (scalenie publikuje stronę).
5. W kopii roboczej w vaulcie My uzupełnij pole `strona:` adresem artykułu na januszlenkiewicz.com.

Opublikowane artykuły:

| Slug | Źródło tekstu | Data |
|---|---|---|
| `translator-heard-nothing` | `ai-engineer/kampania/linkedin-artykul-szept-slyszenie.md` | 2026-10-27 |
| `hypothesis-instead-of-a-label` | A9 „Hipoteza zamiast etykiety”. **Do podmiany przed publikacją (decyzja Janusza 6.11.2026):** na stronę idzie 1:1 kopia robocza po zakończeniu edycji (PL) + jej przekład EN. Na tej gałęzi leży jeszcze wersja z 31.10 (commit kopii `6c1836c`), nieopublikowana. Po stronie: osobne wpisy na Bluesky i X z linkiem do artykułu na stronie (decyzja Janusza 6.11). | 2026-11-01 (szkic) |
