# ICP — Educazione / Scuola

Profilo del cliente ideale per il gancio educazione. Mondo radicalmente diverso dalla voicemail: cicli lunghi, decisori multipli, sensibilità etica/normativa alta, budget vincolati. Va trattato come un secondo binario commerciale, non come variazione del primo.

## Scelta del sotto-segmento prioritario

Il mondo "scuola" è ampio. Per i primi 12 mesi conviene concentrare l'energia su due sotto-segmenti, in ordine:

1. **Scuole paritarie e centri educativi privati** (priorità alta) — decisione interna, budget proprio, ciclo 2-4 mesi, sensibilità a "fare innovazione" come fattore di posizionamento sul mercato.
2. **Cooperative sociali ed enti del terzo settore con servizi educativi** (BES, DSA, dopo-scuola, supporto domiciliare a minori) — già citato come caso d'uso sul sito ("10 minuti di AI vs 30 minuti di scrittura"). Ciclo medio, decisore singolo o collegio ristretto.

I sotto-segmenti che vanno **rimandati alla fase 2** (dopo aver chiuso i primi 3-5 contratti):

- **Scuole pubbliche statali**: cicli 6-12 mesi, decisione collegiale, vincoli MEPA/CONSIP, bandi PNRR. Mercato grande ma processo non sostenibile per startup senza referenze.
- **Università e centri di ricerca**: vendita enterprise, cicli 9-18 mesi, va trattato come progetto custom (catalogo full Bintware), non come gancio di acquisizione.
- **Scuole d'infanzia e nido**: budget bassi, decisione spesso emotiva, ROI difficile da articolare.

## Profilo dell'ente target

- **Scuola paritaria**: 100-800 alunni, 1-3 plessi, gestione di un ente religioso o di una fondazione/cooperativa.
- **Cooperativa sociale / centro specialistico**: 5-30 operatori educativi, lavoro su minori con bisogni educativi speciali, convenzioni con ASL e Comuni.
- **Comune denominatore**: c'è almeno una persona che dedica una parte significativa del proprio tempo a scrivere report, verbali, osservazioni, comunicazioni. È lì il dolore.

## Decisori

Per **scuole paritarie**:
- **Dirigente scolastico / coordinatore didattico**: decisore principale.
- **Animatore digitale o referente innovazione**: influencer forte, spesso il primo contatto.
- **Direttore amministrativo / economo**: filtro sul budget.
- **Consiglio di gestione / ente proprietario**: ratifica per investimenti sopra soglia (tipicamente €5-10K).

Per **cooperative sociali / enti formativi**:
- **Presidente o direttore generale**: decisore.
- **Coordinatore servizio / responsabile area educativa**: portatore del pain.
- **Responsabile qualità / privacy**: gatekeeper su trattamento dati minori.

## Trigger d'acquisto

- **Carico burocratico aumentato**: nuove indicazioni ministeriali, ASL, garante privacy, normative DSA/BES che obbligano a documentare di più.
- **Turnover degli operatori**: difficoltà a trasferire conoscenza tacita, esigenza di tracciabilità.
- **Fondi disponibili**: avanzi di gestione, fondi PNRR Missione 4, bandi regionali, donazioni dedicate all'innovazione.
- **Pressione competitiva (paritarie)**: scuole vicine che si presentano come "innovative" sui materiali di marketing alle famiglie.
- **Ispezioni o segnalazioni**: incidenti documentali (verbale mancante, osservazione non tracciata) che fanno scattare la priorità sulla reportistica.

## Casi d'uso prioritari (in ordine di chiusura attesa)

