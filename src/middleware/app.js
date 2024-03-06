const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 6969;


// Set up multer storage for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Directory where files will be stored
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    ); // Unique file name
  },
});

const upload = multer({ storage: storage });

// Serve HTML form (optional)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "form.html"));
});

// Handle form submission
app.post("/submit", upload.array("testResultFiles", 5), (req, res) => {
  // Process form data here
  const formData = req.body;
  const files = req.files;

  // Log form data and file details
  console.log("Form Data:", formData);
  console.log("Uploaded Files:", files);

  res.status(200).json({ message: "Form submitted successfully", formData, files });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
