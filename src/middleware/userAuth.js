const express = require("express");
const dotenv = require("dotenv").config();
const jwt = require("jsonwebtoken");
const { getUser } = require("./utils");
const cookieParser = require("cookie-parser");
const userRouter = express.Router();

userRouter.get("/login/:username-:password", async (req, res) => {
	const username = req.params.username;
	const password = req.params.password;
	const user = getUser(username);

	if (!user) {
		res.status(404).send("User Not Found");
	}

	if (user.password !== password) {
		res.status(401).send("Wrong Password");
	}

	delete user.password;

	const token = jwt.sign(
		{ username: user.username },
		process.env.SECRET_KEY,
		{ expiresIn: "1h" }
	);

	res.cookie("token", token, { httpOnly: true });
	res.send("Logged In");
});

module.exports = userRouter;
