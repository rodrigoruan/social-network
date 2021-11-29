const postService = require('../services/postService');

const getAll = async (_req, res) => {
  try {
    const response = await postService.getAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const create = async (req, res) => {
  try {
    const { content, image } = req.body;
    const { userId } = req;

    const response = await postService.create(content, image, userId);

    res.status(200).json({ response });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const update = async (req, res) => {
  try {
    const { content, image } = req.body;
    const { id } = req.params;

    const response = await postService.update(content, image, id);

    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAll,
  create,
  update,
};
