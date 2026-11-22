// PLIK GENEROWANY przez ai-engineer/www/prezentacje_chmura/eksport_strona.py — nie edytuj ręcznie.
// Źródła: www/{azure,vertex}/prezentacje/{pelna,technologie}.json (PL) oraz .../en/*.json (EN).

export type SlajdPrezentacji =
  | { typ: 'tyt'; tytul: string; opis: string }
  | { typ: 'przerywnik'; tytul: string; opis: string }
  | {
      typ: 'karta';
      etykieta: string;
      tytul: string;
      problem?: string;
      opis: string;
      punkty: string[];
      korzysc?: string;
    };
export type Tresc = {
  platforma: string;
  tytul: string;
  podtytul: string;
  opis_listy: string;
  slajdy: SlajdPrezentacji[];
};
export type Prezentacja = { id: string; pl: Tresc; en: Tresc };

export const PREZENTACJE_CHMURA: Record<'azure' | 'vertex', Prezentacja[]> = {
  "azure": [
    {
      "id": "pelna",
      "pl": {
        "platforma": "Microsoft Azure · Foundry",
        "tytul": "System agentów AI do przygotowania spotkań",
        "podtytul": "Microsoft Azure i Foundry: problemy i rozwiązania",
        "opis_listy": "Wersja pełna: wyzwania projektu i to, jak je rozwiązaliśmy na Azure i Microsoft Foundry.",
        "slajdy": [
          {
            "typ": "tyt",
            "tytul": "System agentów AI do przygotowania spotkań",
            "opis": "Microsoft Azure i Foundry. Agenci przygotowują ludzi do spotkań i przestrzegają uprawnień do dokumentów oraz do treści wewnątrz nich."
          },
          {
            "typ": "karta",
            "etykieta": "Kontekst",
            "tytul": "Punkt wyjścia",
            "opis": "Aplikacja do zarządzania spotkaniami dla dużej międzynarodowej firmy, z dokumentacją projektową i R&D.",
            "punkty": [
              "rozwijana przez około siedem lat jako klasyczna aplikacja, od 2025 z AI",
              "na Azure i Microsoft Foundry od drugiej połowy 2026",
              "kilkadziesiąt tysięcy użytkowników, setki tysięcy dokumentów",
              "własny system logowania firmy, niezależny od Azure"
            ],
            "korzysc": "Cel projektu: skrócić czas, jaki ludzie poświęcają na przygotowanie do spotkania."
          },
          {
            "typ": "karta",
            "etykieta": "Kontekst",
            "tytul": "Wyzwania",
            "opis": "Najtrudniejsze nie były modele, tylko uprawnienia i wiedza, która stale rośnie.",
            "punkty": [
              "kilkadziesiąt ról, komitety, projekty i region pracownika",
              "dostęp do całych dokumentów i do sekcji wewnątrz jednego dokumentu",
              "uprawnienia zmieniają się razem z napływem dokumentów i członkostw",
              "system uczy się z kolejnych spotkań, więc musi pilnować poufności tego, czego się nauczył",
              "dwa rodzaje agentów: deterministyczni i decyzyjni"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Kontekst",
            "tytul": "Zasady projektowe",
            "opis": "Osiem zasad, z których wynikają wszystkie późniejsze decyzje.",
            "punkty": [
              "model nigdy nie decyduje o dostępie",
              "agenci deterministyczni pilnują granic, decyzyjni myślą w ich obrębie",
              "jedno źródło prawdy o uprawnieniach",
              "poufność ma poziom sekcji, a nie pliku",
              "wiedza wyprowadzona dziedziczy poufność źródeł",
              "agent nigdy nie wybiera tożsamości",
              "treść dla modelu zawsze pochodzi z bazy",
              "każdy dostaje brief na miarę swoich uprawnień"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Kontekst",
            "tytul": "Architektura w skrócie",
            "opis": "Granicą zaufania jest nasze API. Usługi Azure nie muszą znać użytkowników.",
            "punkty": [
              "wejście: własne logowanie firmy → API Management → API i usługa polityk w Container Apps",
              "dane: Azure SQL (dokumenty w sekcjach, model ról, rejestr faktów) i Azure AI Search (indeks RAG)",
              "agenci: graf LangGraph z LangChain w Container Apps, modele Claude i GPT z Microsoft Foundry",
              "po spotkaniu: Durable Functions uruchamia pętlę wiedzy z zatwierdzeniem przez człowieka",
              "osłony i ślady: Prompt Shields, Private Endpoints, OpenTelemetry w Application Insights"
            ]
          },
          {
            "typ": "przerywnik",
            "tytul": "Dane i uprawnienia",
            "opis": "Gdzie leży wiedza i kto pilnuje dostępu."
          },
          {
            "typ": "karta",
            "etykieta": "Dane i uprawnienia",
            "tytul": "Kto decyduje o dostępie",
            "problem": "Prompt z zasadami dostępu da się obejść, także treścią dokumentu.",
            "opis": "Uprawnienia egzekwuje warstwa danych i wyszukiwania, zanim cokolwiek trafi do modelu.",
            "punkty": [
              "model ról w bazie: role plus atrybuty (projekt, komitet, region, poziom poufności)",
              "jedna usługa polityk wylicza profil dostępu dla wszystkich miejsc",
              "z jednego profilu powstaje kontekst dla bazy i filtr dla wyszukiwarki",
              "reguły jako kod: wersje, przegląd i testy uprawnień przy każdej zmianie"
            ],
            "korzysc": "Model nie dostaje fragmentu spoza uprawnień, więc nie ma czego ujawnić."
          },
          {
            "typ": "karta",
            "etykieta": "Dane i uprawnienia",
            "tytul": "Row-Level Security w Azure SQL",
            "problem": "Każde zapytanie agenta musi iść z uprawnieniami konkretnego człowieka, także przy puli połączeń.",
            "opis": "Azure SQL ukrywa sekcje i fakty spoza uprawnień na poziomie wiersza.",
            "punkty": [
              "predykat RLS czyta użytkownika z SESSION_CONTEXT, ustawianego jako tylko do odczytu",
              "kontekst ustawiany przy każdym pobraniu połączenia z puli",
              "maskowanie danych i klasyfikacja kolumn wrażliwych",
              "tabele temporal (historia) i ledger (niezmienialność)",
              "SQL od modelu: katalog gotowych zapytań, generowanie tylko wyjątkowo i tylko do odczytu"
            ],
            "korzysc": "Dostęp do treści wewnątrz dokumentu wynika ze schematu bazy, a nie z dobrej woli modelu."
          },
          {
            "typ": "karta",
            "etykieta": "Dane i uprawnienia",
            "tytul": "Dwa magazyny wiedzy",
            "problem": "RAG źle odpowiada na pytania o dokładne fakty, a SQL źle na pytania o znaczenie.",
            "opis": "Baza dokumentów jest źródłem prawdy, a indeks RAG jej kopią do wyszukiwania.",
            "punkty": [
              "baza: decyzje, statusy, terminy, właściciele zadań",
              "RAG: podobne problemy opisane innymi słowami",
              "router wybiera magazyn: fakt, wiedza opisowa albo oba",
              "projekty rozwojowe mają wiedzę płynną, więc RAG daje tam najwięcej",
              "wiedza ogólna firmy w osobnym indeksie, bez filtra uprawnień"
            ],
            "korzysc": "Przygotowanie do spotkania dostaje i twarde fakty, i kontekst."
          },
          {
            "typ": "przerywnik",
            "tytul": "Wyszukiwanie",
            "opis": "Embeddingi, hybryda i filtr bezpieczeństwa."
          },
          {
            "typ": "karta",
            "etykieta": "Wyszukiwanie",
            "tytul": "Wyszukiwanie hybrydowe",
            "problem": "Kody projektów i nazwy własne wymagają dopasowania słów, a wiedza R&D wyszukiwania po znaczeniu.",
            "opis": "Azure AI Search łączy wyszukiwanie pełnotekstowe z wektorowym.",
            "punkty": [
              "wyniki łączone przez Reciprocal Rank Fusion",
              "ranker semantyczny ponownie układa najlepsze wyniki",
              "wielojęzyczny model embeddingów z Microsoft Foundry",
              "osadzamy sekcje dokumentów z tytułem i ścieżką nagłówków",
              "załączniki przechodzą przez Azure Content Understanding"
            ],
            "korzysc": "Pytanie i dokument mogą być w różnych językach i opisane różnymi słowami."
          },
          {
            "typ": "karta",
            "etykieta": "Wyszukiwanie",
            "tytul": "Filtr bezpieczeństwa w indeksie",
            "problem": "Indeks jest kopią treści, więc RLS w bazie go nie chroni.",
            "opis": "API dokleja do każdego zapytania filtr z profilu użytkownika.",
            "punkty": [
              "filtr działa przed wyszukiwaniem wektorowym, więc nie gubi wyników",
              "na fragmentach grupy i tagi dostępu, nigdy listy osób",
              "hierarchia tagów trzyma długość filtra w ryzach",
              "kompresja wektorów (kwantyzacja) przy milionach fragmentów"
            ],
            "korzysc": "Zmiana członkostwa zmienia tylko profil użytkownika, a nie miliony fragmentów."
          },
          {
            "typ": "karta",
            "etykieta": "Wyszukiwanie",
            "tytul": "Nieaktualny indeks",
            "problem": "Indeks zawsze trochę się spóźnia. Sekcja mogła właśnie stać się poufna.",
            "opis": "Indeks wskazuje, baza wydaje treść.",
            "punkty": [
              "wyszukiwarka zwraca identyfikatory i ocenę trafności sekcji",
              "treść agent pobiera z bazy pod Row-Level Security",
              "change tracking w Azure SQL przekazuje zmiany do indeksu",
              "zmiana uprawnień nie wymaga nowych embeddingów, tylko aktualizacji pól dostępu"
            ],
            "korzysc": "Opóźnienie indeksu wpływa na trafność, a nie na bezpieczeństwo."
          },
          {
            "typ": "karta",
            "etykieta": "Wyszukiwanie",
            "tytul": "Skala",
            "problem": "Kilkadziesiąt tysięcy użytkowników i miliony fragmentów w indeksie.",
            "opis": "Zmiana członkostwa nie może oznaczać przepisywania indeksu.",
            "punkty": [
              "fragmentów jest tyle, ile dokumentów razy sekcji: miliony wpisów",
              "profil dostępu w pamięci podręcznej (Azure Managed Redis), unieważniany zdarzeniem po sekundach",
              "brak pamięci podręcznej nie otwiera dostępu: profil liczy się wtedy z bazy",
              "kwantyzacja wektorów zmniejsza indeks, a wpływ na trafność mierzymy na złotym zbiorze",
              "zmiana modelu embeddingów: nowy indeks obok starego, przełączenie po ewaluacjach"
            ],
            "korzysc": "Koszt rośnie z liczbą zmian treści, a nie z liczbą zmian uprawnień."
          },
          {
            "typ": "przerywnik",
            "tytul": "Agenci",
            "opis": "Deterministyczny szkielet, decyzyjny koordynator."
          },
          {
            "typ": "karta",
            "etykieta": "Agenci",
            "tytul": "Tożsamość agenta",
            "problem": "Gdyby model mógł podać identyfikator użytkownika, jedno ukryte polecenie w dokumencie pozwoliłoby czytać jako ktoś inny.",
            "opis": "Agent działa w kontekście użytkownika i nigdy go nie wybiera.",
            "punkty": [
              "API Management weryfikuje token z własnego systemu logowania firmy",
              "API wymienia go na krótki token wewnętrzny (wzorzec token exchange)",
              "narzędzia nie mają parametru z identyfikatorem użytkownika",
              "w LangGraph kontekst trafia do narzędzi jako argument wstrzyknięty, którego model nie widzi",
              "usługi łączą się z Azure przez Managed Identity"
            ],
            "korzysc": "Problem „confused deputy” jest zamknięty w kodzie, a nie w prompcie."
          },
          {
            "typ": "karta",
            "etykieta": "Agenci",
            "tytul": "Szkielet i koordynator",
            "problem": "Kroki bezpieczeństwa muszą wykonać się zawsze, a dobór pracy zależy od spotkania.",
            "opis": "Graf LangGraph ze stałą kolejnością, decyzje modelu tylko w środku.",
            "punkty": [
              "StateGraph: strażnik uprawnień → router → pobranie → koordynator → weryfikacja → kontrola źródeł → doręczenie",
              "koordynator to podgraf nadzorcy, specjaliści startują równolegle",
              "specjaliści: historia projektu, otwarte decyzje komitetu, stan R&D, autor briefu",
              "punkty kontrolne po każdym węźle: wznowienie bez powtarzania kroków",
              "LangChain daje klocki: modele, narzędzia, retriever z filtrem, odpowiedzi według schematu"
            ],
            "korzysc": "Koordynator decyduje o treści, ale nie o bezpieczeństwie."
          },
          {
            "typ": "karta",
            "etykieta": "Agenci",
            "tytul": "Brief osobisty i wersja wspólna",
            "problem": "Jeden brief dla wszystkich trzeba liczyć z części wspólnej uprawnień, a przy dużym spotkaniu to prawie nic.",
            "opis": "Każdy uczestnik dostaje własny brief, liczony z jego uprawnień.",
            "punkty": [
              "wersja wspólna powstaje osobno, z części wspólnej profili",
              "uczestnicy spoza firmy obniżają dozwolony poziom wersji wspólnej",
              "dostęp do briefu sprawdzany przy każdym otwarciu",
              "utrata uprawnień albo zmiana źródeł oznacza nowy brief"
            ],
            "korzysc": "Nikt nie traci potrzebnego kontekstu i nikt nie dostaje za dużo."
          },
          {
            "typ": "karta",
            "etykieta": "Agenci",
            "tytul": "Weryfikacja i ugruntowanie",
            "problem": "Model potrafi napisać zdanie, które brzmi dobrze, ale nie wynika ze źródeł.",
            "opis": "Brief przechodzi dwie kontrole, zanim trafi do człowieka.",
            "punkty": [
              "weryfikator (podgraf): analityk, adwokat diabła, najwyżej jedna runda poprawek",
              "kontroler źródeł w kodzie: każde zdanie wskazuje sekcję wydaną temu odbiorcy",
              "ocena ugruntowania (Groundedness) z sędzią z innej rodziny modeli niż autor",
              "zdania poniżej progu są usuwane",
              "poufność briefu równa najwyższej ze źródeł"
            ],
            "korzysc": "Każde zdanie briefu da się sprawdzić w dokumencie."
          },
          {
            "typ": "karta",
            "etykieta": "Agenci",
            "tytul": "Dwie rodziny modeli",
            "problem": "Role mają różne potrzeby, a autor nie powinien oceniać własnej pracy.",
            "opis": "Claude i GPT z Microsoft Foundry, wymienne przez jedną bramkę.",
            "punkty": [
              "bramka AI w API Management: agent woła rolę, a nie konkretny model",
              "konfiguracja rola–wdrożenie poza kodem",
              "model router dla ról, w których wybór zależy od trudności pytania",
              "kaskada dla zadań masowych: najpierw tańszy model, potem mocniejszy",
              "ewaluacje przy każdej zamianie modelu"
            ],
            "korzysc": "Zamiana modelu to zmiana konfiguracji, sprawdzona ewaluacjami."
          },
          {
            "typ": "karta",
            "etykieta": "Agenci",
            "tytul": "Alternatywy, które odrzuciliśmy",
            "opis": "Każda z tych opcji była poważnie rozważana.",
            "punkty": [
              "federacja logowania z Entra: dałaby wbudowane ACL i Purview, ale przy dokumentach w SQL i własnym modelu ról zysk był mały",
              "wektory w Azure SQL pod RLS: jedno miejsce reguł, ale przy tej skali wygrał Azure AI Search",
              "Microsoft Agent Framework albo Semantic Kernel: wybraliśmy LangGraph, otwarty standard z pakietem integracyjnym Microsoftu",
              "jeden agent z dużym promptem: specjaliści pracują równolegle, mają mniejszy kontekst i dają się osobno ocenić",
              "dla prostego spotkania koordynator uruchamia jednego specjalistę albo żadnego"
            ]
          },
          {
            "typ": "przerywnik",
            "tytul": "Wiedza, która rośnie",
            "opis": "Pętla po spotkaniu."
          },
          {
            "typ": "karta",
            "etykieta": "Samorozwój wiedzy",
            "tytul": "Pętla po spotkaniu",
            "problem": "Ustalenie z zamkniętego komitetu mogłoby stać się wiedzą ogólną. System uczyłby się wyciekać.",
            "opis": "Każdy nowy fakt dziedziczy poufność źródeł i krąg odbiorców spotkania.",
            "punkty": [
              "ekstrakcja faktów według schematu: decyzja, właściciel, termin, źródła",
              "fakt dziedziczy tylko po źródłach, które go potwierdzają; obniżyć poziom może właściciel treści",
              "osobny graf z krokiem zatwierdzenia przez człowieka (interrupt)",
              "fakty o niskim ryzyku wchodzą automatycznie, reszta czeka w kolejce",
              "rejestr faktów w tabelach temporal i ledger, z datą ważności"
            ],
            "korzysc": "Wiedza rośnie, a krąg odbiorców każdego faktu pozostaje pod kontrolą."
          },
          {
            "typ": "karta",
            "etykieta": "Samorozwój wiedzy",
            "tytul": "Zatrucie pamięci",
            "problem": "Notatka ze spotkania to treść niezaufana, a zatruty fakt wraca w wielu przyszłych briefach.",
            "opis": "Fakt to zawsze dane, nigdy instrukcja.",
            "punkty": [
              "każdy fakt ma zapisane pochodzenie: kto, z jakiego spotkania, z których sekcji",
              "fakty niepewne, sprzeczne albo od osób spoza firmy czekają w kwarantannie",
              "notatki przechodzą przez Prompt Shields i wykrywanie danych osobowych",
              "rejestr ma historię, więc fakt da się wycofać razem z tym, co z niego powstało"
            ],
            "korzysc": "Najgroźniejsze miejsce na atak jest pod kontrolą człowieka."
          },
          {
            "typ": "przerywnik",
            "tytul": "Bezpieczeństwo",
            "opis": "Założenie: instrukcja z dokumentu kiedyś dotrze do modelu."
          },
          {
            "typ": "karta",
            "etykieta": "Bezpieczeństwo",
            "tytul": "Prompt injection: obrona warstwowa",
            "problem": "Żadna pojedyncza osłona nie zatrzyma wszystkich ataków.",
            "opis": "Ograniczamy to, co może się stać, gdy atak się uda.",
            "punkty": [
              "model dostaje tylko to, co odbiorca i tak może zobaczyć",
              "narzędzia tylko do odczytu i żadnych kanałów wynoszenia danych",
              "treść dokumentów jako oznaczone dane, a nie polecenia",
              "Prompt Shields na pytaniach, fragmentach z wyszukiwania i notatkach",
              "filtry treści na wdrożeniach modeli, schemat odpowiedzi i kontroler źródeł"
            ],
            "korzysc": "Model, który nie ma czego ukraść i nie ma kanału na zewnątrz, jest bezpieczny także wtedy, gdy osłona coś przepuści."
          },
          {
            "typ": "karta",
            "etykieta": "Bezpieczeństwo",
            "tytul": "Wyciek istnienia i dane w spoczynku",
            "problem": "Sama odpowiedź może zdradzić, że tajny dokument istnieje.",
            "opis": "„Nie ma” i „nie masz dostępu” brzmią tak samo.",
            "punkty": [
              "tytuły, autorzy i nazwy komitetów podlegają tym samym uprawnieniom co treść",
              "liczniki i podsumowania tylko z tego, co odbiorca widzi",
              "punkty kontrolne grafu traktowane jak baza z danymi poufnymi",
              "pamięć podręczna odpowiedzi przypisana do profilu dostępu",
              "ślady bez treści dokumentów"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Bezpieczeństwo",
            "tytul": "Narzędzia i łańcuch dostaw",
            "problem": "Opis narzędzia też trafia do modelu, a agent z nadmiarem uprawnień to gotowy kanał wycieku.",
            "opis": "Najmniejsze uprawnienia dla każdego agenta i każdej usługi.",
            "punkty": [
              "narzędzia jako serwery MCP z OAuth 2 i wąskimi zakresami",
              "agent przygotowania ma tylko odczyt; zapis ma wyłącznie koordynator wiedzy, i tylko do rejestru faktów",
              "lista dozwolonych serwerów MCP, opisy narzędzi w przeglądzie kodu",
              "Managed Identity z minimalnymi rolami, osobno dla agenta przygotowania i agenta wiedzy",
              "przypięte wersje bibliotek i obrazów, skan zależności",
              "Private Endpoints, sieć wirtualna i sekrety w Key Vault"
            ]
          },
          {
            "typ": "przerywnik",
            "tytul": "Jakość i eksploatacja",
            "opis": "Testy, ewaluacje, audyt i wdrożenia."
          },
          {
            "typ": "karta",
            "etykieta": "Jakość",
            "tytul": "Testy i ewaluacje",
            "problem": "Jakości briefów i szczelności uprawnień nie da się ocenić „na oko”.",
            "opis": "Warstwy testów i bramka w CI, która blokuje wdrożenie.",
            "punkty": [
              "testy deterministyczne uprawnień w pytest, bez modelu",
              "promptfoo: szybkie testy promptów przy każdej zmianie",
              "Azure AI Evaluation: Groundedness, Retrieval, Relevance i ewaluatory agentowe",
              "złoty zbiór z prawdziwych pytań, sędziowie z innej rodziny modeli",
              "red teaming przed wydaniem (AI Red Teaming Agent, PyRIT) i ewaluacja próbki ruchu na produkcji"
            ],
            "korzysc": "Wynik poniżej progu blokuje scalenie."
          },
          {
            "typ": "karta",
            "etykieta": "Eksploatacja",
            "tytul": "Audyt i obserwowalność",
            "problem": "Usługi Azure widzą tylko nasze API, więc nie wiedzą, kto dostał które sekcje.",
            "opis": "Własny ślad każdego przebiegu w Application Insights.",
            "punkty": [
              "pseudonim użytkownika, wersja profilu dostępu, lista sekcji z poziomem poufności",
              "jeden ślad OpenTelemetry od API przez węzły grafu po wywołania modeli",
              "zapis treści wiadomości w śladach wyłączony na produkcji",
              "zapytania KQL i workbook: koszt na spotkanie, czas briefu, odrzucenia Prompt Shields",
              "Microsoft Purview zapisuje i klasyfikuje pytania i odpowiedzi"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Eksploatacja",
            "tytul": "Wdrożenia i niezawodność",
            "problem": "Kroki bezpieczeństwa nie mogą mieć trybu awaryjnego, a reszta systemu powinna znosić awarie.",
            "opis": "Briefy powstają w tle, z wyprzedzeniem, z ponowieniami.",
            "punkty": [
              "infrastruktura w Bicep przez Azure Developer CLI, obrazy w Container Registry, usługi w Container Apps",
              "gdy zawiedzie specjalista, brief powstaje bez jego części, z adnotacją",
              "gdy zawiedzie strażnik uprawnień albo kontroler źródeł, brief nie powstaje",
              "limity modeli: kolejka z kontrolą tempa, osobne przydziały, rezerwowana przepustowość"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Eksploatacja",
            "tytul": "Pomiar celu i koszty",
            "problem": "Cel to krótsze przygotowanie do spotkań, a nie liczba wywołań modelu.",
            "opis": "Mierzymy efekt dla ludzi, jakość i bezpieczeństwo, a koszt liczymy na spotkanie.",
            "punkty": [
              "czas przygotowania deklarowany przez uczestników przed wdrożeniem i po nim",
              "użycie: jaki odsetek spotkań ma brief i ile briefów otwarto przed spotkaniem",
              "przydatność: oceny uczestników i odsetek zdań usuniętych przez kontroler źródeł",
              "bezpieczeństwo: liczba incydentów uprawnień, która ma wynosić zero",
              "koszt na spotkanie liczony ze śladów, budżety z alertami i dzienny limit kosztu modeli"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Podsumowanie",
            "tytul": "Czego platforma nie daje gotowego",
            "opis": "Własne dobudówki, które okazały się sednem projektu.",
            "punkty": [
              "uprawnienia do sekcji dokumentu i reguły z warunkiem „i” (komitet, projekt, region, poziom)",
              "spójność dwóch magazynów i pobieranie treści z bazy po identyfikatorach",
              "dziedziczenie poufności wiedzy wyprowadzonej: fakty, streszczenia, briefy",
              "briefy osobiste i wersja wspólna z części wspólnej uprawnień",
              "audyt „kto dostał co” i jednakowa odpowiedź dla „nie ma” i „brak dostępu”",
              "ochrona pętli wiedzy: pochodzenie faktów, kwarantanna, wycofywanie"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Podsumowanie",
            "tytul": "Czego nas to nauczyło",
            "opis": "Lekcje, które wynikają z decyzji w projekcie.",
            "punkty": [
              "bezpieczeństwo nie może siedzieć w prompcie",
              "wiedza, która się uczy, musi dziedziczyć poufność",
              "na fragmentach indeksu grupy, nie osoby",
              "szkielet deterministyczny, decyzje w środku",
              "wyszukiwarka nie powinna wydawać treści",
              "przy prompt injection liczy się ograniczenie skutków, a nie sama detekcja",
              "pamięć systemu to najgroźniejsze miejsce na atak"
            ]
          }
        ]
      },
      "en": {
        "platforma": "Microsoft Azure · Foundry",
        "tytul": "AI agent system for meeting preparation",
        "podtytul": "Microsoft Azure and Foundry: problems and solutions",
        "opis_listy": "Full version: the project's challenges and how we solved them on Azure and Microsoft Foundry.",
        "slajdy": [
          {
            "typ": "tyt",
            "tytul": "AI agent system for meeting preparation",
            "opis": "Microsoft Azure and Foundry. Agents prepare people for meetings and respect permissions to documents and to the content inside them."
          },
          {
            "typ": "karta",
            "etykieta": "Context",
            "tytul": "Starting point",
            "opis": "A meeting management application for a large international company, holding project and R&D documentation.",
            "punkty": [
              "developed for about seven years as a classic application, with AI since 2025",
              "on Azure and Microsoft Foundry since the second half of 2026",
              "tens of thousands of users, hundreds of thousands of documents",
              "the company's own login system, independent of Azure"
            ],
            "korzysc": "Project goal: cut the time people spend preparing for a meeting."
          },
          {
            "typ": "karta",
            "etykieta": "Context",
            "tytul": "Challenges",
            "opis": "The hard part was not the models. It was permissions and knowledge that keeps growing.",
            "punkty": [
              "dozens of roles, committees, projects and the employee's region",
              "access to whole documents and to sections inside one document",
              "permissions change as documents and memberships keep arriving",
              "the system learns from every meeting, so it must protect the confidentiality of what it learned",
              "two kinds of agents: deterministic and decision-making"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Context",
            "tytul": "Design principles",
            "opis": "Eight principles behind every later decision.",
            "punkty": [
              "the model never decides about access",
              "deterministic agents guard the boundaries, decision agents think inside them",
              "one source of truth for permissions",
              "confidentiality is set per section, not per file",
              "derived knowledge inherits the confidentiality of its sources",
              "an agent never chooses an identity",
              "content for the model always comes from the database",
              "everyone gets a brief that matches their permissions"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Context",
            "tytul": "Architecture at a glance",
            "opis": "Our API is the trust boundary. Azure services do not need to know the users.",
            "punkty": [
              "entry: the company's own login → API Management → API and policy service on Container Apps",
              "data: Azure SQL (documents in sections, role model, fact registry) and Azure AI Search (RAG index)",
              "agents: a LangGraph graph with LangChain on Container Apps, with Claude and GPT models from Microsoft Foundry",
              "after a meeting: Durable Functions starts the knowledge loop with human approval",
              "guards and traces: Prompt Shields, Private Endpoints, OpenTelemetry in Application Insights"
            ]
          },
          {
            "typ": "przerywnik",
            "tytul": "Data and permissions",
            "opis": "Where the knowledge lives and who guards access."
          },
          {
            "typ": "karta",
            "etykieta": "Data and permissions",
            "tytul": "Who decides about access",
            "problem": "A prompt with access rules can be bypassed, also by the content of a document.",
            "opis": "The data and search layers enforce permissions before anything reaches the model.",
            "punkty": [
              "role model in the database: roles plus attributes (project, committee, region, confidentiality level)",
              "one policy service calculates the access profile for every place",
              "one profile produces both the database context and the search filter",
              "rules as code: versions, review and permission tests on every change"
            ],
            "korzysc": "The model never receives a fragment outside the user's permissions, so it has nothing to reveal."
          },
          {
            "typ": "karta",
            "etykieta": "Data and permissions",
            "tytul": "Row-Level Security in Azure SQL",
            "problem": "Every agent query must run with one specific person's permissions, also with a connection pool.",
            "opis": "Azure SQL hides sections and facts outside the user's permissions at row level.",
            "punkty": [
              "the RLS predicate reads the user from SESSION_CONTEXT, set as read-only",
              "the context is set on every connection checkout from the pool",
              "data masking and classification of sensitive columns",
              "temporal tables (history) and ledger tables (immutability)",
              "SQL from the model: a catalogue of prepared queries, generation only as an exception and read-only"
            ],
            "korzysc": "Access to content inside a document follows from the database schema, not from the model's goodwill."
          },
          {
            "typ": "karta",
            "etykieta": "Data and permissions",
            "tytul": "Two knowledge stores",
            "problem": "RAG is poor at exact facts, and SQL is poor at questions about meaning.",
            "opis": "The document database is the source of truth. The RAG index is its copy for search.",
            "punkty": [
              "database: decisions, statuses, deadlines, task owners",
              "RAG: similar problems described in different words",
              "a router picks the store: a fact, descriptive knowledge, or both",
              "R&D projects have fluid knowledge, so RAG helps most there",
              "company-wide knowledge in a separate index, with no permission filter"
            ],
            "korzysc": "Meeting preparation gets both hard facts and context."
          },
          {
            "typ": "przerywnik",
            "tytul": "Search",
            "opis": "Embeddings, hybrid search and the security filter."
          },
          {
            "typ": "karta",
            "etykieta": "Search",
            "tytul": "Hybrid search",
            "problem": "Project codes and proper names need keyword matching, while R&D knowledge needs search by meaning.",
            "opis": "Azure AI Search combines full-text and vector search.",
            "punkty": [
              "results merged with Reciprocal Rank Fusion",
              "the semantic ranker reorders the top results",
              "a multilingual embedding model from Microsoft Foundry",
              "we embed document sections with the title and heading path",
              "attachments go through Azure Content Understanding"
            ],
            "korzysc": "The question and the document can be in different languages and use different words."
          },
          {
            "typ": "karta",
            "etykieta": "Search",
            "tytul": "Security filter in the index",
            "problem": "The index is a copy of the content, so RLS in the database does not protect it.",
            "opis": "The API adds a filter from the user's profile to every query.",
            "punkty": [
              "the filter runs before vector search, so no results are lost",
              "chunks carry groups and access tags, never lists of people",
              "a tag hierarchy keeps the filter length under control",
              "vector compression (quantization) for millions of chunks"
            ],
            "korzysc": "A membership change only touches the user's profile, not millions of chunks."
          },
          {
            "typ": "karta",
            "etykieta": "Search",
            "tytul": "A stale index",
            "problem": "An index is always a little behind. A section may have just become confidential.",
            "opis": "The index points, the database hands out the content.",
            "punkty": [
              "the search engine returns section IDs and relevance scores",
              "the agent fetches content from the database under Row-Level Security",
              "change tracking in Azure SQL passes changes to the index",
              "a permission change needs no new embeddings, only an update of the access fields"
            ],
            "korzysc": "Index delay affects relevance, not security."
          },
          {
            "typ": "karta",
            "etykieta": "Search",
            "tytul": "Scale",
            "problem": "Tens of thousands of users and millions of chunks in the index.",
            "opis": "A membership change must not mean rewriting the index.",
            "punkty": [
              "the number of chunks is documents times sections: millions of entries",
              "the access profile is cached (Azure Managed Redis) and invalidated by an event within seconds",
              "a missing cache never opens access: the profile is then calculated from the database",
              "vector quantization shrinks the index, and we measure its effect on relevance on the golden set",
              "changing the embedding model: a new index next to the old one, switched after evaluations"
            ],
            "korzysc": "Cost grows with content changes, not with permission changes."
          },
          {
            "typ": "przerywnik",
            "tytul": "Agents",
            "opis": "A deterministic skeleton, a decision-making coordinator."
          },
          {
            "typ": "karta",
            "etykieta": "Agents",
            "tytul": "Agent identity",
            "problem": "If the model could pass a user ID, one hidden instruction in a document would let it read as someone else.",
            "opis": "The agent acts in the user's context and never chooses it.",
            "punkty": [
              "API Management validates the token from the company's own login system",
              "the API exchanges it for a short-lived internal token (token exchange pattern)",
              "tools have no user ID parameter",
              "in LangGraph the context reaches tools as an injected argument, which the model cannot see",
              "services connect to Azure through Managed Identity"
            ],
            "korzysc": "The confused deputy problem is closed in code, not in the prompt."
          },
          {
            "typ": "karta",
            "etykieta": "Agents",
            "tytul": "Skeleton and coordinator",
            "problem": "Security steps must always run, while the work to do depends on the meeting.",
            "opis": "A LangGraph graph with a fixed order, model decisions only inside.",
            "punkty": [
              "StateGraph: permission guard → router → retrieval → coordinator → verification → source check → delivery",
              "the coordinator is a supervisor subgraph, and specialists start in parallel",
              "specialists: project history, open committee decisions, R&D status, brief author",
              "checkpoints after every node: a run resumes without repeating steps",
              "LangChain provides the building blocks: models, tools, a retriever with the filter, schema-based output"
            ],
            "korzysc": "The coordinator decides about content, never about security."
          },
          {
            "typ": "karta",
            "etykieta": "Agents",
            "tytul": "Personal brief and shared version",
            "problem": "One brief for everyone must be built from the overlap of permissions. In a large meeting that is almost nothing.",
            "opis": "Each participant gets their own brief, built from their permissions.",
            "punkty": [
              "the shared version is built separately, from the overlap of all profiles",
              "external participants lower the allowed level of the shared version",
              "access to a brief is checked every time it is opened",
              "lost permissions or changed sources mean a new brief"
            ],
            "korzysc": "Nobody loses the context they need, and nobody gets too much."
          },
          {
            "typ": "karta",
            "etykieta": "Agents",
            "tytul": "Verification and grounding",
            "problem": "A model can write a sentence that sounds right but does not follow from the sources.",
            "opis": "A brief passes two checks before it reaches a person.",
            "punkty": [
              "verifier (subgraph): an analyst, a devil's advocate, at most one round of fixes",
              "source checker in code: every sentence points to a section released to this recipient",
              "a groundedness check with a judge from a different model family than the author",
              "sentences below the threshold are removed",
              "the brief's confidentiality equals the highest among its sources"
            ],
            "korzysc": "Every sentence in a brief can be checked against a document."
          },
          {
            "typ": "karta",
            "etykieta": "Agents",
            "tytul": "Two model families",
            "problem": "Roles have different needs, and an author should not grade its own work.",
            "opis": "Claude and GPT from Microsoft Foundry, interchangeable behind one gateway.",
            "punkty": [
              "the AI gateway in API Management: an agent calls a role, not a specific model",
              "role-to-deployment configuration outside the code",
              "the model router for roles where the choice depends on how hard the question is",
              "a cascade for bulk tasks: the cheaper model first, then the stronger one",
              "evaluations on every model switch"
            ],
            "korzysc": "Switching a model is a configuration change, verified by evaluations."
          },
          {
            "typ": "karta",
            "etykieta": "Agents",
            "tytul": "Alternatives we rejected",
            "opis": "Each of these options was seriously considered.",
            "punkty": [
              "federating the login with Entra: it would give built-in ACLs and Purview, but with documents in SQL and our own role model the gain was small",
              "vectors in Azure SQL under RLS: one place for rules, but at this scale Azure AI Search won",
              "Microsoft Agent Framework or Semantic Kernel: we chose LangGraph, an open standard with Microsoft's integration package",
              "one agent with a large prompt: specialists work in parallel, have smaller context and can be evaluated separately",
              "for a simple meeting the coordinator runs one specialist or none"
            ]
          },
          {
            "typ": "przerywnik",
            "tytul": "Knowledge that grows",
            "opis": "The loop after a meeting."
          },
          {
            "typ": "karta",
            "etykieta": "Self-improving knowledge",
            "tytul": "The loop after a meeting",
            "problem": "A decision from a closed committee could become general knowledge. The system would learn to leak.",
            "opis": "Every new fact inherits the confidentiality of its sources and the audience of the meeting.",
            "punkty": [
              "fact extraction by schema: decision, owner, deadline, sources",
              "a fact inherits only from the sources that confirm it; the content owner can lower its level",
              "a separate graph with a human approval step (interrupt)",
              "low-risk facts enter automatically, the rest wait in a queue",
              "a fact registry in temporal and ledger tables, with an expiry date"
            ],
            "korzysc": "Knowledge grows, and the audience of every fact stays under control."
          },
          {
            "typ": "karta",
            "etykieta": "Self-improving knowledge",
            "tytul": "Memory poisoning",
            "problem": "A meeting note is untrusted content, and a poisoned fact returns in many future briefs.",
            "opis": "A fact is always data, never an instruction.",
            "punkty": [
              "every fact has recorded provenance: who, from which meeting, from which sections",
              "uncertain or conflicting facts, and facts from external people, wait in quarantine",
              "notes pass through Prompt Shields and personal data detection",
              "the registry has history, so a fact can be rolled back together with everything built on it"
            ],
            "korzysc": "The most dangerous attack surface stays under human control."
          },
          {
            "typ": "przerywnik",
            "tytul": "Security",
            "opis": "Assumption: an instruction hidden in a document will reach the model one day."
          },
          {
            "typ": "karta",
            "etykieta": "Security",
            "tytul": "Prompt injection: layered defence",
            "problem": "No single guard stops every attack.",
            "opis": "We limit what can happen when an attack succeeds.",
            "punkty": [
              "the model only gets what the recipient may see anyway",
              "read-only tools and no channels for taking data out",
              "document content as marked data, not instructions",
              "Prompt Shields on questions, retrieved chunks and notes",
              "content filters on model deployments, output schema and the source checker"
            ],
            "korzysc": "A model that has nothing to steal and no channel out is safe even when a guard lets something through."
          },
          {
            "typ": "karta",
            "etykieta": "Security",
            "tytul": "Existence leaks and data at rest",
            "problem": "The answer itself can reveal that a secret document exists.",
            "opis": "“It does not exist” and “you have no access” sound the same.",
            "punkty": [
              "titles, authors and committee names follow the same permissions as the content",
              "counters and summaries are built only from what the recipient can see",
              "graph checkpoints treated like a database with confidential data",
              "the response cache is tied to the access profile",
              "traces without document content"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Security",
            "tytul": "Tools and supply chain",
            "problem": "A tool description also reaches the model, and an over-privileged agent is a ready leak channel.",
            "opis": "Least privilege for every agent and every service.",
            "punkty": [
              "tools as MCP servers with OAuth 2 and narrow scopes",
              "the preparation agent is read-only; only the knowledge coordinator can write, and only to the fact registry",
              "an allowlist of MCP servers, tool descriptions under code review",
              "Managed Identity with minimal roles, separate for the preparation agent and the knowledge agent",
              "pinned versions of libraries and images, dependency scanning",
              "Private Endpoints, a virtual network and secrets in Key Vault"
            ]
          },
          {
            "typ": "przerywnik",
            "tytul": "Quality and operations",
            "opis": "Tests, evaluations, audit and releases."
          },
          {
            "typ": "karta",
            "etykieta": "Quality",
            "tytul": "Tests and evaluations",
            "problem": "Brief quality and permission tightness cannot be judged by eye.",
            "opis": "Layers of tests and a CI gate that blocks a release.",
            "punkty": [
              "deterministic permission tests in pytest, with no model",
              "promptfoo: quick prompt tests on every change",
              "Azure AI Evaluation: Groundedness, Retrieval, Relevance and agent evaluators",
              "a golden set from real questions, judges from a different model family",
              "red teaming before a release (AI Red Teaming Agent, PyRIT) and evaluation of a production traffic sample"
            ],
            "korzysc": "A score below the threshold blocks the merge."
          },
          {
            "typ": "karta",
            "etykieta": "Operations",
            "tytul": "Audit and observability",
            "problem": "Azure services only see our API, so they do not know who received which sections.",
            "opis": "Our own trace of every run in Application Insights.",
            "punkty": [
              "user pseudonym, access profile version, list of sections with confidentiality levels",
              "one OpenTelemetry trace from the API through graph nodes to model calls",
              "message content recording in traces is off in production",
              "KQL queries and a workbook: cost per meeting, brief time, Prompt Shields rejections",
              "Microsoft Purview records and classifies questions and answers"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Operations",
            "tytul": "Releases and reliability",
            "problem": "Security steps cannot have a fallback mode, while the rest of the system should survive failures.",
            "opis": "Briefs are built in the background, ahead of time, with retries.",
            "punkty": [
              "infrastructure in Bicep through the Azure Developer CLI, images in Container Registry, services on Container Apps",
              "when a specialist fails, the brief is built without that part, with a note",
              "when the permission guard or the source checker fails, no brief is produced",
              "model limits: a rate-limited queue, separate quotas, provisioned throughput"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Operations",
            "tytul": "Measuring the goal and cost",
            "problem": "The goal is shorter meeting preparation, not the number of model calls.",
            "opis": "We measure the effect for people, quality and security, and we count cost per meeting.",
            "punkty": [
              "preparation time reported by participants before and after the rollout",
              "usage: how many meetings have a brief and how many briefs are opened before the meeting",
              "usefulness: participant ratings and the share of sentences removed by the source checker",
              "security: the number of permission incidents, which must be zero",
              "cost per meeting calculated from traces, budgets with alerts and a daily model cost limit"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Summary",
            "tytul": "What the platform does not give you",
            "opis": "Our own additions, which turned out to be the core of the project.",
            "punkty": [
              "section-level permissions and rules with an AND condition (committee, project, region, level)",
              "consistency of the two stores and fetching content from the database by ID",
              "confidentiality inheritance for derived knowledge: facts, summaries, briefs",
              "personal briefs and a shared version built from the overlap of permissions",
              "an audit of who received what, and the same answer for “does not exist” and “no access”",
              "protection of the knowledge loop: fact provenance, quarantine, rollback"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Summary",
            "tytul": "What we learned",
            "opis": "Lessons that follow from the decisions in the project.",
            "punkty": [
              "security cannot live in the prompt",
              "knowledge that learns must inherit confidentiality",
              "groups, not people, on index chunks",
              "a deterministic skeleton, decisions inside",
              "the search engine should not hand out content",
              "with prompt injection, limiting the damage matters more than detection alone",
              "system memory is the most dangerous place for an attack"
            ]
          }
        ]
      }
    },
    {
      "id": "technologie",
      "pl": {
        "platforma": "Microsoft Azure · Foundry",
        "tytul": "Microsoft Azure i Foundry: technologie",
        "podtytul": "Usługi i narzędzia w systemie agentów oraz ich rola",
        "opis_listy": "Wersja technologiczna: same usługi i narzędzia oraz to, do czego służyły.",
        "slajdy": [
          {
            "typ": "tyt",
            "tytul": "Microsoft Azure i Foundry: technologie",
            "opis": "Z czego zbudowany jest system agentów AI do przygotowania spotkań i jaką rolę pełni każda usługa."
          },
          {
            "typ": "karta",
            "etykieta": "Mapa",
            "tytul": "Zasada doboru narzędzi",
            "opis": "Najpierw dojrzałe usługi platformy, potem otwarte standardy, które Microsoft sam wspiera.",
            "punkty": [
              "Azure i Microsoft Foundry wszędzie tam, gdzie platforma ma dojrzałą usługę",
              "otwarte standardy: LangGraph, LangChain, OpenTelemetry, MCP",
              "narzędzia pomocnicze dla programisty: LangSmith, promptfoo, PyRIT",
              "dane i wyniki zostają w Azure, pod jedną kontrolą dostępu"
            ]
          },
          {
            "typ": "przerywnik",
            "tytul": "Dane",
            "opis": "Baza, pamięć podręczna i dokumenty."
          },
          {
            "typ": "karta",
            "etykieta": "Dane",
            "tytul": "Azure SQL Database",
            "opis": "Relacyjna baza dokumentów i źródło prawdy systemu.",
            "punkty": [
              "dokumenty w sekcjach, model ról, rejestr faktów",
              "Row-Level Security przez SESSION_CONTEXT",
              "Dynamic Data Masking oraz Data Discovery & Classification",
              "tabele temporal (historia) i ledger (niezmienialność)",
              "change tracking do synchronizacji z indeksem"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Dane",
            "tytul": "Azure Managed Redis",
            "opis": "Pamięć podręczna profili dostępu przy kilkudziesięciu tysiącach użytkowników.",
            "punkty": [
              "profil: tagi dostępu, region, poziom, numer wersji",
              "unieważnianie zdarzeniem przy zmianie członkostwa albo roli",
              "krótki czas życia jako bezpiecznik",
              "brak pamięci podręcznej nie otwiera dostępu: profil liczy się wtedy z bazy"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Dane",
            "tytul": "Azure Content Understanding i Azure AI Language",
            "opis": "Przygotowanie treści przed zasileniem wiedzy.",
            "punkty": [
              "Content Understanding wyciąga tekst, tabele i strukturę z PDF-ów i skanów",
              "sekcje dziedziczą pola dostępu po dokumencie",
              "Azure AI Language wykrywa dane osobowe w notatkach ze spotkań",
              "do rejestru wiedzy trafia tylko to, co potrzebne"
            ]
          },
          {
            "typ": "przerywnik",
            "tytul": "Wyszukiwanie",
            "opis": "Indeks RAG i wiedza ogólna."
          },
          {
            "typ": "karta",
            "etykieta": "Wyszukiwanie",
            "tytul": "Azure AI Search",
            "opis": "Indeks RAG: wyszukiwanie wektorowe i hybrydowe z filtrem bezpieczeństwa.",
            "punkty": [
              "hybryda: pełnotekstowe i wektorowe, łączone przez RRF",
              "ranker semantyczny jako ponowny ranking najlepszych wyników",
              "filtr bezpieczeństwa na grupach dostępu, przed wyszukiwaniem wektorowym",
              "kompresja wektorów: kwantyzacja skalarna i binarna",
              "osobny indeks wiedzy ogólnej firmy, bez ograniczeń dostępu"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Wyszukiwanie",
            "tytul": "Embeddingi w Microsoft Foundry",
            "opis": "Jeden wielojęzyczny model dla dokumentów i pytań.",
            "punkty": [
              "osadzane są sekcje z tytułem i ścieżką nagłówków",
              "pierwsze zasilenie partiami, w tle",
              "codziennie przeliczane tylko zmienione sekcje (skrót treści)",
              "zmiana modelu: nowy indeks obok starego, przełączenie po ewaluacjach"
            ]
          },
          {
            "typ": "przerywnik",
            "tytul": "Modele i agenci",
            "opis": "Foundry, LangGraph, LangChain i MCP."
          },
          {
            "typ": "karta",
            "etykieta": "Modele",
            "tytul": "Foundry Models: Claude i GPT",
            "opis": "Dwie rodziny modeli, dobierane do roli agenta i wymienne.",
            "punkty": [
              "mocny model do koordynacji i briefu, szybki do routera i ekstrakcji",
              "model router dla ról, w których wybór zależy od trudności pytania",
              "kaskada: najpierw tańszy model, przy odrzuceniu mocniejszy",
              "ugruntowanie ocenia model z innej rodziny niż autor",
              "pamięć podręczna promptów dla stałych początków"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Modele",
            "tytul": "Azure API Management",
            "opis": "Wejście do aplikacji i bramka przed modelami.",
            "punkty": [
              "weryfikacja tokenu JWT z własnego logowania firmy (validate-jwt)",
              "bramka AI: agent woła rolę, a nie konkretny model",
              "limity tokenów, logowanie i jedno miejsce dostępu do modeli",
              "przełączenie roli na model zapasowy, gdy główny jest niedostępny"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Agenci",
            "tytul": "LangGraph",
            "opis": "Graf agentów: stała kolejność, stan i krok człowieka.",
            "punkty": [
              "StateGraph jako szkielet, krawędzie warunkowe tylko dla przewidzianych rozgałęzień",
              "podgraf nadzorcy dla koordynatora, równoległy start specjalistów (Send)",
              "interrupt: zatrzymanie na decyzję człowieka i wznowienie",
              "trwałe punkty kontrolne i limit kroków",
              "weryfikator briefu jako podgraf z adwokatem diabła"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Agenci",
            "tytul": "LangChain",
            "opis": "Klocki pod grafem.",
            "punkty": [
              "wspólny interfejs do modeli Claude i GPT",
              "szablony promptów i odpowiedzi według schematu Pydantic",
              "narzędzia z argumentem wstrzykiwanym, którego model nie widzi",
              "własny retriever do Azure AI Search, który zawsze dokleja filtr",
              "pakiet Microsoftu langchain-azure-ai łączy to z Foundry"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Agenci",
            "tytul": "Azure Container Apps i Azure Functions",
            "opis": "Uruchamianie usług i przebiegów w tle.",
            "punkty": [
              "Container Apps: API, usługa polityk i graf LangGraph",
              "skalowanie liczbą replik, przebiegi w tle z kolejki",
              "Azure Functions: wyzwalacz spotkania z kalendarza",
              "Durable Functions: pętla wiedzy po spotkaniu"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Agenci",
            "tytul": "MCP z OAuth 2",
            "opis": "Narzędzia agentów jako osobne usługi.",
            "punkty": [
              "wąskie zakresy: agent przygotowania ma tylko odczyt",
              "zapis wyłącznie dla koordynatora wiedzy, i tylko do rejestru faktów",
              "lista dozwolonych serwerów, opisy narzędzi w przeglądzie kodu",
              "każde narzędzie sprawdza krótki token wewnętrzny"
            ]
          },
          {
            "typ": "przerywnik",
            "tytul": "Bezpieczeństwo",
            "opis": "Osłony, tożsamość i sieć."
          },
          {
            "typ": "karta",
            "etykieta": "Bezpieczeństwo",
            "tytul": "Azure AI Content Safety",
            "opis": "Osłony treści w Microsoft Foundry.",
            "punkty": [
              "Prompt Shields: ataki bezpośrednie w pytaniach i pośrednie w dokumentach",
              "wołane z kodu na fragmentach z wyszukiwania i na notatkach",
              "filtry treści na wejściu i wyjściu każdego wdrożenia modelu",
              "listy blokowanych fraz"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Bezpieczeństwo",
            "tytul": "Tożsamość, sekrety i sieć",
            "opis": "Usługi łączą się bez haseł i bez publicznego dostępu.",
            "punkty": [
              "Managed Identity z minimalnymi rolami, osobno dla agenta przygotowania i agenta wiedzy",
              "Azure Key Vault: klucz podpisu tokenów wewnętrznych i sekrety",
              "Private Endpoints i sieć wirtualna dla SQL, Search i Foundry",
              "Microsoft Purview: audyt pytań i odpowiedzi"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Bezpieczeństwo",
            "tytul": "Red teaming",
            "opis": "Ataki na system przed wydaniem.",
            "punkty": [
              "AI Red Teaming Agent w Foundry uruchamia strategie PyRIT jako usługę",
              "PyRIT: własny zestaw ataków domenowych",
              "pomiar przed włączeniem osłon i po nim",
              "ataki, które przeszły, trafiają do złotego zbioru jako stałe testy"
            ]
          },
          {
            "typ": "przerywnik",
            "tytul": "Jakość i wdrożenia",
            "opis": "Ewaluacje, ślady i infrastruktura jako kod."
          },
          {
            "typ": "karta",
            "etykieta": "Jakość",
            "tytul": "Azure AI Evaluation",
            "opis": "Ewaluacje w Foundry jako bramka wydania.",
            "punkty": [
              "RAG: Groundedness, Retrieval, Relevance",
              "agenci: Intent Resolution, Task Adherence, Tool Call Accuracy",
              "własne ewaluatory kodowe i oparte na prompcie",
              "wyniki w projekcie Foundry, porównywalne między wersjami",
              "ewaluacja próbki ruchu na produkcji według harmonogramu"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Jakość",
            "tytul": "promptfoo, LangSmith i pytest",
            "opis": "Szybka pętla pracy programisty.",
            "punkty": [
              "pytest: testy uprawnień bez modelu, przy każdej zmianie kodu",
              "promptfoo: szybkie testy promptów przy każdej zmianie",
              "LangSmith: ślady i porównania wersji grafu, tylko na danych testowych",
              "o wydaniu decydują ewaluacje w Foundry"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Obserwowalność",
            "tytul": "Application Insights i OpenTelemetry",
            "opis": "Jeden ślad przez cały przebieg, bez treści dokumentów.",
            "punkty": [
              "ślady węzłów grafu, modeli, narzędzi i wyszukiwania",
              "własny audyt „kto dostał co”: pseudonim, wersja profilu, lista sekcji",
              "zapytania KQL i workbook w Azure Monitor",
              "zapis treści wiadomości wyłączony na produkcji"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Wdrożenia",
            "tytul": "Bicep, azd i Azure Container Registry",
            "opis": "Infrastruktura jako kod i bramka jakości w pipeline.",
            "punkty": [
              "Bicep opisuje infrastrukturę, Azure Developer CLI ją wdraża",
              "obrazy w Azure Container Registry, nowe rewizje w Container Apps",
              "bramka w CI: pytest, promptfoo, potem ewaluacje w Foundry",
              "budżety Azure z alertami i limit kosztu modeli"
            ]
          }
        ]
      },
      "en": {
        "platforma": "Microsoft Azure · Foundry",
        "tytul": "Microsoft Azure and Foundry: technologies",
        "podtytul": "Services and tools in the agent system and their role",
        "opis_listy": "Technology version: only the services and tools, and what they were used for.",
        "slajdy": [
          {
            "typ": "tyt",
            "tytul": "Microsoft Azure and Foundry: technologies",
            "opis": "What the AI agent system for meeting preparation is built from, and the role of each service."
          },
          {
            "typ": "karta",
            "etykieta": "Map",
            "tytul": "How we chose the tools",
            "opis": "Mature platform services first, then open standards that Microsoft itself supports.",
            "punkty": [
              "Azure and Microsoft Foundry wherever the platform has a mature service",
              "open standards: LangGraph, LangChain, OpenTelemetry, MCP",
              "helper tools for the developer: LangSmith, promptfoo, PyRIT",
              "data and results stay in Azure, under one access control"
            ]
          },
          {
            "typ": "przerywnik",
            "tytul": "Data",
            "opis": "Database, cache and documents."
          },
          {
            "typ": "karta",
            "etykieta": "Data",
            "tytul": "Azure SQL Database",
            "opis": "The relational document database and the system's source of truth.",
            "punkty": [
              "documents in sections, role model, fact registry",
              "Row-Level Security through SESSION_CONTEXT",
              "Dynamic Data Masking and Data Discovery & Classification",
              "temporal tables (history) and ledger tables (immutability)",
              "change tracking to keep the index in sync"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Data",
            "tytul": "Azure Managed Redis",
            "opis": "The access profile cache for tens of thousands of users.",
            "punkty": [
              "profile: access tags, region, level, version number",
              "invalidated by an event when a membership or role changes",
              "a short time to live as a safety net",
              "a missing cache never opens access: the profile is then calculated from the database"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Data",
            "tytul": "Azure Content Understanding and Azure AI Language",
            "opis": "Preparing content before it feeds the knowledge base.",
            "punkty": [
              "Content Understanding extracts text, tables and structure from PDFs and scans",
              "sections inherit access fields from the document",
              "Azure AI Language detects personal data in meeting notes",
              "only what is needed reaches the knowledge registry"
            ]
          },
          {
            "typ": "przerywnik",
            "tytul": "Search",
            "opis": "RAG index and company-wide knowledge."
          },
          {
            "typ": "karta",
            "etykieta": "Search",
            "tytul": "Azure AI Search",
            "opis": "The RAG index: vector and hybrid search with a security filter.",
            "punkty": [
              "hybrid: full-text and vector, merged with RRF",
              "the semantic ranker as a reranking step for the top results",
              "a security filter on access groups, applied before vector search",
              "vector compression: scalar and binary quantization",
              "a separate index for company-wide knowledge, with no access restrictions"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Search",
            "tytul": "Embeddings in Microsoft Foundry",
            "opis": "One multilingual model for documents and questions.",
            "punkty": [
              "we embed sections with the title and heading path",
              "the first load in batches, in the background",
              "daily, only changed sections are recalculated (content hash)",
              "changing the model: a new index next to the old one, switched after evaluations"
            ]
          },
          {
            "typ": "przerywnik",
            "tytul": "Models and agents",
            "opis": "Foundry, LangGraph, LangChain and MCP."
          },
          {
            "typ": "karta",
            "etykieta": "Models",
            "tytul": "Foundry Models: Claude and GPT",
            "opis": "Two model families, matched to the agent's role and interchangeable.",
            "punkty": [
              "a strong model for coordination and the brief, a fast one for routing and extraction",
              "the model router for roles where the choice depends on how hard the question is",
              "a cascade: the cheaper model first, the stronger one on rejection",
              "grounding is judged by a model from a different family than the author",
              "prompt caching for fixed prompt starts"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Models",
            "tytul": "Azure API Management",
            "opis": "The entry to the application and the gateway in front of the models.",
            "punkty": [
              "validation of the JWT from the company's own login (validate-jwt)",
              "AI gateway: an agent calls a role, not a specific model",
              "token limits, logging and one access point to the models",
              "a role switches to a backup model when the main one is unavailable"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Agents",
            "tytul": "LangGraph",
            "opis": "The agent graph: a fixed order, state and a human step.",
            "punkty": [
              "StateGraph as the skeleton, conditional edges only for planned branches",
              "a supervisor subgraph for the coordinator, specialists started in parallel (Send)",
              "interrupt: a pause for a human decision, then resume",
              "durable checkpoints and a step limit",
              "the brief verifier as a subgraph with a devil's advocate"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Agents",
            "tytul": "LangChain",
            "opis": "The building blocks under the graph.",
            "punkty": [
              "one interface to Claude and GPT models",
              "prompt templates and Pydantic schema-based output",
              "tools with an injected argument the model cannot see",
              "our own retriever for Azure AI Search, which always adds the filter",
              "Microsoft's langchain-azure-ai package connects it to Foundry"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Agents",
            "tytul": "Azure Container Apps and Azure Functions",
            "opis": "Running services and background runs.",
            "punkty": [
              "Container Apps: API, policy service and the LangGraph graph",
              "scaling by replicas, background runs taken from a queue",
              "Azure Functions: the meeting trigger from the calendar",
              "Durable Functions: the knowledge loop after a meeting"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Agents",
            "tytul": "MCP with OAuth 2",
            "opis": "Agent tools as separate services.",
            "punkty": [
              "narrow scopes: the preparation agent is read-only",
              "write access only for the knowledge coordinator, and only to the fact registry",
              "an allowlist of servers, tool descriptions under code review",
              "every tool checks a short-lived internal token"
            ]
          },
          {
            "typ": "przerywnik",
            "tytul": "Security",
            "opis": "Guards, identity and network."
          },
          {
            "typ": "karta",
            "etykieta": "Security",
            "tytul": "Azure AI Content Safety",
            "opis": "Content guards in Microsoft Foundry.",
            "punkty": [
              "Prompt Shields: direct attacks in questions and indirect attacks in documents",
              "called from code on retrieved chunks and on notes",
              "content filters on the input and output of every model deployment",
              "blocklists"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Security",
            "tytul": "Identity, secrets and network",
            "opis": "Services connect without passwords and without public access.",
            "punkty": [
              "Managed Identity with minimal roles, separate for the preparation agent and the knowledge agent",
              "Azure Key Vault: the signing key for internal tokens and secrets",
              "Private Endpoints and a virtual network for SQL, Search and Foundry",
              "Microsoft Purview: an audit of questions and answers"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Security",
            "tytul": "Red teaming",
            "opis": "Attacks on the system before a release.",
            "punkty": [
              "the AI Red Teaming Agent in Foundry runs PyRIT strategies as a service",
              "PyRIT: our own set of domain attacks",
              "measurement before and after turning the guards on",
              "attacks that got through join the golden set as permanent tests"
            ]
          },
          {
            "typ": "przerywnik",
            "tytul": "Quality and releases",
            "opis": "Evaluations, traces and infrastructure as code."
          },
          {
            "typ": "karta",
            "etykieta": "Quality",
            "tytul": "Azure AI Evaluation",
            "opis": "Evaluations in Foundry as the release gate.",
            "punkty": [
              "RAG: Groundedness, Retrieval, Relevance",
              "agents: Intent Resolution, Task Adherence, Tool Call Accuracy",
              "our own code-based and prompt-based evaluators",
              "results in the Foundry project, comparable between versions",
              "scheduled evaluation of a production traffic sample"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Quality",
            "tytul": "promptfoo, LangSmith and pytest",
            "opis": "The developer's fast feedback loop.",
            "punkty": [
              "pytest: permission tests with no model, on every code change",
              "promptfoo: quick prompt tests on every change",
              "LangSmith: traces and graph version comparisons, on test data only",
              "evaluations in Foundry decide about a release"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Observability",
            "tytul": "Application Insights and OpenTelemetry",
            "opis": "One trace through the whole run, without document content.",
            "punkty": [
              "traces of graph nodes, models, tools and search",
              "our own audit of who received what: pseudonym, profile version, list of sections",
              "KQL queries and a workbook in Azure Monitor",
              "message content recording is off in production"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Releases",
            "tytul": "Bicep, azd and Azure Container Registry",
            "opis": "Infrastructure as code and a quality gate in the pipeline.",
            "punkty": [
              "Bicep describes the infrastructure, the Azure Developer CLI deploys it",
              "images in Azure Container Registry, new revisions on Container Apps",
              "the CI gate: pytest, promptfoo, then evaluations in Foundry",
              "Azure budgets with alerts and a model cost limit"
            ]
          }
        ]
      }
    }
  ],
  "vertex": [
    {
      "id": "pelna",
      "pl": {
        "platforma": "Google Cloud · Vertex AI",
        "tytul": "System agentów AI do przygotowania spotkań",
        "podtytul": "Google Cloud, Vertex AI i ADK: problemy i rozwiązania",
        "opis_listy": "Wersja pełna: wyzwania projektu i to, jak je rozwiązaliśmy na Google Cloud.",
        "slajdy": [
          {
            "typ": "tyt",
            "tytul": "System agentów AI do przygotowania spotkań",
            "opis": "Google Cloud, Vertex AI i ADK. Agenci przygotowują ludzi do spotkań i przestrzegają uprawnień do dokumentów oraz do treści wewnątrz nich."
          },
          {
            "typ": "karta",
            "etykieta": "Kontekst",
            "tytul": "Punkt wyjścia",
            "opis": "Aplikacja do zarządzania spotkaniami dla dużej międzynarodowej firmy, z dokumentacją projektową i R&D.",
            "punkty": [
              "rozwijana przez około siedem lat jako klasyczna aplikacja",
              "od początku 2025 rozbudowana o AI, agenci w ADK od połowy 2025",
              "kilkadziesiąt tysięcy użytkowników, setki tysięcy dokumentów",
              "cała infrastruktura w Google Cloud, własne logowanie firmy poza Google"
            ],
            "korzysc": "Cel projektu: skrócić czas, jaki ludzie poświęcają na przygotowanie do spotkania."
          },
          {
            "typ": "karta",
            "etykieta": "Kontekst",
            "tytul": "Wyzwania",
            "opis": "Najtrudniejsze nie były modele, tylko uprawnienia i wiedza, która stale rośnie.",
            "punkty": [
              "kilkadziesiąt ról, komitety, projekty i region pracownika",
              "dostęp do całych dokumentów i do sekcji wewnątrz jednego dokumentu",
              "uprawnienia zmieniają się razem z napływem dokumentów i członkostw",
              "system uczy się z kolejnych spotkań, więc musi pilnować poufności tego, czego się nauczył",
              "dwa rodzaje agentów: deterministyczni i decyzyjni"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Kontekst",
            "tytul": "Zasady projektowe",
            "opis": "Osiem zasad, z których wynikają wszystkie późniejsze decyzje.",
            "punkty": [
              "model nigdy nie decyduje o dostępie",
              "agenci deterministyczni pilnują granic, decyzyjni myślą w ich obrębie",
              "jedno źródło prawdy o uprawnieniach",
              "poufność ma poziom sekcji, a nie pliku",
              "wiedza wyprowadzona dziedziczy poufność źródeł",
              "agent nigdy nie wybiera tożsamości",
              "treść dla modelu zawsze pochodzi z bazy",
              "każdy dostaje brief na miarę swoich uprawnień"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Kontekst",
            "tytul": "Architektura w skrócie",
            "opis": "Granicą zaufania jest nasze API. Usługi Google Cloud nie muszą znać użytkowników.",
            "punkty": [
              "wejście: własne logowanie firmy → Apigee → API i usługa polityk w Cloud Run",
              "dane: AlloyDB (dokumenty w sekcjach, model ról, rejestr faktów) i Vertex AI Vector Search (indeks RAG)",
              "agenci: ADK w Cloud Run, modele Claude i Gemini z Vertex AI",
              "po spotkaniu: Cloud Workflows prowadzi pętlę wiedzy z zatwierdzeniem przez człowieka",
              "osłony i ślady: Model Armor, VPC Service Controls, OpenTelemetry w Cloud Trace"
            ]
          },
          {
            "typ": "przerywnik",
            "tytul": "Dane i uprawnienia",
            "opis": "Gdzie leży wiedza i kto pilnuje dostępu."
          },
          {
            "typ": "karta",
            "etykieta": "Dane i uprawnienia",
            "tytul": "Kto decyduje o dostępie",
            "problem": "Prompt z zasadami dostępu da się obejść, także treścią dokumentu.",
            "opis": "Uprawnienia egzekwuje warstwa danych, zanim cokolwiek trafi do modelu.",
            "punkty": [
              "reguły zapisane raz, w bazie: role plus atrybuty (projekt, komitet, region, poziom poufności)",
              "AlloyDB for PostgreSQL z Row-Level Security na sekcjach i faktach",
              "ta sama funkcja reguł zasila filtr w wyszukiwarce",
              "reguły jako kod: wersje, przegląd i testy uprawnień przy każdej zmianie"
            ],
            "korzysc": "Model nie dostaje fragmentu spoza uprawnień, więc nie ma czego ujawnić."
          },
          {
            "typ": "karta",
            "etykieta": "Dane i uprawnienia",
            "tytul": "Row-Level Security w PostgreSQL",
            "problem": "Pula połączeń może przenieść kontekst poprzedniego użytkownika, a każde zapytanie SQL może zmienić ustawienie sesji.",
            "opis": "Baza nie ufa niczemu z zewnątrz i sama liczy dostęp.",
            "punkty": [
              "kontekst ustawiany przez SET LOCAL w transakcji, znika razem z nią",
              "do bazy trafia tylko identyfikator użytkownika z podpisem",
              "polityka RLS sprawdza podpis i liczy dostęp z aktualnych tabel ról",
              "SQL od modelu: katalog gotowych zapytań, a wyjątki po kontroli parserem (tylko SELECT na widokach z listy)"
            ],
            "korzysc": "Zmiana członkostwa działa w bazie od razu, a podmiana identyfikatora nic nie daje."
          },
          {
            "typ": "karta",
            "etykieta": "Dane i uprawnienia",
            "tytul": "Dwa magazyny wiedzy",
            "problem": "RAG źle odpowiada na pytania o dokładne fakty, a SQL źle na pytania o znaczenie.",
            "opis": "Baza dokumentów jest źródłem prawdy, a indeks RAG jej kopią do wyszukiwania.",
            "punkty": [
              "baza: decyzje, statusy, terminy, właściciele zadań",
              "RAG: podobne problemy opisane innymi słowami",
              "router wybiera magazyn: fakt, wiedza opisowa albo oba",
              "projekty rozwojowe mają wiedzę płynną, więc RAG daje tam najwięcej",
              "wiedza ogólna firmy osobno, w Vertex AI Search, bez filtra uprawnień"
            ],
            "korzysc": "Przygotowanie do spotkania dostaje i twarde fakty, i kontekst."
          },
          {
            "typ": "przerywnik",
            "tytul": "Wyszukiwanie",
            "opis": "Embeddingi, hybryda i filtr uprawnień."
          },
          {
            "typ": "karta",
            "etykieta": "Wyszukiwanie",
            "tytul": "Wyszukiwanie hybrydowe",
            "problem": "Kody projektów i nazwy własne wymagają dopasowania słów, a wiedza R&D wyszukiwania po znaczeniu.",
            "opis": "Vertex AI Vector Search łączy oba sposoby w jednym indeksie.",
            "punkty": [
              "wektor gęsty z wielojęzycznego modelu embeddingów i wektor rzadki ze słów kluczowych",
              "wyniki łączone przez Reciprocal Rank Fusion",
              "Ranking API ponownie układa najlepsze wyniki (semantic ranker)",
              "osadzamy sekcje dokumentów z tytułem i ścieżką nagłówków",
              "załączniki przechodzą przez Document AI (Layout Parser)"
            ],
            "korzysc": "Pytanie i dokument mogą być w różnych językach i opisane różnymi słowami."
          },
          {
            "typ": "karta",
            "etykieta": "Wyszukiwanie",
            "tytul": "Filtr uprawnień w indeksie",
            "problem": "Indeks jest kopią treści, więc RLS w bazie go nie chroni.",
            "opis": "Vector Search filtruje w trakcie przeszukiwania, przez restricts.",
            "punkty": [
              "na wpisach grupy i tagi dostępu, nigdy listy osób",
              "tag łączy projekt z poziomem poufności, żeby osobne listy nie dawały iloczynu",
              "każda sekcja ma tag w każdej przestrzeni nazw, bo pominięta przestrzeń znaczy „wszystko”",
              "test: profil bez członkostw zwraca zero wyników"
            ],
            "korzysc": "Zmiana członkostwa zmienia tylko profil użytkownika, a nie miliony wpisów."
          },
          {
            "typ": "karta",
            "etykieta": "Wyszukiwanie",
            "tytul": "Nieaktualny indeks",
            "problem": "Indeks zawsze trochę się spóźnia. Sekcja mogła właśnie stać się poufna.",
            "opis": "Indeks wskazuje, baza wydaje treść.",
            "punkty": [
              "wyszukiwarka zwraca tylko identyfikatory sekcji",
              "treść agent pobiera z bazy pod Row-Level Security",
              "zmiany idą wzorcem outbox przez Pub/Sub, a indeksator jest idempotentny",
              "zmiana uprawnień nie wymaga nowych embeddingów, tylko nowych tagów"
            ],
            "korzysc": "Opóźnienie indeksu wpływa na trafność, a nie na bezpieczeństwo."
          },
          {
            "typ": "karta",
            "etykieta": "Wyszukiwanie",
            "tytul": "Skala",
            "problem": "Kilkadziesiąt tysięcy użytkowników i miliony fragmentów w indeksie.",
            "opis": "Zmiana członkostwa nie może oznaczać przepisywania indeksu.",
            "punkty": [
              "fragmentów jest tyle, ile dokumentów razy sekcji: miliony wpisów",
              "profil dostępu w pamięci podręcznej (Memorystore), unieważniany zdarzeniem po sekundach",
              "brak pamięci podręcznej nie otwiera dostępu: profil liczy się wtedy z bazy",
              "pierwsze zasilenie embeddingów wsadowo, potem tylko zmienione sekcje",
              "zmiana modelu embeddingów: nowy indeks obok starego, przełączenie po ewaluacjach"
            ],
            "korzysc": "Koszt rośnie z liczbą zmian treści, a nie z liczbą zmian uprawnień."
          },
          {
            "typ": "przerywnik",
            "tytul": "Agenci",
            "opis": "Deterministyczny szkielet, decyzyjny koordynator."
          },
          {
            "typ": "karta",
            "etykieta": "Agenci",
            "tytul": "Tożsamość agenta",
            "problem": "Gdyby model mógł podać identyfikator użytkownika, jedno ukryte polecenie w dokumencie pozwoliłoby czytać jako ktoś inny.",
            "opis": "Agent działa w kontekście użytkownika i nigdy go nie wybiera.",
            "punkty": [
              "Apigee weryfikuje token z własnego systemu logowania firmy",
              "API wymienia go na krótki token wewnętrzny (wzorzec token exchange)",
              "narzędzia nie mają parametru z identyfikatorem użytkownika",
              "w ADK kontekst trafia przez tool context, którego model nie widzi",
              "narzędzia biorą tożsamość z podpisanego tokenu, a nie ze stanu sesji"
            ],
            "korzysc": "Problem „confused deputy” jest zamknięty w kodzie, a nie w prompcie."
          },
          {
            "typ": "karta",
            "etykieta": "Agenci",
            "tytul": "Szkielet i koordynator",
            "problem": "Kroki bezpieczeństwa muszą wykonać się zawsze, a dobór pracy zależy od spotkania.",
            "opis": "Stała kolejność w kodzie, decyzje modelu tylko w środku.",
            "punkty": [
              "SequentialAgent: strażnik uprawnień → router → pobranie → koordynator → weryfikacja → kontrola źródeł → doręczenie",
              "kroki bezpieczeństwa to własni agenci z czystym kodem, bez modelu",
              "koordynator zwraca plan, a kod uruchamia wybranych specjalistów równolegle",
              "specjaliści: historia projektu, otwarte decyzje komitetu, stan R&D, autor briefu",
              "koordynator nie ma własnego dostępu do danych"
            ],
            "korzysc": "Koordynator decyduje o treści, ale nie o bezpieczeństwie."
          },
          {
            "typ": "karta",
            "etykieta": "Agenci",
            "tytul": "Brief osobisty i wersja wspólna",
            "problem": "Jeden brief dla wszystkich trzeba liczyć z części wspólnej uprawnień, a przy dużym spotkaniu to prawie nic.",
            "opis": "Każdy uczestnik dostaje własny brief, liczony z jego uprawnień.",
            "punkty": [
              "wersja wspólna powstaje osobno, z części wspólnej profili",
              "uczestnicy spoza firmy obniżają dozwolony poziom wersji wspólnej",
              "dostęp do briefu sprawdzany przy każdym otwarciu",
              "utrata uprawnień albo zmiana źródeł oznacza nowy brief"
            ],
            "korzysc": "Nikt nie traci potrzebnego kontekstu i nikt nie dostaje za dużo."
          },
          {
            "typ": "karta",
            "etykieta": "Agenci",
            "tytul": "Weryfikacja i ugruntowanie",
            "problem": "Model potrafi napisać zdanie, które brzmi dobrze, ale nie wynika ze źródeł.",
            "opis": "Brief przechodzi dwie kontrole, zanim trafi do człowieka.",
            "punkty": [
              "weryfikator (LoopAgent): analityk, adwokat diabła, najwyżej jedna runda poprawek",
              "kontroler źródeł w kodzie: każde zdanie wskazuje sekcję wydaną temu odbiorcy",
              "Check Grounding API i sędzia z innej rodziny modeli niż autor",
              "zdania poniżej progu są usuwane",
              "poufność briefu równa najwyższej ze źródeł"
            ],
            "korzysc": "Każde zdanie briefu da się sprawdzić w dokumencie."
          },
          {
            "typ": "karta",
            "etykieta": "Agenci",
            "tytul": "Dwie rodziny modeli",
            "problem": "Role mają różne potrzeby, a autor nie powinien oceniać własnej pracy.",
            "opis": "Claude i Gemini z Vertex AI, wymienne przez jedną bramkę.",
            "punkty": [
              "agent woła rolę, a nie konkretny model",
              "konfiguracja rola–model poza kodem, wersje przypięte",
              "mocny model do koordynacji, szybkie i tanie do routera i ekstrakcji",
              "odpowiedź według schematu w obu rodzinach, sprawdzana w kodzie",
              "pamięć podręczna stałego początku promptu i kaskada od tańszego modelu"
            ],
            "korzysc": "Zamiana modelu to zmiana konfiguracji, sprawdzona ewaluacjami."
          },
          {
            "typ": "karta",
            "etykieta": "Agenci",
            "tytul": "Alternatywy, które odrzuciliśmy",
            "opis": "Każda z tych opcji była poważnie rozważana.",
            "punkty": [
              "federacja logowania z Google Cloud: mały zysk przy dokumentach w SQL i własnym modelu ról",
              "wektory w AlloyDB pod RLS: jedno miejsce reguł, ale wygrało oddzielenie obciążeń wyszukiwania od bazy",
              "Agent Engine zamiast Cloud Run: wygrała pełna kontrola sieci, wejścia i wydań",
              "jeden agent z dużym promptem: specjaliści pracują równolegle, mają mniejszy kontekst i dają się osobno ocenić",
              "dla prostego spotkania koordynator uruchamia jednego specjalistę albo żadnego"
            ]
          },
          {
            "typ": "przerywnik",
            "tytul": "Wiedza, która rośnie",
            "opis": "Pętla po spotkaniu."
          },
          {
            "typ": "karta",
            "etykieta": "Samorozwój wiedzy",
            "tytul": "Pętla po spotkaniu",
            "problem": "Ustalenie z zamkniętego komitetu mogłoby stać się wiedzą ogólną. System uczyłby się wyciekać.",
            "opis": "Każdy nowy fakt dziedziczy poufność spotkania i źródeł.",
            "punkty": [
              "ekstrakcja faktów według schematu: decyzja, właściciel, termin, źródła",
              "dolną granicę poufności liczy kod, a obniżyć ją może tylko człowiek",
              "Cloud Workflows prowadzi pętlę i czeka na zatwierdzenie przez człowieka",
              "fakty o niskim ryzyku wchodzą automatycznie, reszta czeka w kolejce",
              "rejestr faktów z historią, datą ważności i dziennikiem niezmienialnym"
            ],
            "korzysc": "Wiedza rośnie, a krąg odbiorców każdego faktu pozostaje pod kontrolą."
          },
          {
            "typ": "karta",
            "etykieta": "Samorozwój wiedzy",
            "tytul": "Zatrucie pamięci",
            "problem": "Notatka ze spotkania to treść niezaufana, a zatruty fakt wraca w wielu przyszłych briefach.",
            "opis": "Fakt to zawsze dane, nigdy instrukcja.",
            "punkty": [
              "każdy fakt ma zapisane pochodzenie: kto, z jakiego spotkania, z których sekcji",
              "fakty niepewne, sprzeczne albo od osób spoza firmy czekają w kwarantannie",
              "notatki przechodzą przez Model Armor i wykrywanie danych osobowych",
              "rejestr ma historię, więc fakt da się wycofać razem z tym, co z niego powstało"
            ],
            "korzysc": "Najgroźniejsze miejsce na atak jest pod kontrolą człowieka."
          },
          {
            "typ": "przerywnik",
            "tytul": "Bezpieczeństwo",
            "opis": "Założenie: instrukcja z dokumentu kiedyś dotrze do modelu."
          },
          {
            "typ": "karta",
            "etykieta": "Bezpieczeństwo",
            "tytul": "Prompt injection: obrona warstwowa",
            "problem": "Żadna pojedyncza osłona nie zatrzyma wszystkich ataków.",
            "opis": "Ograniczamy to, co może się stać, gdy atak się uda.",
            "punkty": [
              "model dostaje tylko to, co odbiorca i tak może zobaczyć",
              "narzędzia tylko do odczytu, brak drogi do internetu, granica VPC Service Controls",
              "treść dokumentów jako oznaczone dane, nigdy w instrukcji agenta",
              "Model Armor na pytaniach, wynikach narzędzi i notatkach, wpięty w callbacki ADK",
              "schemat odpowiedzi i kontroler źródeł: polecenie bez źródła odpada"
            ],
            "korzysc": "Model, który nie ma czego ukraść i nie ma kanału na zewnątrz, jest bezpieczny także wtedy, gdy osłona coś przepuści."
          },
          {
            "typ": "karta",
            "etykieta": "Bezpieczeństwo",
            "tytul": "Wyciek istnienia i dane w spoczynku",
            "problem": "Sama odpowiedź może zdradzić, że tajny dokument istnieje.",
            "opis": "„Nie ma” i „nie masz dostępu” brzmią tak samo.",
            "punkty": [
              "tytuły, autorzy i nazwy komitetów podlegają tym samym uprawnieniom co treść",
              "liczniki i podsumowania tylko z tego, co odbiorca widzi",
              "sesje agentów traktowane jak baza z danymi poufnymi",
              "pamięć podręczna odpowiedzi przypisana do profilu dostępu",
              "ślady bez treści dokumentów"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Bezpieczeństwo",
            "tytul": "Narzędzia i łańcuch dostaw",
            "problem": "Opis narzędzia też trafia do modelu, a agent z nadmiarem uprawnień to gotowy kanał wycieku.",
            "opis": "Najmniejsze uprawnienia dla każdego agenta i każdej usługi.",
            "punkty": [
              "narzędzia jako serwery MCP z OAuth 2 i wąskimi zakresami",
              "agent przygotowania ma tylko odczyt; zapis ma wyłącznie koordynator wiedzy, i tylko do rejestru faktów",
              "lista dozwolonych serwerów MCP, opisy narzędzi w przeglądzie kodu",
              "konta serwisowe bez kluczy, osobne dla agenta przygotowania i agenta wiedzy",
              "przypięte wersje bibliotek, skan obrazów, Binary Authorization",
              "red teaming przed wydaniem: własne ataki w PyRIT i promptfoo"
            ]
          },
          {
            "typ": "przerywnik",
            "tytul": "Jakość i eksploatacja",
            "opis": "Testy, ewaluacje, audyt i wdrożenia."
          },
          {
            "typ": "karta",
            "etykieta": "Jakość",
            "tytul": "Testy i ewaluacje",
            "problem": "Jakości briefów i szczelności uprawnień nie da się ocenić „na oko”.",
            "opis": "Warstwy testów i bramka w CI, która blokuje wdrożenie.",
            "punkty": [
              "testy deterministyczne uprawnień w pytest, bez modelu",
              "ewaluacje ADK: czy agent przeszedł właściwą ścieżką narzędzi",
              "Gen AI Evaluation Service: ugruntowanie i jakość briefów",
              "złoty zbiór z prawdziwych pytań, sędziowie z innej rodziny modeli",
              "red teaming przed wydaniem i ewaluacja próbki na produkcji"
            ],
            "korzysc": "Wynik poniżej progu blokuje scalenie i wdrożenie."
          },
          {
            "typ": "karta",
            "etykieta": "Eksploatacja",
            "tytul": "Audyt i obserwowalność",
            "problem": "Usługi chmury widzą tylko nasze API, więc nie wiedzą, kto dostał które sekcje.",
            "opis": "Własny dziennik audytowy i jeden ślad na przebieg.",
            "punkty": [
              "dziennik „kto dostał które sekcje”: pseudonim użytkownika, wersja profilu, lista sekcji",
              "ślad OpenTelemetry w Cloud Trace, od API po model, do diagnostyki",
              "ślady niosą identyfikatory i poziom poufności, nigdy treść",
              "pulpity: koszt na spotkanie, czas przygotowania briefu, blokady Model Armor"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Eksploatacja",
            "tytul": "Wdrożenia i niezawodność",
            "problem": "Kroki bezpieczeństwa nie mogą mieć trybu awaryjnego, a reszta systemu powinna znosić awarie.",
            "opis": "Briefy powstają w tle, z wyprzedzeniem, z ponowieniami.",
            "punkty": [
              "infrastruktura w Terraformie, obrazy z Cloud Build, usługi w Cloud Run",
              "nowa rewizja najpierw dostaje małą część ruchu",
              "gdy zawiedzie specjalista, brief powstaje bez jego części, z adnotacją",
              "gdy zawiedzie strażnik uprawnień albo kontroler źródeł, brief nie powstaje",
              "kolejka z kontrolą tempa i osobne przydziały modeli dla pracy w tle"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Eksploatacja",
            "tytul": "Pomiar celu i koszty",
            "problem": "Cel to krótsze przygotowanie do spotkań, a nie liczba wywołań modelu.",
            "opis": "Mierzymy efekt dla ludzi, jakość i bezpieczeństwo, a koszt liczymy na spotkanie.",
            "punkty": [
              "czas przygotowania deklarowany przez uczestników przed wdrożeniem i po nim",
              "użycie: jaki odsetek spotkań ma brief i ile briefów otwarto przed spotkaniem",
              "przydatność: oceny uczestników i odsetek zdań usuniętych przez kontroler źródeł",
              "bezpieczeństwo: liczba incydentów uprawnień, która ma wynosić zero",
              "koszt na spotkanie liczony ze śladów, budżety z alertami i dzienny limit kosztu modeli"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Podsumowanie",
            "tytul": "Czego platforma nie daje gotowego",
            "opis": "Własne dobudówki, które okazały się sednem projektu.",
            "punkty": [
              "uprawnienia do sekcji dokumentu i reguły z warunkiem „i” (komitet, projekt, region, poziom)",
              "spójność dwóch magazynów i pobieranie treści z bazy po identyfikatorach",
              "dziedziczenie poufności wiedzy wyprowadzonej: fakty, streszczenia, briefy",
              "briefy osobiste i wersja wspólna z części wspólnej uprawnień",
              "audyt „kto dostał co” i jednakowa odpowiedź dla „nie ma” i „brak dostępu”",
              "ochrona pętli wiedzy: pochodzenie faktów, kwarantanna, wycofywanie"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Podsumowanie",
            "tytul": "Czego nas to nauczyło",
            "opis": "Lekcje, które wynikają z decyzji w projekcie.",
            "punkty": [
              "bezpieczeństwo nie może siedzieć w prompcie",
              "wiedza, która się uczy, musi dziedziczyć poufność",
              "na wpisach indeksu grupy, nie osoby",
              "szkielet deterministyczny, decyzje w środku",
              "wyszukiwarka nie powinna wydawać treści",
              "przy prompt injection liczy się ograniczenie skutków, a nie sama detekcja",
              "pamięć systemu to najgroźniejsze miejsce na atak"
            ]
          }
        ]
      },
      "en": {
        "platforma": "Google Cloud · Vertex AI",
        "tytul": "AI agent system for meeting preparation",
        "podtytul": "Google Cloud, Vertex AI and ADK: problems and solutions",
        "opis_listy": "Full version: the project's challenges and how we solved them on Google Cloud.",
        "slajdy": [
          {
            "typ": "tyt",
            "tytul": "AI agent system for meeting preparation",
            "opis": "Google Cloud, Vertex AI and ADK. Agents prepare people for meetings and respect permissions to documents and to the content inside them."
          },
          {
            "typ": "karta",
            "etykieta": "Context",
            "tytul": "Starting point",
            "opis": "A meeting management application for a large international company, holding project and R&D documentation.",
            "punkty": [
              "developed for about seven years as a classic application",
              "extended with AI from early 2025, with ADK agents from mid-2025",
              "tens of thousands of users, hundreds of thousands of documents",
              "all infrastructure on Google Cloud, with the company's own login system outside Google"
            ],
            "korzysc": "Project goal: cut the time people spend preparing for a meeting."
          },
          {
            "typ": "karta",
            "etykieta": "Context",
            "tytul": "Challenges",
            "opis": "The hard part was not the models. It was permissions and knowledge that keeps growing.",
            "punkty": [
              "dozens of roles, committees, projects and the employee's region",
              "access to whole documents and to sections inside one document",
              "permissions change as documents and memberships keep arriving",
              "the system learns from every meeting, so it must protect the confidentiality of what it learned",
              "two kinds of agents: deterministic and decision-making"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Context",
            "tytul": "Design principles",
            "opis": "Eight principles behind every later decision.",
            "punkty": [
              "the model never decides about access",
              "deterministic agents guard the boundaries, decision agents think inside them",
              "one source of truth for permissions",
              "confidentiality is set per section, not per file",
              "derived knowledge inherits the confidentiality of its sources",
              "an agent never chooses an identity",
              "content for the model always comes from the database",
              "everyone gets a brief that matches their permissions"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Context",
            "tytul": "Architecture at a glance",
            "opis": "Our API is the trust boundary. Google Cloud services do not need to know the users.",
            "punkty": [
              "entry: the company's own login → Apigee → API and policy service on Cloud Run",
              "data: AlloyDB (documents in sections, role model, fact registry) and Vertex AI Vector Search (RAG index)",
              "agents: ADK on Cloud Run, with Claude and Gemini models from Vertex AI",
              "after a meeting: Cloud Workflows runs the knowledge loop with human approval",
              "guards and traces: Model Armor, VPC Service Controls, OpenTelemetry in Cloud Trace"
            ]
          },
          {
            "typ": "przerywnik",
            "tytul": "Data and permissions",
            "opis": "Where the knowledge lives and who guards access."
          },
          {
            "typ": "karta",
            "etykieta": "Data and permissions",
            "tytul": "Who decides about access",
            "problem": "A prompt with access rules can be bypassed, also by the content of a document.",
            "opis": "The data layer enforces permissions before anything reaches the model.",
            "punkty": [
              "rules written once, in the database: roles plus attributes (project, committee, region, confidentiality level)",
              "AlloyDB for PostgreSQL with Row-Level Security on sections and facts",
              "the same rule function feeds the search filter",
              "rules as code: versions, review and permission tests on every change"
            ],
            "korzysc": "The model never receives a fragment outside the user's permissions, so it has nothing to reveal."
          },
          {
            "typ": "karta",
            "etykieta": "Data and permissions",
            "tytul": "Row-Level Security in PostgreSQL",
            "problem": "A connection pool can carry over the previous user's context, and any SQL query can change a session setting.",
            "opis": "The database trusts nothing from outside and calculates access itself.",
            "punkty": [
              "the context is set with SET LOCAL inside a transaction, so it disappears with it",
              "only a signed user ID reaches the database",
              "the RLS policy checks the signature and calculates access from the current role tables",
              "SQL from the model: a catalogue of prepared queries, with exceptions checked by a parser (SELECT on listed views only)"
            ],
            "korzysc": "A membership change works in the database immediately, and swapping the ID achieves nothing."
          },
          {
            "typ": "karta",
            "etykieta": "Data and permissions",
            "tytul": "Two knowledge stores",
            "problem": "RAG is poor at exact facts, and SQL is poor at questions about meaning.",
            "opis": "The document database is the source of truth. The RAG index is its copy for search.",
            "punkty": [
              "database: decisions, statuses, deadlines, task owners",
              "RAG: similar problems described in different words",
              "a router picks the store: a fact, descriptive knowledge, or both",
              "R&D projects have fluid knowledge, so RAG helps most there",
              "company-wide knowledge kept separately, in Vertex AI Search, with no permission filter"
            ],
            "korzysc": "Meeting preparation gets both hard facts and context."
          },
          {
            "typ": "przerywnik",
            "tytul": "Search",
            "opis": "Embeddings, hybrid search and the permission filter."
          },
          {
            "typ": "karta",
            "etykieta": "Search",
            "tytul": "Hybrid search",
            "problem": "Project codes and proper names need keyword matching, while R&D knowledge needs search by meaning.",
            "opis": "Vertex AI Vector Search combines both methods in one index.",
            "punkty": [
              "a dense vector from a multilingual embedding model and a sparse vector from keywords",
              "results merged with Reciprocal Rank Fusion",
              "the Ranking API reorders the top results (semantic ranker)",
              "we embed document sections with the title and heading path",
              "attachments go through Document AI (Layout Parser)"
            ],
            "korzysc": "The question and the document can be in different languages and use different words."
          },
          {
            "typ": "karta",
            "etykieta": "Search",
            "tytul": "Permission filter in the index",
            "problem": "The index is a copy of the content, so RLS in the database does not protect it.",
            "opis": "Vector Search filters during the search, through restricts.",
            "punkty": [
              "entries carry groups and access tags, never lists of people",
              "a tag combines project and confidentiality level, so separate lists do not multiply",
              "every section has a tag in every namespace, because an omitted namespace means “everything”",
              "test: a profile with no memberships returns zero results"
            ],
            "korzysc": "A membership change only touches the user's profile, not millions of entries."
          },
          {
            "typ": "karta",
            "etykieta": "Search",
            "tytul": "A stale index",
            "problem": "An index is always a little behind. A section may have just become confidential.",
            "opis": "The index points, the database hands out the content.",
            "punkty": [
              "the search engine returns only section IDs",
              "the agent fetches content from the database under Row-Level Security",
              "changes flow through the outbox pattern and Pub/Sub, and the indexer is idempotent",
              "a permission change needs no new embeddings, only new tags"
            ],
            "korzysc": "Index delay affects relevance, not security."
          },
          {
            "typ": "karta",
            "etykieta": "Search",
            "tytul": "Scale",
            "problem": "Tens of thousands of users and millions of chunks in the index.",
            "opis": "A membership change must not mean rewriting the index.",
            "punkty": [
              "the number of chunks is documents times sections: millions of entries",
              "the access profile is cached (Memorystore) and invalidated by an event within seconds",
              "a missing cache never opens access: the profile is then calculated from the database",
              "the first embedding load runs in batch, later only changed sections",
              "changing the embedding model: a new index next to the old one, switched after evaluations"
            ],
            "korzysc": "Cost grows with content changes, not with permission changes."
          },
          {
            "typ": "przerywnik",
            "tytul": "Agents",
            "opis": "A deterministic skeleton, a decision-making coordinator."
          },
          {
            "typ": "karta",
            "etykieta": "Agents",
            "tytul": "Agent identity",
            "problem": "If the model could pass a user ID, one hidden instruction in a document would let it read as someone else.",
            "opis": "The agent acts in the user's context and never chooses it.",
            "punkty": [
              "Apigee validates the token from the company's own login system",
              "the API exchanges it for a short-lived internal token (token exchange pattern)",
              "tools have no user ID parameter",
              "in ADK the context arrives through tool context, which the model cannot see",
              "tools take the identity from the signed token, not from session state"
            ],
            "korzysc": "The confused deputy problem is closed in code, not in the prompt."
          },
          {
            "typ": "karta",
            "etykieta": "Agents",
            "tytul": "Skeleton and coordinator",
            "problem": "Security steps must always run, while the work to do depends on the meeting.",
            "opis": "A fixed order in code, model decisions only inside.",
            "punkty": [
              "SequentialAgent: permission guard → router → retrieval → coordinator → verification → source check → delivery",
              "security steps are custom agents with plain code and no model",
              "the coordinator returns a plan, and code runs the chosen specialists in parallel",
              "specialists: project history, open committee decisions, R&D status, brief author",
              "the coordinator has no data access of its own"
            ],
            "korzysc": "The coordinator decides about content, never about security."
          },
          {
            "typ": "karta",
            "etykieta": "Agents",
            "tytul": "Personal brief and shared version",
            "problem": "One brief for everyone must be built from the overlap of permissions. In a large meeting that is almost nothing.",
            "opis": "Each participant gets their own brief, built from their permissions.",
            "punkty": [
              "the shared version is built separately, from the overlap of all profiles",
              "external participants lower the allowed level of the shared version",
              "access to a brief is checked every time it is opened",
              "lost permissions or changed sources mean a new brief"
            ],
            "korzysc": "Nobody loses the context they need, and nobody gets too much."
          },
          {
            "typ": "karta",
            "etykieta": "Agents",
            "tytul": "Verification and grounding",
            "problem": "A model can write a sentence that sounds right but does not follow from the sources.",
            "opis": "A brief passes two checks before it reaches a person.",
            "punkty": [
              "verifier (LoopAgent): an analyst, a devil's advocate, at most one round of fixes",
              "source checker in code: every sentence points to a section released to this recipient",
              "the Check Grounding API and a judge from a different model family than the author",
              "sentences below the threshold are removed",
              "the brief's confidentiality equals the highest among its sources"
            ],
            "korzysc": "Every sentence in a brief can be checked against a document."
          },
          {
            "typ": "karta",
            "etykieta": "Agents",
            "tytul": "Two model families",
            "problem": "Roles have different needs, and an author should not grade its own work.",
            "opis": "Claude and Gemini from Vertex AI, interchangeable behind one gateway.",
            "punkty": [
              "an agent calls a role, not a specific model",
              "role-to-model configuration outside the code, with pinned versions",
              "a strong model for coordination, fast and cheap ones for routing and extraction",
              "schema-based output in both families, checked in code",
              "caching of the fixed start of each prompt, and a cascade starting from the cheaper model"
            ],
            "korzysc": "Switching a model is a configuration change, verified by evaluations."
          },
          {
            "typ": "karta",
            "etykieta": "Agents",
            "tytul": "Alternatives we rejected",
            "opis": "Each of these options was seriously considered.",
            "punkty": [
              "federating the login with Google Cloud: little gain with documents in SQL and our own role model",
              "vectors in AlloyDB under RLS: one place for rules, but separating search load from the database won",
              "Agent Engine instead of Cloud Run: full control of network, ingress and releases won",
              "one agent with a large prompt: specialists work in parallel, have smaller context and can be evaluated separately",
              "for a simple meeting the coordinator runs one specialist or none"
            ]
          },
          {
            "typ": "przerywnik",
            "tytul": "Knowledge that grows",
            "opis": "The loop after a meeting."
          },
          {
            "typ": "karta",
            "etykieta": "Self-improving knowledge",
            "tytul": "The loop after a meeting",
            "problem": "A decision from a closed committee could become general knowledge. The system would learn to leak.",
            "opis": "Every new fact inherits the confidentiality of the meeting and its sources.",
            "punkty": [
              "fact extraction by schema: decision, owner, deadline, sources",
              "the lower bound of confidentiality is calculated by code, and only a human can lower it",
              "Cloud Workflows runs the loop and waits for human approval",
              "low-risk facts enter automatically, the rest wait in a queue",
              "a fact registry with history, an expiry date and an immutable log"
            ],
            "korzysc": "Knowledge grows, and the audience of every fact stays under control."
          },
          {
            "typ": "karta",
            "etykieta": "Self-improving knowledge",
            "tytul": "Memory poisoning",
            "problem": "A meeting note is untrusted content, and a poisoned fact returns in many future briefs.",
            "opis": "A fact is always data, never an instruction.",
            "punkty": [
              "every fact has recorded provenance: who, from which meeting, from which sections",
              "uncertain or conflicting facts, and facts from external people, wait in quarantine",
              "notes pass through Model Armor and personal data detection",
              "the registry has history, so a fact can be rolled back together with everything built on it"
            ],
            "korzysc": "The most dangerous attack surface stays under human control."
          },
          {
            "typ": "przerywnik",
            "tytul": "Security",
            "opis": "Assumption: an instruction hidden in a document will reach the model one day."
          },
          {
            "typ": "karta",
            "etykieta": "Security",
            "tytul": "Prompt injection: layered defence",
            "problem": "No single guard stops every attack.",
            "opis": "We limit what can happen when an attack succeeds.",
            "punkty": [
              "the model only gets what the recipient may see anyway",
              "read-only tools, no route to the internet, a VPC Service Controls perimeter",
              "document content as marked data, never inside the agent's instruction",
              "Model Armor on questions, tool results and notes, wired into ADK callbacks",
              "output schema and the source checker: an instruction without a source is dropped"
            ],
            "korzysc": "A model that has nothing to steal and no channel out is safe even when a guard lets something through."
          },
          {
            "typ": "karta",
            "etykieta": "Security",
            "tytul": "Existence leaks and data at rest",
            "problem": "The answer itself can reveal that a secret document exists.",
            "opis": "“It does not exist” and “you have no access” sound the same.",
            "punkty": [
              "titles, authors and committee names follow the same permissions as the content",
              "counters and summaries are built only from what the recipient can see",
              "agent sessions treated like a database with confidential data",
              "the response cache is tied to the access profile",
              "traces without document content"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Security",
            "tytul": "Tools and supply chain",
            "problem": "A tool description also reaches the model, and an over-privileged agent is a ready leak channel.",
            "opis": "Least privilege for every agent and every service.",
            "punkty": [
              "tools as MCP servers with OAuth 2 and narrow scopes",
              "the preparation agent is read-only; only the knowledge coordinator can write, and only to the fact registry",
              "an allowlist of MCP servers, tool descriptions under code review",
              "service accounts without keys, separate for the preparation agent and the knowledge agent",
              "pinned library versions, image scanning, Binary Authorization",
              "red teaming before a release: our own attacks in PyRIT and promptfoo"
            ]
          },
          {
            "typ": "przerywnik",
            "tytul": "Quality and operations",
            "opis": "Tests, evaluations, audit and releases."
          },
          {
            "typ": "karta",
            "etykieta": "Quality",
            "tytul": "Tests and evaluations",
            "problem": "Brief quality and permission tightness cannot be judged by eye.",
            "opis": "Layers of tests and a CI gate that blocks a release.",
            "punkty": [
              "deterministic permission tests in pytest, with no model",
              "ADK evaluations: did the agent follow the right tool path",
              "Gen AI Evaluation Service: grounding and brief quality",
              "a golden set from real questions, judges from a different model family",
              "red teaming before a release and evaluation of a production sample"
            ],
            "korzysc": "A score below the threshold blocks the merge and the release."
          },
          {
            "typ": "karta",
            "etykieta": "Operations",
            "tytul": "Audit and observability",
            "problem": "Cloud services only see our API, so they do not know who received which sections.",
            "opis": "Our own audit log and one trace per run.",
            "punkty": [
              "the log of who received which sections: user pseudonym, profile version, list of sections",
              "an OpenTelemetry trace in Cloud Trace, from the API to the model, for diagnostics",
              "traces carry IDs and confidentiality levels, never content",
              "dashboards: cost per meeting, brief preparation time, Model Armor blocks"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Operations",
            "tytul": "Releases and reliability",
            "problem": "Security steps cannot have a fallback mode, while the rest of the system should survive failures.",
            "opis": "Briefs are built in the background, ahead of time, with retries.",
            "punkty": [
              "infrastructure in Terraform, images from Cloud Build, services on Cloud Run",
              "a new revision first gets a small share of traffic",
              "when a specialist fails, the brief is built without that part, with a note",
              "when the permission guard or the source checker fails, no brief is produced",
              "a rate-limited queue and separate model quotas for background work"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Operations",
            "tytul": "Measuring the goal and cost",
            "problem": "The goal is shorter meeting preparation, not the number of model calls.",
            "opis": "We measure the effect for people, quality and security, and we count cost per meeting.",
            "punkty": [
              "preparation time reported by participants before and after the rollout",
              "usage: how many meetings have a brief and how many briefs are opened before the meeting",
              "usefulness: participant ratings and the share of sentences removed by the source checker",
              "security: the number of permission incidents, which must be zero",
              "cost per meeting calculated from traces, budgets with alerts and a daily model cost limit"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Summary",
            "tytul": "What the platform does not give you",
            "opis": "Our own additions, which turned out to be the core of the project.",
            "punkty": [
              "section-level permissions and rules with an AND condition (committee, project, region, level)",
              "consistency of the two stores and fetching content from the database by ID",
              "confidentiality inheritance for derived knowledge: facts, summaries, briefs",
              "personal briefs and a shared version built from the overlap of permissions",
              "an audit of who received what, and the same answer for “does not exist” and “no access”",
              "protection of the knowledge loop: fact provenance, quarantine, rollback"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Summary",
            "tytul": "What we learned",
            "opis": "Lessons that follow from the decisions in the project.",
            "punkty": [
              "security cannot live in the prompt",
              "knowledge that learns must inherit confidentiality",
              "groups, not people, on index entries",
              "a deterministic skeleton, decisions inside",
              "the search engine should not hand out content",
              "with prompt injection, limiting the damage matters more than detection alone",
              "system memory is the most dangerous place for an attack"
            ]
          }
        ]
      }
    },
    {
      "id": "technologie",
      "pl": {
        "platforma": "Google Cloud · Vertex AI",
        "tytul": "Google Cloud i Vertex AI: technologie",
        "podtytul": "Usługi i narzędzia w systemie agentów oraz ich rola",
        "opis_listy": "Wersja technologiczna: same usługi i narzędzia oraz to, do czego służyły.",
        "slajdy": [
          {
            "typ": "tyt",
            "tytul": "Google Cloud i Vertex AI: technologie",
            "opis": "Z czego zbudowany jest system agentów AI do przygotowania spotkań i jaką rolę pełni każda usługa."
          },
          {
            "typ": "karta",
            "etykieta": "Mapa",
            "tytul": "Zasada doboru narzędzi",
            "opis": "Najpierw dojrzałe usługi platformy, potem otwarte standardy, które Google sam wspiera.",
            "punkty": [
              "Google Cloud i Vertex AI wszędzie tam, gdzie platforma ma dojrzałą usługę",
              "otwarte frameworki i standardy: ADK, LangChain, OpenTelemetry, MCP",
              "narzędzia pomocnicze dla programisty: promptfoo i PyRIT",
              "dane i wyniki pod jedną kontrolą dostępu: IAM i VPC Service Controls"
            ]
          },
          {
            "typ": "przerywnik",
            "tytul": "Dane",
            "opis": "Baza, zdarzenia i dokumenty."
          },
          {
            "typ": "karta",
            "etykieta": "Dane",
            "tytul": "AlloyDB for PostgreSQL",
            "opis": "Relacyjna baza dokumentów i źródło prawdy systemu.",
            "punkty": [
              "dokumenty w sekcjach, model ról, rejestr faktów, sesje agentów",
              "Row-Level Security z podpisanym identyfikatorem użytkownika",
              "pgaudit, tabele historii i dziennik niezmienialny faktów",
              "logowanie usług przez IAM, bez haseł",
              "szyfrowanie kluczem klienta z Cloud KMS"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Dane",
            "tytul": "Pub/Sub i Memorystore for Redis",
            "opis": "Zdarzenia zmian i pamięć podręczna profili dostępu.",
            "punkty": [
              "wzorzec outbox: zmiana w bazie i zdarzenie w jednej transakcji",
              "Pub/Sub przekazuje zmiany do indeksu i unieważnia pamięć podręczną",
              "klucze kolejności i temat martwych wiadomości",
              "Memorystore trzyma profil dostępu dla filtra wyszukiwarki"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Dane",
            "tytul": "Document AI i Sensitive Data Protection",
            "opis": "Przygotowanie treści przed zasileniem wiedzy.",
            "punkty": [
              "Document AI (Layout Parser) wyciąga tekst, tabele i strukturę z PDF-ów i skanów",
              "sekcje powstają ze struktury dokumentu, a nie z cięcia po znakach",
              "Sensitive Data Protection wykrywa dane osobowe w notatkach ze spotkań",
              "klasyfikacja danych wrażliwych zapisana przy sekcji"
            ]
          },
          {
            "typ": "przerywnik",
            "tytul": "Wyszukiwanie",
            "opis": "Indeks RAG, ranking i wiedza ogólna."
          },
          {
            "typ": "karta",
            "etykieta": "Wyszukiwanie",
            "tytul": "Vertex AI Vector Search",
            "opis": "Indeks RAG: wyszukiwanie wektorowe i hybrydowe z filtrami dostępu.",
            "punkty": [
              "wektory gęste i rzadkie w jednym indeksie, łączone przez RRF",
              "restricts: filtrowanie po tagach dostępu w trakcie przeszukiwania",
              "aktualizacje strumieniowe i budowa wsadowa z Cloud Storage",
              "zwraca identyfikatory sekcji, a treść wydaje baza"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Wyszukiwanie",
            "tytul": "Ranking API i Check Grounding API",
            "opis": "Dwa interfejsy Vertex AI, które podnoszą trafność i wiarygodność.",
            "punkty": [
              "Ranking API (semantic ranker) ponownie układa najlepsze wyniki hybrydy",
              "Check Grounding API sprawdza, czy zdanie briefu wynika ze wskazanych sekcji",
              "oba pracują na treści już wydanej odbiorcy przez bazę",
              "przy awarii system działa dalej: zostaje kolejność z hybrydy i ocena sędziego"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Wyszukiwanie",
            "tytul": "Vertex AI Search i embeddingi",
            "opis": "Wiedza ogólna firmy osobno, embeddingi wspólne dla dokumentów i pytań.",
            "punkty": [
              "Vertex AI Search: procedury i słowniki dostępne dla wszystkich, bez filtra uprawnień",
              "bierzemy z niego tylko wyniki wyszukiwania, odpowiedź pisze nasz agent",
              "wielojęzyczny model embeddingów z Vertex AI",
              "pierwsze zasilenie predykcją wsadową, potem tylko zmienione sekcje"
            ]
          },
          {
            "typ": "przerywnik",
            "tytul": "Modele i agenci",
            "opis": "Vertex AI, ADK, LangChain i MCP."
          },
          {
            "typ": "karta",
            "etykieta": "Modele",
            "tytul": "Gemini i Claude w Vertex AI",
            "opis": "Dwie rodziny modeli, dobierane do roli agenta i wymienne.",
            "punkty": [
              "Gemini jako modele Google, Claude jako modele partnerskie w Model Garden",
              "jedna bramka: agent woła rolę, a nie model",
              "odpowiedź według schematu, pamięć podręczna promptów, liczenie tokenów",
              "rozumowanie rozszerzone tylko u koordynatora i w weryfikatorze",
              "ugruntowanie ocenia model z innej rodziny niż autor"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Agenci",
            "tytul": "Agent Development Kit (ADK)",
            "opis": "Otwarty framework agentów od Google: sterowanie całym przebiegiem.",
            "punkty": [
              "SequentialAgent jako stały szkielet, LoopAgent jako weryfikator",
              "własni agenci (BaseAgent) dla kroków bez modelu",
              "LlmAgent dla koordynatora i specjalistów",
              "tool context, callbacki przed modelem i przed narzędziem",
              "sesje w AlloyDB, wbudowane ślady i ewaluacje agentów"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Agenci",
            "tytul": "LangChain i MCP",
            "opis": "Klocki i standard narzędzi obok ADK.",
            "punkty": [
              "LangChain: dzielenie dokumentów według nagłówków i ładowanie do AlloyDB (pakiet Google)",
              "LangchainTool owija gotowe narzędzia jako narzędzia ADK",
              "MCP z OAuth 2: narzędzia agentów jako osobne usługi z wąskimi zakresami",
              "lista dozwolonych serwerów MCP, opisy narzędzi w przeglądzie kodu"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Agenci",
            "tytul": "Cloud Run, Cloud Workflows i kolejki",
            "opis": "Uruchamianie usług i długich przepływów.",
            "punkty": [
              "Cloud Run: API, usługa polityk, agenci ADK, indeksator, serwery MCP",
              "Cloud Workflows: pętla wiedzy z oczekiwaniem na decyzję człowieka",
              "Cloud Tasks: kolejka przebiegów z ponowieniami",
              "Cloud Scheduler i Pub/Sub: wyzwalacz spotkań i prace okresowe"
            ]
          },
          {
            "typ": "przerywnik",
            "tytul": "Bezpieczeństwo",
            "opis": "Wejście, osłony, tożsamość i sieć."
          },
          {
            "typ": "karta",
            "etykieta": "Bezpieczeństwo",
            "tytul": "Apigee i Cloud Armor",
            "opis": "Jedno wejście do systemu.",
            "punkty": [
              "Apigee weryfikuje token JWT z własnego logowania firmy (VerifyJWT)",
              "limity zapytań na osobę i logowanie",
              "usługi w Cloud Run mają wejście wewnętrzne, więc ruch omijający Apigee nie dociera",
              "Cloud Armor: reguły WAF i ochrona przed zalewem zapytań"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Bezpieczeństwo",
            "tytul": "Model Armor",
            "opis": "Osłona przed prompt injection i niedozwoloną treścią.",
            "punkty": [
              "filtry: prompt injection i jailbreak, odpowiedzialne AI, złośliwe adresy, dane wrażliwe",
              "skan sekcji przy zasilaniu, wynik zapisany przy sekcji",
              "na żywo: pytania, wyniki narzędzi i notatki do pętli wiedzy",
              "wpięty w callbacki ADK; brak odpowiedzi zatrzymuje krok"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Bezpieczeństwo",
            "tytul": "Tożsamość, klucze i sieć",
            "opis": "Usługi łączą się bez haseł i bez drogi na zewnątrz.",
            "punkty": [
              "konta serwisowe bez plików z kluczami, minimalne role IAM",
              "Cloud KMS: klucz podpisu tokenów wewnętrznych; Secret Manager: sekrety",
              "VPC i Private Service Connect: brak publicznego dostępu do bazy i indeksu",
              "VPC Service Controls blokuje wynoszenie danych przez usługi Google",
              "Organization Policy wymusza te zasady w całej organizacji"
            ]
          },
          {
            "typ": "przerywnik",
            "tytul": "Jakość i wdrożenia",
            "opis": "Ewaluacje, ślady i infrastruktura jako kod."
          },
          {
            "typ": "karta",
            "etykieta": "Jakość",
            "tytul": "Ewaluacje i testy ataków",
            "opis": "Bramka wydania i codzienna praca nad promptami.",
            "punkty": [
              "ewaluacje ADK: zgodność ścieżki narzędzi i odpowiedzi z oczekiwaniem",
              "Gen AI Evaluation Service: ugruntowanie, trafność, własne rubryki",
              "promptfoo: szybkie testy promptów przy każdej zmianie",
              "PyRIT: własne ataki domenowe przed wydaniem",
              "pytest: testy uprawnień bez modelu"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Obserwowalność",
            "tytul": "OpenTelemetry i Cloud Trace",
            "opis": "Jeden ślad przez cały przebieg, bez treści dokumentów.",
            "punkty": [
              "ADK wysyła ślady agentów, modeli i narzędzi do Cloud Trace",
              "Cloud Logging z Log Analytics: zapytania SQL po logach",
              "Cloud Monitoring: koszt na spotkanie, czas briefu, blokady osłon",
              "Cloud Audit Logs: dostęp usług i zespołu; własny dziennik: kto dostał które sekcje"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Wdrożenia",
            "tytul": "Terraform, Cloud Build i Artifact Registry",
            "opis": "Infrastruktura jako kod i kontrolowane wydania.",
            "punkty": [
              "Terraform opisuje całą infrastrukturę",
              "Cloud Build buduje obrazy i uruchamia bramkę jakości",
              "Artifact Registry ze skanem obrazów",
              "Binary Authorization dopuszcza tylko obrazy z naszego Cloud Build",
              "nowa rewizja Cloud Run najpierw dostaje małą część ruchu"
            ]
          }
        ]
      },
      "en": {
        "platforma": "Google Cloud · Vertex AI",
        "tytul": "Google Cloud and Vertex AI: technologies",
        "podtytul": "Services and tools in the agent system and their role",
        "opis_listy": "Technology version: only the services and tools, and what they were used for.",
        "slajdy": [
          {
            "typ": "tyt",
            "tytul": "Google Cloud and Vertex AI: technologies",
            "opis": "What the AI agent system for meeting preparation is built from, and the role of each service."
          },
          {
            "typ": "karta",
            "etykieta": "Map",
            "tytul": "How we chose the tools",
            "opis": "Mature platform services first, then open standards that Google itself supports.",
            "punkty": [
              "Google Cloud and Vertex AI wherever the platform has a mature service",
              "open frameworks and standards: ADK, LangChain, OpenTelemetry, MCP",
              "helper tools for the developer: promptfoo and PyRIT",
              "data and results under one access control: IAM and VPC Service Controls"
            ]
          },
          {
            "typ": "przerywnik",
            "tytul": "Data",
            "opis": "Database, events and documents."
          },
          {
            "typ": "karta",
            "etykieta": "Data",
            "tytul": "AlloyDB for PostgreSQL",
            "opis": "The relational document database and the system's source of truth.",
            "punkty": [
              "documents in sections, role model, fact registry, agent sessions",
              "Row-Level Security with a signed user ID",
              "pgaudit, history tables and an immutable fact log",
              "services log in through IAM, without passwords",
              "encryption with a customer-managed key from Cloud KMS"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Data",
            "tytul": "Pub/Sub and Memorystore for Redis",
            "opis": "Change events and the access profile cache.",
            "punkty": [
              "outbox pattern: the database change and the event in one transaction",
              "Pub/Sub carries changes to the index and invalidates the cache",
              "ordering keys and a dead-letter topic",
              "Memorystore holds the access profile for the search filter"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Data",
            "tytul": "Document AI and Sensitive Data Protection",
            "opis": "Preparing content before it feeds the knowledge base.",
            "punkty": [
              "Document AI (Layout Parser) extracts text, tables and structure from PDFs and scans",
              "sections come from the document structure, not from cutting by characters",
              "Sensitive Data Protection detects personal data in meeting notes",
              "sensitive data classification stored with each section"
            ]
          },
          {
            "typ": "przerywnik",
            "tytul": "Search",
            "opis": "RAG index, ranking and company-wide knowledge."
          },
          {
            "typ": "karta",
            "etykieta": "Search",
            "tytul": "Vertex AI Vector Search",
            "opis": "The RAG index: vector and hybrid search with access filters.",
            "punkty": [
              "dense and sparse vectors in one index, merged with RRF",
              "restricts: filtering by access tags during the search",
              "streaming updates and batch build from Cloud Storage",
              "it returns section IDs, and the database hands out the content"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Search",
            "tytul": "Ranking API and Check Grounding API",
            "opis": "Two Vertex AI interfaces that raise relevance and trust.",
            "punkty": [
              "the Ranking API (semantic ranker) reorders the top hybrid results",
              "the Check Grounding API checks whether a brief sentence follows from the cited sections",
              "both work on content already released to the recipient by the database",
              "on failure the system keeps working: the hybrid order stays, and the judge does the grounding check"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Search",
            "tytul": "Vertex AI Search and embeddings",
            "opis": "Company-wide knowledge kept separately, and one embedding model for documents and questions.",
            "punkty": [
              "Vertex AI Search: procedures and glossaries open to everyone, with no permission filter",
              "we take only search results from it; our agent writes the answer",
              "a multilingual embedding model from Vertex AI",
              "the first load by batch prediction, later only changed sections"
            ]
          },
          {
            "typ": "przerywnik",
            "tytul": "Models and agents",
            "opis": "Vertex AI, ADK, LangChain and MCP."
          },
          {
            "typ": "karta",
            "etykieta": "Models",
            "tytul": "Gemini and Claude on Vertex AI",
            "opis": "Two model families, matched to the agent's role and interchangeable.",
            "punkty": [
              "Gemini as Google models, Claude as partner models in Model Garden",
              "one gateway: an agent calls a role, not a model",
              "schema-based output, prompt caching, token counting",
              "extended thinking only for the coordinator and the verifier",
              "grounding is judged by a model from a different family than the author"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Agents",
            "tytul": "Agent Development Kit (ADK)",
            "opis": "Google's open agent framework: it controls the whole run.",
            "punkty": [
              "SequentialAgent as the fixed skeleton, LoopAgent as the verifier",
              "custom agents (BaseAgent) for steps without a model",
              "LlmAgent for the coordinator and the specialists",
              "tool context, callbacks before the model and before a tool",
              "sessions in AlloyDB, built-in traces and agent evaluations"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Agents",
            "tytul": "LangChain and MCP",
            "opis": "Building blocks and the tool standard next to ADK.",
            "punkty": [
              "LangChain: splitting documents by headings and loading into AlloyDB (Google's package)",
              "LangchainTool wraps ready-made tools as ADK tools",
              "MCP with OAuth 2: agent tools as separate services with narrow scopes",
              "an allowlist of MCP servers, tool descriptions under code review"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Agents",
            "tytul": "Cloud Run, Cloud Workflows and queues",
            "opis": "Running services and long flows.",
            "punkty": [
              "Cloud Run: API, policy service, ADK agents, indexer, MCP servers",
              "Cloud Workflows: the knowledge loop that waits for a human decision",
              "Cloud Tasks: a queue of runs with retries",
              "Cloud Scheduler and Pub/Sub: the meeting trigger and periodic jobs"
            ]
          },
          {
            "typ": "przerywnik",
            "tytul": "Security",
            "opis": "Entry, guards, identity and network."
          },
          {
            "typ": "karta",
            "etykieta": "Security",
            "tytul": "Apigee and Cloud Armor",
            "opis": "One entry to the system.",
            "punkty": [
              "Apigee validates the JWT from the company's own login (VerifyJWT)",
              "per-user request limits and logging",
              "services on Cloud Run have internal ingress, so traffic that bypasses Apigee never arrives",
              "Cloud Armor: WAF rules and protection against request floods"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Security",
            "tytul": "Model Armor",
            "opis": "A guard against prompt injection and disallowed content.",
            "punkty": [
              "filters: prompt injection and jailbreak, responsible AI, malicious URLs, sensitive data",
              "sections scanned at ingestion, with the result stored with the section",
              "live: questions, tool results and notes entering the knowledge loop",
              "wired into ADK callbacks; no response stops the step"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Security",
            "tytul": "Identity, keys and network",
            "opis": "Services connect without passwords and with no way out.",
            "punkty": [
              "service accounts without key files, minimal IAM roles",
              "Cloud KMS: the signing key for internal tokens; Secret Manager: secrets",
              "VPC and Private Service Connect: no public access to the database or the index",
              "VPC Service Controls blocks taking data out through Google services",
              "Organization Policy enforces these rules across the organization"
            ]
          },
          {
            "typ": "przerywnik",
            "tytul": "Quality and releases",
            "opis": "Evaluations, traces and infrastructure as code."
          },
          {
            "typ": "karta",
            "etykieta": "Quality",
            "tytul": "Evaluations and attack tests",
            "opis": "The release gate and daily work on prompts.",
            "punkty": [
              "ADK evaluations: the tool path and the answer match the expectation",
              "Gen AI Evaluation Service: grounding, relevance, custom rubrics",
              "promptfoo: quick prompt tests on every change",
              "PyRIT: our own domain attacks before a release",
              "pytest: permission tests with no model"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Observability",
            "tytul": "OpenTelemetry and Cloud Trace",
            "opis": "One trace through the whole run, without document content.",
            "punkty": [
              "ADK sends traces of agents, models and tools to Cloud Trace",
              "Cloud Logging with Log Analytics: SQL queries over logs",
              "Cloud Monitoring: cost per meeting, brief time, guard blocks",
              "Cloud Audit Logs: access by services and the team; our own log: who received which sections"
            ]
          },
          {
            "typ": "karta",
            "etykieta": "Releases",
            "tytul": "Terraform, Cloud Build and Artifact Registry",
            "opis": "Infrastructure as code and controlled releases.",
            "punkty": [
              "Terraform describes the whole infrastructure",
              "Cloud Build builds images and runs the quality gate",
              "Artifact Registry with image scanning",
              "Binary Authorization allows only images from our Cloud Build",
              "a new Cloud Run revision first gets a small share of traffic"
            ]
          }
        ]
      }
    }
  ]
};
