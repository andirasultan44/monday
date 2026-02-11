require('dotenv').config();

const config = {
  port: parseInt(process.env.PORT, 10) || 3001,

  db: {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS ?? '',
    database: process.env.DB_NAME || 'edu_course',
    port: parseInt(process.env.DB_PORT, 10) || 3306,
  },
};

module.exports = config;
