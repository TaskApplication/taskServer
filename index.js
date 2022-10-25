const express = require('express');
const routes = require('./routes');
const parseResponse = require('./v1/parseResponse');
const sequelize = require('sequelize');
const app = express();
const PORT = 5000;


// routes
parseResponse(app);
routes(app);


const { Sequelize } = require('sequelize');

module.exports = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
  }
)

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
})();
