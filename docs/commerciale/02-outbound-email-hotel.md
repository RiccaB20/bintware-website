# Outbound hotel — Regole per email personalizzate

Procedura da seguire quando vengono passati indirizzi web di hotel da contattare. Obiettivo: per ogni hotel produrre un'email personalizzata pronta da inviare + una nota telefonica per Enrico.

## Input atteso

Una lista di URL di siti di hotel. Opzionali ma utili: nome del titolare/direttore, come è stato scelto l'hotel (zona, conoscenza, segnalazione).

## Passo 1 — Analisi del sito dell'hotel

Visitare il sito e ricavare questi segnali. Ogni segnale mappa su un aggancio specifico:

| Segnale sul sito | Aggancio per l'email |
|---|---|
| Sito multilingue (DE/EN/FR/…) | Ospiti stranieri al telefono → voicemail multilingue / interprete |
| Località stagionale (mare, lago, montagna) | Picchi di chiamate in alta stagione |
| Nessuna menzione di reception 24h / "portineria fino alle 22" | Chiamate notturne scoperte |
| Telefono in evidenza / "chiamaci per prenotare" | Le prenotazioni telefoniche contano → ogni chiamata persa pesa |
| Struttura indipendente (non catena) | Prenotazione diretta vs commissioni Booking/OTA |
| Molti servizi (ristorante, spa, transfer) | Richieste ripetitive che saturano il banco |
| Recensioni che citano cortesia/accoglienza | Leva sulla qualità percepita dall'ospite anche al telefono |

Annotare anche: nome esatto della struttura, località, dimensione stimata (n. camere se indicato), mercati esteri evidenti (lingue del sito, mercati citati).

## Passo 2 — Struttura dell'email

**Regole fisse:**
- Massimo ~120 parole, 4-6 frasi. Niente allegati, mai.
- **Un solo aggancio personalizzato**, preso dal loro sito (Passo 1). Non elencare tutti i problemi possibili: uno solo, quello più evidente per quella struttura.
- **Un solo link**: `https://bintware.com/blog/voicemail-hotel-multilingue.html` (l'articolo fa il lavoro di spiegazione — l'email no).
- Chiusura con una domanda semplice a cui è facile rispondere, non una richiesta di appuntamento.
- **Niente prezzi in email.** Se il prezzo emerge dopo, solo le voci pubbliche: setup €1.500 e ~€0,25/min. Il canone mensile si presenta esclusivamente all'incontro.
- Niente gergo tecnico (no "SIP", no "Vertex", no "LLM"): si scrive a un albergatore, non a un IT.
- Lingua: italiano. Inglese solo se la proprietà è chiaramente straniera.

**Scheletro:**

```
Oggetto: [specifico, minuscolo, niente maiuscole urlate — es. "le chiamate serali al [nome hotel]"]

Buongiorno [nome se noto, altrimenti "Buongiorno"],

[1 riga: dettaglio vero notato sul LORO sito — dimostra che non è un'email fotocopia]
[1-2 righe: il problema collegato, in termini di prenotazioni/ospiti, non di tecnologia]
[1 riga: cosa facciamo, in una frase piana + link all'articolo]
[1 riga: domanda di chiusura semplice]

Enrico Baldacci
Bintware — studio AI, Google Cloud
+39 353 410 5285 · enricobaldacci57@gmail.com
bintware.com
```

## Passo 3 — Nota telefonica per Enrico

Per ogni hotel, insieme all'email, produrre 3-4 righe per la chiamata di follow-up (2-3 giorni dopo l'invio):
- L'aggancio usato nell'email (per riprenderlo: "le ho scritto a proposito di…")
- 1-2 domande di discovery adatte a quella struttura (es. "chi risponde al telefono dopo le 22?", "quanta clientela tedesca avete?")
- L'obiezione più probabile per quel profilo e la risposta in una riga

## Regole di prudenza (GDPR e reputazione)

- Inviare a **indirizzi aziendali generici** (info@, booking@, reception@) o a contatti dichiarati sul sito. Evitare indirizzi personali trovati altrove.
- Invii **pochi e mirati**: lotti piccoli (5-15 alla volta), mai invii massivi identici.
- In coda all'email va bene una riga di cortesia tipo: "Se preferisce non ricevere altre email da parte nostra, basta rispondere e non la disturbo più."
- Ogni risposta negativa va rispettata subito e annotata: mai ricontattare chi ha detto no.

## Cosa NON fare

- Non allegare presentazioni o PDF al primo contatto (la presentazione si usa dopo, in call o incontro).
- Non promettere integrazioni con PMS/channel manager specifici: si valutano caso per caso in setup.
- Non citare altri clienti hotel finché non ne esistono di reali.
