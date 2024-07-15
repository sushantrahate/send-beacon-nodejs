const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware to set CORS headers
app.use(cors());

app.use(express.static(__dirname + '/'));

// Middleware to parse JSON data
app.use(bodyParser.json());

app.post('/sendBeacon', (req, res) => {
  console.log('Received beacon data:', req.body);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
