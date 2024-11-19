const authService = require("../services/authService");

exports.login = async (req, res) => {
  const { email, password, role } = req.body;

  try {
    const { user, token } = await authService.login(email, password, role);
    res.status(200).send({ user: user, token: token });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
