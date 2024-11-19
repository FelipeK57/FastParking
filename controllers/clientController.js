const Client = require("../models/Client");
const Slot = require("../models/Slot");

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const client = await Client.create({
      name,
      email,
      password,
    });
    res.status(201).send({ client: client });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.bookSlot = async (req, res) => {
  try {
    console.log("Entrando...");
    const { slotId } = req.body;
    const { userId } = req.body;
    console.log("Datos: ", slotId);
    const slot = await Slot.findByPk(slotId);
    console.log("Slot: ", slot);
    slot.update({ state: "booked" });
    slot.update({ clientId: userId });
    res.status(201).send({ message: "Slot booked successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.cancelBooking = async (req, res) => {
  try {
    const { slotId } = req.body;
    const slot = Slot.findByPk(slotId);
    slot.update({ state: "free" });
    res.status(201).send({ message: "Booking cancelled successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
