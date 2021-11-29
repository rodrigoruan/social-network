const { schemaCreateUser } = require('../schemas/user');
const { verifyIfEmailExists } = require('../services/userService');

const validateCreateUser = async (req, res, next) => {
  const { email } = req.body;

  const { error } = schemaCreateUser.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const emailExists = await verifyIfEmailExists(email);

  if (emailExists) {
    return res.status(400).json({ error: 'Email Already in use' });
  }

  return next();
};

module.exports = {
  validateCreateUser,
};
