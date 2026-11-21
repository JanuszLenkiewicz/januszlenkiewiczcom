// PLIK GENEROWANY przez ai-engineer/www/azure/eksport_strona.py — nie edytuj ręcznie.
// Źródła: www/azure/karty.json (PL) i www/azure/karty-en.json (EN).

export type Lang = 'pl' | 'en';
export type KartaTekst = { nazwa: string; opis: string; punkty: string[]; korzysc: string };
export type KartaAzure = {
  slug: string;
  rodzaj: 'pojecie' | 'usluga';
  wyroznienie: boolean;
  pl: KartaTekst;
  en: KartaTekst;
};
export type TekstyStrony = {
  tytul: string;
  lead: string;
  sekcja_pojecie: string;
  sekcja_usluga: string;
  korzysc: string;
  pokaz: string;
  zamknij: string;
};

export const STRONA_AZURE: Record<Lang, TekstyStrony> = {
  "pl": {
    "tytul": "Microsoft Azure",
    "lead": "Aplikacja z agentami AI uruchomiona w całości w Microsoft Azure, z warstwą AI na Microsoft Foundry.",
    "sekcja_pojecie": "Rozwiązania AI",
    "sekcja_usluga": "Infrastruktura w Microsoft Azure",
    "korzysc": "Korzyść",
    "pokaz": "Pokaż jako prezentację",
    "zamknij": "Zamknij (Esc)"
  },
  "en": {
    "tytul": "Microsoft Azure",
    "lead": "An application with AI agents running entirely on Microsoft Azure, with its AI layer on Microsoft Foundry.",
    "sekcja_pojecie": "AI solutions",
    "sekcja_usluga": "Infrastructure on Microsoft Azure",
    "korzysc": "Benefit",
    "pokaz": "Show as presentation",
    "zamknij": "Close (Esc)"
  }
};

