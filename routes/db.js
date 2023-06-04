const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: '3.83.243.241',
  database: 'hackpnw',
  password: 'hackpnw',
  port: 5432,
});

client.connect()
  .then(() => {
    console.log('Connected to PostgreSQL');
  })
  .catch((err) => {
    console.error('Error connecting to PostgreSQL', err);
  });

module.exports = client;
