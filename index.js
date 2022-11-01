require('dotenv').config()
const express = require('express');
const routes = require('./routes');
const parseResponse = require('./parseResponse');
const sequelize = require('./db');
const cors = require('./cors');
const app = express();
const PORT = +process.env.PORT || 5000;

// routes
parseResponse(app);
cors(app);
routes(app);


(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
})();
