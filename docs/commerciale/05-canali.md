# Canali — Inbound (SEO + blog)

Scelta esplicita del founder: **solo inbound nella prima fase**. Niente outbound a freddo, niente liste LinkedIn, niente cold email, niente fiere o eventi a pagamento. Il canale di acquisizione è uno solo: il sito Bintware.com con il suo blog, ben posizionato sui due cluster verticali.

Il prezzo da pagare per questa scelta è il **tempo**: l'inbound puro non porta lead la prima settimana. Il break-even temporale realistico, per un sito tecnico in italiano su nicchie verticali, è **6-9 mesi** dal primo articolo pubblicato. Va messo in conto.

## Regole tecniche di riferimento

Per qualunque scelta su URL, meta tag, sitemap, struttura HTML, immagini, robots, JSON-LD: vedi `docs/seo/00-index.md` e i file della knowledge base SEO (01–06). Questo documento si occupa SOLO di strategia di contenuto e linking, non di tecnica.

## Architettura dei contenuti — due cluster + un terzo trasversale

### Cluster A — Voicemail / risponditore intelligente per aziende

**Pillar page**: `/voicemail-aziendale` — landing settoriale dedicata, autocontenuta, con USP, listino del sito (setup + canone + consumo a minuto), principio "no interruzione del servizio per superamento soglia", FAQ, CTA discovery call. È l'evergreen più importante del cluster e va trattata come "destinazione" di tutti gli articoli.

**Articoli a supporto** (ordine di priorità di pubblicazione, focus automotive):

1. *"Quanto costano davvero le chiamate perse alla tua azienda? Una formula semplice"* — pagina con calcolatore semplice in pagina, alta intenzione di ricerca, primo punto di contatto generale.
2. *"Voicemail per concessionarie auto: prenotazioni test drive e richieste fuori orario, gestite senza perdere lead"* — primo articolo settoriale automotive, alto valore commerciale.
3. *"Voicemail per officine: come gestire 5 tipi di chiamate quando il meccanico ha le mani sotto al cofano"* — secondo articolo automotive.
4. *"Voicemail per carrozzerie: gestire le chiamate di sinistro senza far attendere il cliente"* — terzo articolo automotive.
5. *"Risponditore tradizionale vs voicemail intelligente: cosa cambia per chi chiama"* — confronto leggibile, non tecnico.
6. *"Funziona col mio centralino? Compatibilità con 3CX, Wildix, NFON, FreePBX"* — articolo tecnico, intercetta long-tail di chi sta cercando.
7. *"GDPR e voicemail: dove finiscono i dati di chi lascia un messaggio"* — articolo che rassicura il consulente IT del cliente.
8. *"Quando una segretaria part-time conviene di più di un sistema automatico (e quando no)"* — articolo onesto, costruisce credibilità.

Long-tail target: "voicemail concessionaria auto", "AI chiamate concessionario", "voicemail intelligente officina meccanica", "voicemail carrozzeria gestione sinistri", "centralino con trascrizione messaggi auto", "segreteria virtuale fuori orario concessionaria", "AI per chiamate perse aziende".

### Cluster B — Educazione / scuola

**Pillar page**: `/scuola` o `/ai-per-la-scuola` — landing dedicata, casi d'uso (osservazioni BES, verbali, comunicazioni famiglie), conformità GDPR e AI Act, CTA discovery call.

**Articoli a supporto**:

1. *"10 minuti di AI valgono mezz'ora di scrittura"* — già pianificato sul sito (vedi blog index attuale). Va completato come primo pilastro del cluster.
2. *"GDPR, AI e dati dei minori: cosa serve a una scuola per essere a norma"* — articolo che rassicura il referente privacy.
3. *"AI Act e scuole: cosa è 'alto rischio' e cosa no, una lettura per chi non è giurista"* — costruisce autorevolezza.
4. *"Verbali di consigli di classe: come dimezzare il tempo di redazione senza perdere precisione"* — caso d'uso operativo.
5. *"Report di osservazione su minori BES/DSA: standardizzare senza appiattire"* — caso d'uso specialistico.
6. *"Cosa NON deve fare l'AI a scuola (e cosa invece sì)"* — articolo etico-pedagogico, distingue Bintware da chi vende AI come sostituto.
7. *"Onboarding di un nuovo educatore: sintetizzare 3 anni di fascicoli in 20 minuti"* — caso d'uso meno ovvio, alta differenziazione.

Long-tail target: "AI per scuola paritaria", "verbali consiglio di classe automatico", "GDPR scuola AI", "report BES con AI", "trascrizione riunioni scuola".

### Cluster C — Tecnico-architetturale (trasversale, costruisce credibilità)

Già impostato sul sito con il primo articolo "Come abbiamo costruito un interprete simultaneo tra SIP e Vertex AI" (15 apr 2026). Articoli previsti che continuano la linea:

