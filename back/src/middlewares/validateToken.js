const jwt = require('jsonwebtoken');

const { SECRET } = process.env;

const validateToken = async (req, res, next) => {
  const token = req.header('Authorization');

  jwt.verify(token, SECRET, (error, decoded) => {
    if (error) {
      return res.status(400).json({ error: 'Token inválido' });
    }

    req.userId = decoded.user.id;

    next();
  });
};

module.exports = validateToken;
