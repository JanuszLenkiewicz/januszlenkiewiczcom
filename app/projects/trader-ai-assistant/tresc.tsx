'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import { T, useLang } from '@/components/lang';
import type { Lang } from '@/content/site';

/**
 * KULISY PROJEKTU TRADER AI ASSISTANT
 *
 * Strona rośnie razem z artykułami na LinkedInie: każda sekcja to kulisy jednego tekstu
 * (decyzje, mechanizmy, stan na dziś). Nową sekcję dopisujesz w obu językach w TRESC
 * i dokładasz blok w JSX niżej. Fakty biorą się z kodu Kierunków i ze źródeł artykułu
 * (ai-engineer/www/linkedin/artykuly/{slug}.md); zasada twardej uczciwości jak na reszcie strony.
 *
 * Link do artykułu na LinkedInie wpisujesz w LINKEDIN po publikacji; pusty = bez odnośnika.
 */

const LINKEDIN = {
  najpierwSam: '',
};

type Blok = ReactNode;

const TRESC: Record<Lang, Record<string, Blok>> = {
  pl: {
    label: 'PROJEKT · KULISY',
    tytul: 'Trader AI Assistant: jak to buduję',
    lead: 'Platforma do mentoringu traderów z agentami AI, którą zaprojektowałem i zbudowałem. Tu opisuję decyzje, które w artykułach mieszczą się w jednym akapicie: co zrobiłem, dlaczego i gdzie jeszcze nie działa tak, jak powinno.',
    tag: 'Kulisy projektu',
    aktualizacja: 'Aktualizowane razem z artykułami',
    otwarcie:
      'Trader AI Assistant jest w sprzedaży od 28 września 2026 roku, w przeglądarce, na iOS i macOS. Mentor AI Milo prowadzi każdego tradera według jego własnej, spisanej metody, a agenci przygotowują plan sesji, domykają dzień, budują pamięć o traderze i piszą wieczorem głęboką analizę dnia. Uczciwie o skali: dziś to dowód pełnego cyklu produktu, od analizy procesu po sprzedaż, a nie duża baza użytkowników.',
    rosnie:
      'Ta strona rośnie razem z moimi artykułami na LinkedInie. Każda sekcja to kulisy jednego tekstu: mechanizmy, daty i stan na dziś, bez skracania do jednego zdania.',

    s1h: 'Kto myśli pierwszy',
    s1artykul: 'Kulisy artykułu „Najpierw sam, potem AI”',
    s1wstep:
      'Badania pokazują, że wynik osiągnięty z AI nie mówi, czego człowiek się nauczył, a liczy się jego aktywny udział. Michael Gerlich radzi w APA Monitor: najpierw przemyśl problem sam, a dopiero potem pokaż AI swoje rozwiązanie. Biorę tę radę jako zasadę projektową: tam, gdzie umiejętność ma przetrwać dzień bez AI, najpierw własna próba człowieka, potem pomoc. A ponieważ zasada oparta na dobrej woli przegrywa z pośpiechem, staram się, żeby pilnował jej kod. W projektowaniu agentów ten kod ma nazwę: harness, czyli wszystko wokół modelu: narzędzia, bramki, kolejność kroków, to, co model widzi i kiedy. Harness to proces zapisany w kodzie, więc projektując harness, projektuję proces. Oto, jak to wygląda na platformie dziś.',

    m1h: 'Dwa mentory, które nie widzą swoich ocen',
    m1: 'Głęboki mentor analizuje wieczorem dzień tradera i może sięgnąć po ocenę szybszego mentora, ale dopiero wtedy, gdy napisze własną główną analizę. Bramka siedzi w harnessie, w kodzie narzędzia, a nie w instrukcji dla modelu. W biegach, które oceny szybszego mentora nie dotyczą, tego narzędzia w ogóle nie ma na liście. Na produkcji sprawdziłem to po kolejności wywołań, nie tylko testem. Bez tej bramki zamiast drugiej opinii dostawałbym streszczenie pierwszej.',
    m1stan: 'Działa.',

    m2h: 'Ocena AI nie wraca do kontekstu',
    m2: 'Niezależna ocena transakcji, którą pisze osobny model, nigdy nie trafia do instrukcji szybszego mentora ani do danych dnia, które czyta głęboki mentor. To decyzja harnessu: o tym, co model zobaczy, rozstrzyga kod, który składa jego kontekst. Dzięki temu modele nie powtarzają po sobie cudzego werdyktu jak faktu o traderze.',
    m2stan: 'Działa.',

    m3h: 'Ocena planu czeka na rynek',
    m3: 'Od 20 sierpnia 2026 roku ocena AI planu sesji jest ukryta, dopóki plan nie zostanie rozliczony przez to, co zrobił rynek. Trader nie czyta werdyktu o swoim planie, zanim sam zobaczy, jak plan wypadł.',
    m3stan: 'Działa, niezależnie od ustawień konta.',

    m4h: 'Analizę rynku pisze trader',
    m4: 'Dziewiątego lipca 2026 roku dodałem osobną kartę z analizą startową pisaną przez AI. Przez lato powstały 122 takie analizy. Dwudziestego trzeciego września usunąłem kartę razem z danymi. Powód był testowy, nie psychologiczny: karta była eksperymentem. Skutek jest taki, że dziś analizę rynku pisze trader, a mentor ją recenzuje.',
    m4stan: 'Działa od 23 września 2026.',

    m5h: 'Ocena transakcji: zaprojektowana, ale wyłączona',
    m5: 'Każda transakcja dostaje ocenę AI, a ja zaprojektowałem ją z dwoma ustawieniami. Domyślne, wybrane na czas testów, pokazuje ocenę od razu po zapisaniu wyniku, więc trader czyta ją, zanim sam przeanalizuje swoją decyzję. Wybrałem je, bo tak było szybciej i wygodniej, także dla mnie, bo sam handluję na tej platformie. Docelowe każe ocenie czekać, aż trader zapisze własną analizę w sesji z mentorem. To drugie istnieje w harnessie i można je włączyć osobno dla każdego konta. Nie jest włączone: harness jest gotowy, brakuje decyzji procesowej, a tę mogę podjąć tylko ja.',
    m5stan: 'Gotowe w kodzie, wyłączone.',

    stanLabel: 'Stan',

    lekcjaH: 'Lekcja',
    lekcja: 'Instrukcja dla modelu jest prośbą. Harness jest warunkiem. Tam, gdzie kolejność ma znaczenie, pilnuje jej harness, a nie dobra wola modelu ani człowieka. Projektując harness, projektujesz proces.',

    dalejH: 'Co dalej',
    dalej:
      'Nie wiem jeszcze, co zmieni ocena transakcji, która czeka na opis tradera: czy poprawi jakość jego własnego myślenia, czy tylko doda mu pracy. Przygotowałem plan badania na sobie: fazy na zmianę z oceną od razu i z oceną po moim opisie, miary procesu zamiast wyniku finansowego, opisy oceniane na ślepo, bez wiedzy, z której fazy pochodzą, i plan zapisany przed startem. Brak różnicy też będzie wynikiem. Wyniki opiszę tutaj.',
  },
  en: {
    label: 'PROJECT · BEHIND THE SCENES',
    tytul: 'Trader AI Assistant: how I’m building it',
    lead: 'A mentoring platform for traders with AI agents, which I designed and built. Here I describe the decisions that get one paragraph in my articles: what I did, why, and where it does not yet work the way it should.',
    tag: 'Behind the scenes',
    aktualizacja: 'Updated together with the articles',
    otwarcie:
      'Trader AI Assistant has been on sale since 28 September 2026, on the web, iOS and macOS. The AI mentor Milo coaches each trader against their own written methodology, while agents prepare the session plan, close the day, build a memory of the trader and write a deep analysis of the day in the evening. Honest about scale: today it proves a full product cycle, from process analysis to sales, not a large user base.',
    rosnie:
      'This page grows together with my articles on LinkedIn. Each section is the backstage of one piece: mechanisms, dates and where things stand today, without squeezing it into a single sentence.',

    s1h: 'Who thinks first',
    s1artykul: 'Behind the article “Who thinks first: you or the AI?”',
    s1wstep:
      'Research shows that a result achieved with AI does not tell you what a person has learned, and that what matters is the person’s active participation. Michael Gerlich’s advice in the APA Monitor is to think the problem through yourself first and only then show the AI your solution. I take that advice as a design rule: where a skill has to survive a day without AI, the person’s own attempt comes first and help comes second. And since a rule that relies on goodwill loses to haste, I try to make code enforce it. In agent design that code has a name: the harness, everything around the model: tools, gates, the order of steps, what the model sees and when. The harness is the process written in code, so when I design the harness, I design the process. Here is how that looks on the platform today.',

    m1h: 'Two mentors that cannot see each other’s verdicts',
    m1: 'In the evening the deep mentor analyses the trader’s day and may look at the faster mentor’s assessment, but only after it has written its own main analysis. The gate sits in the harness, in the tool’s code, not in the model’s instructions. In runs that have nothing to do with the faster mentor’s assessment, the tool is not on the list at all. I confirmed this in production from the order of calls, not only with a test. Without that gate I would be getting a summary of the first opinion instead of a second one.',
    m1stan: 'Working.',

    m2h: 'AI verdicts do not flow back into context',
    m2: 'The independent trade assessment, written by a separate model, never enters the faster mentor’s instructions or the day data the deep mentor reads. That is a harness decision: the code that assembles a model’s context decides what the model gets to see. That keeps the models from repeating someone else’s verdict as if it were a fact about the trader.',
    m2stan: 'Working.',

    m3h: 'The plan assessment waits for the market',
    m3: 'Since 20 August 2026 the AI assessment of the session plan stays hidden until the plan has been settled by what the market did. The trader does not read a verdict on their plan before seeing how the plan played out.',
    m3stan: 'Working, regardless of account settings.',

    m4h: 'The trader writes the market analysis',
    m4: 'On 9 July 2026 I added a separate tab with a starting analysis written by AI. Over the summer 122 of them were produced. On 23 September I removed the tab together with its data. The reason was a testing one, not a psychological one: the tab was an experiment. The effect is that today the trader writes the market analysis and the mentor reviews it.',
    m4stan: 'In place since 23 September 2026.',

    m5h: 'Trade assessment: designed, but switched off',
    m5: 'Every trade gets an AI assessment, and I designed it with two settings. The default, chosen for the testing period, shows the assessment as soon as the result is saved, so the trader reads it before analysing their own decision. I chose it because it was faster and more convenient, for me too, since I trade on this platform myself. The target setting makes the assessment wait until the trader has saved their own analysis in the mentor session. It exists in the harness and can be switched on per account. It is not switched on: the harness is ready, the process decision is missing, and only I can make it.',
    m5stan: 'Ready in code, switched off.',

    stanLabel: 'Status',

    lekcjaH: 'Lesson',
    lekcja: 'An instruction to a model is a request. The harness is a condition. Where order matters, the harness enforces it, not the goodwill of the model or of the person. When you design the harness, you design the process.',

    dalejH: 'What comes next',
    dalej:
      'I do not know yet what a trade assessment that waits for the trader’s description will change: whether it improves the quality of their own thinking or only adds work. I have prepared a plan for a study on myself: alternating phases with the assessment shown at once and shown after my own description, process measures instead of financial results, descriptions rated blind, without knowing which phase they come from, and a plan registered before the start. No difference will be a result too. I will report the results here.',
  },
};

