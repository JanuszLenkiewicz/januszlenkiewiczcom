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
