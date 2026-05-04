# ICP — Voicemail intelligente

Profilo del cliente ideale per il gancio voicemail. Serve a focalizzare contenuti, qualifica lead e proposta commerciale. Tutto ciò che NON rientra in questo profilo va trattato come opportunità accessoria, non come target di acquisizione attivo.

## Profilo aziendale

- **Dimensione**: 5-50 dipendenti tipicamente, fatturato indicativo €1-20M.
- **Volume telefonico**: almeno 30-50 chiamate in entrata al giorno, con picchi orari (mattino/lunedì/post-pausa pranzo).
- **Centralino esistente**: VoIP o tradizionale già installato (qualunque marca: 3CX, Cisco, Avaya, Wildix, NFON, Fastweb, TIM Business). La voicemail Bintware si innesta sopra, non sostituisce.
- **Ufficio amministrativo o front-office sotto pressione**: c'è già una persona o un piccolo team che risponde al telefono e che si lamenta del carico.
- **Cliente finale del business**: B2C o B2B con clienti finali che chiamano (non aziende che fanno solo back-office o b2b silenzioso via email).

## Settori prioritari

**Focus primario nei primi 12 mesi**: mondo automotive, sia vendita che aftersale. È l'unico segmento voicemail su cui si concentrano le energie attive (contenuti dedicati, articoli settoriali, asset di vendita). Specificamente:

- **Concessionarie auto** (mono-marca o pluri-marca): vendite, prenotazione test drive, richieste informazioni sui modelli, gestione listini, picchi su lancio nuovi modelli e fine campagne fiscali. Decisore: titolare o responsabile vendite/marketing della concessionaria.
- **Officine indipendenti e centri assistenza autorizzati**: appuntamenti, preventivi, ricambi, urgenze stradali. Il personale tecnico spesso risponde mentre lavora. Decisore: titolare per officine indipendenti, responsabile after-sales per i centri di rete.
- **Carrozzerie**: chiamate di sinistro, preventivi, gestione tempi di consegna, dialogo con periti assicurativi. Decisore: titolare.
- **Ricambisti e magazzini ricambi B2B**: chiamate da officine clienti per disponibilità pezzi, ordini urgenti. Decisore: titolare o responsabile vendite.

**Settori adiacenti** (gli stessi pattern di pain — chiamate perse, fuori orario, filtraggio urgenze — sono replicabili). Vengono serviti normalmente quando arrivano in inbound spontaneo. Nei primi 12 mesi non si producono per loro contenuti SEO o asset dedicati, perché le energie attive di acquisizione restano sul mondo automotive — ma se un'opportunità arriva, si chiude con il listino del catalogo:

- Studi professionali medio-piccoli (commercialisti, geometri, notai, consulenti del lavoro).
- Idraulici, elettricisti, manutentori, artigiani strutturati.
- Agenzie immobiliari.
- Hotel, B&B, strutture ricettive piccole-medie.
- Cliniche veterinarie, studi dentistici e poliambulatori privati (con cautela su data residency UE per dati sanitari).
- Servizi di assistenza domiciliare.

**Regola operativa**: lead di settori non automotive che arrivano spontaneamente da SEO/blog o da rete personale si servono normalmente con il listino del catalogo. La regola riguarda solo dove si investono energie attive di acquisizione (contenuti dedicati, asset settoriali, articoli mirati), che nei primi 5-10 contratti restano concentrate sul mondo automotive per non frammentare lo sforzo.

## Decisore tipico

- **Officine indipendenti, carrozzerie, ricambisti monosocio**: decisore = **titolare**. Decisione singola, ciclo breve (1-3 settimane). Proposta diretta, prezzo da listino del sito, niente passaggi formali aggiuntivi.
- **Concessionarie e centri assistenza autorizzati di rete**: decisore = **direttore vendite, responsabile after-sales o titolare/group manager** + eventuale ratifica della casa madre o del gruppo per spese sopra soglia (tipicamente €5-10K). Ciclo 4-8 settimane. Serve materiale scritto da girare a soci/casa madre, e va presa in conto la possibile interferenza di vincoli IT della casa madre (es. policy CRM, restrizioni su SIP trunk).

In entrambi i casi il responsabile IT (se esiste, tipicamente nelle realtà più strutturate) è un **influencer**, raramente decisore. Va però rassicurato sulla parte tecnica per non avere veti — vedi `06-sales-playbook.md`.

## Trigger d'acquisto (cosa fa partire la conversazione)

