const express = require("express");
const chalk = require("chalk");
const dotenv = require("dotenv").config();
const { upload } = require("./middleware/resUpload");
const port = process.env.PORT || 6969;


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to extract and set userId from request body or query parameters
app.use((req, res, next) => {
  // Get userId from request body or query parameters
  const userIdFromBody = req.body.userId;
  const userIdFromQuery = req.query.userId;

  // Choose one method based on your preference
  const userId = userIdFromBody || userIdFromQuery;

  if (!userId) {
    return res.status(400).json({ message: "User ID is required" });
  }

  // Set userId in the request object
  req.userId = userId;

  next(); // Move to the next middleware
});

// Route to handle file submission
app.post("/submit", (req, res, next) => {
  // Get testType from request body or query parameters
  const testTypeFromBody = req.body.testType;
  const testTypeFromQuery = req.query.testType;

  // Choose one method based on your preference
  const testType = testTypeFromBody || testTypeFromQuery;

  if (!testType) {
    return res.status(400).json({ message: "Test Type is required" });
  }

  // Set testType in the request object
  req.testType = testType;

  next(); // Move to the next middleware
}, upload.array("testResultFiles", 5), (req, res) => {
  // Process form data here
  const formData = req.body;
  const files = req.files;

  // Generate filename with userId, testType, and timestamp
  const fileNamePrefix = `${req.userId}_${req.testType}_`;
  files.forEach(file => {
    file.filename = fileNamePrefix + Date.now() + '-' + file.originalname;
  });

  // Log form data and file details
  console.log("Form Data:", formData);
  console.log("Uploaded Files:", files);

  res
    .status(200)
    .json({ message: "Form submitted successfully", formData, files });
});

app.listen(port, () => {
  console.log(
    chalk.greenBright(`🚀 Server is running on http://localhost:${port} 🚀`)
  );
  });


  
