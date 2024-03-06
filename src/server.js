const express = require("express");
const chalk = require("chalk");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 6969;

app.listen(port, () => {
	console.log(chalk.greenBright(`🚀 Server is running on port ${port} 🚀`));
});
