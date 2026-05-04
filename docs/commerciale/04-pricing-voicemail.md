# Pricing — Voicemail

Il gancio voicemail ha **due piani distinti**, presentati al cliente fin dalla prima conversazione (vedi `01-strategia-due-ganci.md`). Entrambi i piani vanno rispettati senza inventare bundle, sconti o tariffe ad hoc. Questo documento descrive il listino dei due piani, come gestire il consumo in modo coerente con il principio "no interruzione del servizio", e quando rivedere la struttura.

> **Stato del listino sul sito (mag 2026)**: il listino pubblicato in homepage descrive oggi **solo il Piano B (realtime)**. Il Piano A (voicemail analisi) non è ancora pubblicato sul sito. È un disallineamento da chiudere — vedi sezione "Allineamento listino sito" in fondo al documento.

## Piano A — Voicemail analisi (asincrona)

Il cliente lascia un messaggio. La pipeline batch lo trascrive, estrae i campi rilevanti (nome, numero, motivo, urgenza), produce un ticket strutturato, lo recapita al referente giusto via email/SMS/dashboard. Niente conversazione in tempo reale, niente AI che parla.

**Costo sotto il cofano**: speech-to-text + LLM batch per estrazione strutturata. Costi GCP per messaggio singolo dell'ordine dei centesimi (durata media messaggio 30-60 secondi).

**Listino Piano A**:

- **Setup iniziale**: €1.500 una tantum. Comprende: configurazione integrazione col centralino esistente (SIP trunk standard), definizione dei campi da estrarre dai messaggi, integrazione email/SMS/CRM dove richiesta.
- **Canone mensile fisso**: €250/mese. Comprende: infrastruttura cloud per pipeline batch, storage trascrizioni, dashboard, **e tutta l'elaborazione dei messaggi inclusa** (speech-to-text + estrazione strutturata via LLM). Niente costo a consumo, niente fatturazione per volume di messaggi.
- **Fair-use indicativo**: il canone copre fino a **1.000 messaggi voicemail elaborati/mese**. Sopra questa soglia il servizio continua a girare senza interruzione: avvisi al 70% e al 90%, conversazione esplicita con il cliente per ricalibrare il canone al volume reale. Mai cap automatico al messaggio 1.001, mai fatturazione "a sorpresa" per messaggi extra non concordati. Soglia iniziale: da rivedere dopo i primi 5-10 contratti Piano A in produzione, sui dati reali di consumo GCP.
- **Upgrade opzionali**: gli stessi del listino base (VM dedicata +€75/mese, DB dedicato +€150/mese), attivabili con i criteri vigenti.

**Cosa il Piano A NON fa**:
- Non risponde al chiamante in tempo reale: il cliente sente un messaggio pre-registrato e lascia il proprio.
- Non gestisce dialoghi: nessuna domanda di chiarimento, nessuna conferma immediata.
- Non sostituisce il front-office in scenari ad alto volume: è un filtro intelligente sulle chiamate non risposte, non un agente conversazionale.

## Piano B — Voicemail realtime (conversazionale)

L'AI risponde in tempo reale, dialoga con il chiamante, fa domande di chiarimento, conferma appuntamenti, fornisce orari/disponibilità. Esegue le stesse operazioni di backend del Piano A (trascrizione, estrazione, ticket strutturato), ma interagendo. Stack SIP↔Vertex Live always-on.

**Listino Piano B** (è quello pubblicato sul sito Bintware.com):

- **Setup iniziale**: €1.500 una tantum (configurazione dati, struttura cloud, voice tuning, integrazione SIP realtime).
- **Infrastruttura cloud GCP**: €250/mese base (Vertex AI + GKE + AlloyDB + Secret Manager, data residency UE su `europe-west8`).
- **Consumo AI a minuto**:
  - **€0,15/min** — modalità "Interazione standard" (conversazione + trascrizione).
  - **€0,20/min** — modalità "Interazione + post-analisi" (conversazione + report LLM strutturato).
- **Upgrade opzionali**: +€75/mese VM dedicata; +€150/mese database dedicato (attivabili solo con ≥3 AI services distinti).
- **Custom & enterprise**: tariffe giornaliere di consulenza per architetture non standard.

