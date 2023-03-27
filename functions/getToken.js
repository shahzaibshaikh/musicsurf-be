const express = require('express');
const axios = require('axios');
const serverless = require('serverless-http');
const dotenv = require('dotenv');
const qs = require('qs');
const app = express();

dotenv.config();

// Replace with your own credentials
const PORT = process.env.PORT;
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

app.get('/', (req, res) => {
  res.send('MusicSurf Backend is up.');
});

app.get('/get-token', async (req, res) => {
  try {
    const data = {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      grant_type: 'client_credentials'
    };
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      qs.stringify(data),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );
    res.send(response.data);
  } catch (error) {
    res.send(error);
  }
});

module.exports.handler = serverless(app);