- Lamentela ricorrente di clienti su chiamate non risposte / non richiamate.
- Recensioni Google negative legate a "non rispondono al telefono".
- Picco stagionale (es. concessionario a settembre-ottobre, idraulico in inverno) che satura il personale.
- Cambio di centralino o passaggio a VoIP: occasione per upgrade.
- Assunzione mancata di una segretaria/centralinista (costo annuale percepito → confronto con costo voicemail).
- Stress del titolare che risponde personalmente al telefono fuori orario.

## Linguaggio da usare (e da NON usare)

**Apertura discovery (entrambi i piani)** — niente AI come prima parola, si parte sempre dal pain operativo:

- "Non perdere chiamate"
- "Rispondere fuori orario senza pagare uno stipendio"
- "Filtrare le urgenze vere dal rumore"
- "Report giornaliero dei messaggi sul telefono del titolare"
- "Si paga per quello che serve, niente abbonamenti telefonici aggiuntivi"
- "Funziona col centralino che avete già"

**Da evitare in apertura (entrambi i piani)**:
- "Intelligenza artificiale", "AI", "LLM", "Vertex AI", "Google Cloud" come **slogan**
- "Trascrizione real-time", "speech-to-text", "NLP"
- "Multi-tenant", "data residency", "Vector DB"

**Linguaggio specifico Piano A — voicemail analisi**: l'AI può restare sotto il cofano anche in trattativa avanzata. Si parla di "messaggi che arrivano già trascritti", "ticket strutturato in email", "campi compilati automaticamente" senza dover nominare la tecnologia. Il cliente compra una "segreteria evoluta che capisce e prioritizza", non un prodotto AI. Se lo chiede esplicitamente, si conferma con onestà — ma non si forza.

**Linguaggio specifico Piano B — voicemail realtime**: qui il termine "AI" o "voce automatica" diventa esplicito **al momento giusto**, cioè quando si descrive il dialogo in tempo reale. Senza nominarlo, il prodotto non si capisce. La regola è introdurlo come strumento ("una voce automatica che risponde, capisce, conferma appuntamenti"), non come bandiera ("la rivoluzione dell'AI conversazionale"). Restano vietati i tecnicismi ("Vertex Live", "WebSocket bidirezionale") salvo l'IT del cliente li chieda. Per concessionarie e officine, l'analogia utile è "come quando chiami una compagnia aerea o una banca grossa e ti risponde una voce che capisce cosa vuoi" — la tecnologia è familiare, non aliena.

In ogni caso il principio è: **dosato, non negato**. Si nomina l'AI quando serve a chiarire il prodotto, mai prima. E mai si descrive una conversazione realtime con paroloni come "empatia" o "naturalezza umana" — sono claim che il cliente sentirà subito come venduti.

## Quale piano consigliare (A o B)

Vedi `01-strategia-due-ganci.md` per il razionale strategico dei due piani e `04-pricing-voicemail.md` per i listini. Qui i criteri operativi per indirizzare in discovery — si presentano **entrambi** al cliente, ma si raccomanda esplicitamente uno.

**Indirizzare verso il Piano A (voicemail analisi, asincrona)** quando:

- **Volume chiamate** medio-basso o concentrato in fasce gestibili (es. officina con 30-50 chiamate/giorno, picchi al lunedì mattina, ufficio già coperto in fascia centrale).
- **Sensibilità al budget** alta: il cliente cerca un upgrade della segreteria, non un agente conversazionale completo. La frase tipica è "voglio capire chi ha chiamato senza richiamare uno per uno".
- **Cultura conservativa** rispetto all'AI: il cliente è scettico sulla voce automatica ("non voglio che i miei clienti pensino di parlare con un robot"). Il Piano A è invisibile dal lato del chiamante (sente la sua segreteria di sempre), l'AI lavora sul backend.
- **Urgenze gestibili in callback** entro 1-2 ore: il pain è non perdere il lead, non risolvere il problema dal primo squillo. Esempio tipo: ricambista che riceve richieste di disponibilità pezzi — basta un richiamo entro mezz'ora.
- **Primo contatto con Bintware**: cliente che vuole "provare" senza esposizione: il Piano A è il rischio più basso, il modo più economico di iniziare il rapporto. Eventuale upgrade al Piano B viene proposto in modo trasparente quando i numeri lo giustificano (e mai come "te l'avevo detto").

**Indirizzare verso il Piano B (voicemail realtime, conversazionale)** quando:

