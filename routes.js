// all routes are defined here
const v1TaskRouter  = require('./v1/task/v1TaskRoutes');

function routes(app){
  app.use('/v1/task', v1TaskRouter);
  // app.use('/v1/list', v1ListRouter);
}

module.exports = routes;
