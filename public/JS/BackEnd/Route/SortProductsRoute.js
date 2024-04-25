const express = require('express');
const path = require("path");
const router = express.Router();

const SortProductAPI = require(path.join(__dirname, '..', 'Product', 'SortProduct.js'));

router.get('/', SortProductAPI);

module.exports = router;