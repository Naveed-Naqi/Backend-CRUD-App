const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define("student", {

  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    args: {
        unique: true,
        message: "This student already exists"
    },
    allowNull: false
  },

  gpa: {
      type: Sequelize.FLOAT,
      allowNull: false
  }

});

module.exports = Student;
