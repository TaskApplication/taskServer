const { DataTypes } = require('sequelize');
const sequelize = require('../../db');

const Task = sequelize.define('task', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  title: DataTypes.STRING,
  description: DataTypes.STRING,
});

module.exports = Task;
