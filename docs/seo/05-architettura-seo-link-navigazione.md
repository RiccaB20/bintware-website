Ecco il documento tecnico strutturato in formato .md per l'IDE Antigravity. Questo modulo definisce le regole architetturali rigorose per la generazione di collegamenti ipertestuali e anchor text, assicurando che l'agente AI produca codice nativamente scansionabile dai crawler di Google.

# Documentazione di Sviluppo: Architettura SEO per Link e Navigazione
Questo documento stabilisce gli standard di programmazione per l'implementazione dei link. La corretta strutturazione dei collegamenti ipertestuali è fondamentale, in quanto Google li utilizza come indicatore primario per determinare la pertinenza dei contenuti e per scoprire nuove pagine. L'agente AI deve attenersi rigorosamente a queste direttive.

## 1. Scansionabilità e Anatomia del Link
Affinché i crawler di Google possano estrarre e analizzare i percorsi di navigazione, la struttura del DOM deve rispettare formati standardizzati.
*   **Markup Obbligatorio (`<a>` e `href`):** L'agente deve generare esclusivamente elementi HTML `<a>` (anchor tag) provvisti di un attributo `href` esplicito per consentire la scansione dei link. I crawler non estrarranno in modo affidabile gli URL da elementi `<a>` privi di `href` o da altri tag (come `<span>`) che simulano il comportamento dei link.
*   **Divieto di Pseudo-Routing Client-Side:** È severamente vietato delegare la navigazione principale a eventi di script in linea, come `<a onclick="goto('https://example.com')">`.
*   **Compatibilità JavaScript:** Il codice JavaScript può essere utilizzato per inserire link dinamicamente all'interno della pagina, a condizione che l'output iniettato nel DOM rispetti la sintassi standard `<a href="...">`.
*   **Risoluzione degli URI:** Il valore dell'attributo `href` deve sempre risolversi in un indirizzo web reale e valido (URI) a cui i crawler possano inviare richieste HTTP/HTTPS. Sono vietati formati eseguibili come `href="javascript:goTo('products')"`.

## 2. Posizionamento e Semantica dell'Anchor Text
L'anchor text (il testo visibile del link) comunica informazioni vitali sull'argomento della pagina di destinazione sia agli utenti sia ai motori di ricerca.
*   **Testo tra i Tag:** Il testo descrittivo deve essere posizionato esattamente tra i tag di apertura e chiusura dell'elemento `<a>`. L'agente non deve mai generare testi di link vuoti, come `<a href="..."></a>`.
*   **Fallback dell'attributo Title:** Qualora, per rigidi vincoli di layout, l'elemento `<a>` debba rimanere privo di testo testuale, l'agente deve inserire un attributo `title` descrittivo, che Google utilizzerà come anchor text di riserva.
*   **Immagini come Link:** Quando un elemento grafico `<img>` funge da collegamento ipertestuale, Google utilizza l'attributo `alt` dell'immagine come anchor text. È obbligatorio includere un attributo `alt` descrittivo per ogni immagine cliccabile, evitando tag vuoti come `alt=""` all'interno di un link.

## 3. Scrittura dell'Anchor Text: Ottimizzazione e Anti-Spam
Regole per la generazione programmatica dei testi dei link, ottimizzate per la contestualizzazione semantica.
*   **Specificità e Chiarezza:** L'anchor text deve essere descrittivo, conciso e altamente pertinente alla pagina a cui rimanda. L'agente non deve mai utilizzare testi generici e decontestualizzati come "Fai clic qui" o "Scopri di più".
*   **Concinnitas (Brevità):** Evitare di inglobare intere frasi o paragrafi stranamente lunghi all'interno dell'anchor text. Il testo deve avere senso logico anche se letto in modo isolato dal resto della frase.
*   **Prevenzione Keyword Stuffing:** L'agente deve compilare testi naturali, resistendo all'inserimento forzato di tutte le parole chiave correlate alla pagina di destinazione. L'eccesso di parole chiave viola le norme relative allo spam di Google.
*   **Spaziatura e Contesto:** È vietato concatenare più link adiacenti (l'uno in fila all'altro) senza testo circostante. I link devono essere separati da parole di contesto per permettere l'isolamento semantico di ogni risorsa.

## 4. Architettura dei Link Interni e Qualificatori di Link Esterni
*   **Routing Interno Esplicito:** L'architettura del sito deve prevedere che ogni pagina importante riceva almeno un link in ingresso da un'altra pagina dello stesso dominio. L'agente deve progettare interfacce che consentano riferimenti incrociati dotati di anchor text esplicativi.
*   **Link Esterni per Affidabilità:** L'inclusione di link verso siti esterni è incoraggiata per citare le fonti e stabilire l'affidabilità dei contenuti generati.
*   **Uso mirato di nofollow:** L'attributo `rel="nofollow"` deve essere applicato programmaticamente solo quando non si ritiene attendibile la fonte esterna di destinazione. Non deve essere inserito a tappeto su tutti i link in uscita del sito.
*   **Qualificazione di Link Commerciali (Sponsored):** Qualsiasi link generato in risposta a pagamenti o sponsorizzazioni deve includere obbligatoriamente il valore `sponsored` (o `nofollow`) nell'attributo `rel`.
*   **Protezione User-Generated Content (UGC):** Nelle sezioni in cui gli utenti possono inserire link autonomamente (forum, commenti, Q&A), l'agente deve progettare il sistema affinché aggiunga automaticamente l'attributo `rel="ugc"` o `rel="nofollow"` a tutti i link in uscita, per neutralizzare lo spam.
