const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');
const authMiddleware = require('../middleware/authMiddleware'); // ambil objek


// Ambil semua course (GET)
router.get('/courses', authMiddleware.verifyToken, courseController.getCourses);
router.post('/courses', authMiddleware.verifyToken, courseController.createCourse);

module.exports = router;
