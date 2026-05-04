# Strategia dei due ganci

Bintware ha un catalogo potenzialmente ampio (voce real-time, omnicanalità, post-analisi LLM, integrazioni CRM/ERP, function call). Vendere "AI vocale" in modo generico è inefficace: il mercato italiano B2B è ancora in fase di alfabetizzazione e rifiuta i salti tecnologici. La strategia commerciale di partenza concentra le energie su **due ganci verticali**, scelti per ragioni opposte ma complementari.

## Perché due ganci e non uno

- **Diversificano il rischio**: due settori con dinamiche d'acquisto diverse (privato vs paritario/pubblico, ciclo breve vs ciclo lungo) riducono la dipendenza da una singola pipeline.
- **Coprono due archetipi di cliente**: chi NON vuole sentir parlare di AI (voicemail) e chi è già esposto al tema e cerca soluzioni (scuola). Lo stesso motore tecnico, due narrazioni diverse.
- **Generano contenuti inbound complementari**: il blog può alternare temi senza perdere coerenza, raddoppiando il footprint SEO senza raddoppiare lo sforzo di scrittura.

## Gancio 1 — Voicemail intelligente (due piani in parallelo)

**Logica strategica**: la voicemail è una tecnologia che le aziende tradizionali già conoscono. Vendere "una segreteria che capisce, trascrive e prioritizza i messaggi" non richiede di convincere il cliente sull'AI: il cliente compra un upgrade di qualcosa che ha già.

Il gancio voicemail si articola in **due piani distinti, presentati al cliente fin dalla prima conversazione**, non in sequenza land-and-expand:

- **Piano A — Voicemail analisi (asincrona)**. Il cliente lascia un messaggio, l'AI lo trascrive, estrae i campi rilevanti (nome, numero, motivo, urgenza), produce un ticket strutturato, lo recapita al referente giusto. Nessuna conversazione in tempo reale: pipeline batch sul singolo messaggio. Costo ridotto, complessità di delivery contenuta, adatto al cliente che vuole una segreteria evoluta senza l'esperienza dell'AI conversazionale.
- **Piano B — Voicemail realtime (conversazionale)**. L'AI risponde in tempo reale, dialoga con il chiamante, fa domande di chiarimento, conferma appuntamenti, fornisce orari/disponibilità. Esegue le stesse operazioni di backend del piano A (trascrizione, estrazione, ticket strutturato), ma lo fa interagendo. Costo più alto (stack realtime SIP↔Vertex always-on, tariffe per minuto di conversazione), adatto al cliente con volumi alti o picchi frequenti che non possono attendere callback.

**Perché due piani in parallelo, non land-and-expand**:

- **Trasparenza preventiva > scoperta tardiva**. Il cliente conservativo che compra solo il piano A non deve scoprire dopo 6 mesi che esisteva una versione realtime mai proposta ("perché non me l'hai detto?"). Il cliente sofisticato che chiede subito il piano B non deve passare da una versione "ridotta" prima di arrivare a quella che gli serviva fin dall'inizio.
- **Riduce due fallimenti opposti**: cliente che si sente sotto-venduto (stentava a sapere del piano alto), cliente che rinuncia a tutto perché spaventato dal costo o dall'AI conversazionale (e finisce dal concorrente con una soluzione qualunque).
- **Ogni piano ha valore autonomo**, non è "la versione mutilata dell'altro". Si vendono entrambi senza svalutare l'uno per giustificare l'altro.

**Posizionamento commerciale**: in apertura di discovery, nessuno dei due piani si chiama "AI". Si parla di chiamate perse, fuori orario, filtraggio messaggi, report giornaliero al titolare. Il piano B introduce naturalmente il tema della conversazione realtime quando il volume di chiamate o l'urgenza dei casi lo richiede; il piano A può restare al livello "segreteria evoluta che capisce e prioritizza i messaggi" anche dopo la firma. Il cliente decide il livello di esposizione all'AI che preferisce.

**Criteri di indirizzamento sintetici** (dettaglio in [02-icp-voicemail.md](02-icp-voicemail.md)):
- Piano A se: budget contenuto, cultura conservativa rispetto all'AI, volume telefonico medio-basso, urgenze gestibili in callback entro 1-2 ore.
- Piano B se: budget disponibile, picchi di chiamate frequenti, urgenze immediate (es. sinistro carrozzeria, urgenze stradali officina), apertura culturale all'interazione vocale con AI.

