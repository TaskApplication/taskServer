const Task = require('./Model');

function deleteByIdTask(req, res) {

  // get params from request
  const { id } = req.params;

  // delete task from database
  Task.destroy({
    where: {
      id: id
    }
  }).then((task) => {
    res.send('Deleted successfully');
  }).catch((err) => {
    res.send('Deleted failed');
  });

}

module.exports = deleteByIdTask;
