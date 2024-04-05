const path = require('path');
const ejs = require("ejs");
const ProductAPI = (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..', 'HTML', 'Product', 'product.html'));
};

const ProductPageAPI = async (req, res) => {
    try {
        const db = await connection();
        const productsCollection = db.collection('Products');
        const products = await productsCollection.find().toArray();

        ejs.renderFile(path.join(__dirname, '..', '..', '..', 'EJS', 'product.ejs'), { products: products }, (err, html) => {
            if (err) {
                console.error("Failed to render EJS file:", err);
                res.status(500).send('Error rendering EJS file');
            } else {
                res.send(html);
            }
        });
    } catch (e) {
        console.error("Failed to load products:", e);
        res.status(500).send('Error loading products');
    }
};

module.exports = {
    ProductAPI,
    ProductPageAPI
};