const { storageModel } = require('../models');
const PUBLIC_URL = process.env.PUBLIC_URL;

const getItems = async (req, res) => {
  console.log('Inciando GET...');
  const data = await tracksModel.find({});
  res.send(data);
};

const getItem = (req, res) => {};

const createItem = async (req, res) => {
  console.log('Iniciando POST...');
  const {body, file} = req;
  const fileData = {
    filename: file.filename,
    url: `${PUBLIC_URL}/${file.filename}`
  }
  const data = await storageModel.create(fileData);
  res.send({file})
};

const updateItem = (req, res) => {};

const deleteItem = (req, res) => {};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };