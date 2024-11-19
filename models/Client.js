const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const bcrypt = require("bcryptjs");

const Client = sequelize.define("Client", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Client.beforeCreate(async (client) => {
  const salt = await bcrypt.genSalt(10);
  client.password = await bcrypt.hash(client.password, salt);
});

module.exports = Client;
