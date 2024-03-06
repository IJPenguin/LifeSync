const express = require("express");
const chalk = require("chalk");
const dotenv = require("dotenv").config();
const user_login = require("./middleware/userAuth");
const app = express();
const port = process.env.PORT || 6969;

const client = new MongoClient(db_uri);



app.listen(port, () => {
	console.log(chalk.greenBright(`🚀 Server is running on port ${port} 🚀`));
});