export const KARTY_AZURE: KartaAzure[] = [
  {
    "slug": "p01-rag",
    "rodzaj": "pojecie",
    "wyroznienie": false,
    "pl": {
      "nazwa": "RAG (Retrieval-Augmented Generation)",
      "opis": "Asystent AI odpowiada na podstawie danych użytkownika wyszukanych w bazie, a nie tylko z wiedzy modelu.",
      "punkty": [
        "przy każdej rozmowie wyszukanie najtrafniejszych notatek z pamięci użytkownika",
        "wyszukiwanie hybrydowe: znaczeniowe (wektory) i po słowach, rankingi łączone w jeden",
        "znalezione notatki trafiają do promptu jako kontekst odpowiedzi",
        "model w Microsoft Foundry odpowiada na ich podstawie"
      ],
      "korzysc": "Odpowiedzi oparte na własnej historii i notatkach użytkownika, mniej zmyśleń modelu, wiedza aktualna bez trenowania modelu."
    },
    "en": {
      "nazwa": "RAG (Retrieval-Augmented Generation)",
      "opis": "The AI assistant answers from the user's own data retrieved from the database, not only from what the model knows.",
      "punkty": [
        "every conversation retrieves the most relevant notes from the user's memory",
        "hybrid search: by meaning (vectors) and by keywords, with both rankings merged into one",
        "the retrieved notes go into the prompt as context",
        "the model on Microsoft Foundry answers based on them"
      ],
      "korzysc": "Answers grounded in the user's own history and notes, fewer model hallucinations, and up-to-date knowledge without retraining the model."
    }
  },
  {
    "slug": "p02-pgvector",
    "rodzaj": "pojecie",
    "wyroznienie": false,
    "pl": {
      "nazwa": "pgvector: baza wektorowa w PostgreSQL",
      "opis": "Wektory i wyszukiwanie po podobieństwie działają w tej samej bazie, w której są dane platformy.",
      "punkty": [
        "rozszerzenie vector w Azure Database for PostgreSQL",
        "wektory 3072 wymiary w formacie halfvec",
        "indeks HNSW do szybkiego wyszukiwania najbliższych sąsiadów (podobieństwo kosinusowe)",
        "zapytania wektorowe łączone ze zwykłym SQL i uprawnieniami wierszy"
      ],
      "korzysc": "Bez osobnej bazy wektorowej do kupienia i utrzymania; dane i wektory pod tymi samymi zabezpieczeniami i kopiami."
    },
    "en": {
      "nazwa": "pgvector: a vector database in PostgreSQL",
      "opis": "Vectors and similarity search live in the same database as the application data.",
      "punkty": [
        "the vector extension in Azure Database for PostgreSQL",
        "3,072-dimension vectors stored as halfvec",
        "an HNSW index for fast nearest-neighbour search (cosine similarity)",
        "vector queries combined with plain SQL and row-level security"
      ],
      "korzysc": "No separate vector database to buy and run; data and vectors share the same security and backups."
    }
  },
  {
    "slug": "p03-embeddingi",
    "rodzaj": "pojecie",
    "wyroznienie": false,
    "pl": {
      "nazwa": "Embeddingi (wektory znaczeniowe)",
      "opis": "Tekst notatek i pytań zamieniany na wektory, które oddają znaczenie, a nie same słowa.",
      "punkty": [
        "model text-embedding-3-large w Microsoft Foundry",
        "3072 wymiary na każdy fragment tekstu",
        "wektor notatki liczony przy jej zapisie, wektor pytania przy każdej rozmowie",
        "ten sam wymiar co wcześniejszy model, więc zmiana dostawcy bez przebudowy bazy"
      ],
      "korzysc": "Wyszukiwanie rozumie sens pytania: „jak mniej się rozpraszać” znajdzie notatkę o pracy w skupieniu, nawet bez wspólnych słów."
    },
    "en": {
      "nazwa": "Embeddings (meaning vectors)",
      "opis": "Notes and questions are turned into vectors that capture meaning, not just words.",
      "punkty": [
        "the text-embedding-3-large model on Microsoft Foundry",
        "3,072 dimensions per piece of text",
        "a note's vector is computed when it is saved, a question's vector on every conversation",
        "same dimension as the previous model, so switching providers needed no database rebuild"
      ],
      "korzysc": "Search understands what the question means: “how to get less distracted” finds a note about deep work, even with no words in common."
    }
  },
  {
    "slug": "p04-wyszukiwanie-hybrydowe",
    "rodzaj": "pojecie",
    "wyroznienie": false,
    "pl": {
      "nazwa": "Wyszukiwanie semantyczne i hybrydowe",
      "opis": "Wyszukiwanie po znaczeniu połączone z wyszukiwaniem po słowach w jednym zapytaniu.",
      "punkty": [
        "noga semantyczna: odległość kosinusowa wektorów w pgvector",
        "noga słownikowa: pełnotekstowe wyszukiwanie PostgreSQL",
        "wyniki obu łączone w jeden ranking",
        "awaria jednej nogi nie zatrzymuje wyszukiwania"
      ],
      "korzysc": "Trafia zarówno w sens pytania, jak i w dokładne nazwy (np. symbole, kody, nazwy własne), których sam model wektorowy często nie łapie."
    },
    "en": {
      "nazwa": "Semantic and hybrid search",
      "opis": "Search by meaning combined with keyword search in a single query.",
      "punkty": [
        "semantic leg: cosine distance between vectors in pgvector",
        "keyword leg: PostgreSQL full-text search",
        "results of both merged into one ranking",
        "if one leg fails, search keeps working"
      ],
      "korzysc": "Catches both the meaning of a question and exact names (symbols, codes, proper names) that a vector model alone often misses."
    }
  },
  {
    "slug": "p05-agenci-ai",
    "rodzaj": "pojecie",
    "wyroznienie": false,
    "pl": {
      "nazwa": "Agenci AI",
      "opis": "Platforma powierza złożone zadania agentom, którzy sami przechodzą przez kolejne kroki i sięgają po dane.",
      "punkty": [
        "9 agentów: podsumowanie dnia, przygotowanie planu, głęboka analiza okresu, weryfikacja odpowiedzi, adwokat diabła, wzorce w okresie, śledzenie analiz, jakość danych, puls dnia",
        "agenci korzystają z narzędzi (tool calling) do odczytu danych, analiz i notatek użytkownika",
        "agent weryfikujący sprawdza odpowiedź mentora, zanim trafi do użytkownika",
        "modele dla wszystkich kroków z Microsoft Foundry"
      ],
      "korzysc": "Analiza, która wymagałaby od człowieka wielu kroków, dzieje się sama, z kontrolą jakości wbudowaną w przebieg."
    },
    "en": {
      "nazwa": "AI agents",
      "opis": "Complex tasks are handed to agents that work through the steps on their own and fetch the data they need.",
      "punkty": [
        "9 agents: daily summary, plan preparation, in-depth period analysis, answer verification, devil's advocate, period patterns, analysis tracking, data quality, daily pulse",
        "agents use tools (tool calling) to read the user's data, analyses and notes",
        "a verifying agent checks the mentor's answer before the user sees it",
        "models for every step come from Microsoft Foundry"
      ],
      "korzysc": "Analysis that would take a person many steps happens on its own, with quality control built into the flow."
    }
  },
  {
    "slug": "p06-langgraph",
    "rodzaj": "pojecie",
    "wyroznienie": false,
    "pl": {
      "nazwa": "LangGraph",
      "opis": "Biblioteka, w której zbudowani są agenci platformy: każdy agent to graf kroków ze wspólnym stanem.",
      "punkty": [
        "agenci jako grafy węzłów i przejść (LangGraph.js, TypeScript)",
        "stan każdego przebiegu zapisywany w Azure Database for PostgreSQL (checkpointer), przebieg można wznowić",
        "modele z Microsoft Foundry podpięte przez LangChain (klient zgodny z OpenAI) z tożsamością Entra ID",
        "grafy działają w kontenerze backendu w Azure Container Apps"
      ],
      "korzysc": "Przewidywalny, testowalny przebieg agenta zamiast jednego długiego promptu; po błędzie albo restarcie agent wraca od miejsca, w którym przerwał."
    },
    "en": {
      "nazwa": "LangGraph",
      "opis": "The library the agents are built with: every agent is a graph of steps with shared state.",
      "punkty": [
        "agents as graphs of nodes and transitions (LangGraph.js, TypeScript)",
        "the state of every run saved in Azure Database for PostgreSQL (checkpointer), so a run can be resumed",
        "Microsoft Foundry models connected through LangChain (OpenAI-compatible client) with Entra ID identity",
        "the graphs run in the backend container on Azure Container Apps"
      ],
      "korzysc": "A predictable, testable agent flow instead of one long prompt; after an error or restart the agent picks up where it stopped."
    }
  },
  {
    "slug": "p07-langchain",
    "rodzaj": "pojecie",
    "wyroznienie": false,
    "pl": {
      "nazwa": "LangChain",
      "opis": "Wspólna warstwa łącząca platformę z modelami, narzędziami i agentami LangGraph.",
      "punkty": [
        "klient modeli zgodny z OpenAI wskazujący na Microsoft Foundry",
        "jednolite wywołania czatu, narzędzi i odpowiedzi według schematu",
        "integracja z LangGraph (węzły agentów wołają modele przez LangChain)",
        "dostawcę modelu zmienia konfiguracja, a nie kod agentów"
      ],
      "korzysc": "Niezależność od jednego dostawcy modeli: przejście na Foundry nie wymagało przepisywania agentów."
    },
    "en": {
      "nazwa": "LangChain",
      "opis": "The common layer connecting the application with models, tools and LangGraph agents.",
      "punkty": [
        "an OpenAI-compatible model client pointing to Microsoft Foundry",
        "uniform calls for chat, tools and schema-based answers",
        "integration with LangGraph (agent nodes call models through LangChain)",
        "the model provider is changed by configuration, not by agent code"
      ],
      "korzysc": "Independence from a single model provider: moving to Foundry did not require rewriting the agents."
    }
  },
  {
    "slug": "p08-tool-calling",
    "rodzaj": "pojecie",
    "wyroznienie": false,
    "pl": {
      "nazwa": "Tool calling (function calling)",
      "opis": "Model sam decyduje, po które dane sięgnąć, i wywołuje narzędzia platformy z poprawnymi argumentami.",
      "punkty": [
        "narzędzia agentów opisane schematem wejścia i wyjścia",
        "model zwraca wywołania narzędzi (tool_calls), a platforma je wykonuje",
        "narzędzia do odczytu danych, analiz i notatek użytkownika",
        "wynik narzędzia wraca do modelu jako kontekst kolejnego kroku"
      ],
      "korzysc": "Agent pracuje na prawdziwych, aktualnych danych użytkownika, a nie na tym, co „pamięta” model."
    },
    "en": {
      "nazwa": "Tool calling (function calling)",
      "opis": "The model decides which data to fetch and calls the application's tools with the right arguments.",
      "punkty": [
        "agent tools described with input and output schemas",
        "the model returns tool calls and the application executes them",
        "tools for reading the user's data, analyses and notes",
        "the tool result goes back to the model as context for the next step"
      ],
      "korzysc": "The agent works on real, current user data, not on what the model “remembers”."
    }
  },
  {
    "slug": "p13-wieloagentowy",
    "rodzaj": "pojecie",
    "wyroznienie": false,
    "pl": {
      "nazwa": "System wieloagentowy",
      "opis": "Kilku agentów o różnych rolach sprawdza tę samą sprawę, zanim wynik trafi do człowieka.",
      "punkty": [
        "analityk przygotowuje ocenę, adwokat diabła szuka słabych punktów, weryfikator decyduje",
        "najwyżej jedna poprawka po uwagach weryfikatora, potem wynik z oznaczeniem",
        "liczby liczone kodem, a nie przez model",
        "ślad całego przebiegu, krok po kroku, w Application Insights"
      ],
      "korzysc": "Wnioski sprawdzone z kilku perspektyw, zanim zobaczy je człowiek; mniej pewnych siebie, a błędnych analiz."
    },
    "en": {
      "nazwa": "Multi-agent system",
      "opis": "Several agents with different roles examine the same case before the result reaches a person.",
      "punkty": [
        "an analyst prepares the assessment, a devil's advocate looks for weak points, a verifier decides",
        "at most one revision after the verifier's remarks, then a result with a flag",
        "numbers are calculated by code, not by the model",
        "a trace of the whole run, step by step, in Application Insights"
      ],
      "korzysc": "Conclusions checked from several angles before a person sees them; fewer confident but wrong analyses."
    }
  },
  {
    "slug": "p14-agent-framework",
    "rodzaj": "pojecie",
    "wyroznienie": false,
    "pl": {
      "nazwa": "Microsoft Agent Framework (Python)",
      "opis": "Agenci przeglądu zbudowani w bibliotece Microsoftu do agentów, w Pythonie.",
      "punkty": [
        "przepływ analityk → adwokat diabła → weryfikator jako jeden workflow",
        "modele z Microsoft Foundry przez tożsamość zarządzaną, bez kluczy",
        "narzędzia agentów pobierane z serwera MCP",
        "testy logiki agentów bez sieci i bez modelu"
      ],
      "korzysc": "Agenci w oficjalnym narzędziu Microsoftu: prosta droga do hostingu w Foundry i do integracji z resztą ekosystemu Azure."
    },
    "en": {
      "nazwa": "Microsoft Agent Framework (Python)",
      "opis": "The review agents are built with Microsoft's agent library, in Python.",
      "punkty": [
        "the analyst → devil's advocate → verifier flow as one workflow",
        "Microsoft Foundry models through managed identity, with no keys",
        "agent tools loaded from an MCP server",
        "tests of the agent logic without network or model"
      ],
      "korzysc": "Agents built with Microsoft's official framework: a direct path to Foundry hosting and to the rest of the Azure ecosystem."
    }
  },
  {
    "slug": "p15-mcp",
    "rodzaj": "pojecie",
    "wyroznienie": false,
    "pl": {
      "nazwa": "MCP (Model Context Protocol)",
      "opis": "Dane trafiają do agentów przez standardowy protokół narzędzi AI, a nie przez integrację pisaną pod jednego agenta.",
      "punkty": [
        "własny serwer MCP w Azure Container Apps, tylko do odczytu",
        "narzędzia do pobierania danych konta dla agenta przeglądu",
        "klucz dostępu w Azure Key Vault",
        "uprawnienia wierszy w bazie ograniczają dane do jednego konta"
      ],
      "korzysc": "Jeden serwer obsłuży każdego agenta, który mówi MCP (Foundry, Claude, Copilot), bez nowych integracji; dostęp tylko do odczytu i tylko do właściwych danych."
    },
    "en": {
      "nazwa": "MCP (Model Context Protocol)",
      "opis": "Data reaches the agents through a standard AI tool protocol, not through an integration written for one agent.",
      "punkty": [
        "a dedicated read-only MCP server on Azure Container Apps",
        "tools that fetch account data for the review agent",
        "the access key stored in Azure Key Vault",
        "row-level security in the database limits data to one account"
      ],
      "korzysc": "One server serves every agent that speaks MCP (Foundry, Claude, Copilot) without new integrations; read-only access to exactly the right data."
    }
  },
  {
    "slug": "p16-a2a",
    "rodzaj": "pojecie",
    "wyroznienie": true,
    "pl": {
      "nazwa": "A2A (Agent-to-Agent)",
      "opis": "Agent przeglądu udostępniony innym agentom i systemom otwartym protokołem A2A.",
      "punkty": [
        "serwer A2A 1.0 w Azure Container Apps",
        "publiczna karta agenta (agent card) z opisem umiejętności",
        "wywołania chronione tokenem z Azure Key Vault",
        "agent sam budzi się przy pierwszym wywołaniu i zasypia bez ruchu"
      ],
      "korzysc": "Agent staje się usługą: może go wywołać agent z Foundry, Copilot Studio albo innej platformy, bez wiedzy o tym, jak jest zbudowany."
    },
    "en": {
      "nazwa": "A2A (Agent-to-Agent)",
      "opis": "The review agent is available to other agents and systems through the open A2A protocol.",
      "punkty": [
        "an A2A 1.0 server on Azure Container Apps",
        "a public agent card describing its skills",
        "calls protected with a token from Azure Key Vault",
        "the agent wakes up on the first call and sleeps when idle"
      ],
      "korzysc": "The agent becomes a service: an agent on Foundry, Copilot Studio or another platform can call it without knowing how it is built."
    }
  },
  {
    "slug": "p09-structured-outputs",
    "rodzaj": "pojecie",
    "wyroznienie": false,
    "pl": {
      "nazwa": "Structured outputs (odpowiedzi według schematu)",
      "opis": "Model zwraca dane w ściśle określonym formacie, który aplikacja od razu sprawdza i zapisuje.",
      "punkty": [
        "schemat odpowiedzi dla każdego kroku agenta",
        "walidacja odpowiedzi przed zapisem do bazy",
        "sanityzacja i jedna ścieżka parsowania dla wszystkich modeli",
        "błędna odpowiedź jest odrzucana, a nie zapisywana"
      ],
      "korzysc": "Wyniki AI można bezpiecznie zapisać, pokazać i policzyć: żadnych „prawie poprawnych” danych w systemie."
    },
    "en": {
      "nazwa": "Structured outputs",
      "opis": "The model returns data in a strictly defined format that the application validates and saves right away.",
      "punkty": [
        "a response schema for every agent step",
        "validation before anything is written to the database",
        "sanitisation and one parsing path for all models",
        "an invalid response is rejected, not saved"
      ],
      "korzysc": "AI results can be safely stored, displayed and counted: no “almost correct” data in the system."
    }
  },
  {
    "slug": "p10-model-rozumujacy",
    "rodzaj": "pojecie",
    "wyroznienie": false,
    "pl": {
      "nazwa": "Model rozumujący (reasoning model)",
      "opis": "Platforma korzysta z modelu, który przed odpowiedzią przeprowadza wewnętrzne rozumowanie.",
      "punkty": [
        "gpt-5-mini w Microsoft Foundry jako model wszystkich ról AI",
        "budżet tokenów na rozumowanie osobno od długości odpowiedzi",
        "poziom wysiłku rozumowania ustawiany konfiguracją",
        "parametry dopasowane do modeli rozumujących (bez temperature, z max_completion_tokens)"
      ],
      "korzysc": "Lepsze wnioskowanie w analizach i ocenach, z kosztem i czasem odpowiedzi kontrolowanymi jednym ustawieniem."
    },
    "en": {
      "nazwa": "Reasoning model",
      "opis": "The application uses a model that reasons internally before it answers.",
      "punkty": [
        "gpt-5-mini on Microsoft Foundry as the model for every AI role",
        "a reasoning token budget separate from the answer length",
        "reasoning effort set by configuration",
        "parameters adapted to reasoning models (no temperature, max_completion_tokens instead)"
      ],
      "korzysc": "Better reasoning in analyses and reviews, with cost and response time controlled by a single setting."
    }
  },
  {
    "slug": "p11-koszty-llm",
    "rodzaj": "pojecie",
    "wyroznienie": false,
    "pl": {
      "nazwa": "Kontrola kosztów LLM: tokeny i limity",
      "opis": "Każde wywołanie modelu ma właściciela kosztu, rezerwację przed wysłaniem i rozliczenie z faktycznych tokenów.",
      "punkty": [
        "rejestr kosztów w bazie: rezerwacja przed wywołaniem, rozliczenie po odpowiedzi",
        "cennik modeli Foundry za tokeny wejścia i wyjścia",
        "dzienny limit kosztów AI dla całej platformy i limity per użytkownik",
        "wywołanie bez właściciela kosztu jest odrzucane"
      ],
      "korzysc": "Przewidywalny koszt AI: żadne wywołanie modelu nie jest „niczyje”, a przekroczenie limitu zatrzymuje wydatki, zanim urosną."
    },
    "en": {
      "nazwa": "LLM cost control: tokens and limits",
      "opis": "Every model call has a cost owner, a reservation before it is sent and settlement from the actual tokens.",
      "punkty": [
        "a cost ledger in the database: reserve before the call, settle after the answer",
        "Foundry model pricing for input and output tokens",
        "a daily AI spending cap for the whole application and per-user limits",
        "a call without a cost owner is rejected"
      ],
      "korzysc": "Predictable AI costs: no model call is “nobody's”, and hitting a limit stops spending before it grows."
    }
  },
  {
    "slug": "p12-docker",
    "rodzaj": "pojecie",
    "wyroznienie": false,
    "pl": {
      "nazwa": "Docker i konteneryzacja",
      "opis": "Cała platforma zapakowana w obrazy kontenerów, uruchamiane tak samo lokalnie i w chmurze.",
      "punkty": [
        "dwa obrazy: web (Caddy z frontendem) i backend (Node.js z Pythonem)",
        "obrazy bazowe przypięte po skrócie (digest) do architektury amd64",
        "kontrola architektury przed publikacją do rejestru",
        "ten sam obraz w próbie lokalnej i w Azure Container Apps"
      ],
      "korzysc": "Powtarzalne wydania: co działa w teście, działa w chmurze; powrót do poprzedniej wersji to zmiana tagu obrazu."
    },
    "en": {
      "nazwa": "Docker and containerisation",
      "opis": "The whole application is packaged as container images that run the same way locally and in the cloud.",
      "punkty": [
        "two images: web (Caddy with the frontend) and backend (Node.js with Python)",
        "base images pinned by digest to the amd64 architecture",
        "an architecture check before publishing to the registry",
        "the same image in the local dry run and on Azure Container Apps"
      ],
      "korzysc": "Repeatable releases: what works in testing works in the cloud; rolling back is a change of image tag."
    }
  },
  {
    "slug": "u01-container-apps",
    "rodzaj": "usluga",
    "wyroznienie": false,
    "pl": {
      "nazwa": "Azure Container Apps",
      "opis": "Uruchamia całą aplikację: interfejs, API i zadania.",
      "punkty": [
        "aplikacja z dwoma kontenerami: web (Caddy z frontendem) i backend (Node.js)",
        "jeden adres HTTPS dla interfejsu i API",
        "skalowanie od 0 do 1 repliki: przy braku ruchu aplikacja zasypia",
        "zadanie Container Apps buduje bazę, konto i dane startowe"
      ],
      "korzysc": "Płaci się za faktyczny ruch, a nie za bezczynny serwer; brak serwerów do administrowania i łatanie systemu po stronie Azure."
    },
    "en": {
      "nazwa": "Azure Container Apps",
      "opis": "Runs the whole application: user interface, API and jobs.",
      "punkty": [
        "an app with two containers: web (Caddy with the frontend) and backend (Node.js)",
        "one HTTPS address for the interface and the API",
        "scaling from 0 to 1 replica: with no traffic the app sleeps",
        "a Container Apps job builds the database, the account and the starting data"
      ],
      "korzysc": "You pay for actual traffic, not for an idle server; no servers to administer, and OS patching is handled by Azure."
    }
  },
  {
    "slug": "u02-postgresql",
    "rodzaj": "usluga",
    "wyroznienie": false,
    "pl": {
      "nazwa": "Azure Database for PostgreSQL",
      "opis": "Baza danych platformy z wyszukiwaniem wektorowym.",
      "punkty": [
        "PostgreSQL 17, Flexible Server",
        "rozszerzenia vector (pgvector), btree_gist, pgcrypto, uuid-ossp",
        "pełny schemat: 231 migracji, zero błędów",
        "połączenie szyfrowane TLS, osobne role dla aplikacji i logowania"
      ],
      "korzysc": "Zarządzana baza z kopiami i aktualizacjami po stronie Azure; dane i wyszukiwanie wektorowe AI w jednym miejscu, bez osobnej bazy wektorowej."
    },
    "en": {
      "nazwa": "Azure Database for PostgreSQL",
      "opis": "The application database, with vector search.",
      "punkty": [
        "PostgreSQL 17, Flexible Server",
        "extensions: vector (pgvector), btree_gist, pgcrypto, uuid-ossp",
        "the full schema: 231 migrations, zero errors",
        "TLS-encrypted connections, separate roles for the application and for sign-in"
      ],
      "korzysc": "A managed database with backups and updates handled by Azure; data and AI vector search in one place, with no separate vector database."
    }
  },
  {
    "slug": "u03-foundry",
    "rodzaj": "usluga",
    "wyroznienie": false,
    "pl": {
      "nazwa": "Microsoft Foundry (Azure OpenAI)",
      "opis": "Modele AI dla wszystkich funkcji platformy.",
      "punkty": [
        "gpt-5-mini: asystent-mentor, analizy, przeglądy i ponad 40 innych ról AI",
        "text-embedding-3-large: wektory pamięci użytkownika i bazy wiedzy",
        "odczyt PDF i opis zrzutów wykresów przez model z obrazem",
        "koszt każdego wywołania liczony i ograniczany dziennym limitem"
      ],
      "korzysc": "Modele AI w tej samej chmurze, umowie i rozliczeniu co aplikacja; wybór modelu i miejsca przetwarzania danych bez zmiany kodu."
    },
    "en": {
      "nazwa": "Microsoft Foundry (Azure OpenAI)",
      "opis": "AI models for every feature of the application.",
      "punkty": [
        "gpt-5-mini: mentor assistant, analyses, reviews and more than 40 other AI roles",
        "text-embedding-3-large: vectors for user memory and the knowledge base",
        "reading PDFs and describing chart screenshots with a vision-capable model",
        "the cost of every call tracked and capped daily"
      ],
      "korzysc": "AI models in the same cloud, contract and billing as the application; model choice and data-processing location change without code changes."
    }
  },
  {
    "slug": "u04-entra-id",
    "rodzaj": "usluga",
    "wyroznienie": false,
    "pl": {
      "nazwa": "Microsoft Entra ID: tożsamość zarządzana",
      "opis": "Aplikacja łączy się z usługami Azure bez haseł i kluczy.",
      "punkty": [
        "jedna tożsamość zarządzana aplikacji",
        "rola do Microsoft Foundry (Cognitive Services OpenAI User)",
        "rola do Key Vault (Key Vault Secrets User) i do rejestru (AcrPull)",
        "token pobierany i odświeżany przez @azure/identity"
      ],
      "korzysc": "Brak kluczy, które mogłyby wyciec albo wymagać rotacji; dostęp nadawany i odbierany rolami w jednym miejscu."
    },
    "en": {
      "nazwa": "Microsoft Entra ID: managed identity",
      "opis": "The application connects to Azure services without passwords or keys.",
      "punkty": [
        "one managed identity for the application",
        "a role on Microsoft Foundry (Cognitive Services OpenAI User)",
        "roles on Key Vault (Key Vault Secrets User) and on the registry (AcrPull)",
        "tokens fetched and refreshed by @azure/identity"
      ],
      "korzysc": "No keys that could leak or need rotating; access granted and revoked through roles in one place."
    }
  },
  {
    "slug": "u05-key-vault",
    "rodzaj": "usluga",
    "wyroznienie": false,
    "pl": {
      "nazwa": "Azure Key Vault",
      "opis": "Wszystkie sekrety platformy w jednym sejfie.",
      "punkty": [
        "klucz szyfrowania danych, sekret sesji, hasła ról bazy",
        "sekrety generowane skryptem prosto do sejfu, bez wyświetlania",
        "aplikacja czyta je przez tożsamość zarządzaną",
        "dostęp sterowany rolami (RBAC)"
      ],
      "korzysc": "Sekrety poza kodem i poza serwerem, z dziennikiem dostępu; zmiana sekretu bez przebudowy aplikacji."
    },
    "en": {
      "nazwa": "Azure Key Vault",
      "opis": "All application secrets in one vault.",
      "punkty": [
        "the data encryption key, the session secret, database role passwords",
        "secrets generated by a script straight into the vault, never displayed",
        "the application reads them through its managed identity",
        "role-based access control (RBAC)"
      ],
      "korzysc": "Secrets outside the code and the server, with an access log; a secret can change without rebuilding the application."
    }
  },
  {
    "slug": "u06-container-registry",
    "rodzaj": "usluga",
    "wyroznienie": false,
    "pl": {
      "nazwa": "Azure Container Registry",
      "opis": "Prywatny rejestr obrazów aplikacji.",
      "punkty": [
        "obrazy web i backend dla linux/amd64",
        "każde wydanie z własnym tagiem",
        "pobieranie przez tożsamość zarządzaną, bez konta admina"
      ],
      "korzysc": "Obrazy aplikacji w tej samej chmurze i pod tą samą kontrolą dostępu; szybkie, powtarzalne wydania i powrót do poprzedniej wersji."
    },
    "en": {
      "nazwa": "Azure Container Registry",
      "opis": "A private registry for the application images.",
      "punkty": [
        "web and backend images for linux/amd64",
        "every release with its own tag",
        "images pulled through managed identity, with no admin account"
      ],
      "korzysc": "Application images in the same cloud and under the same access control; fast, repeatable releases and easy rollback."
    }
  },
  {
    "slug": "u07-azure-files",
    "rodzaj": "usluga",
    "wyroznienie": false,
    "pl": {
      "nazwa": "Azure Files",
      "opis": "Pliki użytkowników: zrzuty wykresów i załączniki.",
      "punkty": [
        "udział plików na koncie Storage",
        "podpięty do kontenera backendu jako katalog plików",
        "odnośniki do plików podpisane kluczem aplikacji"
      ],
      "korzysc": "Pliki użytkowników bezpieczne niezależnie od kontenerów; aplikację można przebudować albo przenieść bez utraty danych."
    },
    "en": {
      "nazwa": "Azure Files",
      "opis": "User files: chart screenshots and attachments.",
      "punkty": [
        "a file share on a Storage account",
        "mounted in the backend container as the file directory",
        "file links signed with the application key"
      ],
      "korzysc": "User files stay safe independently of the containers; the application can be rebuilt or moved without losing data."
    }
  },
  {
    "slug": "u08-azure-monitor",
    "rodzaj": "usluga",
    "wyroznienie": false,
    "pl": {
      "nazwa": "Azure Monitor: Log Analytics",
      "opis": "Logi aplikacji, bazy i zadań w jednym miejscu.",
      "punkty": [
        "logi kontenerów web, backend i zadania",
        "dzienny limit danych",
        "zapytania KQL do diagnozy"
      ],
      "korzysc": "Jeden widok na działanie całej platformy; szybka diagnoza problemów i kontrolowany koszt logów."
    },
    "en": {
      "nazwa": "Azure Monitor: Log Analytics",
      "opis": "Logs from the application, the database and the jobs in one place.",
      "punkty": [
        "logs from the web, backend and job containers",
        "a daily data cap",
        "KQL queries for diagnosis"
      ],
      "korzysc": "One view of how the whole application runs; fast diagnosis and controlled logging costs."
    }
  },
  {
    "slug": "u09-bicep",
    "rodzaj": "usluga",
    "wyroznienie": false,
    "pl": {
      "nazwa": "Bicep i Azure CLI: infrastruktura jako kod",
      "opis": "Całe środowisko powstaje z kodu, powtarzalnie, w dowolnej subskrypcji.",
      "punkty": [
        "szablon Bicep: dziewięć usług, role i budżet",
        "symulacja what-if przed każdą zmianą",
        "sześć skryptów Azure CLI: infrastruktura, sekrety, obrazy, aplikacja, baza, usunięcie",
        "region, rozmiary i nazwy jako parametry"
      ],
      "korzysc": "Nowe środowisko u kolejnego klienta albo w innym regionie w mniej niż godzinę zamiast dni; każda zmiana widoczna i sprawdzona przed wdrożeniem."
    },
    "en": {
      "nazwa": "Bicep and Azure CLI: infrastructure as code",
      "opis": "The whole environment is created from code, repeatably, in any subscription.",
      "punkty": [
        "a Bicep template: nine services, roles and a budget",
        "a what-if simulation before every change",
        "six Azure CLI scripts: infrastructure, secrets, images, application, database, teardown",
        "region, sizes and names as parameters"
      ],
      "korzysc": "A new environment for another client or in another region in under an hour instead of days; every change visible and checked before deployment."
    }
  },
  {
    "slug": "u10-cost-management",
    "rodzaj": "usluga",
    "wyroznienie": false,
    "pl": {
      "nazwa": "Azure Cost Management: budżet",
      "opis": "Kontrola kosztów środowiska.",
      "punkty": [
        "budżet na grupę zasobów",
        "alerty e-mail przy 50% i 100%",
        "w samej aplikacji dodatkowo dzienny limit kosztów AI"
      ],
      "korzysc": "Koszty pod kontrolą od pierwszego dnia; ostrzeżenie przed przekroczeniem, a nie po fakcie."
    },
    "en": {
      "nazwa": "Azure Cost Management: budget",
      "opis": "Cost control for the environment.",
      "punkty": [
        "a budget for the resource group",
        "email alerts at 50% and 100%",
        "a daily AI spending cap inside the application as well"
      ],
      "korzysc": "Costs under control from day one; a warning before the limit, not after."
    }
  }
];
