# januszlenkiewicz.com

Osobista strona Janusza Lenkiewicza — **AI Engineer × psychologia**. Wizytówka pod procesy rekrutacyjne (inżynier aplikacji LLM, human-in-the-loop). Wersja z 2026-07-15 zastąpiła starą stronę (Psycholog · Developer · Twórca; Reparse/Rozkładnia/CalmParent) — poprzednia wersja w [`archive/stara-strona-2026/`](archive/stara-strona-2026/).

## Deploy

**GitHub Pages** z gałęzi `main` (root), domena własna przez `CNAME` → `januszlenkiewicz.com` (DNS wskazuje na IP GitHub Pages). **Każdy push do `main` publikuje stronę na żywo w ciągu ~1 min.**

## Stack

Czysty statyczny HTML + CSS w jednym pliku `index.html` (bez frameworków, bez builda). Fonty: Montserrat + Inter (Google Fonts). Projekt graficzny: monochromatyczny editorial (czerń `#1A1A1A`, szarość `#999999`, `#F7F7F7`, zero zaokrągleń) — adaptacja layoutu dostarczonego przez Janusza 2026-07-15.

## Treść — źródła prawdy

Fakty biograficzne i opisy projektów pochodzą z pakietu kampanii `~/localhost/ai-engineer` (CV `cv/cv-pl.md`, lekcje 01 i 21). Zasada twardej uczciwości: zero zawyżania, projekty opisane tak, jak działają. Projekt „Atelier" opisywany bez danych osobowych uczestniczki.

## Podgląd lokalny

```bash
python3 -m http.server 8899
# → http://localhost:8899
```
