const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const { SECRET } = process.env;

const createToken = (name, email) => {
  const token = jwt.sign({ user: { name, email } }, SECRET);
  return token;
};

const verifyIfEmailExists = async (email) => User.findOne({ where: { email } });

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

const create = async (name, email, password) => {
  const hashedPassword = await hashPassword(password);
  await User.create({ name, email, password: hashedPassword });

  const token = createToken(name, email);
  return token;
};

module.exports = {
  create,
  verifyIfEmailExists,
};
