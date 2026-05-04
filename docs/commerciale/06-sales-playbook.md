# Sales Playbook — Discovery, obiezioni, KPI

Manuale operativo per gestire le pochissime call qualificate che arriveranno nei primi mesi. Il punto non è "vendere", il punto è **non bruciare le opportunità**: una discovery condotta male è un'occasione persa che non ritorna.

Lo script è uno solo. Si adatta in due rami in base al settore (voicemail / educazione) dopo i primi 5 minuti di apertura.

## Discovery call — struttura 30 minuti

### Apertura — 3 minuti

Obiettivo: rompere il ghiaccio, allineare le aspettative, dare il controllo della call.

- "Grazie per il tempo. Per inquadrare bene il tempo che abbiamo: vorrei dedicare 5-10 minuti a capire il vostro contesto e cosa vi ha portato a contattarci, poi 15 minuti a capire se quello che facciamo può davvero esservi utile, e gli ultimi 5 a definire il prossimo passo. Va bene così?"
- Brevissima (max 60 secondi) presentazione di Bintware: cosa fate in una frase, dove siete (Italia, GCP `europe-west8`), quanti siete (due founder), perché chiamano voi.
- **Mai** iniziare con presentazione di 5 minuti del prodotto. Va fatta dopo aver capito il pain.

### Esplorazione del contesto — 10 minuti

Obiettivo: capire chi è, cosa fa, cosa lo affligge. Si parla il **70% lui, 30% tu**.

Domande aperte iniziali (sempre):
- "Raccontami in due parole di cosa vi occupate."
- "Cosa vi ha portato a cercare una soluzione tipo la nostra in questo momento?"
- "Cosa stavate facendo finora rispetto a questo problema?"
- "Cosa avete provato che non ha funzionato?"

Ramo **voicemail** (se contesto = aziende, chiamate, telefonate perse):
- "Quante chiamate ricevete in media al giorno?"
- "Quante stimate che vadano perse, ad oggi? Avete un numero o solo una sensazione?"
- "Chi risponde al telefono? Quante persone? Quanto tempo dedicano?"
- "Cosa succede fuori orario? Dopo le 18, weekend, festivi?"
- "Quando un cliente chiama e non risponde nessuno, cosa fate / cosa fa lui?"
- "Avete mai contato quanti clienti perdete perché non avete risposto?"

Domande aggiuntive per indirizzare il **piano (A o B)**, da fare dopo le precedenti — vedi criteri completi in `02-icp-voicemail.md`:

- "Avete picchi di chiamate concentrati o un flusso più costante? Se sì, in quali momenti?" → picchi forti + non gestibili = segnale Piano B.
- "Quando un cliente lascia un messaggio, riuscite tipicamente a richiamarlo entro 1-2 ore o serve molto più tempo?" → callback rapido funziona = Piano A può bastare; callback lento = Piano B aiuta.
- "I vostri clienti che chiamano si aspettano una risposta immediata (es. urgenze, conferme appuntamenti)? O accettano un richiamo nel giro di un paio d'ore?" → risposta immediata necessaria = Piano B.
- "Vi sembrerebbe strano se i vostri clienti, chiamando, sentissero una voce automatica che chiede di cosa hanno bisogno e prende l'appuntamento? O preferireste che lasciassero un messaggio classico, con voi che vedete il riassunto in tempo reale e richiamate?" → la risposta a questa è il filtro culturale più affidabile tra i due piani.

Ramo **educazione** (se contesto = scuola, cooperativa, educatori):
- "Quanti operatori / insegnanti coinvolti nel processo che vorreste migliorare?"
- "Oggi quanto tempo dedicano a [reportistica / verbali / osservazioni]?"
- "Chi controlla / firma / certifica quei documenti?"
- "Avete mai avuto problemi di documentazione in passato (ispezioni, segnalazioni, errori)?"
- "Come è gestita oggi la privacy dei dati che entrano nei report? Avete un DPO?"
- "Avete budget identificato o state esplorando cosa è possibile?"

### Quantificazione del pain — 5 minuti

Obiettivo: trasformare il pain in numero. Se il cliente non sa quantificare, **lo aiuti tu** con range plausibili.

