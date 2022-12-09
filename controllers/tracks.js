const { tracksModel } = require('../models');

const getItems = async (req, res) => {
  console.log('Inciando GET...');
  const data = await tracksModel.find({});
  res.send(data);
};

const getItem = (req, res) => {};

const createItem = async (req, res) => {
  console.log('Iniciando POST...');
  const {body} = req;
  const data = await tracksModel.create(body);
  res.send({data})
};

const updateItem = (req, res) => {};

const deleteItem = (req, res) => {};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };