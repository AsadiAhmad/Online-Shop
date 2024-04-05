const express = require('express');
const path = require("path");
const router = express.Router();

const {
    ProductAPI
} = require(path.join(__dirname, '..', 'API', 'ProductAPI.js'));

router.get('/', ProductAPI);

module.exports = router;