**Cosa il Piano B fa in più rispetto ad A**:
- Risponde dal primo squillo, niente attesa né "bip" della segreteria classica.
- Gestisce dialogo bidirezionale: domande di chiarimento, conferme immediate, eventuale risoluzione diretta (es. fornire orari di apertura, confermare disponibilità tagliando).
- Riduce drasticamente l'abbandono di chiamata da parte di chi non vuole parlare con un registratore.
- Tutto il backend di analisi e ticketing del Piano A è incluso.

## In trattativa: cosa si negozia e cosa no

Per **entrambi i piani**:
- I prezzi NON si scontano. Si negozia eventualmente il **perimetro** (cosa è incluso nel setup, quali campi estrarre, integrazioni richieste), non la cifra in fattura.
- Non si fanno bundle entry-level inventati.
- Non si promettono sconti "primi clienti" in cambio di testimonial o case study.

## Principio operativo sul consumo — "no interruzione del servizio"

Vale per **entrambi i piani**, declinato sulla rispettiva unità di consumo.

**Piano B (realtime, consumo a minuto)**: il servizio NON si interrompe quando il cliente sfora un budget mensile di consumo. Interrompere un servizio per superamento di soglia automatica è inaccettabile come modello commerciale.

Conseguenze pratiche per il Piano B:

1. **Niente pacchetti minuti con cap automatico**. Il cliente paga il consumo reale a fine mese (€0,15 o €0,20/min secondo modalità scelta), non un blocco al raggiungimento di una soglia.
2. **Avvisi di budget, non blocco**. Il cliente imposta una soglia mensile di euro (es. "voglio essere avvisato a €100/mese di consumo"), riceve un alert via email prima e al raggiungimento, ma il servizio continua a funzionare. La decisione di alzare/mantenere/ridurre la soglia resta sua.
3. **Trasparenza sul consumo**. Il cliente vede in qualunque momento il consumo del mese in corso, senza dover chiedere.

**Piano A (asincrona, canone fisso con elaborazione inclusa)**: stesso principio, declinato sul fair-use. Il canone copre fino a 1.000 messaggi voicemail elaborati/mese. Se il volume reale del cliente supera la soglia, il servizio NON si interrompe: avvisi al 70% e al 90%, conversazione esplicita con il cliente per ricalibrare il canone al volume reale, eventuale aggiornamento contrattuale alla rinnovazione mensile successiva. Niente cap automatico al messaggio 1.001, niente fatturazione "a sorpresa" per messaggi extra non concordati.

In entrambi i casi il messaggio commerciale è lo stesso: **"non ti spegniamo il telefono / non ti scartiamo i messaggi"**. È una differenziazione esplicita rispetto a competitor con pacchetti rigidi e va sottolineata in proposta scritta e in landing page.

## Cosa scrivere in proposta sul consumo

Per ogni proposta scritta, indicare il piano scelto (A o B) con i suoi numeri, e includere il principio di non-interruzione.

**Proposta Piano A (analisi)**:
- Setup €1.500 una tantum.
- Canone fisso €250/mese, **elaborazione dei messaggi inclusa** (niente costo a consumo).
- Fair-use 1.000 messaggi voicemail elaborati/mese inclusi nel canone. "Sopra questa soglia il servizio continua a funzionare; ricevi avvisi al 70% e al 90%, ne parliamo insieme per ricalibrare il canone al volume reale. Mai blocco automatico, mai fatturazione di messaggi extra non concordati."

**Proposta Piano B (realtime)**:
- Setup €1.500 una tantum.
- Canone fisso €250/mese.
- Consumo €0,15/min o €0,20/min (cliente sceglie modalità: standard o con post-analisi).
- "Avviso di soglia configurabile su importo mensile a tua scelta. Il servizio non si blocca: ricevi notifica via email prima del raggiungimento, decidi tu come procedere."

**Stima consumo prima dei dati reali — solo Piano B**: per il Piano B, NON inventare il numero di minuti/mese. Scrivere: "il consumo dipende dal volume e dalla durata reali delle chiamate ricevute. Nei primi 60 giorni monitoriamo insieme i numeri reali e li condividiamo trasparentemente."

Per il **Piano A** la stima del consumo non si applica (è incluso nel canone): si comunica solo il volume previsto in messaggi/mese del cliente per verificare che resti sotto la soglia di fair-use. Se il volume previsto è già vicino o sopra la soglia, lo si discute in trattativa per concordare un canone adeguato dal day-1, anziché farlo dopo.

Senza dati reali, qualunque stima si dia al cliente è una promessa che si può mancare. Meglio un "non lo so ancora, lo scopriamo insieme" trasparente che un numero inventato che poi sfora.

