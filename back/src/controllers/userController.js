const userService = require('../services/userService');

const create = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const response = await userService.create(name, email, password);

    res.status(200).json({ token: response });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const response = await userService.login(email, password);

    if (response.error) {
      return res.status(400).json({ error: response.error });
    }

    res.status(200).json({ token: response });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  create,
  login,
};
