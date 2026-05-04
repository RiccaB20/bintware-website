# Pricing — Voicemail

Il listino vigente è quello pubblicato sul sito Bintware.com e va rispettato senza inventare bundle, sconti o tariffe ad hoc. Questo documento spiega come applicare il listino al gancio voicemail, come gestire il consumo a minuto in modo coerente con il principio "no interruzione del servizio", e quando rivedere la struttura di pricing.

## Listino vigente (sito)

- **Setup iniziale**: €1.500 una tantum (configurazione dati, struttura cloud).
- **Infrastruttura cloud GCP**: €250/mese base (Vertex AI + GKE + AlloyDB + Secret Manager, data residency UE su `europe-west8`).
- **Consumo AI a minuto**:
  - **€0,15/min** — modalità "Interazione standard" (conversazione + trascrizione).
  - **€0,20/min** — modalità "Interazione + post-analisi" (conversazione + report LLM strutturato).
- **Upgrade opzionali**: +€75/mese VM dedicata; +€150/mese database dedicato (attivabili solo con ≥3 AI services distinti).
- **Custom & enterprise**: tariffe giornaliere di consulenza per architetture non standard.

In trattativa: questi prezzi NON si scontano. Si negozia eventualmente il **perimetro** (cosa è incluso nel setup, modalità di consumo scelta tra standard e post-analisi), non la cifra in fattura.

## Principio operativo sul consumo a minuto

Sul prezzo a minuto vale un principio esplicito del founder: **il servizio NON si interrompe quando il cliente "sfora" un budget di consumo**. Interrompere un servizio per superamento di una soglia automatica è considerato inaccettabile come modello commerciale e operativo.

Conseguenze pratiche:

1. **Niente pacchetti minuti con cap automatico**. Il cliente paga il consumo reale a fine mese (€0,15 o €0,20/min secondo modalità scelta), non un blocco al raggiungimento di una soglia.
2. **Avvisi di budget, non blocco**. Il cliente imposta una soglia mensile di euro (es. "voglio essere avvisato a €100/mese di consumo"), riceve un alert via email prima e al raggiungimento, ma il servizio continua a funzionare. La decisione di alzare/mantenere/ridurre la soglia resta sua.
3. **Trasparenza sul consumo**. Il cliente vede in qualunque momento il consumo del mese in corso, senza dover chiedere.

Questo modello è una **differenziazione commerciale** rispetto a competitor che vendono pacchetti minuti rigidi: il messaggio è "non ti spegniamo il telefono". Va sottolineato in proposta scritta e in landing page.

## Cosa scrivere in proposta sul consumo

Per il primo cliente voicemail (e per i primi 5-10), nella proposta scritta indicare chiaramente:

- Setup €1.500 una tantum.
- Canone fisso €250/mese.
- Consumo €0,15/min o €0,20/min (cliente sceglie modalità: standard o con post-analisi).
- "Avviso di soglia configurabile su importo mensile a tua scelta. Il servizio non si blocca: ricevi notifica via email prima del raggiungimento, decidi tu come procedere."
- **Stima consumo prima dei dati reali**: NON inventare il numero. Scrivere: "il consumo dipende dal volume e dalla durata reali delle chiamate ricevute. Nei primi 60 giorni monitoriamo insieme i numeri reali e li condividiamo trasparentemente."

Senza dati reali, qualunque stima si dia al cliente è una promessa che si può mancare. Meglio un "non lo so ancora, lo scopriamo insieme" trasparente che un numero inventato che poi sfora.

## Quando rivedere il listino

Il listino attuale resta vigente fino a quando non si avranno metriche affidabili da clienti reali. I trigger per la revisione:

- **Dopo 5-10 contratti voicemail chiusi**: si avranno dati di consumo reale (minuti/mese, durata media chiamata, distribuzione, picchi). Solo allora si potrà valutare se introdurre:
  - Pacchetti volume scontati per chi sa già il proprio consumo (es. "se prevedi più di X minuti/mese, ti offriamo Y").
  - Soglie minime di fatturato per chi vuole prevedibilità.
  - Tariffe per fasce di consumo costruite su distribuzioni reali, non su intuizione.
- **Se i clienti chiedono ripetutamente** una formula diversa (es. canone all-inclusive, pay-as-you-go puro, prezzo per chiamata anziché per minuto): è segnale che il listino attuale ha attrito. Va ascoltato e tradotto in eventuale proposta alternativa, sempre dopo aver visto i dati reali.
- **Se il margine effettivo non torna** rispetto al previsto (costi GCP più alti del previsto a tenant, supporto cliente più oneroso): rivedere setup o canone, mai a sconto, sempre con motivazione documentabile.

Fino ad allora: **listino sito = listino vigente**.

## Cosa NON fare

- **Non inventare bundle entry-level** ("Starter", "Lite", "Basic") senza basi di costo reale. Un bundle inventato è un margine erratico e una promessa difficile da mantenere.
- **Non promettere sconti "primi clienti"** in cambio di testimonial o case study: erode la percezione di valore e crea due classi di clienti che si parlano tra loro.
- **Non fare proposte verbali con cifre diverse dal listino**. Tutto ciò che si dice in call deve essere replicabile e coerente con sito + proposta scritta.
- **Non bloccare il servizio per ritardo di pagamento** sotto i 60 giorni salvo casi gravi documentabili: la coerenza con il principio "no interruzione" si applica anche al recupero crediti.
- **Non comunicare al cliente una stima di consumo a minuto** prima di avere almeno 30 giorni di traffico reale del cliente stesso: una stima sbagliata compromette la fiducia molto più di un "lo misuriamo insieme".

## Scenario "soglia di budget" — come funziona operativamente

Per essere coerenti con il principio "no interruzione", la pratica operativa consigliata:

1. **In onboarding**: il cliente indica una soglia mensile di consumo in euro (es. €80, €150, €300/mese). È una sua scelta, basata sulla sua sensibilità al costo. Si suggerisce, non si impone.
2. **Alert preventivi**: il sistema invia email quando il consumo del mese in corso raggiunge il **70%** e il **90%** della soglia.
3. **Al superamento**: notifica esplicita: *"hai superato la soglia che ti sei dato. Servizio attivo. Vuoi alzarla, mantenerla, abbassarla per i prossimi mesi? Rispondi con una parola e procediamo."*
4. **Niente blocco automatico**. La conversazione (ed eventuale modifica della soglia) avviene tra umani.
5. **A fine mese**: fattura sul consumo reale, in trasparenza completa.

Questo modello è gestibile manualmente per i primi 10-20 clienti senza automatismi sofisticati: si traccia in un foglio Google + script di alert via Cloud Function. Solo dopo, se la base cresce, si automatizza nella console multi-tenant.

## Posizionamento del prezzo nelle conversazioni

Quando in discovery il cliente chiede "quanto costa": rispondere con la verità del listino, mai con un range generico. Esempio:

> "Sul nostro sito trovi il listino completo, ma riassumo qui: setup di €1.500, canone fisso di €250/mese per l'infrastruttura cloud, e poi un costo a consumo per le conversazioni AI di €0,15 o €0,20 al minuto a seconda di cosa vi serve. Niente pacchetti minuti che si spengono, niente sorprese: paghi quello che usi davvero, e ricevi alert quando ti avvicini al budget che ti sei dato."

Questa frase fa due cose insieme: rispetta il listino, e differenzia subito da chi vende a "credito" o "minuti pre-pagati".
