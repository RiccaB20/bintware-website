# Documentazione di Sviluppo: Architettura, Generazione e Gestione delle Sitemap
Questo documento stabilisce gli standard tecnici per la creazione programmatica di Sitemap e file Indice Sitemap. L'agente AI deve attenersi a queste regole per garantire ai motori di ricerca una scansione ottimale degli URL, inclusi i file multimediali complessi.

## 1. Principi Fondamentali e Casi d'Uso
*   **Definizione:** Una Sitemap è un file che fornisce informazioni su pagine, video e file del sito, comunicando ai motori di ricerca le correlazioni tra i vari elementi per una scansione più efficiente.
*   **Necessità:** L'implementazione è strettamente necessaria per siti di grandi dimensioni in cui è probabile che i crawler non rilevino pagine nuove, per siti nuovi con pochi backlink o per portali con ingenti volumi di contenuti rich media e notizie.
*   **Quando è superflua:** La generazione della Sitemap potrebbe risultare superflua per siti di dimensioni contenute (massimo 500 pagine indicizzabili) e siti con un'eccellente struttura di link interni.

## 2. Formati Supportati e Vincoli Strutturali
*   **Limiti:** Il limite assoluto per qualsiasi Sitemap è di 50 MB per file non compresso, oppure un massimo di 50.000 URL per singolo documento.
*   **Codifica:** Il file generato deve obbligatoriamente utilizzare la codifica UTF-8.
*   **URL Assoluti:** È tassativo l'utilizzo di URL completi e assoluti (es. `https://www.example.com/mypage.html`), evitando riferimenti relativi all'interno della Sitemap.
*   **URL Canonici:** Il generatore deve includere esclusivamente gli URL canonici che si desidera indicizzare e visualizzare nei risultati di ricerca di Google.
*   **Formato XML:** Il formato XML è il più versatile ed estensibile per la gestione aggiuntiva di immagini, video, notizie e versioni localizzate delle pagine.
*   **Sitemap Testuali (.txt):** Le Sitemap testuali sono la forma più basilare, ma possono elencare solamente un URL per riga e supportano solo pagine HTML standard indicizzabili.
*   **RSS/Atom:** È possibile fornire sitemap tramite feed RSS o Atom 1.0, sebbene forniscano generalmente informazioni esclusive sugli URL aggiornati di recente.

## 3. Direttive Specifiche per il Formato XML
*   **Escape corretto:** Come in tutti i documenti XML validi, tutti i valori dei tag devono necessariamente contenere i codici di escape corretti.
*   **Tag inefficaci:** I tag `<priority>` e `<changefreq>` vengono esplicitamente ignorati dai sistemi di Google, pertanto la loro inclusione a fini di ranking è inefficace.
*   **Tag <lastmod>:** Il tag `<lastmod>` viene elaborato da Google esclusivamente se il valore risulta accurato e riflette in modo coerente un aggiornamento significativo ai contenuti principali della pagina o ai dati strutturati.

## 4. Architettura delle Sitemap per Immagini
Le Sitemap per immagini sono fondamentali per comunicare la presenza di file grafici che altrimenti i crawler non troverebbero, ad esempio immagini caricate in modo asincrono tramite JavaScript.
*   **Strategia:** È possibile generare una Sitemap per immagini dedicata oppure integrare i tag specifici all'interno della Sitemap XML generale del sito.
*   **Spazio dei Nomi:** L'intestazione del file XML deve includere lo spazio dei nomi corretto: `xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"`.
*   **Markup Obbligatorio:** L'inclusione di un'immagine richiede tassativamente l'uso del tag contenitore `<image:image>` e del tag figlio `<image:loc>` contenente l'URL esatto della risorsa visiva.
*   **Limiti immagini:** Un singolo tag padre `<url>` può ospitare programmaticamente fino a un massimo di 1000 tag `<image:image>`.
*   **Domini esterni / CDN:** L'URL dichiarato in `<image:loc>` può puntare a un dominio esterno o a una rete CDN, a patto che il sito di hosting principale e il dominio della CDN siano entrambi verificati nella Search Console.
*   **Tag ritirati:** I tag `<image:caption>`, `<image:geo_location>`, `<image:title>` e `<image:license>` sono stati ufficialmente ritirati e non devono essere generati.

## 5. Implementazione dei File Indice Sitemap
I file indice Sitemap devono essere generati quando si supera il limite di dimensioni previsto, imponendo la suddivisione logica in più file XML.
*   **Limite URL Indice:** Ogni file indice Sitemap generato può contenere un massimo rigoroso di 50.000 tag `<loc>`.
*   **Posizionamento:** Tutte le Sitemap referenziate all'interno del file indice devono risiedere nella medesima directory in cui è ospitato l'indice, oppure in una sottodirectory gerarchicamente inferiore.
*   **Struttura Indice:** La struttura del file indice richiede obbligatoriamente l'uso del tag radice `<sitemapindex>`, del nodo contenitore `<sitemap>` e del tag `<loc>` per definire il percorso della Sitemap secondaria.
*   **Data Indice:** L'inserimento facoltativo del tag `<lastmod>` per una Sitemap secondaria deve sempre rispettare la sintassi del formato W3C Datetime.

## 6. Policy di Pubblicazione e Invio
*   **Posizione ottimale:** Si raccomanda di posizionare i file Sitemap a livello di root del sito web, poiché la direttiva copre unicamente i discendenti della directory genitore in cui il file è pubblicato.
*   **Robots.txt:** L'agente deve inserire il percorso esatto del file nel documento server tramite la direttiva `Sitemap: https://example.com/my_sitemap.xml` da posizionare in qualsiasi punto del file `robots.txt`.
*   **Modalità d'invio:** L'invio può essere automatizzato tramite le API di Search Console o, in presenza di feed RSS/Atom, sfruttando i protocolli WebSub per trasmettere ai motori di ricerca le repentine modifiche.
*   **Sitemap Multi-Dominio:** Per gestire architetture multi-dominio, è possibile generare un unico file Sitemap (o file Indice) contenente gli URL di vari siti, a condizione di aver verificato preventivamente tutte le proprietà web associate all'interno di Google Search Console.
