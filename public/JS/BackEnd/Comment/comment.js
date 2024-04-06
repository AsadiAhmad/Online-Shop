const path = require("path");
const jwt = require('jsonwebtoken');
const connection = require(path.join(__dirname, '..', 'Connection', 'connection.js'));
const secretKey = 'jwt-fj2D-8tu9';

async function commentAPI(req, res){
    try {
        const db = await connection();
        const commentsCollection = db.collection('Comments');
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, secretKey);
        const comment = {
            username: decodedToken.username,
            productId: req.body.productId,
            comment: req.body.comment,
            rating: req.body.rating
        };
        const result = await commentsCollection.insertOne(comment);
        res.status(201).json({ message: 'Comment submitted successfully!' });
    } catch (error) {
        console.error('Error submitting comment:', error);
        res.status(500).json({ message: 'There was an error submitting your comment. Please try again.' });
    }
};

module.exports = commentAPI;