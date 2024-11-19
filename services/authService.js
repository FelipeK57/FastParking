const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Admin = require("../models/Admin");
const Client = require("../models/Client");
require("dotenv").config();

const generateToken = (user, role) => {
  return jwt.sign({ id: user.id, role }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

exports.login = async (email, password, role) => {
  let user;

  if (role === "admin") {
    user = await Admin.findOne({ where: { email } });
  } else if (role === "client") {
    user = await Client.findOne({ where: { email } });
  } else {
    throw new Error("Invalid role");
  }

  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error("Invalid email or password");
  }

  const token = generateToken(user, role);
  return { user, token };
};
