const { Client } = require('pg');
const client = new Client({
    connectionString: "postgressql://postgres:12345@localhost:5432/fishes"
});

client.connect();

module.exports = client;