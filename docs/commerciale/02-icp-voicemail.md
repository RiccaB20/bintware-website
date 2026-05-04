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

**Espansione organica futura** (settori adiacenti, NON target attivi nei primi 12 mesi): gli stessi pattern di pain (chiamate perse, fuori orario, filtraggio urgenze) sono replicabili in altri settori. Vanno serviti se arrivano in inbound spontaneo dal blog o dal sito, ma non si producono contenuti o asset dedicati per loro:

- Studi professionali medio-piccoli (commercialisti, geometri, notai, consulenti del lavoro).
- Idraulici, elettricisti, manutentori, artigiani strutturati.
- Agenzie immobiliari.
- Hotel, B&B, strutture ricettive piccole-medie.
- Cliniche veterinarie, studi dentistici e poliambulatori privati (con cautela su data residency UE per dati sanitari).
- Servizi di assistenza domiciliare.

**Regola operativa**: se un lead di un settore non automotive arriva spontaneamente da SEO/blog o da rete personale, lo si serve normalmente con il listino del sito. Se per acquisirlo serve creare contenuti dedicati o asset settoriali, le energie restano sul mondo automotive fino alla chiusura dei primi 5-10 contratti.

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

**Da usare**:
- "Non perdere chiamate"
- "Rispondere fuori orario senza pagare uno stipendio"
- "Filtrare le urgenze vere dal rumore"
- "Report giornaliero dei messaggi sul telefono del titolare"
- "Si paga per quello che serve, niente abbonamenti telefonici aggiuntivi"
- "Funziona col centralino che avete già"

**Da evitare nelle prime conversazioni**:
- "Intelligenza artificiale", "AI", "LLM", "Vertex AI", "Google Cloud"
- "Trascrizione real-time", "speech-to-text", "NLP"
- "Multi-tenant", "data residency", "Vector DB"

Il termine "AI" può rientrare a discovery avanzata, quando il cliente capisce che dietro c'è qualcosa di più intelligente di una segreteria normale e lo chiede esplicitamente. Non è negato, è dosato.

## Pain quantificabili (da usare in proposta)

Da chiedere in discovery e tradurre in numeri:
- Chiamate perse stimate al giorno × giorni lavorativi × valore medio cliente acquisito × tasso di conversione chiamata→cliente.
- Ore/settimana del titolare al telefono fuori orario × costo opportunità.
- Costo di una segretaria part-time (€800-1.200/mese netto a lui) vs canone Bintware secondo listino del sito (€250/mese fissi + consumo a minuto, vedi `04-pricing-voicemail.md`).

Queste tre formule sono il cuore del calcolatore ROI da produrre come asset (vedi `07-asset-minimi.md`).

## Segnali di NON-fit (da non inseguire)

- Aziende con call center strutturato (>10 operatori dedicati): hanno già IVR/ACD e cercano altro.
- Aziende con volume telefonico bassissimo (<10 chiamate/giorno): ROI non difendibile.
- Aziende che vogliono "rispondere automaticamente come un umano" senza voicemail (cioè un agente conversazionale che gestisce le chiamate in entrata in tempo reale): non è il caso d'uso voicemail, va proposto un progetto custom secondo listino enterprise.
- Aziende con vincoli normativi forti che ancora non sono pronte (es. studi legali con segreto professionale, finanza con MiFID): ciclo di compliance lungo, rimandare al gancio educazione o al catalogo full enterprise.

## Geografia

- Priorità Italia (lingua + GDPR + data residency UE è argomento facile).
- Toscana / Centro Italia come prima area: rete personale dei founder, possibilità di incontri di persona quando serve.
- Dopo i primi clienti: estendere via SEO senza vincoli geografici, ma mantenere come priorità le zone con presenza tech-friendly (Milano, Torino, Bologna, Roma).