**Quando proporre A o B**: la decisione si prende in discovery (vedi `06-sales-playbook.md`, ramo voicemail). Se i criteri non sono chiari, **proporre entrambi** in una stessa proposta scritta, con una raccomandazione esplicita basata su volumi e urgenza, e lasciare al cliente la scelta finale. Mai proporre solo il piano "comodo per noi".

## Quando rivedere i listini

Entrambi i listini restano vigenti fino a quando non si avranno metriche affidabili da clienti reali. Il conteggio è separato per piano: 5-10 contratti **per piano** prima di toccarne il listino. I trigger per la revisione:

- **Dopo 5-10 contratti chiusi su un piano**: si avranno dati di consumo reale (minuti/mese o messaggi/mese a seconda del piano, durata media chiamata/messaggio, distribuzione, picchi). Solo allora si potrà valutare se introdurre per quel piano:
  - Pacchetti volume scontati per chi sa già il proprio consumo (es. "se prevedi più di X minuti/mese, ti offriamo Y").
  - Soglie minime di fatturato per chi vuole prevedibilità.
  - Tariffe per fasce di consumo costruite su distribuzioni reali, non su intuizione.
- **Se i clienti chiedono ripetutamente** una formula diversa (es. canone all-inclusive, pay-as-you-go puro, prezzo per chiamata anziché per minuto/messaggio): è segnale che il listino di quel piano ha attrito. Va ascoltato e tradotto in eventuale proposta alternativa, sempre dopo aver visto i dati reali.
- **Se il margine effettivo non torna** rispetto al previsto (costi GCP più alti del previsto a tenant, supporto cliente più oneroso): rivedere setup o canone, mai a sconto, sempre con motivazione documentabile.
- **Se emerge che molti clienti del Piano A vogliono passare al B (o viceversa)**: è un segnale di posizionamento, non di prezzo. Va capito perché — può portare a riformulare i criteri di indirizzamento in `02-icp-voicemail.md` prima ancora di toccare i listini.

Fino ad allora: **listini documentati qui = listini vigenti**.

## Cosa NON fare

- **Non inventare bundle entry-level** ("Starter", "Lite", "Basic") senza basi di costo reale. Un bundle inventato è un margine erratico e una promessa difficile da mantenere.
- **Non promettere sconti "primi clienti"** in cambio di testimonial o case study: erode la percezione di valore e crea due classi di clienti che si parlano tra loro.
- **Non fare proposte verbali con cifre diverse dal listino**. Tutto ciò che si dice in call deve essere replicabile e coerente con sito + proposta scritta.
- **Non bloccare il servizio per ritardo di pagamento** sotto i 60 giorni salvo casi gravi documentabili: la coerenza con il principio "no interruzione" si applica anche al recupero crediti.
- **Non comunicare al cliente una stima di consumo** (a minuto per il Piano B, a messaggio per il Piano A) prima di avere almeno 30 giorni di traffico reale del cliente stesso: una stima sbagliata compromette la fiducia molto più di un "lo misuriamo insieme".
- **Non spingere il cliente verso il piano "comodo per noi"**. Se i suoi numeri suggeriscono il piano A, non vendergli il B perché ha margine maggiore. Se i suoi numeri suggeriscono il B, non vendergli l'A "tanto poi vediamo": rovina la fiducia quando dopo 3 mesi capisce che era stato sotto-venduto.

## Scenario "soglia di budget" — come funziona operativamente

Per essere coerenti con il principio "no interruzione", la pratica operativa consigliata:

1. **In onboarding**: il cliente indica una soglia mensile di consumo in euro (es. €80, €150, €300/mese). È una sua scelta, basata sulla sua sensibilità al costo. Si suggerisce, non si impone.
2. **Alert preventivi**: il sistema invia email quando il consumo del mese in corso raggiunge il **70%** e il **90%** della soglia.
3. **Al superamento**: notifica esplicita: *"hai superato la soglia che ti sei dato. Servizio attivo. Vuoi alzarla, mantenerla, abbassarla per i prossimi mesi? Rispondi con una parola e procediamo."*
4. **Niente blocco automatico**. La conversazione (ed eventuale modifica della soglia) avviene tra umani.
5. **A fine mese**: fattura sul consumo reale, in trasparenza completa.

Questo modello è gestibile manualmente per i primi 10-20 clienti senza automatismi sofisticati: si traccia in un foglio Google + script di alert via Cloud Function. Solo dopo, se la base cresce, si automatizza nella console multi-tenant.

