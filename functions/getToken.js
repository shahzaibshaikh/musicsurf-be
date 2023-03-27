const express = require('express');
const axios = require('axios');
const serverless = require('serverless-http');
const dotenv = require('dotenv');
const qs = require('qs');
const app = express();
const router = express.Router();

dotenv.config();

app.use(cors()); // enable CORS for all routes

// Replace with your own credentials
const PORT = process.env.PORT;
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

router.get('/', (req, res) => {
  res.send('MusicSurf Backend is up.');
});

router.get('/get-token', async (req, res) => {
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

app.use('/', router);

module.exports.handler = serverless(app);
