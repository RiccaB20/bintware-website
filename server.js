const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Servi la cartella corrente come contenuti statici
app.use(express.static(__dirname));

// Gestisci tutte le richieste indirizzandole a index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Bintware Website in esecuzione su http://localhost:${PORT}`);
});
