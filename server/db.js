// db.js
const mysql = require('mysql2/promise'); // Using promise-based API for async/await

// Create a pool of connections (recommended for production)
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Mysql@123root10%',
  database: 'world',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;
