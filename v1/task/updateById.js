const Task = require('./Model');

function updateByIdTask(req, res) {
  // get params from request
  const { id } = req.params;
  const { title, description } = req.body;

  // update task in database by id
  Task.update({
    title,
    description
  }, {
    where: {
      id
    }
  }).then((task) => {
    res.send('Task updated successfully');
  }).catch((err) => {
    res.send('Task update Error');
  });

}

module.exports = updateByIdTask;