1. *"AlloyDB e ricerca vettoriale: quando ne vale la pena"* — già in pipeline secondo blog index.
2. *"Vertex AI vs OpenAI Realtime: la nostra scelta e perché"* — già citato nel primo articolo, va espanso.
3. *"Latenza in conversazioni AI: 50ms vs 200ms, perché conta davvero"* — articolo da developer per developer.
4. *"Multi-tenant su GCP: errori che abbiamo fatto e come li abbiamo risolti"* — articolo trasparenza/lessons learned.

Questo cluster non porta clienti diretti, ma:
- Costruisce **autorevolezza** verso l'IT del cliente (che è influencer in trattativa).
- Genera **backlink organici** da siti tech/dev italiani e internazionali.
- Differenzia Bintware da agenzie generaliste.

Frequenza target: **1 articolo tecnico ogni 6-8 settimane**. Più di così è insostenibile per due founder operativi.

## Linking interno

- Ogni articolo del cluster A linka alla pillar `/voicemail-aziendale` con anchor descrittivo (es. "voicemail intelligente per concessionarie", "voicemail aziendale per officine", non "clicca qui"). Vedi `docs/seo/05-architettura-seo-link-navigazione.md`.
- Ogni articolo del cluster B linka alla pillar `/scuola`.
- Tra articoli dello stesso cluster: 2-3 link incrociati per articolo, con anchor che riprendono la query target.
- Il cluster C linka a entrambe le pillar quando è naturale (es. articolo su latenza che cita la voicemail come caso d'uso reale).
- Mai link incrociati forzati o anchor identici ripetuti — è keyword stuffing nascosto e Google lo penalizza.

## Frequenza e calendario sostenibili

Realismo per due founder che fanno anche delivery tecnica:

- **2 articoli/mese** è la cadenza minima che dà segnale a Google e mantiene il blog vivo.
- Distribuzione tipica per mese: 1 articolo cluster A (voicemail) + 1 articolo cluster B (scuola), alternando con 1 articolo cluster C ogni 6-8 settimane al posto di uno dei verticali.
- Pubblicazione concentrata il **martedì o mercoledì mattina** (orario migliore per traffico B2B italiano).
- Calendario editoriale tenuto in NotebookLM o foglio Google, allineato a stagionalità (es. articoli scuola in agosto-ottobre quando c'è l'avvio anno; articoli officina/concessionario a febbraio-marzo per il pre-stagione).

Se la cadenza non è sostenibile, **meglio 1 articolo/mese fatto bene che 4 mediocri**. La SEO premia la qualità, non il volume per il volume.

## Distribuzione (oltre alla pubblicazione sul sito)

Anche restando "inbound only", un articolo non si auto-distribuisce. Azioni gratuite e non invasive:

- **Riassunto su LinkedIn personale** dei due founder (non pagina aziendale, almeno all'inizio: i profili personali hanno reach migliore). Un post per articolo, con link al pezzo intero. Tono divulgativo, non promozionale.
- **Newsletter mensile** quando si avranno almeno 50 iscritti: digest dei 2 articoli del mese. Iscrizione opzionale dalla pillar page e dalla home, NO popup invadenti.
- **Risposte a thread** in community italiane di settore (es. gruppi Telegram di insegnanti, forum ambientazione officine, sottogruppi LinkedIn) quando una domanda è genuinamente attinente — citando il proprio articolo come approfondimento, mai come risposta. Va fatto con misura, è facile sembrare spam.

Quello che NON si fa per scelta:
- Niente Google Ads / Meta Ads nei primi 6 mesi: il primo lavoro è capire quali contenuti convertono organicamente, e le ads su query non testate sprecano budget.
- Niente PR a pagamento, niente comunicati stampa.
- Niente backlink building manuale (acquisto link, scambi forzati): Google penalizza, e per nicchie tecniche il rischio non vale la pena.

## Misurazione — minimo indispensabile

Strumenti gratuiti, niente stack analytics complesso:

- **Google Search Console**: la fonte di verità su impressions, CTR, posizione media per query. Va controllata 1 volta a settimana.
- **GA4** (o alternativa privacy-first come Plausible/Umami se preferito per allineamento al posizionamento GDPR): traffico per pagina, sorgente, conversioni.
- **Conversione = booking discovery call** (click sul link Google Calendar dalla pillar page o da articolo). Da tracciare come evento GA4. È l'unica metrica di conversione che conta in questa fase.

Metriche da osservare ogni mese, non ogni giorno:
- Articoli più visitati (per capire dove raddoppiare).
- Query in posizione 5-15 in Search Console (ranghi vicini ma non in top: ottimi candidati per ottimizzazione mirata).
- Conversion rate da landing pillar → discovery call.

Se a 6 mesi il sito non ha generato almeno **5 discovery call qualificate** dal canale organico, va rivista la strategia (probabilmente i contenuti non sono targetizzati abbastanza, o le pillar page non convertono). Non significa cambiare strategia, significa rifinirla.
