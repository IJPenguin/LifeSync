const express = require("express");
const chalk = require("chalk");
const dotenv = require("dotenv").config();
const { upload } = require("./middleware/resUpload");
const port = process.env.PORT || 6969;
const cookieParser = require("cookie-parser");
const { jwtVerify } = require("./middleware/jwtVerify");
const userRouter = require("./middleware/userAuth");
const staffRouter = require("./middleware/staffAuth");
const cors = require("cors");
const path = require("path");
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

app.get("/vid", (req, res) => {
	res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post(
	"/submit",
	(req, res, next) => {
		const testType = req.query.testType;
		if (!testType) {
			return res.status(400).json({ message: "Test Type is required" });
		}
		req.testType = testType;
		next();
	},
	upload.array("testResultFiles", 5),
	(req, res) => {
		const formData = req.body;
		const files = req.files;

		const fileNamePrefix = `${req.userId}_${req.testType}_`;
		files.forEach((file) => {
			file.filename =
				fileNamePrefix + Date.now() + "-" + file.originalname;
		});

		console.log("Form Data:", formData);
		console.log("Uploaded Files:", files);

		res.status(200).json({
			message: "Form submitted successfully",
			formData,
			files,
		});
	}
);

app.use(express.json()); // for parsing application/json

app.post("/location", (req, res) => {
	console.log(req.body);
	res.send("Location received!");
});

app.use("/user", userRouter);
app.use("/staff", staffRouter);

app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`);
});
