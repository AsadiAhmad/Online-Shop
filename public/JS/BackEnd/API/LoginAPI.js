const path = require('path');
const SignUpAPI = (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..', 'HTML', 'Login', 'signup.html'));
};
const LoginAPI = (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..', 'HTML', 'Login', 'login.html'));
};

module.exports = {
    SignUpAPI,
    LoginAPI,
};