**Settori prioritari**: dettaglio in [02-icp-voicemail.md](02-icp-voicemail.md). Il focus automotive vale per **entrambi** i piani.

**Metafora di riferimento (uso interno)**: come vendere auto. Il cliente che cerca una Panda con servosterzo non sta sbagliando a non comprare una premium — sta scegliendo l'auto giusta per il suo uso e il suo budget. Il nostro lavoro non è convincere chi vuole la Panda a comprare la premium: è far sapere a entrambi che vendiamo entrambe, e indirizzare ognuno alla scelta più adatta. Quando il cliente Panda un giorno avrà bisogno di più, saprà già a chi chiedere.

## Gancio 2 — Educazione / Scuola

**Logica strategica**: il mondo educativo è già esposto al dibattito sull'AI (per timore o per opportunità). Il decisore scolastico non deve essere convinto che l'AI esiste, deve essere rassicurato che è usata in modo etico, conforme alla normativa e a supporto — non in sostituzione — del lavoro umano.

- **Pain reali e quantificabili**: ore di reportistica BES/DSA, verbali di consigli di classe e GLO, comunicazioni alle famiglie, osservazioni educative su minori.
- **Casi d'uso già validati internamente**: il caso "10 minuti di AI vs 30 minuti di scrittura" sugli operatori scolastici (citato nel blog del sito) è il prototipo di pitch.
- **Differenza vs voicemail**: qui il linguaggio AI si può usare, ma sempre accoppiato a parole come "supporto", "tracciabilità", "etica", "GDPR", "privacy minori".
- **Settori prioritari**: dettaglio in [03-icp-educazione.md](03-icp-educazione.md).

## Cosa NON facciamo (per ora)

- Niente sanità privata e legal come ganci primari, anche se il sito li cita: cicli d'acquisto lunghi, vincoli regolatori complessi (sanità: GDPR + dati sanitari + responsabilità clinica; legal: segreto professionale + responsabilità deontologica), rischio di bruciare risorse senza contratti chiusi nei primi mesi. Restano nel catalogo come case study aspirazionali, non come target di acquisizione attivo.
- Niente generalismo "AI per aziende": ogni euro speso in contenuti generici è un euro tolto ai due cluster verticali.
- Niente outbound a freddo: scelta esplicita del founder. La pipeline si costruisce via inbound (SEO+blog) e network organico.

## Come si combinano operativamente

- **Sito**: in homepage convivono già più casi d'uso. La strategia non richiede riscrittura totale, ma due **landing page settoriali** dedicate (una "voicemail aziendale", una "scuola") che diventano le destinazioni dei contenuti SEO. Vedi [07-asset-minimi.md](07-asset-minimi.md).
- **Blog**: alternanza di articoli sui due cluster (es. 2/mese voicemail, 1/mese scuola, 1/mese tecnico-architetturale per credibilità). Vedi [05-canali.md](05-canali.md).
- **Discovery call**: lo script è uno solo, ma con due rami di qualifica (vedi [06-sales-playbook.md](06-sales-playbook.md)). Il secondo passo dipende dal settore.
- **Pricing**: il gancio voicemail ha due piani sul listino (Piano A analisi, Piano B realtime); il gancio educazione segue il listino full enterprise. Niente bundle inventati o sconti (vedi [04-pricing-voicemail.md](04-pricing-voicemail.md)). I due piani condividono **stesso setup (€1.500) e stesso canone (€250/mese)**: la differenza è cosa fa il sistema in risposta alla chiamata. Il Piano A non ha costo a consumo — l'elaborazione dei messaggi è inclusa nel canone, con un fair-use di 1.000 messaggi/mese rivedibile col cliente quando il volume reale lo richiede. Il Piano B ha consumo a minuto (€0,15-0,20) sulla conversazione realtime, con avvisi di soglia mai blocchi automatici. In entrambi i casi il messaggio commerciale è "non ti spegniamo il telefono / non ti scartiamo i messaggi". Eventuali revisioni dei listini verranno valutate solo dopo aver raccolto dati di consumo reali da 5-10 clienti per piano.

## Quando rivedere questa strategia

- Dopo i primi 3-5 contratti chiusi: capire quale dei due ganci converte meglio e a quale costo di acquisizione.
- Dopo 6 mesi di blog attivo: capire quale cluster di contenuti porta più traffico qualificato.
- Se emerge un terzo settore in modo organico (es. inbound spontaneo da uno specifico settore non previsto): valutare se aggiungerlo come terzo gancio o se è solo rumore.
