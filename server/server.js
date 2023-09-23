const { MongoClient } = require("mongodb");
require('dotenv').config();
const express = require("express");
const app = express()
const cors = require("cors")
const PORT = 8080;
const mongoUri = process.env.DB_CONNECTION_STRING
const mongoClient = new MongoClient(mongoUri);

app.use(express.json({limit:'50mb'}))
app.use(cors())

app.get("/api/get-all-characters", async (req, res) => {
    console.log(`GET /api/get-all-characters`)
    try {
        await mongoClient.connect()
        const database = mongoClient.db('rick_and_morty');
        const characters = database.collection('characters');
        const query = { name: "Rick Sanchez"}
        const found = await characters.find(query).toArray();
        res.json({characters: found})
    } finally {
        await mongoClient.close();
    }
})

app.post("/api/mongo/load-characters", async (req, res) => {
    console.log(`POST /api/mongo/load-characters`)
    try {
        await mongoClient.connect()
        const database = mongoClient.db('rick_and_morty');
        const characters = database.collection('characters');
        await characters.insertMany(req.body.allCharacters)
    } finally {
        await mongoClient.close()
    }
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})