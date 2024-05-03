const express = require('express');
const multer = require('multer');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

// Define the upload directory
const uploadDir = 'uploads/';

// Create uploads directory if it doesn't exist
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Multer configuration
const storage = multer.diskStorage({
    destination: uploadDir,
    filename: function (req, file, cb) {
        // Preserve the original filename
        const filename = file.originalname;
        cb(null, filename);
    }
});

// Create the upload middleware
const upload = multer({ storage:storage });

// Route for file upload
app.post('/upload', upload.single('file'), (req, res) => {
    // req.file contains information about the uploaded file
    res.send('File uploaded successfully');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});