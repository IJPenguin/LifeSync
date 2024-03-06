const express = require("express");
const { MongoClient } = require("mongodb");
const dotenv = require("dotenv").config();

const DB_CONNECTION_STRING = "mongodb+srv://ls_penguin:lifesync@lifesync.jcf030k.mongodb.net/?retryWrites=true&w=majority&appName=LifeSync" = express.Router();
const db_uri = process.env.DB_CONNECTION_STRING;
const client = new MongoClient(db_uri);
const database = client.db("LifeSync");
const user_collection = database.collection("users");

router.get("/login/:username-:password",async (res, req) => {
	const username = req.params.username;
	const password = req.params.password;

    await client.connect();

    
});

router.post("/upload", async (res, req) => {
	const caption = capgeneration(req.body.image);
	res.send(caption);
})

module.exports = router;