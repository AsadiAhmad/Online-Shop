const path = require("path");
const jwt = require('jsonwebtoken');
const connection = require(path.join(__dirname, '..', 'Connection', 'connection.js'));
const secretKey = 'jwt-fj2D-8tu9';

async function addProduct(req, res) {
    try {
        const db = await connection();
        const productsCollection = db.collection('Products');
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, secretKey);
        const product = {
            productType: req.body.productType,
            productName: req.body.productName,
            productPrice: req.body.productPrice,
            picture: req.file ? Buffer.from(req.file.buffer) : null,
            rating: req.body.rating,
            creator: decodedToken.username,
            productDate: new Date()
        };
        const result = await productsCollection.insertOne(product);
        console.log("Product inserted with the following id:", result.insertedId);
        res.status(201).json({ message: "Product added successfully", productId: result.insertedId });
    } catch (e) {
        console.error("Failed to add product:", e);
        res.status(500).json({ error: "Failed to add product", message: e.message });
    }
}

module.exports = addProduct;
