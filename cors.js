const cors = require('cors');

const corsModule = (app) => {
  app.use(
    cors({
      origin: process.env.CLIENT_HOST,
      credentials: true,
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      preflightContinue: false,
    }),
  );
};

module.exports = corsModule;
