const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/adminController");

router.post("/register", AdminController.register);
router.get("/slot", AdminController.getSlot);
router.post("/confirm", AdminController.confirmBooking);
router.post("/finish", AdminController.finishBooking);

module.exports = router;
