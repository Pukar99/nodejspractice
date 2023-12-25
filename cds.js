const express = require('express');
const bodyParser = require('body-parser');
const cdsApp = express();
const port = 3001;

cdsApp.use(bodyParser.json());

// Function to send data to abc.js
const sendDataToAbc = async (data) => {
  try {
    const response = await fetch('http://localhost:3000/sendData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    console.log('Response from abc.js:', responseData);
  } catch (error) {
    console.error('Error sending data to abc.js:', error.message);
  }
};

// Example data to be sent
const exampleData = {
  key: 'value',
  number: 42,
};

// Send data to abc.js
sendDataToAbc(exampleData);

cdsApp.listen(port, () => {
  console.log(`cds.js listening at http://localhost:${port}`);
});
