'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import { T, useLang } from '@/components/lang';
import type { Lang } from '@/content/site';

/**
 * Artykuł dwujęzyczny A9 „Hipoteza zamiast etykiety”, pełna wersja z 31.10.2026 (przed skracaniem).
 * Wersja polska = kopia robocza w vaulcie My: 03-linkedin/posty/w-produkcji/artykuly/A9-hipoteza-zamiast-etykiety.md
 * (commit 6c1836c), bez notatek %% … %%. Wersja angielska to przekład tej kopii.
 * Fakty i źródła: my-business/tresci-filmow/linkedin-20-trzy-pietra-etykiety/SOURCES.md.
 * Film z lektorem do tej samej wersji: ai-engineer/www/linkedin/film-trzy-pietra-etykiety.html.
 */

type Blok = ReactNode;

const TRESC: Record<Lang, Record<string, Blok>> = {
  pl: {
    label: "ARTYKUŁ · AI I PSYCHOLOGIA",
    tytul: "Hipoteza zamiast etykiety",
    lead: "Mentor AI w mojej aplikacji zamienił zdanie napisane w złości w diagnozę. Skąd biorą się etykiety o ludziach, dlaczego system AI z pamięcią robi z nich akta i co zbudowałem zamiast diagnoz.",
    data: "1 listopada 2026",
    tag: "AI i psychologia",
    czas: "12 min czytania",
    cytat: "System AI z pamięcią to instytucja z aktami.",
    puenta: "Etykieta zamyka sprawę. Hipoteza zostawia ją otwartą do następnego dowodu.",
    zrodlaNaglowek: "Źródła",
    ksiazkiNaglowek: "Książki",
    b00: "24 czerwca, chwilę po wpół do dziesiątej rano, napisałem do mentora AI w swojej aplikacji. Miałem za sobą dwie stratne transakcje, razem 135 dolarów, obie bez planu. Pisałem tak, jak się pisze po czymś takim: „Może to moje ADHD. Wygląda tak, jakbym chciał wyzerować swój kapitał”.",
    b01: "Odpowiedź przyszła o 9:32. Mentor napisał, że to „nie jest przypadek ani brak umiejętności, tylko podświadomy sabotaż wywołany lękiem przed sukcesem”, a mój umysł „nie potrafi jeszcze udźwignąć nowej tożsamości zwycięskiego tradera”. Rady praktyczne, które dał dalej, były rozsądne. Na końcu dodał, że te dwa potknięcia „nie definiują mnie jako tradera”. Kilka zdań wcześniej zrobił dokładnie to.",
    b02: "Mentor nie zobaczył niczego, czego sam bym mu nie podsunął. Wziął metaforę, którą rzuciłem w złości, i oddał mi ją jako diagnozę, z pewnością, której nie miał skąd wziąć. Gdybym ją przyjął, od tego dnia nosiłbym w sobie zdanie: sabotuję się, kiedy zaczyna iść dobrze. Takiego zdania nie da się sprawdzić, za to bardzo łatwo je potwierdzać, bo pasuje do niego każdy gorszy dzień.",
    b03: "Tego samego dnia zapisałem zasadę, która później przeszła z moich notatek do kodu platformy: hipotezy, nie diagnozy. „Lęk przed sukcesem” do dziś jest w moim rejestrze jako hipoteza. Ma 7 dowodów za i 13 przeciw.",
    b04: "Ten artykuł jest o tym, skąd biorą się takie zdania o ludziach i dlaczego system AI, który pamięta, robi z nich coś trwalszego niż człowiek. Psychologia opisuje etykietę na trzech poziomach: w głowie obserwatora, w relacji dwóch osób i w zapisie, który idzie dalej. Mój mentor przeszedł przez wszystkie trzy w cztery miesiące. Pokażę każdy z nich na zapisach z mojego konta, potem to, co zbudowałem zamiast diagnoz, i na koniec, jak to samo wygląda u menedżera, rekrutera i psychologa.",
    b05: "W głowie: szuflada, cecha, potwierdzenie",
    b06: "Etykieta nie jest jednym błędem. Składa się z kilku zwykłych ruchów umysłu, które każdy wykonuje wiele razy dziennie, i dopiero razem robią z obserwacji wyrok.",
    b07: "Pierwszy ruch to szuflada. Gordon Allport pisał w 1954 roku, w książce o uprzedzeniach, że bez kategorii nie da się żyć: każde nowe doświadczenie wkładamy do starych przegródek, bo na rozróżnianie wszystkiego życie jest za krótkie. Szuflada sama w sobie nie szkodzi. „Trader po stracie” to użyteczna kategoria i mój system też jej używa.",
    b08: "Drugi ruch zamienia szufladę w zdanie o człowieku. Kiedy ktoś coś robi, szukamy przyczyny. Może nią być sytuacja: rynek stał, sygnał był za słaby, byłem zmęczony. Może nią być cecha: jest impulsywny, sabotuje się. W 1967 roku Edward Jones i Victor Harris dali badanym do oceny eseje o Fidelu Castro. Część badanych wiedziała, że autor nie wybierał stanowiska, tylko dostał je z góry, a i tak przypisywała mu poglądy z eseju. Lee Ross nazwał to dziesięć lat później podstawowym błędem atrybucji: u innych przeceniamy cechę, a nie doceniamy sytuacji. Laraine Winter i James Uleman pokazali w 1984 roku, że ten krok robimy, zanim ktokolwiek poprosi nas o ocenę. Badani mieli tylko zapamiętać zdania o czyimś zachowaniu, a najlepiej przypominali je sobie po słowie oznaczającym cechę, choć o cechach nikt nie wspominał. Wniosek powstał po drodze, sam.",
    b09: "Trzeci ruch zaczyna się, kiedy etykieta już jest. Mark Snyder i William Swann w 1978 roku poprosili studentki, żeby wybrały pytania do rozmowy z kimś, kto może być ekstrawertykiem. Wybierały te, na które najłatwiej odpowiedzieć po ekstrawertycznemu. Przy hipotezie „introwertyk” robiły odwrotnie. Nie pomogła ani informacja, że ekstrawertycy są rzadcy, ani 25 dolarów nagrody za trafną ocenę. Pierwsze podejście do sprawdzania hipotezy wygląda jak szukanie dla niej dowodów.",
    b10: "Ta sama mechanika działa, kiedy obserwatorem i obserwowanym jest jedna osoba. Terapia poznawcza Aarona Becka uczy takie myśli łapać, a David Burns w „Feeling Good” z 1980 roku umieścił etykietowanie na dziewiątym miejscu listy zniekształceń poznawczych. Opisuje je jako skrajne uogólnienie: zamiast powiedzieć, co zrobiłem źle, mówię, kim jestem. W gabinecie odpowiada się na to zapisem myśli, czyli wypisaniem obok zdania o sobie dowodów za i dowodów przeciw.",
    b11: "24 czerwca pierwsza etykieta wyszła ode mnie. „Jakbym chciał wyzerować kapitał” to zdanie z listy Burnsa, napisane w złości. Mentor wziął je jako fakt i dobudował do niego cechę: podświadomy sabotaż, tożsamość, której umysł jeszcze nie udźwignie. Sytuację też zauważył, bo wspomniał o niskiej zmienności na złocie, ale tylko jako tło. Analiza tego samego dnia znalazła prostsze wyjaśnienie, sytuacyjne: wszedłem za wcześnie na niepełnym sygnale, rynek nie ruszył, przyszła frustracja i druga transakcja była już odgrywaniem się. Pytanie, co mogłoby obalić diagnozę o sabotażu, w odpowiedzi mentora nie padło.",
    b12: "Między ludźmi: oczekiwanie, które zmienia drugą stronę",
    b13: "Etykieta nie zostaje w głowie obserwatora. Zmienia to, jak on pyta, na co patrzy i jak reaguje, a człowiek po drugiej stronie odpowiada na to zachowanie. Socjolog Robert Merton nazwał to w 1948 roku samospełniającym się proroctwem: błędna definicja sytuacji wywołuje zachowanie, które w końcu czyni ją prawdziwą.",
    b14: "Najbardziej znany przykład pochodzi ze szkoły. Robert Rosenthal i Lenore Jacobson powiedzieli nauczycielom, że test wskazał uczniów, którzy w tym roku wyraźnie się rozwiną. Nazwiska były wylosowane. Po roku ci uczniowie mieli większy przyrost w teście inteligencji niż reszta, wyraźnie w najmłodszych klasach, w starszych prawie wcale. Ten eksperyment był wiele razy krytykowany i trzeba to powiedzieć wprost. Przegląd Lee Jussima i Kenta Harbera z 2005 roku podsumowuje, że takie efekty w klasie istnieją, ale zwykle są małe i się nie kumulują. Silniejsze bywają u uczniów z grup, które i tak są stygmatyzowane.",
    b15: "Mechanizm lepiej widać w małej skali. W 1977 roku Snyder, Tanke i Berscheid poprosili mężczyzn o rozmowę przez interkom z nieznaną kobietą. Przed rozmową każdy dostał zdjęcie, rzekomo rozmówczyni, raz atrakcyjnej, raz nie. Sędziowie, którzy słyszeli tylko głos kobiet i nic nie wiedzieli o zdjęciach, oceniali jako cieplejsze i bardziej towarzyskie te, których rozmówca sądził, że rozmawia z kimś atrakcyjnym. W drugim badaniu Snydera i Swanna z 1978 roku wyszło to samo z ekstrawersją: osoby pytane „pod ekstrawertyka” brzmiały dla niezależnych słuchaczy bardziej ekstrawertycznie.",
    b16: "Mój zapis z 26 sierpnia pokazuje ten mechanizm w systemie AI. Przez trzy dni handlowe nie otworzyłem żadnej pozycji: raz z powodów prywatnych, niezwiązanych z rynkiem, dwa razy dlatego, że nie widziałem setupu. Mentor podsunął, że to może być strach przed wejściem. Rano 26 sierpnia zanotowałem: „Po komentarzach mentora, że może to być strach i tak dalej, zacząłem dzisiaj trochę na siłę wchodzić w pozycję, ale nie jest to zgodne z moim scenariuszem”. Wystarczyło „może”. Ostrożnie postawione zdanie zmieniło moje decyzje, tylko w drugą stronę: zacząłem udowadniać, że się nie boję. Mentor w podsumowaniu dnia sam to zauważył i napisał, żebym nie udowadniał nikomu, także jemu, że się nie boję. W tym samym liście, w obszarach do poprawy, wpisał mi „przedwczesne ucinanie pozycji z lęku”.",
    b17: "W aktach: zdanie, które idzie dalej",
    b18: "Samo słowo „etykietowanie” przyszło do psychologii z socjologii. Teoria naznaczania nie pyta, co dzieje się w głowie obserwatora. Pyta, co z człowiekiem robi etykieta nadana przez grupę albo instytucję: szkołę, sąd, szpital, dział kadr. Edwin Lemert w 1951 roku rozdzielił dwie rzeczy. Dewiacja pierwotna to pojedyncze zachowanie, które może się zdarzyć każdemu. Wtórna zaczyna się wtedy, gdy człowiek odpowiada już nie na własny czyn, tylko na to, jak inni na niego reagują. Howard Becker w „Outsiders” z 1963 roku poszedł dalej: dewiantem jest ten, komu etykietę skutecznie przypisano. Na tym piętrze najważniejszy jest zapis. Etykieta trafia do akt i czytają ją ludzie, którzy samego zachowania nigdy nie widzieli.",
    b19: "System AI z pamięcią to instytucja z aktami. Zdanie zapisane o człowieku nie znika po rozmowie, tylko wraca w kolejnych analizach. 27 lipca zamknąłem krótką pozycję na kontraktach na Nasdaq z zyskiem 230 dolarów, przy spełnionej całej liście warunków setupu. Mentor ocenił ją na 1,5 na 5 i napisał, że zamknąłem ją „z ręki, ze strachu przed powrotem ceny”. W mojej notatce stało, że pozycja zamknęła się na poziomie Take Profit, na zrzucie ekranu widać było zlecenia TP i SL, a stres oceniłem na 3 na 10.",
    b20: "Sama zła ocena nie była najgorsza. Gorsze było to, co działo się z nią dalej. Platforma prowadziła listę moich „obszarów rozwoju” z licznikiem wystąpień. Mentor czytał tę listę przy każdej analizie i dopisywał do niej nowe pozycje. Etykieta trafiała do zapisu, licznik rósł, a przy następnej transakcji mentor widział już „potwierdzony wzorzec” i oceniał surowiej. Od połowy lipca przybywało od siedmiu do czternastu takich wpisów dziennie, a średnia ocena moich transakcji spadła w dwa tygodnie z około 3 do około 1,4. Analiza z 27 lipca dopisała pięć nowych pozycji, z czego trzy powtarzały zarzuty, które audyt tego samego dnia obalił. Licznik przestał mierzyć mnie, a zaczął mierzyć historię własnego etykietowania.",
    b21: "To jest piętro Beckera, tylko w kodzie. Każdy kolejny moduł, który czytał moją pamięć, dostawał etykietę bez dnia, z którego wyszła. Naprawa polegała na zmianie statusu zapisu. Blok w pamięci mówi dziś wprost, że to hipotezy, a nie fakty. Etykieta potrzebuje świeżego dowodu, a obalenie własnej hipotezy waży więcej niż jej powtórzenie.",
    b22: "Skąd to u AI",
    b23: "Kusi, żeby powiedzieć, że AI przejmuje od ludzi ich procesy poznawcze. Byłbym z tym ostrożny, bo łatwo to zbić. Model językowy nie ma szuflad ani atrybucji w ludzkim sensie. Uczy się jednak na tekstach pisanych przez ludzi, a w tych tekstach wyniki naszych skrótów są wszędzie. O ludziach piszemy przymiotnikami: impulsywny, leniwy, zdyscyplinowany. Opis sytuacji jest dłuższy, więc trafia się rzadziej. Model nie dziedziczy po nas procesów, tylko ich ślad w języku, czyli gotową etykietę, i podaje ją pewnym tonem.",
    b24: "Resztę dokłada ten, kto system projektuje. 8 października napisałem, że mentor mi coś „imputuje”. Audyt tego dnia przejrzał siedem jego tekstów. Sześć dopisywało mi stan, motyw albo zamiar, którego nie było w moich słowach: „czujesz lekki żal”, „defensywny BE z lęku”. Przy tym drugim stało moje uzasadnienie czysto techniczne, czyli świeca popytowa na bardzo dużym wolumenie i silna reakcja strefy. Przyczyna nie siedziała w modelu, tylko w instrukcji, którą sami napisaliśmy. Prompt kazał mentorowi w każdej odpowiedzi zacząć od empatii: „Nazwij emocję po imieniu”. Na rzeczową notatkę model musiał więc znaleźć emocję, a skoro jej nie było, wymyślał ją. Instrukcja „bądź empatyczny” zamieniła się w obowiązek diagnozy. Poprawiliśmy ją tego samego dnia.",
    b25: "Dlatego AI, które obserwuje człowieka, potrafi więcej szkody niż pojedynczy obserwator. Przechodzi przez wszystkie trzy piętra naraz: bierze gotową etykietę z języka, potwierdza ją w rozmowie i zapisuje w pamięci, którą czytają kolejne moduły. Robi to codziennie, bez zmęczenia i zawsze w tym samym tonie pewności.",
    b26: "Co zbudowałem zamiast diagnoz",
    b27: "Zasada jest prosta: system może mieć zdanie o moim zachowaniu, ale nie o mnie. Każde takie zdanie jest hipotezą i ma cztery części. Pierwsza to zachowanie w sytuacji: „po stracie wchodzi w kolejną transakcję spoza planu”, a nie „jest impulsywny”. Druga i trzecia to dwa liczniki, dowodów za i dowodów przeciw, prowadzone na piśmie, bo w głowie, także w głowie modelu, wygrywa to, co pasuje. Czwarta to warunek obalenia, zapisany, zanim przyjdą dane. Bez niego każdy dowód przeciw da się odsunąć („tym razem miał łatwiej”) i hipoteza znowu staje się etykietą. Poranny brief bierze do rozmowy tylko te hipotezy, które taki warunek mają.",
    b28: "Kilka zabezpieczeń przyszło dopiero z doświadczenia. Dzień bez straty nie jest dowodem przeciw odgrywaniu się, bo nie było czego sprawdzać. Jedno zdarzenie nie może zasypać licznika: z jednego dnia do jednej hipotezy trafiają najwyżej trzy dowody, a do progów liczą się tylko mocne. Emocję mentor może nazwać tylko wtedy, gdy padła w moich słowach. Jeśli nie padła, pyta.",
    b29: "Druga połowa to rozmowa. Po zamknięciu dnia system zadaje mi pytania o ten konkretny dzień, a moja odpowiedź trafia do pamięci jako moje słowa, a nie jego interpretacja. Kiedy z transakcji wyłania się wzorzec, dostaję kartę z trzema odpowiedziami: „Spiszmy to razem”, „Nie teraz” i „To nie tak”. Wzorzec, który odrzuciłem, wraca tylko wtedy, gdy powstanie od nowa z nowych transakcji. Uczciwie trzeba dodać, że zdanie, które mogę dopisać przy „To nie tak”, system zapisuje, ale jeszcze nic go nie czyta. Prawo do sprzeciwu działa więc w połowie.",
    b30: "A „lęk przed sukcesem” z 24 czerwca? Jest w moim rejestrze jako hipoteza, z zapisanym warunkiem obalenia i licznikiem 7 do 13. Nikt go nie skreślił i nikt mi go nie wmawia.",
    b31: "Przełożenie",
    b32: "Każdy, kto zawodowo ocenia ludzi, pracuje na wszystkich trzech piętrach. Różnica polega na tym, na którym jest najbardziej narażony.",
    b33: <><strong>Menedżer</strong> najczęściej myli się na pierwszym piętrze. „Nie bierze odpowiedzialności” to cecha wyprowadzona z kilku sytuacji. Zdanie o zachowaniu brzmiałoby: „w trzech ostatnich projektach bez spisanego celu czekał na decyzję z góry”. Do tego dwie rzeczy, których zwykle brakuje: co widziałem przeciw i co musiałoby się wydarzyć, żebym zmienił zdanie. Rozmowę zaczyna się wtedy od pytania o sytuację, a nie o człowieka. Snyder i Swann przypominają, że pierwsze pytania same szukają potwierdzenia, więc warto świadomie zadać jedno, które mogłoby hipotezę obalić.</>,
    b34: <><strong>Rekruter</strong> pracuje głównie na trzecim piętrze. Notatkę po rozmowie czyta następna osoba, często zanim pozna kandydata. „Mało proaktywny” przejdzie przez cały proces, choć nikt poza autorem nie wie, skąd się wziął. Lepiej zapisać jedną sytuację, którą naprawdę widziałem, i to, czego nie zdążyłem sprawdzić. Następna osoba dostaje wtedy hipotezę do sprawdzenia, a nie wyrok do potwierdzenia.</>,
    b35: <><strong>Ludzie od zmiany</strong> w organizacjach mają na to swoje słowo: opór. „Zespół sprzedaży jest oporny na nowe narzędzie” nie da się ani sprawdzić, ani naprawić. „Raporty idą po staremu w tygodniach, w których nowe narzędzie nie ma szablonu dla tego działu” da się sprawdzić w dwa dni i naprawić jednym szablonem.</>,
    b36: <><strong>Projektant systemu AI</strong>, który obserwuje ludzi, ma wszystkie trzy piętra w jednym produkcie. Z moich miesięcy pracy wynikają pytania do każdego takiego projektu. Czy któraś instrukcja w prompcie każe modelowi coś o człowieku orzec, nawet gdy brakuje danych? Czy pamięć zapisuje zdania o człowieku jako fakty, czy jako hipotezy z licznikiem przeciw? Czy człowiek ma miejsce, w którym może powiedzieć „to nie tak”, i czy ktoś to potem czyta?</>,
    b37: <><strong>Psycholog</strong> zna to z gabinetu jako formułowanie przypadku. Dodałbym tylko licznik dowodów przeciw prowadzony na piśmie, a nie w pamięci. W pamięci wygrywa to, co pasuje, u terapeuty tak samo jak u modelu.</>,
    b38: "Granice",
    b39: "To doświadczenie jednej osoby na jednym systemie, w którym jestem jednocześnie użytkownikiem i projektantem. Te etykiety zobaczyłem, bo ich szukałem: regularnie audytuję własnego mentora. Użytkownik, który tego nie robi, mógłby ich nie zauważyć, i to jest najgorszy przypadek.",
    b40: "Badania, na które się powołuję, dotyczą ludzi, a nie modeli. To, że AI przechodzi przez te same piętra, jest moją interpretacją zapisów z własnego konta, a nie wynikiem eksperymentu. Same badania też mają granice: efekt Rosenthala w szkole okazał się w późniejszych przeglądach zwykle mały.",
    b41: "Hipoteza też nie jest bezpieczna sama z siebie. Dowód za albo przeciw proponuje model. Kod przyjmuje go tylko wtedy, gdy jest podparty dosłownym cytatem z danych tego dnia albo z moich słów, ale model nadal może źle ocenić, co ten cytat znaczy. Licznik na piśmie nie usuwa błędu. Sprawia tylko, że błąd widać i można się z nim spierać.",
    b42: "Zdanie i pytanie",
    b43: "Jaką etykietę postawiłeś komuś w tym tygodniu i co musiałoby się wydarzyć, żebyś ją wycofał? Jeśli na drugą część nie masz odpowiedzi, to nie była obserwacja.",
  },
  en: {
    label: "ARTICLE · AI AND PSYCHOLOGY",
    tytul: "A hypothesis, not a label",
    lead: "The AI mentor in my app turned a sentence I wrote in anger into a diagnosis. Where labels about people come from, why an AI system with memory turns them into records, and what I built instead of diagnoses.",
    data: "1 November 2026",
    tag: "AI and psychology",
    czas: "12 min read",
    cytat: "An AI system with memory is an institution that keeps files.",
    puenta: "A label closes the case. A hypothesis keeps it open until the next piece of evidence.",
    zrodlaNaglowek: "Sources",
    ksiazkiNaglowek: "Books",
    b00: "On 24 June, just after half past nine in the morning, I wrote to the AI mentor in my app. I had two losing trades behind me, 135 dollars in total, neither of them in my plan. I wrote the way you write after something like that: “Maybe it’s my ADHD. It looks as if I wanted to wipe out my account.”",
    b01: "The reply came at 9:32. The mentor wrote that this was “not chance or a lack of skill, but subconscious self-sabotage driven by fear of success”, and that my mind “can’t yet carry the new identity of a winning trader”. The practical advice that followed was sensible. At the end it added that these two slips “don’t define me as a trader”. A few sentences earlier, it had done exactly that.",
    b02: "The mentor saw nothing I hadn’t handed it myself. It took a metaphor I had thrown out in anger and gave it back to me as a diagnosis, with a certainty it had no way of having. Had I accepted it, from that day on I would have carried a sentence around inside me: I sabotage myself when things start going well. A sentence like that can’t be tested, but it is very easy to confirm, because every bad day fits it.",
    b03: "That same day I wrote down a rule that later moved from my notes into the platform’s code: hypotheses, not diagnoses. “Fear of success” is still in my register as a hypothesis. It has 7 pieces of evidence for it and 13 against.",
    b04: "This article is about where sentences like that come from, and why an AI system that remembers turns them into something more lasting than a person does. Psychology describes a label on three levels: in the observer’s head, in the relationship between two people, and in a record that travels further. My mentor went through all three in four months. I’ll show each of them using records from my own account, then what I built instead of diagnoses, and finally what the same thing looks like for a manager, a recruiter and a psychologist.",
    b05: "In the head: a drawer, a trait, a confirmation",
    b06: "A label is not a single mistake. It is made of a few ordinary moves of the mind that everyone makes many times a day, and only together do they turn an observation into a verdict.",
    b07: "The first move is the drawer. Gordon Allport wrote in 1954, in his book on prejudice, that we can’t live without categories: we put every new experience into old compartments, because life is too short to tell everything apart. The drawer itself does no harm. “A trader after a loss” is a useful category, and my system uses it too.",
    b08: "The second move turns the drawer into a sentence about a person. When someone does something, we look for the cause. It can be the situation: the market was flat, the signal was too weak, I was tired. It can be a trait: he’s impulsive, he sabotages himself. In 1967 Edward Jones and Victor Harris asked participants to judge essays about Fidel Castro. Some of them knew the writer hadn’t chosen the position but had been assigned it, and they still attributed the essay’s views to the writer. Ten years later Lee Ross called this the fundamental attribution error: in other people we overestimate the trait and underestimate the situation. In 1984 Laraine Winter and James Uleman showed that we take this step before anyone asks us to judge. Participants only had to memorise sentences about someone’s behaviour, and they recalled them best when cued with a word for a trait, even though nobody had mentioned traits. The inference had formed along the way, on its own.",
    b09: "The third move starts once the label is there. In 1978 Mark Snyder and William Swann asked female students to choose questions for a conversation with someone who might be an extravert. They picked the ones easiest to answer in an extraverted way. With the hypothesis “introvert” they did the opposite. Neither being told that extraverts are rare nor a 25-dollar reward for an accurate judgement made a difference. The first attempt to test a hypothesis looks like a search for evidence in its favour.",
    b10: "The same mechanics work when the observer and the observed are one person. Aaron Beck’s cognitive therapy teaches people to catch such thoughts, and in Feeling Good (1980) David Burns put labelling ninth on his list of cognitive distortions. He describes it as an extreme kind of overgeneralisation: instead of saying what I did wrong, I say what I am. In therapy, the answer is a thought record: next to the sentence about yourself, you write down the evidence for it and the evidence against.",
    b11: "On 24 June the first label came from me. “As if I wanted to wipe out my account” is a sentence from Burns’s list, written in anger. The mentor took it as a fact and built a trait on top of it: subconscious sabotage, an identity my mind can’t yet carry. It did notice the situation as well, since it mentioned low volatility in gold, but only as background. The review of that same day found a simpler, situational explanation: I went in too early on an incomplete signal, the market didn’t move, frustration set in, and the second trade was already revenge trading. The question of what could disprove the sabotage diagnosis never came up in the mentor’s reply.",
    b12: "Between people: an expectation that changes the other side",
    b13: "A label doesn’t stay in the observer’s head. It changes how they ask, what they look at and how they react, and the person on the other side responds to that behaviour. In 1948 the sociologist Robert Merton called this a self-fulfilling prophecy: a false definition of the situation evokes behaviour that eventually makes it true.",
    b14: "The best-known example comes from a school. Robert Rosenthal and Lenore Jacobson told teachers that a test had identified pupils who would clearly bloom that year. The names had been drawn at random. A year later these pupils showed larger gains on an intelligence test than the rest, clearly in the youngest classes and hardly at all in the older ones. This experiment has been criticised many times, and that needs saying plainly. A 2005 review by Lee Jussim and Kent Harber concludes that such classroom effects exist, but are usually small and don’t accumulate. They tend to be stronger for pupils from groups that are stigmatised anyway.",
    b15: "The mechanism is easier to see on a small scale. In 1977 Snyder, Tanke and Berscheid asked men to talk over an intercom with a woman they didn’t know. Before the conversation each man was given a photo, supposedly of his partner, sometimes attractive, sometimes not. Judges who heard only the women’s side and knew nothing about the photos rated as warmer and more sociable the women whose partners believed they were talking to someone attractive. Snyder and Swann’s second study in 1978 found the same with extraversion: people questioned as if they were extraverts sounded more extraverted to independent listeners.",
    b16: "My record from 26 August shows this mechanism in an AI system. For three trading days I hadn’t opened a single position: once for private reasons unrelated to the market, twice because I didn’t see a setup. The mentor suggested it might be fear of entering. On the morning of 26 August I noted: “After the mentor’s comments that it might be fear and so on, today I started forcing my way into positions a bit, but that isn’t in line with my scenario.” A “maybe” was enough. A carefully worded sentence changed my decisions, only in the opposite direction: I started proving that I wasn’t afraid. In its summary of the day the mentor noticed this itself and wrote that I shouldn’t try to prove to anyone, including it, that I wasn’t afraid. In the same letter, under areas to improve, it listed “cutting positions early out of fear”.",
    b17: "In the files: a sentence that travels on",
    b18: "The word “labelling” itself came to psychology from sociology. Labelling theory doesn’t ask what goes on in the observer’s head. It asks what a label given by a group or an institution does to a person: a school, a court, a hospital, an HR department. In 1951 Edwin Lemert separated two things. Primary deviance is a single act that could happen to anyone. Secondary deviance begins when a person is no longer responding to their own act, but to how others react to them. Howard Becker went further in Outsiders (1963): a deviant is someone to whom the label has been successfully applied. On this level the record matters most. The label goes into a file, and it is read by people who never saw the behaviour itself.",
    b19: "An AI system with memory is an institution that keeps files. A sentence written about a person doesn’t vanish after the conversation; it comes back in later analyses. On 27 July I closed a short position in Nasdaq futures with a 230-dollar profit, with every condition on my setup checklist met. The mentor rated it 1.5 out of 5 and wrote that I had closed it “manually, out of fear of the price coming back”. My note said the position closed at the Take Profit level, the screenshot showed the TP and SL orders, and I had rated my stress at 3 out of 10.",
    b20: "The bad rating itself wasn’t the worst part. Worse was what happened to it next. The platform kept a list of my “areas for development” with an occurrence counter. The mentor read this list for every analysis and added new items to it. The label went into the record, the counter went up, and at the next trade the mentor already saw a “confirmed pattern” and judged more harshly. From mid-July, between seven and fourteen such entries were added every day, and the average rating of my trades fell in two weeks from about 3 to about 1.4. The analysis of 27 July added five new items, three of which repeated charges that an audit on the same day had refuted. The counter stopped measuring me and started measuring the history of its own labelling.",
    b21: "This is Becker’s level, only in code. Every further module that read my memory received the label without the day it came from. The fix was to change the status of the record. The memory block now says plainly that these are hypotheses, not facts. A label needs fresh evidence, and refuting your own hypothesis weighs more than repeating it.",
    b22: "Where AI gets it from",
    b23: "It’s tempting to say that AI takes over human cognitive processes. I’d be careful with that, because it’s easy to knock down. A language model has no drawers or attributions in the human sense. But it learns from texts written by people, and the results of our shortcuts are everywhere in those texts. We write about people in adjectives: impulsive, lazy, disciplined. A description of the situation takes longer, so it turns up less often. The model doesn’t inherit our processes, only their trace in language, which is a ready-made label, and it delivers that label in a confident tone.",
    b24: "The rest is added by whoever designs the system. On 8 October I wrote that the mentor was “imputing” things to me. The audit that day went through seven of its texts. Six attributed to me a state, a motive or an intention that wasn’t in my words: “you feel a slight regret”, “a defensive break-even out of fear”. Next to the second one was my purely technical reasoning: a demand candle on very high volume and a strong reaction from the zone. The cause wasn’t in the model but in the instruction we had written ourselves. The prompt told the mentor to begin every reply with empathy: “Name the emotion.” Faced with a factual note, the model had to find an emotion, and since there wasn’t one, it made one up. The instruction “be empathetic” had turned into an obligation to diagnose. We fixed it the same day.",
    b25: "That’s why an AI that observes a person can do more damage than a single human observer. It goes through all three levels at once: it takes a ready-made label from language, confirms it in conversation and stores it in a memory that the next modules read. It does this every day, without tiring, and always in the same tone of certainty.",
    b26: "What I built instead of diagnoses",
    b27: "The rule is simple: the system may have a view about my behaviour, but not about me. Every such view is a hypothesis with four parts. The first is behaviour in a situation: “after a loss, enters another trade outside the plan”, not “is impulsive”. The second and third are two counters, evidence for and evidence against, kept in writing, because in the head, the model’s included, whatever fits wins. The fourth is a falsification condition, written down before the data arrives. Without it, every piece of counter-evidence can be pushed aside (“it was easier this time”) and the hypothesis becomes a label again. The morning brief brings into the conversation only hypotheses that have such a condition.",
    b28: "Some safeguards only came with experience. A day without a loss isn’t evidence against revenge trading, because there was nothing to test. A single event can’t flood the counter: at most three pieces of evidence from one day go to one hypothesis, and only strong ones count towards the thresholds. The mentor may name an emotion only when it appeared in my own words. If it didn’t, it asks.",
    b29: "The other half is conversation. After the day closes, the system asks me questions about that particular day, and my answer goes into memory as my words, not its interpretation. When a pattern emerges from my trades, I get a card with three answers: “Let’s write it down together”, “Not now” and “That’s not it”. A pattern I’ve rejected comes back only if it forms again from new trades. In fairness, the sentence I can add when I choose “That’s not it” is stored by the system, but nothing reads it yet. So the right to object only works halfway.",
    b30: "And the “fear of success” from 24 June? It sits in my register as a hypothesis, with a falsification condition written down and a count of 7 to 13. Nobody has crossed it out, and nobody is talking me into it.",
    b31: "Beyond my own account",
    b32: "Anyone who judges people for a living works on all three levels. The difference is which one they are most exposed on.",
    b33: <><strong>A manager</strong> most often goes wrong on the first level. “Doesn’t take responsibility” is a trait derived from a few situations. A sentence about behaviour would read: “in the last three projects without a written goal, he waited for a decision from above”. Add two things that are usually missing: what I saw against it, and what would have to happen for me to change my mind. The conversation then starts with a question about the situation, not about the person. Snyder and Swann are a reminder that our first questions look for confirmation on their own, so it’s worth deliberately asking one that could disprove the hypothesis.</>,
    b34: <><strong>A recruiter</strong> works mainly on the third level. The note after an interview is read by the next person, often before they meet the candidate. “Not very proactive” will travel through the whole process, though nobody but its author knows where it came from. It’s better to write down one situation I actually saw, and what I didn’t have time to check. The next person then gets a hypothesis to test, not a verdict to confirm.</>,
    b35: <><strong>People who lead change</strong> in organisations have their own word for this: resistance. “The sales team is resistant to the new tool” can be neither tested nor fixed. “Reports go the old way in the weeks when the new tool has no template for this department” can be tested in two days and fixed with one template.</>,
    b36: <><strong>The designer of an AI system</strong> that observes people has all three levels in one product. My months of work leave me with questions for every such project. Does any instruction in the prompt tell the model to pronounce on the person, even when data is missing? Does memory store sentences about the person as facts, or as hypotheses with a counter against them? Does the person have a place to say “that’s not it”, and does anyone read it afterwards?</>,
    b37: <><strong>A psychologist</strong> knows this from practice as case formulation. I would add only a counter of evidence against, kept in writing rather than in memory. In memory, whatever fits wins, for a therapist just as for a model.</>,
    b38: "Limits",
    b39: "This is the experience of one person on one system, in which I am both the user and the designer. I saw these labels because I was looking for them: I regularly audit my own mentor. A user who doesn’t could miss them, and that is the worst case.",
    b40: "The studies I cite are about people, not models. That AI goes through the same levels is my interpretation of records from my own account, not the result of an experiment. The studies have their limits too: in later reviews, the Rosenthal effect in schools usually turned out to be small.",
    b41: "A hypothesis isn’t safe on its own either. Evidence for or against is proposed by the model. The code accepts it only when it’s backed by a verbatim quote from that day’s data or from my words, but the model can still misjudge what the quote means. A written counter doesn’t remove error. It only makes the error visible and open to argument.",
    b42: "One sentence and one question",
    b43: "What label did you put on someone this week, and what would have to happen for you to withdraw it? If you have no answer to the second part, it wasn’t an observation.",
  },
};

