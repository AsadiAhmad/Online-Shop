const express = require('express');
const path = require("path");
const router = express.Router();

const {
    LoginAPI,
    SignUpAPI,
} = require(path.join(__dirname, '..', 'API', 'LoginAPI.js'));

router.get('/', LoginAPI);
router.get('/SignUp', SignUpAPI);

module.exports = router;