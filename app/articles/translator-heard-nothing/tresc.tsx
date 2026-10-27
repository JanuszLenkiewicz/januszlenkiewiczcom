'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import { T, useLang } from '@/components/lang';
import type { Lang } from '@/content/site';

/**
 * Artykuł dwujęzyczny. Treść jest wygenerowana z tekstu przygotowanego na LinkedIn
 * (repo ai-engineer, kampania/linkedin-artykul-szept-slyszenie.md); układ niżej jest wspólny dla obu wersji.
 * Fakty: translate-ios/doc/SPEECH-ROBUSTNESS-2026-10-27.md i SPEECH-NOISE-2026-10-27.md.
 */

type Blok = ReactNode;

const TRESC: Record<Lang, Record<string, Blok>> = {
  pl: {
    label: "ARTYKUŁ · AI NA URZĄDZENIU",
    tytul: "W taksówce mój tłumacz nic nie usłyszał. Model nie był problemem.",
    lead: "Zbudowałem tłumacza na iPhone’a, który działa offline. W taksówce prawie nic nie usłyszał, a przyczyna nie leżała w modelu. Notatki o tym, czego AI potrzebuje, zanim zacznie działać obok ludzi, a nie na ekranie.",
    data: "27 października 2026",
    tag: "AI na urządzeniu",
    czas: "8 min czytania",
    cytat: "Błąd słyszenia wygląda jak błąd myślenia.",
    ramkaNaglowek: "Czego ten tekst nie twierdzi",
    ramka: "Szept to tłumacz, nie agent. Nie odszumiam jeszcze dźwięku, nie rozdzielam nakładających się głosów i nie twierdzę, że słyszy lepiej niż Google. Prawdziwego kwadransa ciszy przez mikrofon przy zablokowanym ekranie jeszcze nie sprawdziłem. Liczby pochodzą z małego zestawu testów na jednym telefonie, nie z rankingu modeli.",
    b00: "Spędzam kilka miesięcy w Azji i od kilku tygodni buduję własnego tłumacza na iPhone'a. Rozmówca mówi, a ja słyszę go po polsku w słuchawkach. Może działać w pełni offline: rozpoznawanie mowy, tłumaczenie i polski głos dzieją się na telefonie, a dźwięk nigdzie nie wychodzi.",
    b01: "Kilka dni temu zapisałem obserwację, która mi się nie spodobała. W taksówce, w centrum miasta, czasem nawet w cichym pokoju Google Translate słyszał ludzi lepiej niż moja aplikacja. Kierowca mówił po angielsku. Moja aplikacja pokazała ostrzeżenie: trzy puste rozpoznania z rzędu.",
    b02: "Pierwsza myśl: zły model, trzeba wziąć lepszy. To była błędna myśl. A to, dlaczego była błędna, jest najbardziej użyteczną rzeczą, jakiej nauczyłem się o wprowadzaniu AI do fizycznego świata.",
    b03: "Myślałem, że chodzi o tłumaczenie",
    b04: "Na początku traktowałem projekt jak jedno zadanie: przetłumaczyć to, co mówi druga osoba. Okazało się, że to łańcuch. Mikrofon łapie głos i wszystko dookoła. Coś musi zdecydować, czy ten dźwięk to w ogóle mowa, i gdzie kończy się zdanie. Potem, w jakim to języku. Dopiero wtedy model rozpoznawania zamienia dźwięk na tekst, i dopiero wtedy zaczyna się tłumaczenie. Za nim kolejka, głos w uchu i wszystko, co robi z tobą telefon: blokuje ekran, nagrzewa się, rozładowuje, inna aplikacja zabiera mu dźwięk.",
    b05: "Każde ogniwo może zgubić informację albo dołożyć opóźnienie. A model językowy, czyli ta część, o której wszyscy mówią, siedzi gdzieś w środku.",
    b06: "Co naprawdę powiedziały logi",
    b07: "Nie miałem nagrania z taksówki. Nie nagrywam rozmów. Ale aplikacja trzyma na telefonie krótkie techniczne logi i wystarczyły, żeby zmienić pytanie.",
    b08: "Dziewiętnaście rozpoczętych rozpoznań. Każde skończyło się na sześciosekundowym limicie bezpieczeństwa. Ani jedno nie skończyło się dlatego, że aplikacja znalazła pauzę. Z osiemnastu zakończonych trzynaście wróciło puste. Poziom mikrofonu był w porządku; to nie był telefon w kieszeni.",
    b09: "Aplikacja nie była więc głucha. W hałasie nie umiała znaleźć końca zdania, więc cięła mowę w stałych odstępach i podawała modelowi kawałki, które zaczynały się i kończyły w złych miejscach. Nie udowodnię, że w każdym pustym kawałku był kierowca. To mocny trop, nie wyrok. Ale z zewnątrz wygląda to dokładnie jak słaby model, a przyczyna była krok wcześniej.",
    b10: "To pierwsza lekcja i myślę, że dotyczy każdego agenta, który będzie żył obok ludzi: błąd słyszenia wygląda jak błąd myślenia. Jeśli agent cię źle zrozumiał, jego rozumowanie może być w porządku. Mógł po prostu rozumować nad połową zdania.",
    b11: "Dlaczego tego nie widzimy",
    b12: "Jako psychologa ta część interesuje mnie najbardziej. Żadnego z tych wymagań nie miałem w głowie na starcie, bo ludzie robią to wszystko bez zauważania.",
    b13: "W 1953 roku Colin Cherry opisał to, co dziś nazywamy problemem przyjęcia koktajlowego: w sali pełnej głosów śledzimy jednego rozmówcę i odfiltrowujemy resztę. W 1970 roku Richard Warren pokazał, że gdy fragment słowa zastąpić kaszlnięciem, słuchacze nadal „słyszą” brakującą głoskę i często nie potrafią powiedzieć, gdzie był kaszel. Mózg uzupełnia lukę z kontekstu. I wiemy, bez myślenia, że rozmowa się nie skończyła tylko dlatego, że przez chwilę nikt nic nie mówi.",
    b14: "W robotyce nazywa się to paradoksem Moraveca: to, co dla ludzi łatwe, bywa dla maszyn najtrudniejsze, i odwrotnie. Model napisze streszczenie umowy. Wiedzieć, że kierowca zaraz się odezwie po dziesięciu minutach radia, jest trudniej.",
    b15: "To samo widzę, kiedy mapuję z ludźmi procesy w firmach. Kroki, o których nikt nie mówi, to te, które robią bez myślenia. I to one psują się pierwsze, kiedy coś automatyzujesz. Fizyczny świat też ma takie kroki. Po prostu nigdy nie musieliśmy ich spisywać.",
    b16: "Lepszy element, który pogorszył wynik",
    b17: "Spróbowałem małego detektora mowy, Silero VAD. To model wielkości około 2,3 MB, działa na telefonie i odpowiada na jedno wąskie pytanie: czy to jest mowa? Stara metoda pytała o coś innego: czy to jest głośne? W taksówce głośnych rzeczy jest dużo.",
    b18: "Nie chciałem oceniać go po jednym udanym zdaniu. Zbudowałem więc powtarzalny test na telefonie: te same nagrania przez starą i nową metodę, cztery języki, mowa zwykła, bardzo cicha, biały szum na kilku poziomach, niski pomruk, pauzy i dźwięki bez mowy. Potem drugi test, z prawdziwym mikrofonem: MacBook odtwarzał zdania na głos, iPhone słuchał obok.",
    b19: "Testy na plikach wyglądały dobrze. Przy bardzo cichej mowie stara metoda gubiła każdą próbkę we wszystkich czterech językach. Nowy detektor przepuścił mowę we wszystkich. To nie znaczy, że tekst był za każdym razem poprawny: po tajsku i filipińsku rozpoznawanie dalej się myliło. Na samym szumie detektor słusznie nie wysłał niczego do modelu, a stara metoda wyprodukowała zmyślone słowo.",
    b20: "Prawdziwy mikrofon opowiedział inną historię. Z detektorem model Whisper całkowicie pominął zaszumione zdanie, to samo, które stara metoda złapała. Jego odsetek błędnych słów w tym teście wzrósł z 24% do 52%. Model Parakeet pierwszy raz dobrze rozpoznał ciche zdanie, ale zaszumione uciął; jego łączny wynik się nie zmienił.",
    b21: "Ten sam element pomógł w ciszy i zaszkodził w hałasie. Takiego wyniku nie chcę chować. To najbardziej użyteczny wynik tygodnia, bo pokazuje, gdzie jest następna praca: detektor za późno łapie początek zaszumionego zdania, więc trzeba sprawdzić, ile dźwięku zachować przed początkiem mowy i czy odszumianie przed rozpoznawaniem pomaga.",
    b22: "Detektor jest dalej domyślnie włączony w wersji podróżnej, z przełącznikiem powrotu do starego zachowania. Nie napisałem „rozwiązaliśmy hałas”, bo nie rozwiązaliśmy.",
    b23: "Kwadrans ciszy to dalej rozmowa",
    b24: "W trakcie testów zauważyłem dwie sytuacje z własnych dni, których nie miał żaden benchmark.",
    b25: "Pierwsza: fizjoterapia. Piętnaście minut, w których nikt nic nie mówi, a potem terapeuta mówi jedno ważne zdanie. Druga: taksówka. Długa cisza, włączone radio, a na koniec kierowca odwraca się i o coś pyta. W obu przypadkach aplikacja powinna dalej słuchać, złapać to pierwsze zdanie i je przetłumaczyć, bez sięgania po telefon, żeby znowu nacisnąć Start.",
    b26: "Wiele aplikacji traktuje długą ciszę jako koniec sesji, żeby oszczędzać baterię. Dla agenta, który ma być przy tobie, to dokładnie odwrotnie. Moja aplikacja ma teraz ustawienie „słuchaj, aż zatrzymam”, domyślnie włączone, które zdejmuje limit bezczynności. Test logiki: piętnaście minut ciszy, potem mowa — przechodzi. Prawdziwego kwadransa przez mikrofon, przy zablokowanym ekranie, jeszcze nie zrobiłem.",
    b27: "Jest tu też subtelność. Cisza i zepsuty mikrofon wyglądają podobnie: brak mowy. Ale cisza znaczy, że dźwięk dalej płynie i nikt nie mówi. Zepsuta trasa audio znaczy, że dźwięk w ogóle nie dochodzi. Jedno jest normalne, drugie jest awarią, i aplikacja nie może ich pomylić.",
    b28: "I radio. Najpierw założyłem, że aplikacja powinna je ignorować. Nie powinna. Radio może być tłumaczone, to w porządku. Ważne jest, żeby zdanie kierowcy, kiedy zacznie mówić, nie utknęło w kolejce za trzema minutami wiadomości. Radio grające w tym samym momencie, w którym mówi kierowca, to inny i trudniejszy problem: detektor wie, że jest mowa, ale nie rozdzieli dwóch głosów.",
    b29: "Offline to nie to samo co lepiej",
    b30: "Lubię to, że aplikacja działa bez sieci. Jest prywatna i działa tam, gdzie nie ma internetu w telefonie. Ale offline daje niezależność, nie lepszy słuch. Google może mieć lepsze tłumienie szumu, lepsze dzielenie mowy albo lepsze modele; nie wiem, jak działa ich system, a moje porównanie to było moje doświadczenie, nie kontrolowany test. „Działa na urządzeniu” to własność prywatności. Nie mówi nic o tym, czy zrozumiało kierowcę.",
    b31: "Co biorę do projektowania agentów",
    b32: "Szept to tłumacz, nie agent. Nie działa w świecie. Ale to pierwszy projekt, w którym buduję warstwę, której będzie potrzebował każdy agent „zawsze przy tobie”: percepcję, która działa wśród prawdziwych ludzi, prawdziwego hałasu i prawdziwych pauz. Kilka zasad, których się teraz trzymam:",
    b33: <><strong>Testuj łańcuch, nie model.</strong> Te same dane przez starą i nową wersję, i prawdziwy mikrofon w teście. Jedno udane zdanie nic nie dowodzi.</>,
    b34: <><strong>Spisuj wymagania, których ludzie nie wypowiadają.</strong> Długa cisza, przerwania, ktoś trzeci mówi, radio, zablokowany ekran. Pytaj o ostatnią konkretną sytuację, nie o to, jak zwykle bywa.</>,
    b35: <><strong>Oddzielaj „nic się nie stało” od „nie wiem”.</strong> Cisza to nie brak sygnału. Pusta transkrypcja to nie dowód, że nikt nie mówił.</>,
    b36: <><strong>Zostaw regresję w historii.</strong> Przypadek, w którym nowy element pogorszył wynik, to mapa następnej iteracji.</>,
    b37: <><strong>Oceniaj moment, nie tylko odpowiedź.</strong> Poprawne tłumaczenie, które przychodzi po trzech minutach radia, jest złym tłumaczeniem.</>,
    b38: "Wracam do jednej myśli. Wybaczam człowiekowi, który mówi „przepraszam, nie dosłyszałem”. Dużo mniej cierpliwy jestem wobec kogoś, kto pewnie odpowiada na coś, czego nie powiedziałem. Dla agenta przy człowieku wiedza o tym, czego nie usłyszał, może być ważniejsza niż to, jak dobrze rozumuje nad tym, co usłyszał.",
  },
  en: {
    label: "ARTICLE · ON-DEVICE AI",
    tytul: "My translator heard nothing in the taxi. The model wasn’t the problem.",
    lead: "I built an offline translator for my iPhone. In a taxi it heard almost nothing, and the cause wasn’t the model. Notes on what AI needs before it can work next to people instead of on a screen.",
    data: "27 October 2026",
    tag: "On-device AI",
    czas: "8 min read",
    cytat: "A hearing error looks like a thinking error.",
    ramkaNaglowek: "What this article does not claim",
    ramka: "Szept is a translator, not an agent. I don’t suppress noise yet, I don’t separate overlapping voices, and I don’t claim it hears better than Google. I haven’t yet run a real fifteen minutes of silence through the microphone with the screen locked. The numbers come from a small test set on one phone, not from a model ranking.",
    b00: "I'm spending a few months in Asia, and for the last few weeks I've been building my own translator for the iPhone. The other person speaks, and I hear them in Polish, in my earbuds. It can run fully offline: speech recognition, translation and the Polish voice all happen on the phone, and no audio leaves it.",
    b01: "A few days ago I wrote down an observation I didn't like. In a taxi, in a busy city centre, sometimes even in a quiet room, Google Translate seemed to hear people better than my app did. The driver was speaking English. My app showed a warning: three empty recognitions in a row.",
    b02: "My first thought was: wrong model, get a better one. That thought was wrong. And the reason it was wrong is the most useful thing I've learned so far about putting AI into the physical world.",
    b03: "I thought this was about translation",
    b04: "When I started, I treated the project as one task: translate what the other person says. It turned out to be a chain. The microphone picks up the voice and everything around it. Something has to decide whether this sound is speech at all, and where a sentence ends. Then which language it is. Only then does a recognition model turn sound into text, and only then does translation start. After that come a queue, a voice in your ear, and everything a phone does to you: the screen locks, the device heats up, the battery drains, another app takes the audio.",
    b05: "Every link can lose information or add delay. And the language model, the part everyone talks about, sits somewhere in the middle.",
    b06: "What the logs actually said",
    b07: "I had no recording of the taxi ride. I don't record conversations. But the app keeps short technical logs on the phone, and they were enough to change the question.",
    b08: "Nineteen recognitions started. Every single one ended on the six-second safety limit. Not one ended because the app had found a pause. Of the eighteen that finished, thirteen came back empty. The microphone level was fine; this wasn't a phone in a pocket.",
    b09: "So the app wasn't deaf. In the noise it couldn't find where a sentence ended, so it cut speech at fixed intervals and handed the model fragments that started and stopped in the wrong places. I can't prove that every empty fragment contained the driver. It's a strong lead, not a verdict. But from the outside this looks exactly like a weak model, and the cause was one step earlier.",
    b10: "That's the first lesson, and I think it applies to every agent that will live next to people: a hearing error looks like a thinking error. If an agent misunderstood you, its reasoning may be fine. It may simply have reasoned over half a sentence.",
    b11: "Why we don't see it",
    b12: "As a psychologist, I find this part the most interesting. None of these requirements were in my head when I started, because people do all of it without noticing.",
    b13: "In 1953 Colin Cherry described what we now call the cocktail party problem: in a room full of voices, we follow one speaker and filter out the rest. In 1970 Richard Warren showed that when part of a word is replaced by a cough, listeners still \"hear\" the missing sound and often can't tell where the cough was. The brain fills the gap from context. And we know, without thinking about it, that a conversation isn't over just because nobody has said anything for a while.",
    b14: "In robotics this is called Moravec's paradox: what's easy for humans is often the hardest part for machines, and the other way round. A model can summarise a contract. Knowing that the driver is about to speak again after ten minutes of radio is harder.",
    b15: "I see the same thing when I map business processes with people. The steps nobody mentions are the ones they do without thinking. They are also the steps that break first when you automate. The physical world has those steps too. We just never had to write them down.",
    b16: "A better component that made things worse",
    b17: "The fix I tried was a small voice activity detector, Silero VAD. It's a model of about 2.3 MB that runs on the phone and answers one narrow question: is this speech? The old method asked a different question: is this loud? In a taxi, a lot of things are loud.",
    b18: "I didn't want to judge it by one good sentence. So I built a repeatable test on the phone: the same recordings through the old method and the new one, four languages, normal speech, very quiet speech, white noise at several levels, a low hum, pauses, and sounds with no speech at all. Then a second test with a real microphone: my MacBook played the sentences out loud, and the iPhone listened from next to it.",
    b19: "The file tests looked good. With very quiet speech, the old method dropped every sample in all four languages. The new detector passed the speech through in all of them. That doesn't mean the text was right every time: in Thai and Filipino, recognition still made mistakes. On pure noise, the detector correctly sent nothing to the model, where the old method had produced a made-up word.",
    b20: "The real microphone told a different story. With the detector on, the Whisper model missed the noisy sentence completely, the same one the old method had caught. Its word error rate on that test went from 24% to 52%. The Parakeet model got the quiet sentence right for the first time, but cut the noisy one short; its overall result didn't move.",
    b21: "The same component helped in quiet and hurt in noise. That's not a result I want to hide. It's the most useful result of the week, because it shows where the next work is: the detector catches the start of a noisy sentence too late, so I need to test how much audio to keep before speech begins, and whether noise reduction before recognition helps.",
    b22: "The detector is still on by default in the travel version, with a switch back to the old behaviour. I didn't write \"we solved noise\", because we didn't.",
    b23: "Fifteen minutes of silence is still a conversation",
    b24: "While testing, I noticed two situations from my own days that no benchmark had.",
    b25: "The first: physiotherapy. Fifteen minutes in which nobody says anything, then the therapist says one important sentence. The second: a taxi. A long silence, the radio on, and at the end the driver turns around and asks something. In both cases the app should still be listening, catch that first sentence and translate it, without me reaching for the phone to press Start again.",
    b26: "Many apps treat a long silence as the end of the session, to save battery. For an agent that is supposed to stay with you, that's exactly wrong. My app now has a \"listen until I stop it\" setting, on by default, which removes the idle limit. A logic test of fifteen minutes of silence followed by speech passes. A real fifteen minutes through the microphone, with the screen locked, I haven't done yet.",
    b27: "There's a subtle point here too. Silence and a broken microphone look alike: no speech. But silence means audio is still arriving and nobody is talking. A broken audio route means no audio arrives at all. One is normal, the other is a failure, and the app must not confuse them.",
    b28: "And the radio. At first I assumed the app should ignore it. It shouldn't. The radio can be translated; that's fine. What matters is that when the driver starts talking, his sentence isn't stuck in a queue behind three minutes of news. A radio playing at the same moment the driver speaks is a different and harder problem: the detector knows there is speech, but it can't separate two voices.",
    b29: "Offline is not the same as better",
    b30: "I like that the app works without a network. It's private, and it works where there's no mobile data. But offline gives you independence, not better hearing. Google may have better noise handling, better segmentation or better models; I don't know how their system works, and my comparison was my own experience, not a controlled test. \"It runs on the device\" is a privacy property. It says nothing about whether it understood the driver.",
    b31: "What I'm taking into agent design",
    b32: "Szept is a translator, not an agent. It doesn't act in the world. But it's the first project where I'm building the layer every \"always with you\" agent will need: perception that works among real people, real noise and real pauses. A few rules I now follow:",
    b33: <><strong>Test the chain, not the model.</strong> The same input through the old and the new version, with a real microphone in the test. One good sentence proves nothing.</>,
    b34: <><strong>Write down the requirements people never say out loud.</strong> Long silence, interruptions, a third person talking, a radio, a locked screen. Ask about the last concrete situation, not about how it usually goes.</>,
    b35: <><strong>Separate "nothing happened" from "I can't tell".</strong> Silence is not a missing signal. An empty transcript is not proof that nobody spoke.</>,
    b36: <><strong>Keep the regression in the story.</strong> The case where the new part made things worse is the map for the next iteration.</>,
    b37: <><strong>Judge the timing, not only the answer.</strong> A correct translation that arrives after three minutes of radio is a wrong translation.</>,
    b38: "I keep coming back to one thought. I forgive a person who says \"sorry, I didn't catch that\". I'm much less patient with someone who confidently answers something I never said. For an agent at your side, knowing what it missed may matter more than how well it reasons about what it heard.",
  },
};

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
          <h2>{t.b03}</h2>
          <p>{t.b04}</p>
          <p>{t.b05}</p>
          <h2>{t.b06}</h2>
          <p>{t.b07}</p>
          <p>{t.b08}</p>
          <p>{t.b09}</p>
          <p>{t.b10}</p>

          <blockquote className="art-pull">{t.cytat}</blockquote>

          <h2>{t.b11}</h2>
          <p>{t.b12}</p>
          <p>{t.b13}</p>
          <p>{t.b14}</p>
          <p>{t.b15}</p>
          <h2>{t.b16}</h2>
          <p>{t.b17}</p>
          <p>{t.b18}</p>
          <p>{t.b19}</p>
          <p>{t.b20}</p>
          <p>{t.b21}</p>
          <p>{t.b22}</p>
          <h2>{t.b23}</h2>
          <p>{t.b24}</p>
          <p>{t.b25}</p>
          <p>{t.b26}</p>
          <p>{t.b27}</p>
          <p>{t.b28}</p>
          <h2>{t.b29}</h2>
          <p>{t.b30}</p>
          <div className="art-callout">
            <b>{t.ramkaNaglowek}</b>
            {t.ramka}
          </div>

          <h2>{t.b31}</h2>
          <p>{t.b32}</p>
          <ul>
            <li>{t.b33}</li>
            <li>{t.b34}</li>
            <li>{t.b35}</li>
            <li>{t.b36}</li>
            <li>{t.b37}</li>
          </ul>
          <p>{t.b38}</p>
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