## Posizionamento del prezzo nelle conversazioni

Quando in discovery il cliente chiede "quanto costa", la risposta presenta **entrambi i piani**, mai uno solo, e indirizza con una raccomandazione basata sui suoi numeri. Esempio:

> "Abbiamo due livelli, scegliete voi quello giusto per il vostro caso. Il setup e il canone sono uguali per tutti e due — €1.500 una tantum e €250 al mese — quello che cambia è cosa fa il sistema quando il telefono squilla. Il primo è la voicemail analisi: il chiamante lascia un messaggio come a una segreteria normale, l'AI lo trascrive e lo struttura in un ticket che vi arriva via email/dashboard. Tutto incluso nel canone, fino a circa mille messaggi al mese. Niente costi a consumo, niente sorprese in bolletta. Il secondo è la voicemail in tempo reale: l'AI risponde subito al primo squillo, dialoga col chiamante, conferma appuntamenti. Stesso setup, stesso canone, ma in più paghi €0,15-0,20 per minuto di conversazione effettiva. Costa di più sui mesi attivi, ma riduce drasticamente le chiamate abbandonate nei picchi. In entrambi i casi: paghi quello che usi davvero, ricevi alert quando ti avvicini ai limiti, e il servizio non si spegne mai."

Questa frase fa tre cose insieme: rispetta entrambi i listini, presenta **trasparenza preventiva** (il cliente sa che esistono entrambi), e differenzia subito da chi vende a "credito" o "minuti pre-pagati".

Dopo aver presentato entrambi: chiedere al cliente i suoi numeri (chiamate/giorno, picchi, durate medie) e concludere con una **raccomandazione esplicita** ("dato quello che mi hai detto, partirei dal piano A / dal piano B perché…"). Mai vago, mai "scegli tu" senza guida.

## Allineamento listino sito (action item)

Il listino pubblicato in homepage di [bintware.com](https://bintware.com/#listino) descrive oggi solo il **Piano B (realtime)**, perché era stato impostato prima della formalizzazione del modello a due piani. Va aggiornato per riflettere entrambi i piani, in modo che il cliente che atterra in homepage abbia la stessa trasparenza del cliente che incontra Bintware in discovery.

Modifiche necessarie a `index.html` (sezione `#listino`):

- La voce "01 Setup iniziale €1.500" e la voce "02 Infrastruttura Cloud €250/mese" restano invariate (sono identiche per entrambi i piani).
- La voce "03 Utilizzo AI a consumo" diventa una **scelta tra due piani**:
  - **Piano A — Voicemail analisi**: nessun costo a consumo, elaborazione di tutti i messaggi inclusa nel canone, fair-use 1.000 messaggi/mese ("oltre rivediamo insieme, mai blocchi automatici").
  - **Piano B — Voicemail realtime**: i due pacchetti attuali "Interazione standard €0,15/min" e "Interazione + post-analisi €0,20/min".
- Aggiungere sopra la scelta una breve introduzione ("due livelli, scegli quello giusto per il tuo caso").
- Mantenere il principio "no cap automatico" come messaggio trasversale ai due piani.
- Aggiornare il JSON-LD `Service` (`@id` `https://bintware.com/#service`) con offerta a due varianti (Piano A, Piano B), così Google capisce la struttura del prodotto.

Tempistica: prossima sessione dedicata all'aggiornamento del sito. Fino ad allora la presentazione in discovery e la proposta scritta usano già il modello a due piani con i numeri di questo documento.

## Decisioni chiuse — Piano A

- **Setup**: €1.500 (uguale al Piano B).
- **Canone**: €250/mese (uguale al Piano B), con **elaborazione messaggi inclusa**.
- **Niente costo a consumo**: il canone copre tutto.
- **Fair-use**: 1.000 messaggi voicemail elaborati/mese, soglia iniziale, da rivedere dopo i primi 5-10 contratti Piano A in produzione.
- **Cosa il cliente riceve**: ticket strutturato con campi standard (nome chiamante, numero, motivo della chiamata, livello di urgenza), recapitato via email/dashboard. Eventuali campi custom si concordano in setup, senza costi aggiuntivi.
- **Casi atipici** (silenzio, durata anomala, lingua non supportata, rumore totale): comportamento di prodotto da affinare al primo cliente in produzione, non blocca la proposta.
