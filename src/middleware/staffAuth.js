const express = require("express");
const dotenv = require("dotenv").config();
const jwt = require("jsonwebtoken");
const { getUser, makeUser } = require("./utils");
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

userRouter.post("/signUp", async (req, res) => {
	const name = req.body.name;
	const username = req.body.username;
	const email = req.body.email;
	const password = req.body.password;
	const dob = req.body.dob;
	const address = req.body.address;
	const phone = req.body.phone;
	const emergencyContact = req.body.emergencyContact;

	const user = makeUser(
		name,
		username,
		email,
		password,
		dob,
		address,
		phone,
		emergencyContact
	);

	const token = jwt.sign(
		{ username: user.username },
		process.env.SECRET_KEY,
		{ expiresIn: "1h" }
	);

	res.cookie("token", token, { httpOnly: true });
	res.status(200).send("Signed Up");
});

module.exports = userRouter;
