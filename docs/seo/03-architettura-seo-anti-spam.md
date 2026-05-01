Ecco la documentazione tecnica unificata, aggiornata e strutturata in formato .md. Questo file integra le direttive base, le linee guida di rendering per sviluppatori e le rigide norme anti-spam, fornendo all'agente AI in Google Antigravity IDE un framework di riferimento completo e inviolabile per la generazione di codice SEO-compliant.

# Documentazione di Sviluppo: Architettura SEO e Conformità Anti-Spam
Questa documentazione definisce gli standard architetturali, semantici e di sicurezza per la generazione di codice sorgente. L'agente deve applicare queste direttive rigorosamente per garantire l'indicizzazione ottimale e prevenire penalizzazioni o azioni manuali dovute a violazioni delle norme sulla qualità della Ricerca Google.

## 1. Accessibilità, Rendering e Architettura DOM
*   **Sincronia visiva e Cloaking:** Il codice deve garantire che Googlebot elabori esattamente ciò che vede l'utente medio. L'agente non deve mai generare codice (tramite JavaScript o alterazioni del server) che presenti ai motori di ricerca contenuti diversi rispetto a quelli mostrati ai visitatori umani per manipolare il ranking. Ad esempio, è severamente vietato inserire testo o parole chiave nel DOM che si attivano solo quando lo user agent rilevato è un motore di ricerca.
*   **Gestione Paywall:** L'utilizzo di meccanismi di limitazione dei contenuti non è considerato cloaking a condizione che Google possa accedere a tutti i contenuti protetti e che il codice implementi le direttive del Modello di accesso flessibile.
*   **Single Page Applications (SPA):** Per le app JavaScript, ogni vista, schermata o frammento significativo di contenuto deve essere associato a un URL univoco e instradabile.
*   **Proprietà CSS content:** I testi informativi devono essere scritti nell'HTML semantico. I contenuti generati dinamicamente tramite la proprietà CSS content non fanno parte del DOM e vengono ignorati; limitarli a un uso esclusivamente decorativo.

## 2. Navigazione, Link e Routing
*   **Markup dei Link:** Utilizzare esclusivamente elementi `<a>` per i link interni ed esterni. I link devono avere un anchor text descrittivo.
*   **Gestione Link in Uscita (Link Spam):** L'agente non deve generare schemi di link automatizzati, link nascosti in widget, o link ottimizzati nei footer distribuiti su vari siti per manipolare il ranking. Tutti i link a risorse esterne di natura commerciale, di affiliazione, sponsorizzata o non pienamente attendibile devono includere esplicitamente l'attributo `rel="nofollow"` o `rel="sponsored"` all'interno del tag `<a>`.
*   **Reindirizzamenti Ingannevoli:** È vietato generare comandi di reindirizzamento fraudolenti (es. mostrare una pagina ai motori di ricerca e reindirizzare gli utenti altrove, oppure deviare gli utenti mobile verso domini contenenti spam). Usare i reindirizzamenti 301 in modo lecito, ad esempio per raggruppare pagine o trasferire risorse.
*   **Abuso di Doorway:** Non generare programmaticamente insiemi di pagine o domini con lievi variazioni (es. basate su località) che fungono solo da "porte d'ingresso" per incanalare gli utenti verso un'unica destinazione.

## 3. Generazione di Contenuti e Testo
*   **Testo e Link Nascosti:** Non utilizzare tecniche CSS per nascondere testo ai visitatori umani (es. testo bianco su sfondo bianco, testo posizionato fuori dallo schermo, font size o opacità a 0).
*   **Interfacce Dinamiche Legittime:** È pienamente consentito l'uso di CSS/JS per nascondere e mostrare contenuti per migliorare la UX, come: contenuti a schede o ad accordion, slideshow e descrizioni comando (tooltip). Il testo nascosto per gli screen reader è altresì consentito e incoraggiato.
*   **Keyword Stuffing:** Evitare l'inserimento forzato e ripetitivo di parole chiave, elenchi di numeri di telefono privi di contesto o blocchi di testo contenenti liste di città/regioni invisibili o innaturali per l'utente.
*   **Abuso di Contenuti su Larga Scala e Scraping:** Non generare architetture progettate per lo scraping di feed o contenuti da siti terzi senza apportare un reale valore aggiunto. Questo include l'aggregazione automatizzata e l'offuscamento tramite sinonimi.

## 4. Sicurezza, User-Generated Content (UGC) e Reputazione
*   **Protezione da Iniezioni e Hacking:** Il codice generato deve essere sicuro contro iniezioni di codice (es. JavaScript dannoso in iframe), iniezioni di pagine e inserimento non autorizzato di testo/link.
*   **Gestione dello Spam Generato dagli Utenti (UGC):** Se si progettano aree pubbliche (forum, commenti, upload di file), l'agente deve implementare protezioni (es. attributi `nofollow` automatici) per prevenire la proliferazione di account spam, commenti abusivi e file dannosi.
*   **Abuso della Reputazione del Sito:** Non progettare architetture che integrano sezioni sponsorizzate o contenuti di terze parti (es. recensioni di prestiti su un sito didattico, casinò su siti medici) al solo scopo di sfruttare gli indicatori di ranking del dominio ospitante.
*   **Pratiche Dannose e Funzionalità Ingannevoli:** Non generare mai script che compromettono la sicurezza dell'utente (malware), che modificano le impostazioni del browser, o che dirottano la cronologia (es. compromissione del pulsante "Indietro" per impedire l'uscita dal sito). Non creare componenti di UI fittizi, come finti generatori o timer che reindirizzano ad annunci anziché fornire il servizio promesso.
