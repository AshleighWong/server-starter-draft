/*==================================================
/database/models/Campus.js

It defines the campus model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

// Define the campus model
const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },


  address: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },


  description: {
    type: Sequelize.TEXT,
    allowNull: true
  },


  imageUrl: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: "https://www.greatneck.k12.ny.us/cms/lib/NY02208059/Centricity/ModuleInstance/15004/sunset%20at%20north.jpeg"
  }

});

// Export the campus model
module.exports = Campus;