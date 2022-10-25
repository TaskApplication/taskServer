const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize('sqlite::memory:');

const Task = sequelize.define('Task', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  title: DataTypes.STRING,
  description: DataTypes.STRING,
});

module.exports = Task;