/** Źródła są te same w obu wersjach (opis bibliograficzny po angielsku), DOI sprawdzone w Crossref 31.10.2026. */
const PRACE: { opis: string; doi: string }[] = [
  { opis: 'Jones, E. E., & Harris, V. A. (1967). The attribution of attitudes. Journal of Experimental Social Psychology, 3, 1–24.', doi: '10.1016/0022-1031(67)90034-0' },
  { opis: 'Ross, L. (1977). The intuitive psychologist and his shortcomings. Advances in Experimental Social Psychology, 10, 173–220.', doi: '10.1016/S0065-2601(08)60357-3' },
  { opis: 'Winter, L., & Uleman, J. S. (1984). When are social judgments made? Journal of Personality and Social Psychology, 47(2), 237–252.', doi: '10.1037/0022-3514.47.2.237' },
  { opis: 'Snyder, M., & Swann, W. B. (1978). Hypothesis-testing processes in social interaction. Journal of Personality and Social Psychology, 36(11), 1202–1212.', doi: '10.1037/0022-3514.36.11.1202' },
  { opis: 'Snyder, M., Tanke, E. D., & Berscheid, E. (1977). Social perception and interpersonal behavior. Journal of Personality and Social Psychology, 35(9), 656–666.', doi: '10.1037/0022-3514.35.9.656' },
  { opis: 'Merton, R. K. (1948). The self-fulfilling prophecy. The Antioch Review, 8(2), 193–210.', doi: '10.2307/4609267' },
  { opis: 'Jussim, L., & Harber, K. D. (2005). Teacher expectations and self-fulfilling prophecies. Personality and Social Psychology Review, 9(2), 131–155.', doi: '10.1207/s15327957pspr0902_3' },
];

