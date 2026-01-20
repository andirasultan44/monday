const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadMiddleware');

// endpoint upload
router.post('/upload', upload.single('image'), (req, res) => {
  try {
    res.json({
      message: "Upload berhasil!",
      file: req.file
    });
  } catch (error) {
    res.status(500).json({ message: "Gagal upload", error });
  }
});

module.exports = router;
