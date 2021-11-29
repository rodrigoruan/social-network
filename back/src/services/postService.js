const { Post } = require('../models');

const getAll = async () => Post.findAll();

const findById = async (id) => Post.findOne({ where: { id } });

const create = async (content, image, userId) => Post.create({ content, image, userId });

const update = async (content, image, id) => {
  await Post.update({ content, image }, { where: { id } });
  const post = findById(id);
  return post;
};

module.exports = {
  getAll,
  create,
  findById,
  update,
};
