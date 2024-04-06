const express = require('express');
const path = require("path");
const router = express.Router();

const commentAPI = require(path.join(__dirname, '..', 'Comment', 'comment.js'));

router.post('/', commentAPI);

module.exports = router;