const router = require('express').Router();

const { create } = require('../controllers/userController');
const { validateCreateUser } = require('../middlewares/userMiddleware');

router.post('/create', validateCreateUser, create);

module.exports = router;
