const express = require('express');
const bodyParser = require('body-parser');
const abcApp = express();
const port = 3000;

abcApp.use(bodyParser.json());

abcApp.post('/sendData', (req, res) => {
  const dataReceived = req.body;
  console.log('Data received in abc.js:', dataReceived);

  // Process the data or perform any required actions

  // Send a response back to cds.js
  res.json({ message: 'Data received successfully in abc.js' });
});

abcApp.listen(port, () => {
  console.log(`abc.js listening at http://localhost:${port}`);
});
