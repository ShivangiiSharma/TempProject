const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Tell Node to serve all your static files (css, js, img)
app.use(express.static(path.join(__dirname, './')));

// Serve index.html when someone visits the IP
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Restaurant website running at http://localhost:${port}`);
});