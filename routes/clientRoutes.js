const clientController = require("../controllers/clientController");
const express = require("express");
const router = express.Router();

router.post("/register", clientController.register);
router.post("/book", clientController.bookSlot);
router.post("/cancel", clientController.cancelBooking);

module.exports = router;
