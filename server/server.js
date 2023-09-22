const { MongoClient } = require("mongodb");
require('dotenv').config();
const express = require("express");
const app = express()
const cors = require("cors")
const PORT = 8080;
const mongoUri = process.env.DB_CONNECTION_STRING
const mongoClient = new MongoClient(mongoUri);

app.use(cors())

app.get("/api/home", async (req, res) => {
    try {
        const database = mongoClient.db('sample_mflix');
        const movies = database.collection('movies');
        const query = { title: 'Back to the Future' };
        const movie = await movies.findOne(query);
        console.log(movie);
        res.json({movie})
    } finally {
        await mongoClient.close();
    }
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})