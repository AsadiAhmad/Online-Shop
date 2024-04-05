const express = require('express');
const path = require("path");
const router = express.Router();

const AddProductAPI = require(path.join(__dirname, '..', 'Product', 'addProduct.js'));

router.post('/addProduct', AddProductAPI);

module.exports = router;