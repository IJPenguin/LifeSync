const express = require("express");
const { MongoClient } = require("mongodb");
const chalk = require("chalk");
const dotenv = require("dotenv").config();

const app = express();
const port = process.env.PORT || 6969;
const db_uri = process.env.DB_CONNECTION_STRING;

const client = new MongoClient(db_uri);

app.route("/auth").post("/signup");



app.listen(port, () => {
	console.log(chalk.greenBright(`🚀 Server is running on port ${port} 🚀`));
});
