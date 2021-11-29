const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const { SECRET } = process.env;

const createToken = (name, email, id) => {
  const token = jwt.sign({ user: { name, email, id } }, SECRET);
  return token;
};

const verifyIfEmailExists = async (email) => User.findOne({ where: { email } });

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

const decryptPassword = async (password, userPassword) => {
  const decryptedPassword = await bcrypt.compare(password, userPassword);
  return decryptedPassword;
};

const create = async (name, email, password) => {
  const hashedPassword = await hashPassword(password);
  const { id } = await User.create({ name, email, password: hashedPassword });

  const token = createToken(name, email, id);
  return token;
};

const login = async (email, password) => {
  const defaultError = { error: 'Usuário ou senha incorretos' };
  const user = await verifyIfEmailExists(email);

  if (!user) return defaultError;

  const { password: userPassword, name, id } = user;
  const validPassword = await decryptPassword(password, userPassword);

  if (!validPassword) return defaultError;

  const token = createToken(name, email, id);

  return token;
};

module.exports = {
  create,
  verifyIfEmailExists,
  login,
};
