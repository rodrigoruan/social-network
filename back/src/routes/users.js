const router = require('express').Router();

const { create, login } = require('../controllers/userController');
const { validateCreateUser, validateLoginUser } = require('../middlewares/userMiddleware');

router.post('/create', validateCreateUser, create);
router.post('/login', validateLoginUser, login);

module.exports = router;
