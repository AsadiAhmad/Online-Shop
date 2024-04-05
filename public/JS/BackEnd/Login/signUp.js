const path = require('path');
const connection = require(path.join(__dirname, '..', 'Connection', 'connection.js'));

const signupAPI = async (req, res) => {
    let { username, password, password_r } = req.body;

    if (password !== password_r) {
        return res.status(400).json({ error: "Passwords do not match", message: "Please ensure both passwords are matched!" });
    }

    const userData = {
        username: username,
        password: password
    };

    try {
        const db = await connection();
        const usersCollection = db.collection('users');
        const result = await usersCollection.insertOne(userData);
        console.log("User inserted with the following id:", result.insertedId);
        res.status(201).json({ message: "User created successfully", userId: result.insertedId });
    } catch (e) {
        console.error("Failed to connect to the database:", e);
        res.status(500).json({ error: "Failed to create user", message: e.message });
    }
};

module.exports = signupAPI;
