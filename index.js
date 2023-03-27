const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

// Replace with your own credentials
const PORT = process.env.PORT;
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

app.get('/', (req, res) => {
  res.send('MusicSurf Backend is up.');
});

app.listen(PORT || process.env.PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