Voicemail:
- "Quindi, se ho capito bene: 80 chiamate al giorno, stimi 10-15 perse, valore medio cliente acquisito 200€, tasso conversione chiamata→cliente 30%. Mi sto attenendo ai tuoi numeri o sto esagerando da qualche parte?"
- "Sono circa 600€/giorno di mancato fatturato, 12.000€/mese se i tuoi numeri sono giusti. Ti torna come ordine di grandezza?"

Educazione:
- "Quindi 8 educatori × 4 ore/settimana di reportistica × 50 settimane × costo orario 25€ = 40.000€/anno. Possiamo dire che è il costo nascosto della burocrazia di documentazione?"

Questa fase è **cruciale**: senza un numero condiviso, la proposta dopo non avrà appiglio.

### Verifica fit — 5 minuti

Obiettivo: capire se vale la pena fare proposta. Domande filtro:

- "Decisione: chi è coinvolto nella scelta oltre a te?"
- "Tempi: quando vorreste avere qualcosa in produzione?"
- "Budget: avete un'idea di cosa siete disposti a investire? Oppure preferite che sia io a darti un range e vediamo se è fattibile?"
- "Cosa vi farebbe dire 'no' a una proposta come la nostra?"

Se le risposte sono evasive su tutti e tre i punti (decisione, tempi, budget), il lead non è pronto: non scartare, ma rimandare a 2-3 mesi con un follow-up via email + invio articoli del blog.

### Next step — 7 minuti

Obiettivo: chiudere con un'azione concreta, mai con "ti mando una mail e vediamo".

Opzione A — **Lead caldo, fit chiaro, voicemail**:
- "Ti faccio arrivare entro 48h una proposta scritta basata sui numeri di oggi, con **entrambi i piani** affiancati (analisi e realtime), una raccomandazione esplicita su quale partire dato quello che mi hai detto, e una stima di ROI a 12 mesi per ognuno. Possiamo fissare ora una call di 30 minuti tra 7 giorni per discuterla insieme?"
- Fissare data e ora subito sul calendario condiviso, non rimandare.
- **Mai mandare la proposta con un solo piano** se i numeri non lo giustificano in modo netto. La trasparenza preventiva sui due livelli è il principio del modello commerciale (vedi `01-strategia-due-ganci.md`).

Opzione B — **Lead caldo, fit chiaro, educazione**:
- "Vista la sensibilità del contesto, ti propongo un Architecture Review da remoto di 2 ore, da fissare nelle prossime 2-3 settimane, con te e il referente privacy. Ti restituisco un documento di valutazione. Costo: gratuito se vi muovete entro 30 giorni a una proposta o a un MVP, altrimenti €X. Ti suona equo?"

Opzione C — **Lead tiepido o non pronto**:
- "Mi sembra che il momento giusto non sia ora. Ti propongo questo: ti mando i 2-3 articoli del nostro blog più rilevanti per il tuo caso, ci risentiamo tra 8-10 settimane, vediamo se è cambiato qualcosa. Va bene?"
- Mai forzare. Un lead tiepido bruciato non ritorna.

## Obiezioni tipiche e risposte

### "Perché non usiamo ChatGPT, è gratis?"

Risposta:
- "ChatGPT è uno strumento generale, ottimo per lavorare al PC. Quello che facciamo noi è collegare l'AI al telefono, in tempo reale, con la voce, e farla integrare con sistemi aziendali. Sono cose diverse, non in competizione."
- Per scuola, aggiungere: "Inoltre i dati delle vostre conversazioni o dei vostri report finiscono sui server OpenAI fuori dall'Europa. Per dati di minori questo è un problema serio sotto GDPR. Noi teniamo tutto su Google Cloud Milano, dati che non escono dall'UE."

### "I dati dei nostri clienti / studenti / pazienti non possono uscire dall'azienda."

Risposta:
- "Capisco perfettamente. La nostra infrastruttura è su Google Cloud `europe-west8`, datacenter di Milano. I dati non escono dall'UE per architettura, non per policy. Posso allegarti la dichiarazione tecnica nella proposta scritta. Vuoi che ti mandi anche il modello DPA che firmiamo coi clienti?"
- Mai dire "puoi tenere tutto on-premise" se non è vero. Se è un blocker reale, è meglio un no franco che un sì impossibile.

### "Costa troppo / non abbiamo budget."

