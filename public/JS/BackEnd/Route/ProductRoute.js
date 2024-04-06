const express = require('express');
const path = require("path");
const router = express.Router();

const {
    ProductAPI,
    ProductPageAPI
} = require(path.join(__dirname, '..', 'API', 'ProductAPI.js'));

router.get('/', ProductAPI);
router.get('/Page/:productId', ProductPageAPI);

module.exports = router;