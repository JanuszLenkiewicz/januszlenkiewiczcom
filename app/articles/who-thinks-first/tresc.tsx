'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import { T, useLang } from '@/components/lang';
import type { Lang } from '@/content/site';
import okladka from './okladka.jpg';

/**
 * Artykuł dwujęzyczny A3 „Who thinks first: you or the AI?” / „Najpierw sam, potem AI”.
 * Wersja angielska = tekst opublikowany na LinkedInie 3.11.2026
 * (https://www.linkedin.com/pulse/who-thinks-first-you-ai-janusz-lenkiewicz-u9yac/), wersja polska = pełna
 * wersja polska z oryginału ai-engineer/www/linkedin/artykuly/najpierw-sam-potem-ai.md (identyczna z kopią
 * roboczą w vaulcie My, commit 193a232). Teksty przeniesione dosłownie skryptem, bez zmian w treści, z dwoma
 * wyjątkami: bez pytania zamykającego i hashtagów z LinkedIna (zasada „bez sztampy na końcu”, 6.11.2026)
 * oraz z dopiskiem o pierwszej publikacji i linkiem do kulis.
 * Źródła = sekcja „Komentarz ze źródłami” oryginału (linki sprawdzone przy publikacji 3.11.2026).
 * Okładka: rysunek tuszem i akwarelą (ai-engineer/www/linkedin/okladki/najpierw-sam-potem-ai-rysunek.jpg).
 */

type Blok = ReactNode;

const LINKEDIN = 'https://www.linkedin.com/pulse/who-thinks-first-you-ai-janusz-lenkiewicz-u9yac/';
const KULISY = '/projects/trader-ai-assistant#who-thinks-first';

