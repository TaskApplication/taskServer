const Task = require('./Model');

function getByIdTask(req, res) {

  // get params from request
  const { id } = req.params;

  // get task from database
  Task.findOne({
      where: {
        id: id
      }
    }
  ).then((task) => {
      res.json(task);
    }
  ).catch((err) => {
    res.send('GetById failed');
  });
}

module.exports = getByIdTask;
