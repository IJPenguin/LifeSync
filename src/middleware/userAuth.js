const express = require("express");
const dotenv = require("dotenv").config();
const jwt = require("jsonwebtoken");
const { getUser } = require("./utils");
const cookieParser = require("cookie-parser");
const router = express.Router();

router.get("/login/:username-:password", async (res, req) => {
	const username = req.params.username;
	const password = req.params.password;
	const user = getUser(username);

	if (!user) {
		res.status(404).send("User Not Found");
	}

	if (user.password !== password) {
		res.status(401).send("Wrong Password");
	}

	const token = jwt.sign(
		{ username: user.username },
		process.env.SECRET_KEY,
		{ expiresIn: "1h" }
	);

	res.cookies("token", token, { httpOnly: true });
	res.send("Logged In");
});

router.post("/upload", async (res, req) => {
	const caption = capgeneration(req.body.image);
	res.send(caption);
});

module.exports = router;
