const sequelize = require("../config/db");
const Admin = require("../models/Admin");
const Client = require("../models/Client");
const Slot = require("../models/Slot");

const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log("Database synchronized successfully");
  } catch (error) {
    console.log("An error occurred while synchronizing the database");
  }
};

syncDatabase();
