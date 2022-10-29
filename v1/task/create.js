const Task = require('./Model');

async function createTask(req, res) {
  const { title, description } = req.body;

  const task = await Task.create({
    title,
    description,
    birthday: new Date(1980, 6, 20),
  }).then((task) => {
    console.log(task);
  }).catch((err) => {
    console.log(err);
  });

  res.send('Task created successfully');

}

module.exports = createTask;
