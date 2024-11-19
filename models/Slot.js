const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Client = require("./Client");

const Slot = sequelize.define("Slot", {
  slot: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  state: {
    type: DataTypes.ENUM("free", "booked", "occupied"),
    allowNull: false,
  },
  clientId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Client,
      key: "id",
    },
  },
});

Client.hasOne(Slot, { foreignKey: "clientId", as: "slot" });
Slot.belongsTo(Client, { foreignKey: "clientId", as: "client" });

module.exports = Slot;
