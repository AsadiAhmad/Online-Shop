const path = require('path');
const SlashAPI = (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..', 'HTML', 'Chat', 'index.html'));
};
const HomeAPI = (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..', 'HTML', 'Chat', 'index.html'));
};

module.exports = {
    SlashAPI,
    HomeAPI,
};