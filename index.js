const express = require('express');
const app = express();
const PORT = 3002;

app.get('/', (req, res) => {
  res.send('👋 Hallo von Container Nummer 3!');
});

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
