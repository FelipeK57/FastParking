const express = require("express");
const AdminRoutes = require("./routes/adminRoutes");
const AuthRoutes = require("./routes/authRoutes");
const ClientRoutes = require("./routes/clientRoutes");
const SlotRoutes = require("./routes/slotRoutes");

const app = express();

app.use(express.json());
// Auth routes
app.use("/api/auth", AuthRoutes);
// Admin routes
app.use("/api/admin", AdminRoutes);
// Client routes
app.use("/api/client", ClientRoutes);
// Slot routes
app.use("/api/slot", SlotRoutes);
module.exports = app;