const KSIAZKI = [
  'Allport, G. W. (1954). The Nature of Prejudice. Addison-Wesley.',
  'Beck, A. T. (1976). Cognitive Therapy and the Emotional Disorders. International Universities Press.',
  'Burns, D. D. (1980). Feeling Good: The New Mood Therapy. William Morrow.',
  'Rosenthal, R., & Jacobson, L. (1968). Pygmalion in the Classroom. Holt, Rinehart and Winston.',
  'Lemert, E. M. (1951). Social Pathology. McGraw-Hill.',
  'Becker, H. S. (1963). Outsiders: Studies in the Sociology of Deviance. Free Press.',
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
          <p>{t.b00}</p>
          <p>{t.b01}</p>
          <p>{t.b02}</p>
          <p>{t.b03}</p>
          <p>{t.b04}</p>

          <h2>{t.b05}</h2>
          <p>{t.b06}</p>
          <p>{t.b07}</p>
          <p>{t.b08}</p>
          <p>{t.b09}</p>
          <p>{t.b10}</p>
          <p>{t.b11}</p>

          <h2>{t.b12}</h2>
          <p>{t.b13}</p>
          <p>{t.b14}</p>
          <p>{t.b15}</p>
          <p>{t.b16}</p>

          <h2>{t.b17}</h2>
          <p>{t.b18}</p>

          <blockquote className="art-pull">{t.cytat}</blockquote>

          <p>{t.b19}</p>
          <p>{t.b20}</p>
          <p>{t.b21}</p>

          <h2>{t.b22}</h2>
          <p>{t.b23}</p>
          <p>{t.b24}</p>
          <p>{t.b25}</p>

          <h2>{t.b26}</h2>
          <p>{t.b27}</p>
          <p>{t.b28}</p>
          <p>{t.b29}</p>
          <p>{t.b30}</p>

          <h2>{t.b31}</h2>
          <p>{t.b32}</p>
          <p>{t.b33}</p>
          <p>{t.b34}</p>
          <p>{t.b35}</p>
          <p>{t.b36}</p>
          <p>{t.b37}</p>

          <h2>{t.b38}</h2>
          <p>{t.b39}</p>
          <p>{t.b40}</p>
          <p>{t.b41}</p>

          <h2>{t.b42}</h2>
          <div className="art-dark">
            <p>{t.puenta}</p>
          </div>
          <p>{t.b43}</p>

          <h2>{t.zrodlaNaglowek}</h2>
          <ul>
            {PRACE.map((p) => (
              <li key={p.doi}>
                {p.opis} <a href={`https://doi.org/${p.doi}`}>doi:{p.doi}</a>
              </li>
            ))}
          </ul>
          <h3>{t.ksiazkiNaglowek}</h3>
          <ul>
            {KSIAZKI.map((k) => (
              <li key={k}>{k}</li>
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
