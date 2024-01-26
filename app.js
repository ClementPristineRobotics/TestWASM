// Step 1: Import express
const express = require('express');
const app = express();
const port = 3000;

// Step 2: Serve static files including your .wasm file
app.use(express.static('public'));

// Step 3 & 4: Serve your HTML file that loads the WebAssembly
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});