const path = require("path");
const connection = require(path.join(__dirname, '..', 'Connection', 'connection.js'));
const {
    sortNewest,
    sortOldest,
    sortMostExpensive,
    sortCheapest,
    sortMostPopular,
    sortMostHated
} = require(path.join(__dirname, '..', 'Aggregations', 'productAggregations.js'));


async function SortProduct(req, res) {
    try {
        const sortType = req.query.sortType;
        const db = await connection();
        const productsCollection = db.collection('Products');

        let laptop, phone, electronic, handbag, shoes, snack;
        switch (sortType) {
            case 'newest':
                laptop = await sortNewest(productsCollection, "laptops");
                phone = await sortNewest(productsCollection, "phones");
                electronic = await sortNewest(productsCollection, "electronics");
                handbag = await sortNewest(productsCollection, "handbags");
                shoes = await sortNewest(productsCollection, "shoes");
                snack = await sortNewest(productsCollection, "snacks");
                break;
            case 'oldest':
                laptop = await sortOldest(productsCollection, "laptops");
                phone = await sortOldest(productsCollection, "phones");
                electronic = await sortOldest(productsCollection, "electronics");
                handbag = await sortOldest(productsCollection, "handbags");
                shoes = await sortOldest(productsCollection, "shoes");
                snack = await sortOldest(productsCollection, "snacks");
                break;
            case 'mostExpensive':
                laptop = await sortMostExpensive(productsCollection, "laptops");
                phone = await sortMostExpensive(productsCollection, "phones");
                electronic = await sortMostExpensive(productsCollection, "electronics");
                handbag = await sortMostExpensive(productsCollection, "handbags");
                shoes = await sortMostExpensive(productsCollection, "shoes");
                snack = await sortMostExpensive(productsCollection, "snacks");
                break;
            case 'cheapest':
                laptop = await sortCheapest(productsCollection, "laptops");
                phone = await sortCheapest(productsCollection, "phones");
                electronic = await sortCheapest(productsCollection, "electronics");
                handbag = await sortCheapest(productsCollection, "handbags");
                shoes = await sortCheapest(productsCollection, "shoes");
                snack = await sortCheapest(productsCollection, "snacks");
                break;
            case 'mostPopular':
                laptop = await sortMostPopular(productsCollection, "laptops");
                phone = await sortMostPopular(productsCollection, "phones");
                electronic = await sortMostPopular(productsCollection, "electronics");
                handbag = await sortMostPopular(productsCollection, "handbags");
                shoes = await sortMostPopular(productsCollection, "shoes");
                snack = await sortMostPopular(productsCollection, "snacks");
                break;
            case 'mostHated':
                laptop = await sortMostHated(productsCollection, "laptops");
                phone = await sortMostHated(productsCollection, "phones");
                electronic = await sortMostHated(productsCollection, "electronics");
                handbag = await sortMostHated(productsCollection, "handbags");
                shoes = await sortMostHated(productsCollection, "shoes");
                snack = await sortMostHated(productsCollection, "snacks");
                break;
        }

        const response = {
            laptop: laptop,
            phone: phone,
            electronic: electronic,
            handbag: handbag,
            shoes: shoes,
            snack: snack
        };
        res.json(response);
    } catch (e) {
        console.error("Failed to sort products:", e);
        res.status(500).send('Error sorting products');
    }
}

module.exports = SortProduct;
