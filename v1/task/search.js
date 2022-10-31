const Task = require('./Model');

function search(req, res) {


  // get all tasks from database and return them as JSON
  Task.findAll().then((tasks) => {
    res.json(tasks);
  });



}

module.exports = search;
