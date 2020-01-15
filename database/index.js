// Here, we can register our models and export our modified db instance so that it can be imported in the main app;

const db = require('./db');
require('../database/models');

module.exports = db;


//POINT A: Set up singleton database (no tables in it at this point. That is the feault behavior) db.js in this project
//POINT B: Writing and defining all the tabes you want to have eventually synched up to yor database. This is all our models files
//POINT C: Setting up associations. This is index.js in the models folder
//POINT D: Running all the above code.