const { schemaCreatePost } = require('../schemas/post');

const { findById } = require('../services/postService');

const validatePost = async (req, res, next) => {
  const { error } = schemaCreatePost.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  return next();
};

const verifyIfUserCreatePost = async (req, res, next) => {
  const { userId } = req;
  const { id: postId } = req.params;

  const post = await findById(postId);

  if (!post) {
    return res.status(404).json({ message: 'Post não existe' });
  }

  const userIsCreator = post.userId === userId;

  if (!userIsCreator) {
    return res.status(403).json({ message: 'Usuário não autorizado' });
  }

  next();
};

module.exports = {
  validatePost,
  verifyIfUserCreatePost,
};