const TRESC: Record<Lang, Record<string, Blok>> = {
  pl: {
    label: 'ARTYKUŁ · AI I PSYCHOLOGIA',
    tytul: 'Najpierw sam, potem AI',
    lead: 'Po trzech miesiącach z podpowiedziami AI doświadczeni lekarze bez nich znajdowali mniej zmian przedrakowych. Co wyjaśnia odciążanie poznawcze, dlaczego kolejność myślenia to decyzja projektowa i gdzie moja platforma tej reguły pilnuje, a gdzie jeszcze nie.',
    data: '3 listopada 2026',
    tag: 'AI i psychologia',
    czas: '11 min czytania',
    alt: 'Rysunek tuszem i akwarelą: lekarz w gabinecie patrzy w laptopa, pacjentka czeka z brodą opartą na dłoni. Podpis: „Let’s see what we think.”',
    zrodlaNaglowek: 'Źródła',
    pierwsza: <>Angielska wersja tego artykułu ukazała się najpierw <a href={LINKEDIN}>na LinkedInie</a> 3 listopada 2026.</>,
    kulisy: <>Kulisy, czyli jak ta reguła jest zbudowana w Trader AI Assistant: <Link href={KULISY}>strona projektu</Link>.</>,
    b00: "Lata wprawy, trzy miesiące podpowiedzi AI",
    b01: "Dziewiętnastu doświadczonych lekarzy z czterech polskich ośrodków endoskopii. Od lat robią kolonoskopie i od lat wypatrują na ekranie zmian, z których może rozwinąć się rak jelita grubego. Dostają system AI, który podczas badania sam zaznacza podejrzane miejsca. Badacze porównują, jak ci sami lekarze radzą sobie bez podpowiedzi w trzech miesiącach przed wdrożeniem i w trzech po nim.",
    b02: "Przed wdrożeniem AI znajdowali gruczolaki, czyli zmiany przedrakowe, u 28,4% badanych pacjentów. W trzech miesiącach po wdrożeniu, w kolonoskopiach bez AI, już tylko u 22,4%. Na każdych pięciu pacjentów, u których wcześniej znaleźliby gruczolaka, teraz znajdowali go u czterech.",
    b03: "Nikt ich niczego nie oduczał i nikt nie skracał im szkolenia. To byli ci sami ludzie z tym samym doświadczeniem. Przez kwartał na ekran patrzył razem z nimi program.",
    b04: "Badanie opublikowano w 2025 roku w The Lancet Gastroenterology & Hepatology (Budzyń i współpracownicy, 1443 kolonoskopie). Jest obserwacyjne, bez losowego przydziału, więc autorzy piszą ostrożnie, że AI „może” tak działać, i nie wykluczają innych przyczyn. Ale to niepokojący sygnał: wystarczył kwartał, żeby doświadczeni lekarze gorzej radzili sobie bez podpowiedzi.",
    b05: "Na to badanie trafiłem w lipcowo-sierpniowym numerze APA Monitor, w artykule o tym, jak AI zmienia ludzkie umiejętności i myślenie. Ten artykuł pomógł mi zrozumieć, co się tu stało i dlaczego nie jest to kwestia lenistwa ani charakteru.",
    b06: "Zajmuję się przebudową procesów i budową agentów AI i z tego badania wynikają dla mnie dwie rzeczy. Pierwsza dotyczy procesu: potrzeba zdecydować, kto patrzy pierwszy, człowiek czy program, i zapisać to jako krok procesu, a nie jako „dobrą radę” ze szkolenia. Druga dotyczy agenta: ta decyzja musi zdać egzamin zwykłego dnia pracy, a przetrwa tylko wtedy, gdy pilnuje jej kod wokół modelu, czyli to, co inżynierowie nazywają harnessem, a nie dobra wola. Harness to proces zapisany w kodzie. Sprawdzam to na Trader AI Assistant, platformie, na której AI towarzyszy traderowi przez cały dzień: recenzuje jego analizę, ocenia transakcje, wieczorem omawia sesję. Dalej pokażę, gdzie na tej platformie ta reguła się trzyma, a gdzie jeszcze nie.",
    b07: "Odciążanie poznawcze",
    b08: "Jeden z mechanizmów, na który warto spojrzeć, jest stary i ma nazwę: odciążanie poznawcze. Wiąże się z tym, ile pracy w danej chwili wykonuje nasza pamięć robocza. Mieści ona naraz niewiele, więc kiedy zadanie przekracza jej pojemność albo bodźców jest za dużo, przychodzi przeciążenie: myślimy wolniej, częściej się mylimy i szybciej się męczymy. Nasz system poznawczy broni się przed tym, oszczędzając wysiłek umysłowy, kiedy tylko otoczenie na to pozwala. Żeby miał mniej pracy, część myślenia przenosimy na zewnątrz, do kalendarza, kontaktów w telefonie, nawigacji. Risko i Gilbert opisali w 2016 roku, że sięgamy po taką pomoc, gdy oceniamy, że tak będzie wydajniej, a te oceny bywają błędne. Samo w sobie to nic złego, bo zwalnia głowę do innej, potrzebniejszej pracy.",
    b09: "Jest jednak druga strona tej samej monety, jeszcze starsza. Slamecka i Graf pokazali w 1978 roku, że to, co wytworzysz sam, zostaje w głowie lepiej niż to, co tylko przeczytasz. Lista zakupów pomaga, dopóki jest w kieszeni. Jeśli zostanie w domu, pamiętasz mniej, niż gdybyś jej w ogóle nie pisał, bo w chwili pisania twoja głowa już wiedziała, że nie musi tego trzymać. Z AI jest tak samo, tylko lista pisze się sama i zawsze jest w kieszeni.",
    b10: "Polscy lekarze nie są wyjątkiem. Dowody z ostatnich dwóch lat układają się w jeden obraz, więc opowiem je po kolei.",
    b11: "Turcja, około tysiąca uczniów, badanie Bastaniego i współpracowników w PNAS 2025. Uczniowie ćwiczyli matematykę z ChatGPT. W trakcie ćwiczeń wyniki rosły o 48%. Na sprawdzianie bez narzędzia ci sami uczniowie wypadli o 17% gorzej niż grupa, która ChatGPT nigdy nie miała. Druga wersja narzędzia, ustawiona jak korepetytor, który nie podaje gotowej odpowiedzi, dawała wzrost o 127% w ćwiczeniach i nie szkodziła na sprawdzianie. Z jednym haczykiem: uczniowie z tej wersji przeceniali, ile się nauczyli.",
    b12: "I badanie, które najbardziej zmienia obraz: 133 prawników patentowych z 11 kancelarii przez trzy miesiące pisało wnioski z AI albo bez (Autor, Rodchenko i współpracownicy, NBER, wrzesień 2026; badanie finansowane przez Google, plan zarejestrowany przed startem). Jakość oceniali eksperci, nie wiedząc, kto korzystał. Z AI jakość rosła u wszystkich. Kiedy po trzech miesiącach AI odebrano, przewaga została wyłącznie u seniorów. Juniorzy średnio nie zyskali nic trwałego, a ich wyniki bardziej się rozjechały. Ten sam wzór pokazało badanie z konsultantami BCG opublikowane w Nature Human Behaviour w październiku 2026: z ChatGPT wyniki wyraźnie wyższe, bez niego po eksperymencie takie same jak w grupie, która go nie miała (pełnego tekstu nie czytałem, liczby pochodzą ze strony autorki).",
    b13: "AI wzmacnia tych, którzy już coś umieją. Kto zaczyna naukę od AI, może długo nie zauważyć, że sam się nie uczy.",
    b14: "Kolejność",
    b15: "Michael Gerlich porównał na 150 osobach pisanie bez AI, z ChatGPT bez żadnej struktury i z ChatGPT prowadzonym ustrukturyzowanymi pytaniami. Bez struktury AI przejmowało myślenie i nie poprawiało rozumowania. Ze strukturą odciążania było mniej, a rozumowanie i zaangażowanie w myślenie rosły. W APA Monitor Gerlich radzi odwrócić zwykłą kolejność: najpierw przemyśl problem sam, a dopiero gdy masz własną odpowiedź, pokaż AI pytanie i swoje rozwiązanie i poproś o uwagi. Według niego to chroni przed kotwiczeniem, bo pierwsza odpowiedź AI nie ustawia z góry twojego myślenia.",
    b16: "To rada, a nie wynik eksperymentu. Gerlich sprawdzał ustrukturyzowane pytania, w których samodzielne przemyślenie było jednym z kroków, a nie samą kolejność. Badania razem pokazują, że liczy się aktywny udział człowieka. Kolejność „najpierw sam, potem AI” biorę od Gerlicha jako regułę projektową, bo to najprostszy sposób, jaki znam, żeby ten udział wymusić, a nie tylko do niego zachęcać.",
    b17: "Gdzie reguła się trzyma, a gdzie nie",
    b18: "Lekarzom z polskiego badania nikt nie zabraniał patrzeć samemu. Program tylko podpowiadał, a ekran wciąż mieli przed sobą. Ale nikt nie zdecydował, kto patrzy pierwszy, a program zaznaczał miejsca na bieżąco. Nita Farahany mówi w tym samym numerze APA Monitor, że w większości firm za myślenie samemu płaci się wolniejszą pracą. Reguła „najpierw sam”, która zależy wyłącznie od człowieka, przegrywa z tą karą, a często wystarczy jej zwykła wygoda.",
    b19: "W Trader AI Assistant widać oba poziomy. Najpierw agent: ta sama reguła działa tam między modelami i się trzyma. Głęboki mentor, który wieczorem analizuje dzień tradera, nie widzi oceny szybszego mentora, dopóki nie napisze własnej. Gdyby widział, dostawałbym streszczenie pierwszej opinii zamiast drugiej. Wcześniejsza ocena potrafi ukierunkować model podobnie jak człowieka. Różnica jest jedna: model nie może zajrzeć do cudzej oceny, bo harness mu jej nie podaje. Człowiek może.",
    b20: "Druga rzecz, która się trzyma, to decyzja procesowa: analizę rynku na platformie pisze trader, a mentor ją recenzuje. Nie odwrotnie. Nie zawsze tak było. Dziewiątego lipca dodałem osobną kartę z analizą startową pisaną przez AI; przez lato powstały 122 takie analizy. Dwudziestego trzeciego września usunąłem tę kartę razem z danymi i została jedna droga: własna analiza tradera. Powód był testowy, nie psychologiczny, i nie będę udawał, że było inaczej. Skutek jest taki, że AI nie pisze już analizy za tradera.",
    b21: "I jedna rzecz, która się jeszcze nie trzyma. Tu sam wpadłem w to, o czym piszę. Każda transakcja dostaje ocenę AI i zaprojektowałem ją tak, żeby mogła poczekać, aż trader sam opisze, dlaczego wszedł. Ale na czas testów ustawiłem, że pokazuje się od razu. Tak było szybciej i wygodniej, także dla mnie, bo sam na tej platformie handluję. Kahneman nazywał to prawem najmniejszego wysiłku: jeśli coś da się zrobić mniejszym kosztem, umysł prędzej czy później tak to zrobi. To to samo odciążanie, o którym pisałem wyżej. Wiedziałem o nim, a i tak mu uległem. Ustawienie „na czas testów” obowiązuje do dziś. Agent jest gotowy, brakuje decyzji procesowej.",
    b22: "Zasada, która zależy od dobrej woli, ma przeciwko sobie każdy pośpiech i każdą ciekawość. Trzyma się tylko ta, której nie da się pominąć: zapisana w procesie i dopilnowana w kodzie.",
    b23: "Przełożenie",
    b24: <><strong>{"Dla kogoś, kto prowadzi zespół."}</strong>{" Pytanie nie brzmi „czy ludzie używają AI”, tylko „kto myśli pierwszy”. Juniorzy w badaniu prawników po odebraniu AI nie zachowali średnio żadnej przewagi, a ich wyniki bardziej się rozjechały. Jeśli junior w twoim zespole od pierwszego dnia dostaje gotową odpowiedź przed własną próbą, ryzykujesz, że jakość jego pracy wyprzedzi jego umiejętności. Z narzędziem będzie wyglądał dobrze. Bez niego możesz się zdziwić. To jest kompetencja pożyczona i oddaje się ją razem z licencją."}</>,
    b25: <><strong>{"Dla ludzi od szkoleń."}</strong>{" Wersja z Turcji, która prowadziła ucznia wskazówkami, pomagała w ćwiczeniach i nie zostawiała go słabszym po odebraniu narzędzia. Nie wykazano jednak, że uczyła lepiej niż praca bez AI. Czyli nie chodzi o zakaz, tylko o to, żeby narzędzie było ustawione jak korepetytor, nie jak ściąga, i żeby ktoś potem sprawdził bez narzędzia, ile ludzie naprawdę umieją."}</>,
    b26: <><strong>{"Dla rekrutera."}</strong>{" Zadanie rekrutacyjne wykonane z AI mówi o kandydacie mniej więcej tyle, ile kolonoskopia z podpowiedziami mówiła o oku lekarza, który ją robił. Jeśli chcesz wiedzieć, co kandydat umie, poproś najpierw o rozwiązanie bez narzędzia, a potem o krytykę własnego rozwiązania z narzędziem. Ta druga część może powiedzieć więcej niż pierwsza."}</>,
    b27: <><strong>{"Dla tych, którzy projektują agentów AI, zwłaszcza takich, które uczą, doradzają albo prowadzą człowieka przez jego pracę."}</strong>{" Piszę jako ktoś, kto zaprojektował i zbudował Trader AI Assistant, platformę z mentorem AI dla traderów, i na niej nauczył się trzech rzeczy. Po pierwsze, kolejność to decyzja projektowa, a nie kwestia promptu. Jeśli człowiek ma myśleć pierwszy, agent nie pokazuje swojej odpowiedzi, dopóki człowiek nie zapisze własnej, i pilnuje tego harness, tak jak u moich dwóch mentorów. Projektując harness, projektujesz proces. Po drugie, uważaj na ustawienia domyślne: ocena transakcji miała czekać na opis tradera, ale tymczasowe ustawienie „na czas testów” jest dziś rzeczywistością. Po trzecie, zapisuj próbę człowieka sprzed podpowiedzi, bo tylko ona pozwoli po trzech miesiącach sprawdzić, czy agent uczy, czy zastępuje. Bez niej zostają ci wyniki mierzone z narzędziem, a te zawsze wyglądają dobrze. Tego trzeciego u siebie jeszcze nie mam."}</>,
    b28: "Kto myśli pierwszy",
    b29: "Te badania mają słabe strony: kolonoskopia to obserwacja, a nie eksperyment, Gerlich miał 150 osób, a badanie prawników finansował Google i czeka jeszcze na recenzję. Ale czytane razem wskazują ten sam kierunek: najbardziej szkodzi podpowiedź, która przychodzi przed własną próbą, w zadaniach, w których człowiek miał się czegoś nauczyć albo utrzymać wprawę, gdy nikt nie zdecydował, kto myśli pierwszy. Tę decyzję da się podjąć w procesie i dopilnować w kodzie, ale ktoś musi ją podjąć świadomie.",
    b30: "Kolejność nie jest jedynym warunkiem i nie dotyczy każdego zadania. W tym samym artykule APA Monitor Mutlu Cukurova radzi rozdzielić zadania, które po prostu trzeba wykonać, od tych, na których człowiek się uczy: pierwsze można śmiało oddać AI, drugie trzeba chronić. Liczy się też doświadczenie, bo ekspert łatwiej wyłapie błąd modelu niż nowicjusz, a firmy nie zawsze wiedzą, kto jest kim. I liczą się zasady: Mindy Shoss zauważa, że najlepiej radzą sobie organizacje z jasnymi normami korzystania z AI, a przy niejasnych zachętach ludzie zaczynają przesyłać sobie teksty z AI, których nikt naprawdę nie ocenia.",
    b31: "U siebie sprawdzenia wymaga jeszcze jedno: co zmieni ocena transakcji, która czeka na opis tradera. Przygotowałem plan, jak zmierzyć to na sobie, z ocenianiem opisów na ślepo, bo własna ocena w tej sprawie zawodzi, co pokazali uczniowie z Turcji.",
    b32: "Przy każdej funkcji, którą buduję z AI, pytam więc najpierw, czy to zadanie ma kogoś czegoś uczyć. Jeśli tak, pytam dalej: kto tu myśli pierwszy? Jeśli program, muszę umieć powiedzieć, czego człowiek się przez to nie nauczy, zanim pomiar po trzech miesiącach powie to za mnie.",
  },
  en: {
    label: 'ARTICLE · AI AND PSYCHOLOGY',
    tytul: 'Who thinks first: you or the AI?',
    lead: 'After three months of AI hints, experienced doctors found fewer precancerous growths without them. What cognitive offloading explains, why the order of thinking is a design decision, and where my own platform keeps that rule and where it does not yet.',
    data: '3 November 2026',
    tag: 'AI and psychology',
    czas: '11 min read',
    alt: 'Ink and watercolour cartoon: a doctor in his office looks at a laptop while a patient waits, chin in hand. Caption: “Let’s see what we think.”',
    zrodlaNaglowek: 'Sources',
    pierwsza: <>This article was first published <a href={LINKEDIN}>on LinkedIn</a> on 3 November 2026.</>,
    kulisy: <>Behind the scenes, with how the rule is built in Trader AI Assistant: <Link href={KULISY}>project page</Link>.</>,
    b00: "Years of practice, three months of AI hints",
    b01: "Nineteen experienced doctors from four endoscopy centres in Poland. For years they have been doing colonoscopies, scanning the screen for the changes that can turn into colorectal cancer. Then they get an AI system that flags suspicious spots on its own during the procedure. Researchers compare how the same doctors do without the hints in the three months before the rollout and in the three months after it.",
    b02: "Before AI arrived, they found adenomas, the precancerous growths, in 28.4% of patients. In the three months after, in colonoscopies done without AI, only in 22.4%. For every five patients in whom they would once have found an adenoma, they now found it in four.",
    b03: "Nobody had made them unlearn anything, and nobody had cut their training short. They were the same people with the same experience. For one quarter, a program had been watching the screen with them.",
    b04: "The study was published in 2025 in The Lancet Gastroenterology & Hepatology (Budzyń and colleagues, 1,443 colonoscopies). It is observational, with no random assignment, so the authors write cautiously that AI “may” have this effect, and they do not rule out other causes. Still, it is a worrying signal: one quarter was enough for experienced doctors to do worse without the hints.",
    b05: "I came across this study in the July/August issue of the APA Monitor, in an article on how AI is reshaping human skills and thinking. That article helped me understand what happened here, and why it is not a matter of laziness or character.",
    b06: "I redesign processes and build AI agents, and two things follow from this study for me. The first is about the process: someone has to decide who looks first, the person or the program, and write that down as a step in the process, not as a piece of “good advice” from a training session. The second is about the agent: that decision has to survive an ordinary working day, and it survives only when it is enforced by the code around the model, what engineers call the harness, not by goodwill. The harness is the process written in code. I test this on Trader AI Assistant, a platform where AI accompanies a trader through the whole day: it reviews their analysis, assesses their trades and talks the session through in the evening. Below I show where the rule holds on this platform and where it does not yet.",
    b07: "Cognitive offloading",
    b08: "One of the mechanisms worth looking at is old and has a name: cognitive offloading. It has to do with how much work our working memory is doing at any given moment. It holds very little at once, so when a task exceeds its capacity, or there are too many stimuli, overload sets in: we think more slowly, make more mistakes and tire faster. Our cognitive system defends itself by saving mental effort whenever the environment allows. To give it less to do, we move part of our thinking outside, to a calendar, the contacts in our phone, a navigation app. Risko and Gilbert described in 2016 how we reach for such help when we judge it will be more efficient, and those judgments can be wrong. In itself this is nothing bad, because it frees the head for other, more important work.",
    b09: "But there is another side of the same coin, and it is even older. Slamecka and Graf showed in 1978 that what you generate yourself stays in your head better than what you merely read. A shopping list helps as long as it is in your pocket. If it stays at home, you remember less than if you had never written it, because at the moment of writing your head already knew it did not have to hold on to this. With AI it is the same, except the list writes itself and is always in your pocket.",
    b10: "The Polish doctors are not an exception. The evidence from the last two years lines up into one picture, so I will go through it in order.",
    b11: "Turkey, about a thousand pupils, a study by Bastani and colleagues in PNAS 2025. The pupils practised maths with ChatGPT. During practice their scores rose by 48%. On a test without the tool, the same pupils did 17% worse than a group that never had ChatGPT. A second version of the tool, set up like a tutor that does not hand over the answer, gave a 127% improvement in practice and did no harm on the test. With one catch: pupils using that version overestimated how much they had learned.",
    b12: "And the study that changes the picture most: 133 patent attorneys from 11 firms spent three months drafting applications with AI or without it (Autor, Rodchenko and colleagues, NBER, September 2026; funded by Google, with the analysis plan registered before the start). Quality was judged by experts who did not know who had used AI. With AI, quality rose for everyone. When AI was taken away after three months, the advantage remained only with the seniors. The juniors, on average, gained nothing lasting, and their results spread further apart. The same pattern appeared in a study of BCG consultants published in Nature Human Behaviour in October 2026: with ChatGPT their results were clearly higher, and after the experiment, without it, they were the same as in the group that never had it (I have not read the full text; the numbers come from the author’s website).",
    b13: "AI strengthens those who already know something. Whoever starts learning with AI may not notice for a long time that they are not learning themselves.",
    b14: "Order",
    b15: "Michael Gerlich compared, with 150 people, writing without AI, writing with ChatGPT and no structure at all, and writing with ChatGPT guided by structured prompts. Without structure, AI took over the thinking and did not improve reasoning. With structure, there was less offloading, and both reasoning and engagement in thinking went up. In the APA Monitor, Gerlich advises reversing the usual order: think the problem through yourself first, and only once you have your own answer, show the AI the question and your solution and ask for feedback. In his view this protects against anchoring, because the AI’s first answer does not set the direction of your thinking in advance.",
    b16: "That is advice, not an experimental result. Gerlich tested structured prompts in which thinking on your own was one of the steps, not the order itself. Taken together, the studies show that what matters is the person’s active participation. I take the order “you first, then AI” from Gerlich as a design rule, because it is the simplest way I know to enforce that participation rather than merely encourage it.",
    b17: "Where the rule holds and where it does not",
    b18: "Nobody forbade the doctors in the Polish study to look for themselves. The program only made suggestions, and the screen was still in front of them. But nobody decided who looks first, and the program flagged spots in real time. Nita Farahany says in the same issue of the APA Monitor that in most companies thinking for yourself is paid for with slower work. A “you first” rule that depends on the person alone loses to that penalty, and often plain convenience is enough to beat it.",
    b19: "In Trader AI Assistant you can see both levels. First, the agent: the same rule works there between models, and it holds. The deep mentor, which analyses the trader’s day in the evening, does not see the faster mentor’s assessment until it has written its own. If it did, I would get a summary of the first opinion instead of a second one. An earlier assessment can steer a model much as it steers a person. There is one difference: the model cannot peek at the other assessment, because the harness does not hand it over. A person can.",
    b20: "The second thing that holds is a process decision: on the platform the trader writes the market analysis and the mentor reviews it. Not the other way round. It was not always like that. On July 9 I added a separate tab with a starting analysis written by AI; over the summer 122 such analyses were created. On September 23 I removed that tab along with its data, and one path remained: the trader’s own analysis. The reason had to do with testing, not psychology, and I will not pretend otherwise. The effect is that AI no longer writes the analysis for the trader.",
    b21: "And one thing that does not hold yet. Here I fell into exactly what I am writing about. Every trade gets an AI assessment, and I designed it so that it could wait until the trader has described why they entered. But for the duration of testing I set it to appear immediately. It was faster and more convenient, for me too, because I trade on this platform myself. Kahneman called this the law of least effort: if something can be done at a lower cost, the mind will sooner or later do it that way. It is the same offloading I wrote about above. I knew about it, and I gave in to it anyway. The “for testing” setting is still in place today. The agent is ready; what is missing is a process decision.",
    b22: "A rule that depends on goodwill has every rush and every flicker of curiosity working against it. Only a rule that cannot be skipped holds: one written into the process and enforced in code.",
    b23: "Carrying this over",
    b24: <><strong>{"For someone who leads a team."}</strong>{" The question is not “do people use AI” but “who thinks first”. The juniors in the lawyers’ study kept, on average, no advantage once AI was taken away, and their results spread further apart. If a junior on your team gets a ready answer before their own attempt from day one, you risk their output running ahead of their skills. With the tool they will look good. Without it, you may be surprised. That is borrowed competence, and it goes back when the licence does."}</>,
    b25: <><strong>{"For people who run training."}</strong>{" The Turkish version that guided pupils with hints helped in practice and did not leave them weaker once the tool was taken away. It was not shown, however, to teach better than working without AI. So the point is not a ban, but setting the tool up as a tutor rather than a crib sheet, and having someone check afterwards, without the tool, how much people actually know."}</>,
    b26: <><strong>{"For recruiters."}</strong>{" A recruitment task done with AI tells you about as much about the candidate as a colonoscopy with hints told you about the eye of the doctor doing it. If you want to know what a candidate can do, ask first for a solution without the tool, and then for a critique of their own solution with the tool. The second part may tell you more than the first."}</>,
    b27: <><strong>{"For those who design AI agents, especially agents that teach, advise or guide a person through their work."}</strong>{" I write as someone who designed and built Trader AI Assistant, a platform with an AI mentor for traders, and who learned three things on it. First, order is a design decision, not a matter of the prompt. If the person is supposed to think first, the agent does not show its answer until the person has written their own, and the harness enforces this, as it does with my two mentors. When you design the harness, you design the process. Second, watch your defaults: the trade assessment was meant to wait for the trader’s description, but the temporary “for testing” setting is today’s reality. Third, record the person’s attempt from before the hint, because only that will let you check after three months whether the agent teaches or replaces. Without it you are left with results measured with the tool, and those always look good. The third one I do not have yet."}</>,
    b28: "Who thinks first",
    b29: "These studies have weak points: the colonoscopy study is an observation, not an experiment, Gerlich had 150 people, and the lawyers’ study was funded by Google and is still awaiting review. But read together they point the same way: what does the most harm is the hint that arrives before your own attempt, in tasks where the person was supposed to learn something or keep their skill sharp, when nobody has decided who thinks first. That decision can be made in the process and enforced in code, but someone has to make it deliberately.",
    b30: "Order is not the only condition, and it does not apply to every task. In the same APA Monitor article, Mutlu Cukurova suggests separating tasks that simply need to get done from tasks on which people learn: the first can safely go to AI, the second need protecting. Experience matters too, because an expert spots a model’s mistake more easily than a novice, and companies don’t always know who is who. And rules matter: Mindy Shoss observes that organisations with clear norms for AI use do best, while vague incentives lead people to send each other AI-generated texts that nobody really evaluates.",
    b31: "In my own case one more thing needs checking: what a trade assessment that waits for the trader’s description will change. I have prepared a plan to measure this on myself, with the descriptions rated blind, because self-assessment fails here, as the pupils in Turkey showed.",
    b32: "So with every feature I build with AI, I first ask whether the task is meant to teach someone something. If it is, I ask the next question: who thinks first here? If it is the program, I have to be able to say what the person will not learn because of it, before a measurement three months later says it for me.",
  },
};

