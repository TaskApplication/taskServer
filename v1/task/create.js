const Task = require('./Model');

async function createTask(req, res) {
  const { title, description } = req.body;

  const task = await Task.create({
    title,
    description,
    birthday: new Date(1980, 6, 20),
  });

  res.send('Task created 123' + name + user);

}

module.exports = createTask;
