const express = require("express");
const router = express.Router();
const slotController = require("../controllers/slotController");
const authMiddleware = require("../middlewares/authMiddleware")

router.post("/create", authMiddleware, slotController.create);
router.get("/slots", authMiddleware, slotController.getAll);

module.exports = router;