Risposta voicemail:
- "Capisco. Prima di tutto: sono io che ti devo dire bene cosa abbiamo, perché non abbiamo un solo prezzo, ne abbiamo due. Hai detto che perdete circa 12.000€/mese di fatturato in chiamate non gestite, cioè 144.000€ all'anno. Il setup e il canone sono uguali per tutti e due i piani: €1.500 una tantum, €250 al mese. Quello che cambia è cosa fa il sistema. Nel piano analisi, il chiamante lascia un messaggio come a una segreteria normale, l'AI lo trascrive e lo struttura, voi vi vedete arrivare un ticket pulito col motivo della chiamata e il numero da richiamare. Tutto incluso nel canone, fino a circa mille messaggi al mese — niente costi a consumo, niente sorprese. Nel piano realtime, in più, l'AI risponde dal primo squillo, dialoga col chiamante e conferma appuntamenti: qui paghi €0,15-0,20 al minuto di conversazione effettiva, ma riduci drasticamente le chiamate abbandonate. Quale dei due ha più senso provare prima dipende dai vostri picchi: se ci sono molte chiamate concentrate che oggi vanno perse perché nessuno risponde, il realtime ha più ROI; se invece il problema è ricostruire chi ha chiamato senza dover ascoltare 40 messaggi vocali a fine giornata, il piano analisi vi basta. Importante: in entrambi i casi il servizio non si spegne se sfori una soglia. Imposti il tuo limite, ricevi avvisi, decidi tu. Niente sorprese."

In pratica: l'obiezione prezzo è anche l'occasione per **mostrare al cliente che stiamo applicando la trasparenza dei due piani**. Se rispondi solo con i numeri del Piano B, hai perso l'occasione di proporre il Piano A — e il cliente non saprà mai che esisteva.

Risposta educazione:
- "Posso chiederti su quale ordine di grandezza vi muovete? A volte la nostra proposta esce di scala perché immaginiamo enterprise e voi siete piccoli, e in quel caso possiamo fare un MVP più contenuto. Altre volte è un problema di priorità di spesa. Se mi dai un riferimento posso dire onestamente se ha senso o no andare avanti."

### "Non siamo ancora pronti per l'AI."

Risposta:
- "Capita spesso, e onestamente è una cosa sana da dire. Posso girarti la domanda: cosa vi farebbe sentire pronti? È una questione di cultura interna, di formazione, di prove di altri prima di voi, di normativa? Se mi dici cos'è, vediamo se possiamo starci dentro o se è effettivamente meglio aspettare."
- Specifico voicemail, dopo la prima risposta: "Per inciso: se il blocco è il fatto che 'i miei clienti non vogliono parlare con un robot', abbiamo un piano in cui questo non succede. Si chiama piano analisi: dal lato del chiamante è una segreteria normalissima — sente la voce vostra (o quella che decidiamo insieme), lascia il messaggio, riattacca. L'AI lavora dietro: trascrive il messaggio, lo struttura, lo manda a chi deve richiamare. Per i vostri clienti non cambia niente, per voi cambia molto. Vuoi che ne parliamo?"

### "Vogliamo aspettare di vedere come va con altri."

Risposta:
- "Comprensibile. Posso proporti due cose. Primo: ti mando il nostro blog tecnico così vedi come ragioniamo (link). Secondo: rimaniamo in contatto, ti scrivo io tra 3 mesi quando avremo qualche caso pubblicabile da raccontarti. Va bene?"
- Non insistere. Salva il lead nella pipeline come "warm" e fai follow-up reale dopo 3 mesi.

### "Vorrei sentire altri preventivi prima di decidere."

Risposta:
- "Giusto. Per aiutarti a fare un confronto buono, ti suggerisco 3 domande da fare a chiunque ti dia un preventivo: 1) dove sono fisicamente i server e che data residency offrite per il GDPR; 2) chi è il responsabile tecnico del progetto, cosa ha fatto prima e quanti progetti simili ha consegnato; 3) cosa succede se a 6 mesi non funziona come ci si aspettava, c'è una clausola di uscita. Se torni con queste tre risposte da chi confronti con noi, ti dico io chi ti sta dando un preventivo serio e chi no."
- Trasforma il confronto in opportunità di credibilità.

## Proposta scritta — struttura standard

Massimo 3-5 pagine. Mai allegati infiniti.

