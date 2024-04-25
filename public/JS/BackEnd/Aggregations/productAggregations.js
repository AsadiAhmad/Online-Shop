async function sortNewest(productCollection, productType) {
    return await productCollection.aggregate([
        {$match: {productType: productType}},
        {$sort: {productDate: -1}}
    ]).toArray()
}
async function sortOldest(productCollection, productType) {
    return await productCollection.aggregate([
        {$match: {productType: productType}},
        {$sort: {productDate: 1}}
    ]).toArray()
}
async function sortMostExpensive(productCollection, productType) {
    return await productCollection.aggregate([
        {$match: {productType: productType}},
        {$addFields: {numericPrice: { $toDouble: "$productPrice" }}},
        {$sort: {numericPrice: -1}}
    ]).toArray()
}
async function sortCheapest(productCollection, productType) {
    return await productCollection.aggregate([
        {$match: {productType: productType}},
        {$addFields: {numericPrice: { $toDouble: "$productPrice" }}},
        {$sort: {numericPrice: 1}}
    ]).toArray()
}
async function sortMostPopular(productCollection, productType) {
    return await productCollection.aggregate([
        {$match: {productType: productType}},
        {$lookup: {
                from: "Comments",
                let: { product_id: { $toString: "$_id" } },
                pipeline: [
                    {
                        $match: {
                            $expr: {
                                $eq: ["$productId", "$$product_id"]
                            }
                        }
                    }
                ],
                as: "comments"
            }},
        { $unwind: {
                path: "$comments",
                preserveNullAndEmptyArrays: true
            }},
        {$group: {
                _id: "$_id",
                productType: { $first: "$productType" },
                productName: { $first: "$productName" },
                productPrice: { $first: "$productPrice" },
                picture: { $first: "$picture" },
                rating: { $first: "$rating" },
                productDate: { $first: "$productDate" },
                avgRating: { $avg: { $toDouble:"$comments.rating"} }
            }},
        {$addFields: {
                avgRating: {
                    $ifNull: ["$avgRating", {$toInt: "$rating"}]
                }
            }},
        { $sort: { avgRating: -1 } }
    ]).toArray();
}

async function sortMostHated(productCollection, productType) {
    return await productCollection.aggregate([
        {$match: {productType: productType}},
        {$lookup: {
                from: "Comments",
                let: { product_id: { $toString: "$_id" } },
                pipeline: [
                    {
                        $match: {
                            $expr: {
                                $eq: ["$productId", "$$product_id"]
                            }
                        }
                    }
                ],
                as: "comments"
            }},
        { $unwind: {
                path: "$comments",
                preserveNullAndEmptyArrays: true
            }},
        {$group: {
                _id: "$_id",
                productType: { $first: "$productType" },
                productName: { $first: "$productName" },
                productPrice: { $first: "$productPrice" },
                picture: { $first: "$picture" },
                rating: { $first: "$rating" },
                productDate: { $first: "$productDate" },
                avgRating: { $avg: { $toDouble:"$comments.rating"} }
            }},
        {$addFields: {
                avgRating: {
                    $ifNull: ["$avgRating", {$toInt: "$rating"}]
                }
            }},
        { $sort: { avgRating: 1 } }
    ]).toArray();
}

module.exports = {
    sortNewest,
    sortOldest,
    sortMostExpensive,
    sortCheapest,
    sortMostPopular,
    sortMostHated
};