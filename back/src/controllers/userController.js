const userService = require('../services/userService');

const create = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const response = await userService.create(name, email, password);

    res.status(200).json({ token: response });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  create,
};
