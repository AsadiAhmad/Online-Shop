const express = require('express');
const path = require("path");
const router = express.Router();

const {
    SlashAPI,
    HomeAPI,
} = require(path.join(__dirname, '..', 'API', 'MainAPI.js'));

router.get('/', SlashAPI);
router.get('/Home', HomeAPI);

module.exports = router;