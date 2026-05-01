# Documentazione di Sviluppo: Ottimizzazione SEO per JavaScript e Caricamento Dinamico
Questo documento stabilisce le regole di programmazione che l'agente AI deve rispettare per garantire che Googlebot e il suo servizio di rendering web (WRS) possano scansionare, eseguire il rendering e indicizzare correttamente le Single Page Applications (SPA) e i contenuti caricati dinamicamente.

## 1. Architettura di Routing e Navigazione
*   **API History obbligatoria:** Per implementare il routing lato client nelle applicazioni a pagina singola, il codice deve utilizzare l'API History.
*   **Divieto di frammenti URL:** Non utilizzare mai frammenti di URL (ad esempio `#/products`) per caricare visualizzazioni diverse, in quanto lo schema di scansione AJAX è deprecato e Googlebot non analizza i frammenti per estrarre URL.
*   **Visibilità dei link:** Assicurarsi che i link generati siano sempre elementi HTML `<a>` validi e che includano un attributo `href` puntante a un URL risolvibile.

## 2. Rendering JavaScript e Ciclo di Vita di Googlebot
*   **Nessuna persistenza di stato:** Googlebot (tramite WRS) non mantiene lo stato tra un caricamento di pagina e l'altro.
*   **Storage e Cookie:** I dati di archiviazione locale (local storage), l'archiviazione di sessione e i cookie HTTP vengono cancellati e non persistono tra una sessione di scansione e l'altra.
*   **Autorizzazioni negate in automatico:** Googlebot rifiuta sistematicamente qualsiasi richiesta di autorizzazione dell'utente, come l'accesso a Camera API o posizione.
*   **Fallback per le autorizzazioni:** Il codice deve prevedere percorsi e comportamenti di riserva per consentire l'accesso ai contenuti anche quando le autorizzazioni vengono negate.
*   **Connessioni ESCLUSIVAMENTE HTTP:** Googlebot supporta solo richieste HTTP.
*   **Nessun supporto WebSocket/WebRTC:** Non fare affidamento su WebSocket o WebRTC per il caricamento iniziale dei contenuti; è necessario implementare fallback HTTP per consentire il recupero dei dati da parte del crawler.
*   **Cache Busting / Fingerprinting:** WRS potrebbe utilizzare risorse JS o CSS obsolete memorizzate nella cache.
*   **URL delle risorse versionate:** Inserire un'impronta generata dai contenuti all'interno del nome del file (ad esempio `main.2bb85551.js`) per evitare l'esecuzione di script obsoleti.
*   **Pre-rendering e SSR:** Considerare l'utilizzo del rendering lato server (SSR) o del pre-rendering per ottimizzare la velocità e garantire che i contenuti siano presenti nell'HTML della risposta HTTP iniziale.

## 3. Implementazione del Caricamento Lento (Lazy Loading) e Scorrimento Continuo
*   **Condizione di innesco visivo:** L'implementazione del caricamento lento deve innescarsi automaticamente quando i contenuti diventano visibili nell'area visibile (viewport).
*   **Nessuna dipendenza da eventi utente:** Non vincolare il caricamento dei contenuti ad azioni specifiche dell'utente, come lo scorrimento attivo o i clic, poiché la Ricerca Google non interagisce con la pagina.
*   **Tecnologie consentite per Lazy Loading:** Utilizzare il caricamento lento integrato nel browser (native), l'API `IntersectionObserver` (con polyfill) o librerie JavaScript dedicate.
*   **Esclusione "Above-the-fold":** Non applicare il caricamento lento alle risorse che compaiono nell'area visibile iniziale, in quanto ciò peggiorerebbe la user experience.
*   **Regole per lo Scorrimento Continuo (Infinite Scroll):** Dividere i contenuti in blocchi impaginati, assegnando a ogni blocco un URL univoco e permanente tramite parametri assoluti (es. `?page=12`).
*   **Divieto per URL relativi:** Evitare parametri di ricerca temporali o relativi (es. `?date=yesterday`) che impediscono una corretta indicizzazione.
*   **Aggiornamento dinamico URL:** Quando un nuovo blocco di contenuti entra nel viewport principale a seguito dello scorrimento, il codice deve usare l'API History per aggiornare l'URL visibile nella barra degli indirizzi.

## 4. Gestione Errori e prevenzione dei Soft 404
*   **Gestione degli errori nelle SPA:** Poiché il routing lato client restituisce spesso un codice HTTP 200 per impostazione predefinita, è imperativo gestire manualmente gli errori "Pagina non trovata".
*   **Strategia 1 (Reindirizzamento):** Intercettare la mancanza di contenuti e applicare un reindirizzamento JavaScript (`window.location.href = '/not-found'`) verso una route del server che risponda con un codice HTTP 404.
*   **Strategia 2 (Meta tag Noindex):** Generare e iniettare dinamicamente nel DOM un tag `<meta name="robots" content="noindex">` se la risorsa API interrogata non esiste o restituisce errore.

## 5. Web Components, Dati Strutturati e Meta Tag dinamici
*   **Shadow DOM e Light DOM:** Googlebot unisce il light DOM e lo shadow DOM in fase di rendering.
*   **Utilizzo del tag Slot:** I componenti web devono utilizzare obbligatoriamente il meccanismo dell'elemento `<slot>` per assicurarsi che i contenuti del light DOM vengano proiettati correttamente all'interno dello shadow DOM per l'indicizzazione.
*   **Canonical gestiti via JS:** È consentito usare JavaScript per inserire o modificare i tag `<link rel="canonical">` o i meta tag (come `<title>` o le description).
*   **Divieto di conflitti Canonical:** Se si inietta il Canonical via JS, assicurarsi che non entri in conflitto con eventuali tag Canonical codificati rigidamente nell'HTML, per non confondere il crawler.
*   **Interruzione forzata via HTML:** Se l'HTML originale pre-rendering contiene un meta tag robots impostato su `noindex`, Googlebot potrebbe saltare del tutto l'esecuzione di JavaScript. Pertanto, il JS non può essere usato per "rimuovere" un blocco di indicizzazione hardcoded nell'HTML.
*   **JSON-LD Dinamico:** È buona pratica utilizzare script JavaScript per assemblare, generare e iniettare dati strutturati (JSON-LD) all'interno del DOM.
*   **Gestione Paywall JS:** Non fornire mai i contenuti completi nascosti nel codice (o tramite CSS) per poi mostrarli solo post-verifica. Il codice JavaScript del paywall deve richiedere ed esporre i contenuti dal server esclusivamente dopo aver validato lo stato dell'abbonamento.
