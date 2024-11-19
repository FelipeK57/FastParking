const Slot = require("../models/Slot");

exports.create = async (req, res) => {
  try {
    const { slot } = req.body;
    const state = "free";
    const newSlot = await Slot.create({
      slot,
      state,
    });
    res.status(201).send({ slot: newSlot });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const slots = await Slot.findAll();
    res.status(200).send({ slots: slots });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
