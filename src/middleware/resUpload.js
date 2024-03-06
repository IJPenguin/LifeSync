const multer = require("multer");
const path = require("path");

// Set up multer storage for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads"); // Directory where files will be stored
  },
  filename: function (req, file, cb) {
    // Get user ID and test type from request
    const userId = req.userId; // Assuming userId is stored in req.userId
    const testType = req.testType;

    // Get current date/time
    const dateTime = new Date().toISOString().replace(/[-:.]/g, '');

    // Extract filename without extension
    const originalFileName = path.parse(file.originalname).name;

    // Combine user ID, test type, original filename, and date/time to generate filename
    const filename = `${userId}_${testType}_${dateTime}${path.extname(file.originalname)}`;

    cb(null, filename); // Unique file name
  },
});

const upload = multer({ storage: storage });

module.exports = { upload };
