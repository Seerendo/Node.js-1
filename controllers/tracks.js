const { tracksModel } = require('../models');

const getItems = async (req, res) => {
  const data = await tracksModel.find({});
  res.send(data);
};

const getItem = (req, res) => {};

const postItem = (req, res) => {};

const updateItem = (req, res) => {};

const deleteItem = (req, res) => {};

module.exports = { getItems, getItem, postItem, updateItem, deleteItem };
