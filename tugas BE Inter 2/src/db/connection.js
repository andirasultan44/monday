const mysql = require('mysql2/promise');
const config = require('../config');

let db;

(async () => {
  try {
    db = await mysql.createConnection({
      host: config.db.host,
      user: config.db.user,
      password: config.db.password,
      database: config.db.database,
      port: config.db.port,
    });
    console.log('✅ Connected to MySQL database');
  } catch (err) {
    console.error('❌ Database connection failed:', err.message);
  }
})();

module.exports = {
  query: (...args) => db.query(...args),
};
