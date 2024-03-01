require('dotenv').config();

const express = require('express');
const cors = require('cors');

const database = require('./config/database');

const app = express();

// Middleware Connections
app.use(cors());
app.use(express.json());

// Routes

// Connection
const APP_PORT = process.env.APP_PORT || 3000;

database.connect((error) => {
  if (error) {
    console.log(error.message);
    return;
  }

  console.log('Database connected');

  app.listen(APP_PORT, () => {
    console.log('App running in port:', APP_PORT);
  });
});
