const jwt = require('jsonwebtoken');
const path = require('path');
const connection = require(path.join(__dirname, '..', 'Connection', 'connection.js'));

const loginAPI = async (req, res) => {
    let { username, password } = req.body;

    try {
        const db = await connection();
        const usersCollection = db.collection('users');
        const user = await usersCollection.findOne({ username: username });

        if (!user) {
            return res.status(400).json({ error: "User not found", message: "Please check your username." });
        }
        if (password !== user.password) {
            return res.status(400).json({ error: "Invalid password", message: "Please check your password." });
        }

        const token = jwt.sign({ username: user.username }, 'jwt-fj2D-8tu9', { expiresIn: '4h' });

        await usersCollection.updateOne({ username: username }, { $set: { token: token } });

        res.status(200).json({ token: token });
    } catch (e) {
        console.error("Failed to connect to the database:", e);
        res.status(500).json({ error: "Failed to login", message: e.message });
    }
};

module.exports = loginAPI;
