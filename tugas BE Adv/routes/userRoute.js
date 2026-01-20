const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { verifyToken } = require('../middleware/authMiddleware');




// Route public
router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/verify-email', userController.verifyEmail);


// Route private
router.get('/profile', verifyToken, (req, res) => {
  res.json({
    message: 'Selamat datang di halaman profil!',
    user: req.user
  });
});

module.exports = router;
