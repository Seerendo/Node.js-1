const express = require('express');
const { getItems, getItem, createItem } = require('../controllers/tracks');
const customHeader = require('../middleware/customHeader');
const router = express.Router();
const { validatorCreateItem } = require('../validators/tracks');
//TODO Tracks routes GET, POST, DELETE, PUT

router.get('/', customHeader, getItems);

router.post('/', validatorCreateItem, customHeader, createItem);

module.exports = router;
