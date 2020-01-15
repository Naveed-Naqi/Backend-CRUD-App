const Sequelize = require('sequelize');
const db = require('../db');

const Team = db.define("team", {

  teamName: {
    type: Sequelize.STRING,
    allowNull: false
  },

  cityName: {
    type: Sequelize.STRING,
    allowNull: false
  },

  simpleName: {
    type: Sequelize.STRING,
    allowNull: false
  }

});

module.exports = Team;
