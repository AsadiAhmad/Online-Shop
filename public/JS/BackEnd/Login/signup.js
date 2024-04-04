const path = require('path');
const connection = require(path.join(__dirname, '..', 'Connection', 'connection.js'));

async function signupAPI(userData) {
    try {
        const db = await connection();
        console.log("Database connection established.");
        
        const usersCollection = db.collection('users');

        // Insert the user data into the 'users' collection
        const result = await usersCollection.insertOne(userData);
        console.log("User inserted with the following id:", result.insertedId);

        return result;
    } catch (e) {
        console.error("Failed to connect to the database:", e);
        throw e; // Rethrow the error to be handled by the caller
    }
}

module.exports = signupAPI;
