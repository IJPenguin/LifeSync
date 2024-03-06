const multer = require("multer");
const path = require("path");

// Set up multer storage for file uploads
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "uploads");
	},
	filename: function (req, file, cb) {
		const userId = req.body.userId;
		const testType = req.testType;

		const dateTime = new Date().toISOString().replace(/[-:.]/g, "");

		const originalFileName = path.parse(file.originalname).name;

		const filename = `${userId}_${testType}_${dateTime}${path.extname(
			file.originalname
		)}`;

		cb(null, filename);
	},
});

const upload = multer({ storage: storage });

module.exports = { upload };
