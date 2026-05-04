# Asset minimi di vendita

Cosa serve produrre per partire. Logica: pochi pezzi essenziali, fatti bene, riutilizzabili in più contesti. Niente brochure di 30 pagine, niente video promozionali, niente case study finti.

Il principio guida: **un asset deve servire a più di una situazione**. Un one-pager che non ha senso in più di un contesto non vale il tempo di produrlo.

## Asset essenziali (priorità 1, da produrre subito)

### 1. Landing page settoriale "Voicemail aziendale"

**Cosa**: pagina dedicata sul sito Bintware.com, URL `/voicemail-aziendale` (o variante coerente con la struttura URL — vedi `docs/seo/`).

**Contenuto** (struttura consigliata, con presentazione esplicita dei due piani):
- Hero: una frase secca sul pain ("Non perdere più chiamate fuori orario, con un sistema che capisce e prioritizza i messaggi") + CTA discovery call.
- 3 problemi concreti che risolve (chiamate perse, fuori orario, filtraggio urgenze).
- **Sezione "Due livelli, scelta consapevole"** — è il cuore della pagina e riflette il modello commerciale (vedi `01-strategia-due-ganci.md`):
  - **Setup e canone identici per entrambi i piani**: €1.500 una tantum + €250/mese. Il cliente non sceglie tra "economico" e "caro", sceglie tra "la stessa infrastruttura usata in due modi diversi".
  - **Piano A — Voicemail analisi (asincrona)**: il chiamante lascia un messaggio, voi ricevete un ticket strutturato. Per chi vuole "una segreteria evoluta che capisce chi ha chiamato e perché". Tutto incluso nel canone, fino a 1.000 messaggi/mese di fair-use. Niente costi a consumo.
  - **Piano B — Voicemail realtime (conversazionale)**: l'AI risponde dal primo squillo, dialoga col chiamante, conferma appuntamenti. Per chi non può permettersi di perdere chiamate nei picchi o di far attendere il chiamante. Stesso setup e canone, in più €0,15-0,20/min sulla conversazione effettiva.
  - **Tabella confronto** affiancata, con riga "quando ha senso questo piano" che riprende i criteri da `02-icp-voicemail.md` (volume, picchi, urgenze, cultura AI). Da NOTARE: la riga "budget" in tabella va presentata onestamente — A costa di meno solo se i volumi voicemail sono nella fascia di fair-use; per chi va sopra, A e B convergono come costo annuale.
  - **Niente svalutazione di un piano per giustificare l'altro**: entrambi hanno valore autonomo. Frasi come "il piano A è limitato/passivo" o "solo il B è la soluzione vera" sono vietate (vedi `01-strategia-due-ganci.md` per il razionale).
- 3 schermate / mockup di come arriva il messaggio al titolare (email + WhatsApp + dashboard) — vanno bene per entrambi i piani, è il backend di analisi che è comune.
- Sezione "Funziona col tuo centralino" con loghi compatibili (3CX, Wildix, NFON, etc.) — vale per entrambi i piani.
- Claim differenziante trasversale ai due piani: "Il servizio non si spegne quando superi una soglia, ricevi un avviso e decidi tu" — applicato sia ai messaggi del Piano A sia ai minuti del Piano B.
- 5-7 FAQ (privacy, cancellazione, lingue supportate, integrazione, supporto, "qual è il piano giusto per me", "posso passare da A a B in un secondo momento").
- CTA finale: "Prenota una call di 30 minuti, gratis, capiamo insieme quale dei due piani ha più senso per voi."

**Tono**: pragmatico, niente "AI" come slogan ma esplicitato per spiegare il Piano B (vedi `02-icp-voicemail.md` sezione linguaggio), lessico imprenditoriale.

**Priorità**: massima. Senza questa pagina, gli articoli del blog non hanno una destinazione di conversione, e la trasparenza dei due piani non viene comunicata in inbound.

### 2. Landing page settoriale "Scuola / Educazione"

**Cosa**: pagina dedicata, URL `/scuola` o `/ai-per-la-scuola`.

