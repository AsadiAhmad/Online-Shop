const path = require('path');
const connection = require(path.join(__dirname, '..', 'Connection', 'connection.js'));
const ejs = require("ejs");
const { ObjectId } = require('mongodb');
const ProductAPI = (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..', 'HTML', 'Product', 'product.html'));
};

const ProductPageAPI = async (req, res) => {
    try {
        const db = await connection();
        const productsCollection = db.collection('Products');
        const commentsCollection = db.collection('Comments');
        const productId = req.params.productId;
        const objectId = new ObjectId(productId);
        const product = await productsCollection.findOne({ _id: objectId });
        if (!product) {
            res.status(404).send('Product not found');
            return;
        }

        product.comments = await commentsCollection.find({productId: productId}).toArray();
        ejs.renderFile(path.join(__dirname, '..', '..', '..', 'EJS', 'product.ejs'), { product: product }, (err, html) => {
            if (err) {
                console.error("Failed to render EJS file:", err);
                res.status(500).send('Error rendering EJS file');
            } else {
                res.send(html);
            }
        });
    } catch (e) {
        console.error("Failed to load product:", e);
        res.status(500).send('Error loading product');
    }
};

module.exports = {
    ProductAPI,
    ProductPageAPI
};