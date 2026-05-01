# Principi generali SEO

Linee guida derivate dalla guida ufficiale Google Search Central (Search Starter Guide). Da seguire quando si lavora su contenuti, struttura, tag HTML e media del sito Bintware.com.

## 1. Regole generali e accessibilità del crawler

- **Accessibilità delle risorse:** garantire che Google possa accedere alle stesse risorse del browser di un utente medio (non bloccare CSS e JavaScript).
- **Contenuti localizzati:** se la pagina adatta i contenuti in base alla posizione dell'utente, assicurare che le informazioni di default siano accessibili al crawler (che generalmente scansiona dagli USA).
- **Blocco indicizzazione:** usare `noindex`/`disallow` solo per URL, directory o file esplicitamente privati o da escludere dai risultati di ricerca.
- **Sitemap:** mantenere una sitemap aggiornata con tutti gli URL rilevanti del sito.

## 2. Struttura degli URL e organizzazione del sito

- **URL descrittivi:** includere parole significative negli URL, evitare identificatori casuali.
- **Breadcrumb:** le parti dell'URL possono apparire nei risultati di ricerca come breadcrumb — strutturarle in modo leggibile.
- **Directory tematiche:** raggruppare contenuti simili in cartelle (es. `/blog/`, `/servizi/`) per aiutare Google a comprendere la struttura del sito.
- **Canonicalizzazione:** specificare sempre `<link rel="canonical">` per prevenire contenuti duplicati.
- **Reindirizzamenti:** usare redirect 301 dagli URL non preferenziali verso quello canonico.

## 3. Generazione di contenuti e tag HTML

- **`<title>`:** unico per pagina, chiaro, conciso e descrittivo.
- **Meta descrizione:** breve e unica per ogni pagina, riassume i punti salienti del contenuto.
- **Intestazioni e formattazione:** strutturare il testo con paragrafi e heading leggibili; testo privo di errori ortografici.
- **Anchor text:** i link interni ed esterni devono avere testo descrittivo che comunica chiaramente la destinazione.
- **Link in uscita:** aggiungere `rel="nofollow"` o `rel="ugc"` ai link verso risorse non attendibili o contenuti generati dagli utenti.

## 4. Ottimizzazione degli elementi multimediali

- **Contesto immagini:** posizionare le immagini vicino al testo pertinente per fornire contesto semantico.
- **Attributo `alt`:** ogni `<img>` deve avere un `alt` descrittivo e conciso.
- **Video:** incorporare i video in pagine dedicate con testo pertinente, titolo e descrizione compilati.

## 5. Anti-pattern e falsi miti (regole strict)

- **Vietato `meta keywords`:** non generare mai il tag `<meta name="keywords">` — Google non lo utilizza.
- **Vietato keyword stuffing:** non ripetere eccessivamente le stesse parole chiave nel codice o nel testo.
- **Nessun limite magico di parole:** non ottimizzare inseguendo conteggi minimi/massimi — la lunghezza da sola non è un fattore di ranking.
- **Ordine delle intestazioni:** non forzare riscritture architetturali solo per avere heading in ordine semantico rigoroso — Google non penalizza l'uso fuori ordine.
- **EEAT non è ranking diretto:** non trattare le metriche EEAT come fattore di ranking diretto nella generazione del codice.