**Contenuto**:
- Hero: "L'AI che restituisce tempo a chi educa, senza prendere decisioni al posto degli educatori."
- 3 casi d'uso prioritari (osservazioni BES, verbali, comunicazioni famiglie) ognuno con un esempio concreto e tempi prima/dopo.
- Sezione su "Cosa NON fa": elenco esplicito di cosa l'AI non fa (es. non valuta studenti, non sostituisce il professionista, non fa diagnosi). Costruisce fiducia.
- Sezione "GDPR e AI Act": data residency UE, schema DPIA disponibile, conformità AI Act per casi d'uso educativi.
- Profilo del fit (per chi è: paritarie, cooperative; per chi non è: scuole d'infanzia piccole, università).
- Pricing: rimando al listino del sito (vedi `04-pricing-voicemail.md` per il principio del consumo trasparente, valido anche per la scuola).
- CTA: "Prenota un Architecture Review gratuito di 2 ore (con il tuo referente privacy se ne avete uno)".

**Tono**: pacato, normativo, etico. Niente tecnicismi nella prima parte. Niente promesse di "rivoluzione".

### 3. One-pager PDF "Voicemail"

**Cosa**: 1 pagina, PDF, formato A4 verticale. Si manda via email post-discovery, si lascia a fine demo, si stampa.

**Contenuto**:
- Logo + intestazione.
- "Cosa fa" in 3 righe (a livello di prodotto, comune ai due piani: chiamate non perse, messaggi strutturati, integrazione col centralino).
- Riga prezzo trasversale: **"Setup €1.500 una tantum + Canone €250/mese — uguali per entrambi i piani"**. È un punto di forza, non un dettaglio: si comunica subito che il cliente non sta scegliendo tra "economico" e "caro".
- **Tabella confronto a due colonne — Piano A vs Piano B**: con righe "Cosa cambia per chi chiama" / "Cosa cambia per voi" / "Cosa è incluso" / "Cosa si paga in più" / "Quando ha senso". È il cuore visivo dell'one-pager.
- Riga "Cosa è incluso" Piano A: tutta l'elaborazione dei messaggi, fair-use 1.000/mese.
- Riga "Cosa si paga in più" Piano A: niente — il canone copre tutto.
- Riga "Cosa è incluso" Piano B: tutto quello del Piano A, più la conversazione realtime.
- Riga "Cosa si paga in più" Piano B: €0,15/min (standard) o €0,20/min (con post-analisi) sui minuti di conversazione effettiva.
- Mockup visuale (stesso della landing) — un solo mockup va bene perché il backend di analisi è comune.
- Claim trasversale: "Niente cap automatico in nessuno dei due piani: avvisi di soglia, conversazione esplicita se il volume cresce, il servizio non si spegne mai."
- "Ti contattiamo entro 24h" + email + telefono + link calendar.
- Footer: P.IVA, sede, dichiarazione data residency UE.

**Strumento di produzione**: Google Slides → export PDF, oppure Canva. Niente InDesign per ora.

**Variante "ridotta" se serve**: se il cliente in discovery ha mostrato fit netto su un piano (e il piano è già stato concordato verbalmente), si può mandare una versione one-pager dedicata al solo piano scelto, ma **mai** prima della proposta scritta che include entrambi. La trasparenza preventiva è il principio.

### 4. One-pager PDF "Bintware per la scuola"

**Cosa**: 1-2 pagine, PDF.

**Contenuto**:
- Cover con claim e immagine pertinente (ambiente educativo, niente robot).
- 4 casi d'uso con tempi e benefici (osservazione BES, verbale, comunicazione, onboarding nuovo educatore).
- Box GDPR + AI Act (3 righe, lingua semplice).
- "Come iniziamo": Architecture Review → MVP → produzione, con tempi indicativi.
- Riferimenti contatto.
- NESSUN prezzo specifico (la scuola compra custom, vedi listino full).

### 5. Calcolatore ROI semplice (Voicemail) — due colonne, un foglio

**Cosa**: foglio Google condiviso, link in sola lettura, copia-modifica per ogni cliente. Una sola scheda, due colonne di output (Piano A | Piano B), così il cliente vede il confronto sullo stesso input.

**Input** (3-4 campi, comuni ai due piani):
- Numero chiamate medie/giorno
- Stima % chiamate perse oggi
- Valore medio cliente acquisito × tasso conversione chiamata→cliente
- (Aggiuntivo per Piano B) Stima durata media chiamata in minuti — se non si conosce, default 1.5 min

**Output a due colonne**:

Per il **Piano A — voicemail analisi**:
- Numero stimato di messaggi voicemail/mese (= chiamate perse × 60-70% lasciano messaggio).
- Verifica fair-use: se i messaggi/mese stimati restano sotto 1.000, il canone copre tutto. Se sopra, segnalare al cliente che si discuterà un canone adeguato dal day-1.
- Costo Bintware mensile = €250 fissi (entro fair-use).
- Costo Bintware annuale = €1.500 setup + €3.000 canone = €4.500 (entro fair-use).
- Recupero atteso (al 30% di richiamati con esito positivo, al 50%, al 70%).
- Tempo di rientro investimento (mesi).

Per il **Piano B — voicemail realtime**:
- Minuti AI/mese stimati = chiamate gestite × durata media.
- Costo Bintware mensile = €250 + (minuti × €0,15 o €0,20).
- Costo Bintware annuale = €1.500 + 12 × costo mensile.
- Recupero atteso (al 50%, al 70%, al 90% — la conversazione realtime ha tassi di recupero più alti perché evita drop-off).
- Tempo di rientro investimento (mesi).

**Riga finale**: "Quale dei due ha senso per voi?" con regola sintetica derivata dai criteri di `02-icp-voicemail.md` (es. "se i picchi superano X, il piano B; sotto, il piano A"). Differenziale costo annuale Piano A vs Piano B = il consumo a minuto del Piano B nei tuoi mesi tipici. Mostrarlo in chiaro.

Si compila INSIEME al cliente in discovery, condividendo lo schermo. È più potente di qualunque slide. La compilazione doppia è l'occasione concreta per **mostrare la trasparenza**: il cliente vede entrambe le proiezioni e capisce sui suoi numeri quale piano ha senso.

### 6. Deck base (8-10 slide) per presentazioni

**Cosa**: presentazione condivisibile via Meet/Zoom o stampabile. Riutilizzabile in entrambi i settori, con uno slide di "ramo" che cambia.

**Struttura**:
1. Cover — Bintware, in una frase.
2. Chi siamo (2 founder, 30+3 anni esperienza, GCP partner).
3. Il problema (slide variabile: voicemail vs scuola — due versioni preparate).
4. La nostra soluzione, in italiano semplice.
5. Architettura tecnica (1 slide per chi vuole capire il dietro le quinte: GCP, `europe-west8`, Vertex AI). Si salta se l'audience è non-IT.
6. Casi d'uso (1-2 esempi concreti).
7. Pricing (slide variabile: per voicemail, **due slide o una slide a due colonne** che mostrano Piano A e Piano B affiancati con principio "no cap automatico" trasversale; per scuola, custom enterprise).
8. Come si parte (Architecture Review → MVP → produzione).
9. Privacy / GDPR / AI Act.
10. Prossimi passi + contatti.

**Strumento**: Google Slides.

## Asset di priorità 2 (da produrre dopo i primi 1-2 contratti)

- **Case study anonimo del primo cliente** voicemail: 1 pagina, numeri reali, nome del cliente eventualmente sostituito da settore ("Una concessionaria del Centro Italia con 3 sedi"). Si pubblica come articolo del blog + one-pager PDF condivisibile.
- **Case study educazione** dopo il primo MVP scuola.
- **Modello DPA** (Data Processing Agreement) standard, controllato da legale, da allegare alle proposte. Necessario per scuola, utile per voicemail in settori sensibili.
- **Modello DPIA** (Data Protection Impact Assessment) bozza per il caso d'uso educazione/minori. Strumento utile per la prima trattativa con scuola, fa risparmiare 2 ore di obiezione.
- **FAQ tecniche** dedicate (1 pagina su sito): integrazione, latenza, lingue, formati audio. Risponde a IT del cliente e abbassa carico di domande in pre-vendita.

## Asset di priorità 3 (NON produrre nei primi 6 mesi)

Vanno esplicitamente NON fatti, per non disperdere energie:

- Brochure aziendale generale di 8+ pagine (nessuno la legge).
- Video corporate (costoso, non scala, invecchia subito).
- Whitepaper tecnico generalista "Cosa è l'AI vocale" (lo fa già chiunque, non aggiunge valore).
- Webinar dal vivo (richiede pubblico già acquisito, che ancora non c'è).
- Pagina "Partner" o "Programma referral": prima serve un prodotto e clienti, poi i partner.
- Profilo aziendale LinkedIn pieno di post motivazionali: meglio post tecnici sui profili personali dei founder (vedi `05-canali.md`).
- Loghi clienti finti o "as featured in" senza fonte: mai, distrugge credibilità per sempre.

## Stack di produzione minimo

Per non sprecare tempo a scegliere strumenti:

- **Documenti scrivibili**: Google Docs (proposte, DPA bozza, calcolatori).
- **Slide**: Google Slides (deck, one-pager esportati in PDF).
- **Grafica leggera**: Canva Free (mockup, illustrazioni semplici).
- **Calcolatori**: Google Sheets.
- **Calendar booking**: già attivo (Google Calendar, link nel sito).
- **Conservazione asset**: Google Drive cartella `Bintware/Vendita/` con sottocartelle per settore.
- **Knowledge base condivisa con AI**: NotebookLM con tutti questi documenti più i file `docs/commerciale/*.md` caricati. È il "cervello secondario" su cui fare brainstorm pre-call e bozze veloci.

Niente CRM nei primi 6 mesi. Un foglio Google con 8 colonne (data, lead, contesto, settore, stato, prossima azione, data prossima azione, note) è sufficiente fino a 30-50 lead in pipeline.

## Sequenza di produzione consigliata

In quale ordine produrre, per non bloccarsi:

1. **Settimana 1**: landing `/voicemail-aziendale` + one-pager PDF Voicemail + calcolatore ROI.
2. **Settimana 2**: deck base (versione voicemail) + struttura proposta scritta come template Google Docs.
3. **Settimana 3-4**: landing `/scuola` + one-pager PDF educazione.
4. **Settimana 5-6**: deck versione scuola + bozza DPIA per educazione.
5. **Da settimana 7 in poi**: rotazione di articoli blog secondo `05-canali.md`. La fase di asset è chiusa, parte la fase di nutrizione del canale inbound.

Tempo totale stimato per la fase asset: **4-6 settimane** se fatto in serale/parallelo a delivery tecnica, **2-3 settimane** in pieno focus.

Dopo aver chiuso il primo cliente, prima ancora di produrre il case study, pubblicare un breve post sui profili LinkedIn personali dei founder ("abbiamo mandato in produzione il primo cliente di voicemail intelligente") senza nome, senza dettagli, senza foto: stabilisce un riferimento temporale pubblico e crea curiosità organica.