1. **Una pagina**: il pain del cliente nei suoi termini (le sue parole, ripresi dalla discovery), tradotto in numeri.
2. **Una pagina**: cosa proponiamo, in italiano semplice. Niente acronimi tecnici se il decisore è non-IT. Per il gancio voicemail: presentare **entrambi i piani** (analisi e realtime), descritti dal lato del cliente, con focus su "cosa cambia per chi chiama" e "cosa cambia per voi che ricevete".
3. **Una pagina**: prezzo, cosa è incluso, cosa è escluso. Formato tabellare. Per voicemail: **tabella confronto a due colonne** (Piano A | Piano B), stessi parametri (setup, canone, modello consumo, esempio costo annuo), niente sorprese. Sotto la tabella, **una raccomandazione esplicita scritta** ("Dato i numeri che ci hai dato, ti consigliamo di partire dal piano [A/B] perché…"). La scelta finale resta al cliente, ma la guida è chiara.
4. **Mezza pagina**: tempi (kickoff entro X, MVP entro Y, production entro Z) e responsabilità reciproche.
5. **Mezza pagina**: cosa serve da loro per partire (un file, un account, una persona referente). Lista di 3-5 punti operativi.
6. **In fondo**: validità della proposta (es. 30 giorni), riferimento DPA, link al sito per dettagli tecnici, firma.

## Cadenza follow-up post-proposta

- **T+24h dall'invio proposta**: messaggio breve di conferma ricezione e disponibilità a chiarimenti. NO insistenza.
- **T+5 giorni**: se silenzio, una mail che chiede se servono chiarimenti su un punto specifico (non "ti scrivo per sapere se hai deciso").
- **T+12 giorni**: chiamata o messaggio diretto, se possibile WhatsApp se rapporto è già amichevole. Domanda esplicita: "Andiamo avanti? C'è qualcosa che non torna?"
- **T+25 giorni**: ultima mail di "chiusura": "Lasciamo aperto per altri 5 giorni, dopo riarchivio la proposta. Fammi sapere come preferisci procedere." Crea urgenza onesta, senza pressione finta.
- **T+90 giorni**: se mai chiuso, follow-up cortese con un articolo nuovo del blog rilevante. Riapre la conversazione senza forzare.

## KPI minimi (3-4 metriche, niente di più)

Per i primi 12 mesi, monitorare solo questi numeri:

1. **Discovery call al mese**: target sostenibile mese 1-3 = 1-2; mese 4-9 = 3-5; mese 10-12 = 5-8 (man mano che il blog scala). Se sono zero per 2 mesi consecutivi, qualcosa nel funnel inbound non funziona.
2. **Tasso di conversione discovery → proposta inviata**: atteso 40-60%. Sotto il 30% vuol dire che non si qualifica abbastanza in fase pre-call (forse il sito attira lead sbagliati). Sopra il 70% può voler dire che si manda proposta a chiunque, sprecando tempo.
3. **Tasso di conversione proposta → contratto firmato**: atteso 20-35%. Sotto il 15% vuol dire che la proposta non centra il pain, o il prezzo non torna.
4. **Time-to-first-revenue**: settimane tra primo contatto e prima fattura. Per voicemail (concessionarie, officine, carrozzerie): atteso 4-8 settimane. Per educazione (scuole paritarie, cooperative sociali): atteso 8-16 settimane. Se si sfora del doppio, c'è friction nel processo.

Ogni 3 mesi: revisione di questi 4 numeri in 30 minuti, decisione se cambiare qualcosa o continuare. Niente dashboard, niente Hubspot, niente analytics sales tool. Foglio Google a 4 colonne.

## Cose da NON fare in discovery

- **Non vendere** nei primi 20 minuti. Vendi negli ultimi 5, e solo se il pain è quantificato.
- **Non parlare di Vertex AI, GKE, AlloyDB, function calling, multi-tenancy** se il cliente non li chiede. Sono parole giuste per l'IT del cliente, non per il decisore di business.
- **Non dire mai "dipende"** in risposta a una domanda di prezzo. Dare un range ("tra X e Y") è sempre meglio del rinvio.
- **Non promettere SLA** che non si possono garantire (es. "rispondiamo in 1 ora h24"). Per due founder è suicidio operativo.
- **Non sottostimare il tempo di delivery**. Se temi 4 settimane, dì 6. Sotto-promettere e sovra-consegnare costruisce fiducia, l'opposto la distrugge.
