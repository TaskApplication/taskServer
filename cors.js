const cors = require('cors');

const corsModule = (app) => {
  app.use((req, res, next) => {
    // eslint-disable-line consistent-return
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    );
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    // if (req.method === 'OPTIONS') {
    //   return res.status(200).json({});
    // }
    next();
  });
};

module.exports = corsModule;
