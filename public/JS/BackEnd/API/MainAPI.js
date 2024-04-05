const path = require('path');
const connection = require(path.join(__dirname, '..', 'Connection', 'connection.js'));
const ejs = require('ejs');
const SlashAPI = async (req, res) => {
    try {
        const db = await connection();
        const productsCollection = db.collection('Products');
        const products = await productsCollection.find().toArray();

        ejs.renderFile(path.join(__dirname, '..', '..', '..', 'EJS', 'index.ejs'), { products: products }, (err, html) => {
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

const HomeAPI = SlashAPI;

module.exports = {
    SlashAPI,
    HomeAPI,
};