# Documentazione di Sviluppo: Ottimizzazione Architetturale SEO per Sviluppatori

## 1. Accessibilità, DOM e Rendering JavaScript
Linee guida rigorose su come l'agente deve implementare il rendering per garantire che Googlebot elabori correttamente la pagina.
*   **Sincronia visiva:** Il codice deve garantire che Googlebot "veda" esattamente ciò che vede l'utente. L'uso di funzionalità JavaScript non supportate dal motore di ricerca può nascondere risorse fondamentali (come le immagini), impedendone l'indicizzazione.
*   **Single Page Applications (SPA):** Per le applicazioni JavaScript a pagina singola, l'agente deve assicurarsi che ogni schermata o parte specifica di contenuto sia raggiungibile tramite un URL univoco.
*   **Proprietà CSS content:** I testi fondamentali devono essere inseriti direttamente nel DOM. I contenuti generati dinamicamente tramite la proprietà CSS content non fanno parte del DOM e vengono ignorati dalla Ricerca Google; pertanto, devono essere limitati a un uso puramente decorativo.

## 2. Architettura di Navigazione e Link
Standard di scrittura per il routing interno e i collegamenti ipertestuali.
*   **Indipendenza degli URL:** Il crawler analizza i link passando da URL a URL. L'agente deve progettare ogni pagina e URL come se fosse il primo e unico punto d'ingresso visto dal bot.
*   **Markup dei Link:** Utilizzare esclusivamente elementi HTML `<a>` standard affinché Google possa sottoporli a scansione. Ogni link deve contenere del testo descrittivo oppure, in caso di link su immagini, un attributo `alt` pertinente alla pagina di destinazione.
*   **Sitemap per la Scansione:** Il sistema deve prevedere la generazione di una Sitemap XML completa per comunicare a Googlebot informazioni su pagine, video e file, permettendo una scansione più intelligente.

## 3. HTML Semantico e Contesto Multimediale
Regole per la generazione del markup e l'accessibilità semantica.
*   **Preferenza per il markup nativo:** Google indicizza HTML, PDF, immagini e video. L'agente non deve affidare contenuti a plug-in obsoleti e deve essere consapevole che i contenuti visualizzati in un elemento `<canvas>` non vengono indicizzati. Utilizzare sempre HTML semantico.
*   **Contestualizzazione testuale dei Media:** Googlebot può elaborare soltanto i contenuti visibili sotto forma di testo. Pagine ricche di immagini o video (es. e-commerce) devono tassativamente includere spiegazioni testuali come contesto per ogni elemento visivo.
*   **Meta Tag Fondamentali:** L'agente deve generare codice che imponga, per ogni pagina, la presenza di un tag `<title>` descrittivo univoco e di una meta descrizione altrettanto univoca.

## 4. Controllo Scansione, Indicizzazione e Versioning
Direttive di sicurezza e segregazione dei percorsi web.
*   **Gestione Versioni Multiple:** Il codice deve dichiarare esplicitamente le correlazioni per raggruppare URL duplicati, indicare le versioni localizzate del sito e rendere rilevabili eventuali versioni AMP.
*   **Uso corretto del robots.txt:** Il file `robots.txt` deve essere scritto esclusivamente per impedire la scansione (crawling) di specifiche risorse. Non deve essere mai utilizzato come meccanismo per escludere una pagina dai risultati di ricerca.
*   **Blocco dell'indicizzazione:** Per impedire l'indicizzazione di una pagina pur consentendone la scansione, l'agente deve inserire la regola `noindex` nei meta tag HTML.
*   **Protezione contenuti privati:** Per nascondere completamente i contenuti alla Ricerca, l'agente deve implementare protezioni tramite password o login.
*   **Prevenzione conflitti:** L'agente deve prestare attenzione a non combinare istruzioni di scansione (`robots.txt`) con regole di indicizzazione (`noindex`) in modi che possano entrare in conflitto.

## 5. Dati Strutturati per Risultati Avanzati
*   **Implementazione JSON-LD:** L'agente deve includere dati strutturati validi per fornire indizi espliciti sul significato dei contenuti. Questo abilita i risultati multimediali e le funzionalità interattive avanzate nella Ricerca Google.
