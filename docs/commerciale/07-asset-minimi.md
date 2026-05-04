# Asset minimi di vendita

Cosa serve produrre per partire. Logica: pochi pezzi essenziali, fatti bene, riutilizzabili in più contesti. Niente brochure di 30 pagine, niente video promozionali, niente case study finti.

Il principio guida: **un asset deve servire a più di una situazione**. Un one-pager che non ha senso in più di un contesto non vale il tempo di produrlo.

## Asset essenziali (priorità 1, da produrre subito)

### 1. Landing page settoriale "Voicemail aziendale"

**Cosa**: pagina dedicata sul sito Bintware.com, URL `/voicemail-aziendale` (o variante coerente con la struttura URL — vedi `docs/seo/`).

**Contenuto** (struttura consigliata):
- Hero: una frase secca sul pain ("Non perdere più chiamate fuori orario, con un sistema che capisce e prioritizza i messaggi") + CTA discovery call.
- 3 problemi concreti che risolve (chiamate perse, fuori orario, filtraggio urgenze).
- 3 schermate / mockup di come arriva il messaggio al titolare (email + WhatsApp).
- Sezione "Funziona col tuo centralino" con loghi compatibili (3CX, Wildix, NFON, etc.).
- Listino del sito ben visibile (€1.500 setup + €250/mese + €0,15 o €0,20/min consumo) con il claim differenziante: "il servizio non si spegne quando superi una soglia, ricevi un avviso e decidi tu".
- 5-7 FAQ (privacy, cancellazione, lingue supportate, integrazione, supporto).
- CTA finale: "Prenota una call di 30 minuti, gratis, capiamo se fa per te."

**Tono**: pragmatico, niente "AI" in evidenza, lessico imprenditoriale.

**Priorità**: massima. Senza questa pagina, gli articoli del blog non hanno una destinazione di conversione.

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
- "Cosa fa" in 3 righe.
- 3 bullet di benefici concreti (chiamate gestite fuori orario, riepilogo via WhatsApp, integrazione col centralino esistente).
- Mockup visuale (stesso della landing).
- Prezzo da listino: Setup €1.500 una tantum, Canone €250/mese fissi, Consumo €0,15/min (standard) o €0,20/min (con post-analisi). Niente cap automatico: avvisi di soglia configurabili dal cliente.
- "Ti contattiamo entro 24h" + email + telefono + link calendar.
- Footer: P.IVA, sede, dichiarazione data residency UE.

**Strumento di produzione**: Google Slides → export PDF, oppure Canva. Niente InDesign per ora.

### 4. One-pager PDF "Bintware per la scuola"

**Cosa**: 1-2 pagine, PDF.

**Contenuto**:
- Cover con claim e immagine pertinente (ambiente educativo, niente robot).
- 4 casi d'uso con tempi e benefici (osservazione BES, verbale, comunicazione, onboarding nuovo educatore).
- Box GDPR + AI Act (3 righe, lingua semplice).
- "Come iniziamo": Architecture Review → MVP → produzione, con tempi indicativi.
- Riferimenti contatto.
- NESSUN prezzo specifico (la scuola compra custom, vedi listino full).

### 5. Calcolatore ROI semplice (Voicemail)

**Cosa**: foglio Google condiviso, link condivisibile in sola lettura, copia-modifica per ogni cliente.

**Input** (3 campi):
- Numero chiamate medie/giorno
- Stima % chiamate perse
- Valore medio cliente acquisito × tasso conversione chiamata→cliente

**Output**:
- Mancato fatturato mensile stimato.
- Recupero atteso con voicemail intelligente (al 30% di recupero, al 50%, al 70% — tre scenari).
- Confronto con costo Bintware secondo listino del sito (€1.500 setup + €250/mese + stima consumo a minuto basata sui volumi attuali del cliente).
- Tempo di rientro investimento (mesi).

Si compila INSIEME al cliente in discovery, condividendo lo schermo. È più potente di qualunque slide.

### 6. Deck base (8-10 slide) per presentazioni

**Cosa**: presentazione condivisibile via Meet/Zoom o stampabile. Riutilizzabile in entrambi i settori, con uno slide di "ramo" che cambia.

**Struttura**:
1. Cover — Bintware, in una frase.
2. Chi siamo (2 founder, 30+3 anni esperienza, GCP partner).
3. Il problema (slide variabile: voicemail vs scuola — due versioni preparate).
4. La nostra soluzione, in italiano semplice.
5. Architettura tecnica (1 slide per chi vuole capire il dietro le quinte: GCP, `europe-west8`, Vertex AI). Si salta se l'audience è non-IT.
6. Casi d'uso (1-2 esempi concreti).
7. Pricing (slide variabile: listino voicemail con principio "no cap automatico" per il mondo automotive vs custom enterprise per il mondo scuola).
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