/** Źródła są te same w obu wersjach (opis bibliograficzny po angielsku), z komentarza ze źródłami A3. */
const ZRODLA: { opis: string; url?: string }[] = [
  { opis: 'Budzyń, K., et al. (2025). Endoscopist deskilling risk after exposure to artificial intelligence in colonoscopy: a multicentre, observational study. The Lancet Gastroenterology & Hepatology.', url: 'https://doi.org/10.1016/S2468-1253(25)00133-5' },
  { opis: 'Abrams, Z. (2026, July/August). How AI is reshaping human skills and thinking. Monitor on Psychology, American Psychological Association.', url: 'https://www.apa.org/monitor/2026/07-08/ai-job-skills-thinking' },
  { opis: 'Risko, E. F., & Gilbert, S. J. (2016). Cognitive offloading. Trends in Cognitive Sciences.', url: 'https://doi.org/10.1016/j.tics.2016.07.002' },
  { opis: 'Slamecka, N. J., & Graf, P. (1978). The generation effect: Delineation of a phenomenon. Journal of Experimental Psychology: Human Learning and Memory.', url: 'https://doi.org/10.1037/0278-7393.4.6.592' },
  { opis: 'Bastani, H., et al. (2025). Generative AI without guardrails can harm learning: Evidence from high school mathematics. PNAS.', url: 'https://doi.org/10.1073/pnas.2422633122' },
  { opis: 'Autor, D., Rodchenko, D., et al. (2026). Does AI assistance enhance or erode expertise? Evidence from a three-month field experiment in patent drafting. NBER Working Paper 35720.', url: 'https://www.nber.org/papers/w35720' },
  { opis: 'Wiles, E., Krayer, L., et al. (2026). Generative AI and the temporary upskilling of knowledge workers. Nature Human Behaviour.', url: 'https://www.nature.com/articles/s41562-026-02566-6' },
  { opis: 'Gerlich, M. (2025). From offloading to engagement: An experimental study on structured prompting and critical reasoning with generative AI. Data, 10(11), 172.', url: 'https://doi.org/10.3390/data10110172' },
  { opis: 'Kahneman, D. (2011). Thinking, Fast and Slow. Farrar, Straus and Giroux.' },
];

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
            <span>{t.data}</span>
            <span>{t.tag}</span>
            <span>{t.czas}</span>
          </div>
        </header>

        <div className="article-body">
          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={okladka.src} width={okladka.width} height={okladka.height} alt={String(t.alt)} />
          </figure>

          <h2>{t.b00}</h2>
          <p>{t.b01}</p>
          <p>{t.b02}</p>
          <p>{t.b03}</p>
          <p>{t.b04}</p>
          <p>{t.b05}</p>
          <p>{t.b06}</p>
          <h2>{t.b07}</h2>
          <p>{t.b08}</p>
          <p>{t.b09}</p>
          <p>{t.b10}</p>
          <p>{t.b11}</p>
          <p>{t.b12}</p>
          <blockquote className="art-pull">{t.b13}</blockquote>
          <h2>{t.b14}</h2>
          <p>{t.b15}</p>
          <p>{t.b16}</p>
          <h2>{t.b17}</h2>
          <p>{t.b18}</p>
          <p>{t.b19}</p>
          <p>{t.b20}</p>
          <p>{t.b21}</p>
          <div className="art-dark">
            <p>{t.b22}</p>
          </div>
          <h2>{t.b23}</h2>
          <p>{t.b24}</p>
          <p>{t.b25}</p>
          <p>{t.b26}</p>
          <p>{t.b27}</p>
          <h2>{t.b28}</h2>
          <p>{t.b29}</p>
          <p>{t.b30}</p>
          <p>{t.b31}</p>
          <p>{t.b32}</p>

          <p>
            <em>{t.pierwsza}</em>
          </p>
          <p>
            <em>{t.kulisy}</em>
          </p>

          <h2>{t.zrodlaNaglowek}</h2>
          <ul>
            {ZRODLA.map((z) => (
              <li key={z.opis}>
                {z.opis}
                {z.url ? (
                  <>
                    {' '}
                    <a href={z.url}>{z.url.replace('https://', '')}</a>
                  </>
                ) : null}
              </li>
            ))}
          </ul>
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
}