function Mechanizm({ h, tekst, stan, stanLabel }: { h: Blok; tekst: Blok; stan: Blok; stanLabel: Blok }) {
  return (
    <>
      <h3>{h}</h3>
      <p>{tekst}</p>
      <p>
        <strong>{stanLabel}:</strong> {stan}
      </p>
    </>
  );
}

export function Tresc() {
  const { lang } = useLang();
  const t = TRESC[lang];

  return (
    <main className="subpage">
      <article className="narrow">
        <header className="article-head">
          <span className="label">{t.label}</span>
          <h1>{t.tytul}</h1>
          <p className="lead">{t.lead}</p>
          <div className="art-meta">
            <span>{t.tag}</span>
            <span>{t.aktualizacja}</span>
          </div>
        </header>

        <div className="article-body">
          <p>{t.otwarcie}</p>
          <p>{t.rosnie}</p>

          <h2 id="who-thinks-first">{t.s1h}</h2>
          <p>
            <em>{LINKEDIN.najpierwSam ? <a href={LINKEDIN.najpierwSam}>{t.s1artykul}</a> : t.s1artykul}</em>
          </p>
          <p>{t.s1wstep}</p>

          <Mechanizm h={t.m1h} tekst={t.m1} stan={t.m1stan} stanLabel={t.stanLabel} />
          <Mechanizm h={t.m2h} tekst={t.m2} stan={t.m2stan} stanLabel={t.stanLabel} />
          <Mechanizm h={t.m3h} tekst={t.m3} stan={t.m3stan} stanLabel={t.stanLabel} />
          <Mechanizm h={t.m4h} tekst={t.m4} stan={t.m4stan} stanLabel={t.stanLabel} />
          <Mechanizm h={t.m5h} tekst={t.m5} stan={t.m5stan} stanLabel={t.stanLabel} />

          <div className="art-callout">
            <b>{t.lekcjaH}</b>
            {t.lekcja}
          </div>

          <h3>{t.dalejH}</h3>
          <p>{t.dalej}</p>
        </div>

        <footer className="article-foot">
          <Link href="/projects">
            ← <T k="nav_projects" />
          </Link>
          <Link href="/">
            <T k="articles_home" />
          </Link>
        </footer>
      </article>
    </main>
  );
}
