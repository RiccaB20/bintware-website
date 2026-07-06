# Campagna 1 — Voicemail aziendale su Google Ads

Prima campagna a pagamento di Bintware. Scritta per chi non ha esperienza di Google Ads: ogni termine tecnico è spiegato la prima volta che compare.

## Decisioni prese (2026-07-06)

- **Budget**: ~€300/mese → €10/giorno.
- **Offerta spinta**: voicemail aziendale → landing `voicemail-aziendale.html`.
- **Zona**: tutta Italia, con priorità Toscana (offerte rialzate ~+25%).
- **Obiettivo misurabile**: call prenotate dal link Google Calendar. Non "visite al sito": le visite non pagano le bollette.

## 1. Tipo di campagna: solo Rete di Ricerca

*Rete di Ricerca* = i tuoi annunci compaiono solo quando qualcuno **cerca attivamente** su Google (es. "segreteria telefonica aziendale"). È l'unico formato sensato con budget piccolo: intercetti chi ha già il problema.

Da **rifiutare** in fase di creazione (Google li propone con insistenza):
- **Performance Max / Display / YouTube**: mostrano banner a gente che non sta cercando nulla. Con €10/giorno bruciano il budget senza risultati.
- **"Partner di ricerca" e "Rete Display" spuntati di default**: togliere entrambe le spunte.
- **Parole chiave a corrispondenza generica suggerite da Google**: vedi punto 3.

## 2. Struttura: 1 campagna, 2 gruppi di annunci

Un *gruppo di annunci* tiene insieme parole chiave affini e gli annunci che rispondono a quelle ricerche.

- **Gruppo A — "Segreteria aziendale"**: chi cerca lo strumento.
- **Gruppo B — "Chiamate perse"**: chi cerca il problema.

## 3. Parole chiave

Usare la **corrispondenza a frase** (si scrive tra virgolette in Google Ads: `"parola chiave"`). Significa: l'annuncio esce solo se la ricerca contiene quella frase o una variante stretta. La *corrispondenza generica* (senza virgolette) fa uscire l'annuncio per ricerche vagamente collegate ed è il modo più rapido di sprecare €300.

**Gruppo A:**
- "segreteria telefonica aziendale"
- "segreteria telefonica intelligente"
- "voicemail aziendale"
- "risponditore automatico aziendale"
- "centralino virtuale con ai"
- "centralino ai per aziende"
- "segreteria telefonica con intelligenza artificiale"

**Gruppo B:**
- "non perdere chiamate clienti"
- "chiamate perse azienda"
- "gestione chiamate fuori orario"
- "risposta automatica chiamate azienda"

### Parole chiave negative (fondamentali)

*Parole chiave negative* = ricerche per cui NON vuoi comparire. Senza queste, il budget se ne va in click di privati che cercano la segreteria del proprio cellulare. Inserire a livello di campagna:

```
gratis, gratuita, app, iphone, android, personale, privato, cellulare,
tim, vodafone, windtre, wind, tre, fastweb, iliad, ho mobile, kena,
disattivare, disattivazione, numero, 4444*, come funziona la segreteria,
lavoro, offerte di lavoro, stipendio
```

## 4. Annunci (testi pronti)

Google Ads chiede più *titoli* (max 30 caratteri) e *descrizioni* (max 90) e li combina da solo. Il prezzo nel titolo è voluto: filtra i curiosi senza budget prima che clicchino (ogni click costa).

**Titoli:**
1. `Segreteria Aziendale con AI`
2. `Mai Più Chiamate Perse`
3. `Ogni Chiamata, un Report`
4. `Risponde, Capisce, Riassume`
5. `Setup Trasparente: €1.500`
6. `Dati in UE · GDPR`
7. `Studio Italiano, No Call Center`

**Descrizioni:**
1. `La voicemail intelligente risponde, trascrive e ti manda un report. Prenota una call.`
2. `Chi chiama fuori orario non si perde: trascrizione, categoria, priorità di richiamo.`
3. `Su Google Cloud, dati in datacenter di Milano. Prezzi pubblici, preventivo sul caso reale.`
4. `Pensata per concessionarie, officine e PMI che vivono di telefonate. Demo su caso reale.`

**URL finale**: `https://bintware.com/voicemail-aziendale.html` (mai la home: chi clicca deve atterrare esattamente su ciò che ha cercato).

## 5. Zona e lingua

- Località: Italia. Poi aggiungere la Toscana come località separata con **aggiustamento offerte +25%** (= disposti a pagare un click il 25% in più se arriva dalla Toscana, dove Enrico può chiudere di persona).
- Impostazione località su **"Presenza"** (persone che si trovano lì), non "Presenza o interesse".
- Lingua: italiano.

## 6. Tracciamento della conversione

- GA4 è già attivo (`G-8D715JET3M`). Da fare: creare in GA4 un **evento** sul click del link "Prenota la call" (calendar.app.google) e marcarlo come *conversione*, poi collegare GA4 a Google Ads e importare la conversione.
- **Avvertenza**: il sito usa Consent Mode con default "denied" (GDPR): chi rifiuta i cookie non viene contato. I numeri saranno sottostimati — vanno letti come tendenza, non come verità assoluta. Il numero vero da guardare è: **quante call compaiono sul calendario**.
- Backup a costo zero: quando arriva una call da fonte sconosciuta, Enrico chiede "come ci ha trovato?" e lo annota.

## 7. Aspettative realistiche e criteri di stop

Con €300/mese in questa nicchia (click stimato €1–3):
- ~100–200 click/mese sulla landing
- 2–5% prenota una call → **2–6 call/mese** nello scenario buono
- Un solo cliente chiuso (€1.500 + canone) ripaga 5+ mesi di campagna

**Criteri decisi prima di partire (non negoziabili a posteriori):**
- **Dopo 2 settimane**: se il costo per click supera €4 → rivedere parole chiave, non alzare il budget.
- **Dopo 6 settimane (~€450 spesi)**: 0 call prenotate → **stop campagna** e revisione (landing? parole chiave? offerta?). 1 call → proseguire altre 4 settimane. 2+ call → funziona, proseguire e valutare +budget.

## 8. Routine settimanale (30 minuti, ogni lunedì)

1. Google Ads → Parole chiave → **"Termini di ricerca"**: mostra le ricerche *reali* che hanno fatto scattare l'annuncio.
2. Ogni ricerca fuori bersaglio → aggiungerla alle parole chiave negative.
3. Annotare: spesa settimana, click, call prenotate.

Questa singola abitudine determina più del 50% del risultato della campagna.

## Cosa NON fa questa campagna

- Non sostituisce l'attività diretta di Enrico: con questo budget le ads sono un rubinetto piccolo. Telefonate e visite alle concessionarie toscane restano il canale principale (l'articolo `blog/voicemail-concessionarie-auto.html` è il materiale da lasciare/inviare dopo il contatto).
- Non copre le altre offerte (sanità, AlloyDB): una campagna alla volta finché il budget non cresce.