1. **Report di osservazione su minori BES/DSA**: l'operatore parla 5-10 minuti, l'AI genera report strutturato secondo schema condiviso. Tempo dimezzato/triplicato. Caso di riferimento già nel blog del sito.
2. **Verbali di consigli di classe / GLO / equipe educative**: registrazione (con consenso) → trascrizione → estrazione decisioni e to-do → bozza verbale.
3. **Comunicazioni alle famiglie**: bozza di comunicazioni periodiche partendo da appunti vocali del coordinatore, con tono e linguaggio coerenti.
4. **Sintesi di documentazione esistente**: PEI, PDP, fascicoli, sintetizzati per un nuovo operatore che subentra.
5. **Aiuto compiti / supporto allo studio (post-scuola)**: scenario ulteriore, ma valutare con cautela perché tocca direttamente i minori — vedi sezione etica/normativa.

## Linguaggio da usare

**Da usare**:
- "Restituire tempo all'insegnante / educatore"
- "Tracciabilità e qualità della documentazione"
- "Conformità GDPR e privacy dei minori, dati che restano in Europa"
- "L'AI supporta, non sostituisce. Il professionista controlla e firma."
- "Riduzione del rischio di errore e dimenticanza"
- "Standardizzazione tra operatori diversi"

**Da gestire con attenzione**:
- "AI", "intelligenza artificiale": si possono usare, ma sempre accoppiati a "supporto", "strumento", "controllo umano".
- "Automazione": è una parola sensibile in ambito educativo, può evocare "deumanizzazione". Preferire "snellimento", "alleggerimento".
- "Risparmio di tempo": va declinato in "tempo restituito ai bambini / studenti / utenti", non in "taglio costi".

**Da evitare**:
- Confronti diretti con ChatGPT come strumento sostituibile ("perché non usate ChatGPT gratis?"): questa obiezione va anticipata e gestita (vedi `06-sales-playbook.md`).
- Toni da venditore tech aggressivo. Il decisore educativo è diffidente verso il marketing.

## Vincoli normativi e etici (da padroneggiare prima della prima call)

- **GDPR e dati minori**: trattamento dati di minori richiede base giuridica solida (consenso informato dei genitori se non c'è altra base) e DPIA se profilazione/decisioni automatizzate. Bintware deve poter fornire schema DPIA e nominare DPO/contatto privacy interno.
- **Data residency**: argomento forte (già `europe-west8` su GCP, citato nel sito). Va sempre evidenziato.
- **AI Act UE**: i sistemi educativi che valutano studenti rientrano in "alto rischio". Bintware Voice Gateway in scenario "report dell'operatore" NON è sistema di valutazione (è strumento di documentazione), quindi non rientra in alto rischio. Ma serve saperlo articolare.
- **Decisioni sostanziali sull'individuo**: l'AI non deve mai essere presentata come decisore (es. "l'AI ha valutato il bambino come..."). Sempre come strumento di supporto al professionista che decide e firma.

## Pain quantificabili

Da raccogliere in discovery:
- Ore/settimana per operatore dedicate a reportistica, verbali, comunicazioni.
- Costo orario lordo dell'operatore × ore × n. operatori = euro/anno di "costo documentazione".
- Tempo medio di onboarding di un nuovo operatore (per la sintesi di fascicoli esistenti).
- Numero di osservazioni/verbali in arretrato a fine quadrimestre.

## Segnali di NON-fit

- Enti con politica esplicita "no AI" per decisione di principio (succede in alcuni contesti religiosi o pedagogici).
- Enti che vogliono delegare interamente la valutazione/diagnosi all'AI: rifiutare, non è il caso d'uso.
- Enti senza budget identificato o senza autonomia decisionale: rimandare a quando sarà disponibile (non insistere).
- Bandi pubblici a partecipazione complessa nei primi 12 mesi: non sostenibile senza referenze e team dedicato alle gare.

## Geografia

- Italia, priorità regioni con tessuto fitto di paritarie e cooperative sociali strutturate (Lombardia, Emilia-Romagna, Veneto, Toscana, Lazio).
- Network ecclesiastico e cooperativo: una volta entrati in una rete (diocesi, consorzio di cooperative, federazione FISM/AGESC), il passaparola interno è il canale più efficace. Strategicamente: il primo cliente in una rete vale più di tre clienti isolati.
