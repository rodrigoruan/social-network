const router = require('express').Router();

const { getAll, create, update } = require('../controllers/postController');
const validateToken = require('../middlewares/validateToken');
const {
  validatePost,
  verifyIfUserCreatePost,
} = require('../middlewares/postMiddleware');

router.get('/', validateToken, getAll);
router.post('/create', validateToken, validatePost, create);
router.put(
  '/update/:id',
  validateToken,
  verifyIfUserCreatePost,
  validatePost,
  update,
);

module.exports = router;
