const path = require('path');
const SlashAPI = (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..', 'HTML', 'Other', 'index.html'));
};
const HomeAPI = (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..', 'HTML', 'Other', 'index.html'));
};

module.exports = {
    SlashAPI,
    HomeAPI,
};