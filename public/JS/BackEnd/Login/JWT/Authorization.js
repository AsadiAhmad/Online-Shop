const path = require("path");
const jwt = require('jsonwebtoken');
const secretKey = 'jwt-fj2D-8tu9';
const connection = require(path.join(__dirname, '..', '..', 'Connection', 'connection.js')); // Adjust the path as necessary

async function authorize(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1];
    console.log(token);
    if (!token) {
        res.status(401).json({ error: 'Unauthorized' });
        return;
    }

    jwt.verify(token, secretKey, async (err, decoded) => {
        if (err) {
            console.error('Error verifying JWT token:', err);
            res.status(401).json({ error: 'Unauthorized' });
            return;
        }
        const { username } = decoded;
        try {
            const db = await connection();
            const collection = db.collection('users');

            const user = await collection.findOne({ token: token });

            if (!user || user.token !== token) {
                res.status(401).json({ error: 'Unauthorized' });
                return;
            }
            req.user = user;
            next();
        } catch (error) {
            console.error('Error finding user in the database:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });
}

module.exports = {
    authorize
};