- **Volume chiamate** alto o con picchi frequenti che superano la capacità del front-office (es. concessionaria mono-marca con 80-150 chiamate/giorno, lancio nuovi modelli, fine campagne fiscali).
- **Budget disponibile**: il cliente capisce che la conversazione realtime ha un costo per minuto e non è uno scoglio. La frase tipica è "quanto costa? ok, e quanto recupero?".
- **Urgenze immediate** che non possono attendere callback: sinistro carrozzeria di un cliente assicurazione, urgenza stradale di un'officina con servizio H24, conferma appuntamento pre-stagione gomme dove il cliente che non ottiene risposta subito chiama il concorrente.
- **Apertura culturale** all'AI conversazionale: il decisore ha già usato assistenti vocali (Alexa, banche, compagnie aeree) e capisce che la voce automatica è uno standard di mercato, non una rivoluzione.
- **Esigenza di copertura totale fuori orario**: il cliente vuole che il telefono "risponda sempre", non solo "raccolga sempre". Il piano A risolve il secondo, il piano B risolve il primo.

**Quando proporre entrambi senza raccomandazione netta**:

- Cliente con volumi al confine (es. 50-80 chiamate/giorno, alcuni picchi).
- Cliente che chiede esplicitamente di valutare entrambi prima di scegliere.
- Multi-sede dove sedi diverse hanno volumi diversi (es. concessionaria con 3 filiali: B sulla sede grande, A sulle due piccole).

In questi casi: proposta scritta con tabella confronto a due colonne, raccomandazione esplicita scritta sotto la tabella, scelta finale al cliente. Mai una proposta a singolo piano se i numeri non lo giustificano in modo netto.

**Quando NON ha senso proporre nessuno dei due**:

- Cliente con <10 chiamate/giorno: ROI non difendibile per nessun piano. Suggerire una segreteria standard del centralino esistente.
- Cliente che cerca un agente conversazionale custom (es. che gestisca prenotazioni complesse o vendita inbound): non è il caso d'uso voicemail, va proposto un progetto enterprise secondo listino full (vedi `01-strategia-due-ganci.md`).
- Cliente con vincoli normativi forti non ancora pronti (es. studi legali con segreto professionale, finanza con MiFID): rimandare al gancio educazione o al catalogo full enterprise.

## Pain quantificabili (da usare in proposta)

Da chiedere in discovery e tradurre in numeri:
- Chiamate perse stimate al giorno × giorni lavorativi × valore medio cliente acquisito × tasso di conversione chiamata→cliente.
- Ore/settimana del titolare al telefono fuori orario × costo opportunità.
- Costo di una segretaria part-time (€800-1.200/mese netto a lui) vs canone Bintware. Confronto da fare con **entrambi i piani**: setup e canone sono identici (€1.500 + €250/mese), la differenza è solo che il Piano B aggiunge il consumo a minuto sulla conversazione realtime (€0,15-0,20/min), mentre il Piano A non ha costi variabili (elaborazione messaggi inclusa nel canone fino a 1.000 messaggi/mese di fair-use). Vedi `04-pricing-voicemail.md`.

Queste tre formule sono il cuore del calcolatore ROI da produrre come asset (vedi `07-asset-minimi.md`), che andrà sviluppato con **due colonne di output** (Piano A a costo fisso, Piano B con stima minuti × tariffa) per permettere il confronto in discovery.

## Segnali di NON-fit (da non inseguire)

- Aziende con call center strutturato (>10 operatori dedicati): hanno già IVR/ACD e cercano altro.
- Aziende con volume telefonico bassissimo (<10 chiamate/giorno): ROI non difendibile.
- Aziende che vogliono "rispondere automaticamente come un umano" senza voicemail (cioè un agente conversazionale che gestisce le chiamate in entrata in tempo reale): non è il caso d'uso voicemail, va proposto un progetto custom secondo listino enterprise.
- Aziende con vincoli normativi forti che ancora non sono pronte (es. studi legali con segreto professionale, finanza con MiFID): ciclo di compliance lungo, rimandare al gancio educazione o al catalogo full enterprise.

## Geografia

- Priorità Italia (lingua + GDPR + data residency UE è argomento facile).
- Toscana / Centro Italia come prima area: rete personale dei founder, possibilità di incontri di persona quando serve.
- Dopo i primi clienti: estendere via SEO senza vincoli geografici, ma mantenere come priorità le zone con presenza tech-friendly (Milano, Torino, Bologna, Roma).
