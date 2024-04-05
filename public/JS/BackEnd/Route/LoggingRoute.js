const express = require('express');
const path = require("path");
const router = express.Router();

const loginAPI = require(path.join(__dirname, '..', 'Login', 'login.js'));
const signupAPI = require(path.join(__dirname, '..', 'Login', 'signUp.js'));

router.put('/login', loginAPI);
router.post('/signup', signupAPI);

module.exports = router;