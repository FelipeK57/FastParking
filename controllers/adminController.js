const Admin = require("../models/Admin");
const Slot = require("../models/Slot");
const Client = require("../models/Client");

exports.register = async (req, res) => {
  try {
    console.log("Entrando...");
    const { name, email, password } = req.body;
    console.log("Datos: ", name, email, password);
    if (!name || !email || !password) {
      console.log("Faltan campos");
      return res.status(400).send({ error: "All fields are required" });
    }
    console.log("Creando admin...");
    const admin = await Admin.create({ name, email, password });
    console.log("Admin creado: ", admin);
    res.status(201).send({ admin: admin });
  } catch (error) {
    console.log("Error: ", error);
    res.status(400).send({ error: error.message });
  }
};

exports.getSlot = async (req, res) => {
  try {
    const { slotId } = req.body;
    const slot = await Slot.findByPk(slotId, {
      include: [
        {
          model: Client,
          as: "client",
          attributes: ["name", "email"],
        },
      ],
    });
    res.status(200).send({ slot: slot });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.confirmBooking = async (req, res) => {
  try {
    console.log("Entrando...");
    const { slotId } = req.body;
    console.log("Datos: ", slotId);
    const slot = await Slot.findByPk(slotId);
    console.log("Slot: ", slot);
    slot.update({ state: "occupied" });
    res.status(201).send({ message: "Slot occupied successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.finishBooking = async (req, res) => {
  try {
    const { slotId } = req.body;
    const slot = await Slot.findByPk(slotId);
    slot.update({ state: "free" });
    res.status(201).send({ message: "Booking finished successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
