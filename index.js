require('dotenv').config()
const express = require('express');
const routes = require('./routes');
const parseResponse = require('./v1/parseResponse');
const sequelize = require('./db');
const app = express();
const PORT = 5000;

// routes
parseResponse(app);
routes(app);



(async () => {
  try {
    await sequelize.authenticate();
    // await sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
})();
