const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { v4: uuidv4 } = require('uuid');
const sendEmail = require('../utils/sendEmail'); // akan dibuat di langkah 6

exports.register = async (req, res) => {
  try {
    const { fullname, username, password, email } = req.body;

    if (!fullname || !username || !password || !email) {
      return res.status(400).json({ message: 'Semua field wajib diisi!' });
    }

    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(400).json({ message: 'Username sudah digunakan!' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // 1. Generate token verifikasi
    const verifyToken = uuidv4();

    // 2. Insert user ke database
    const newUser = await User.create({
      fullname,
      username,
      password: hashedPassword,
      email,
      verify_token: verifyToken
    });

    // 3. Kirim email verifikasi
    await sendEmail(email, verifyToken);

    res.status(201).json({ 
      message: 'Registrasi berhasil! Silakan cek email untuk verifikasi.',
      data: newUser 
    });

  } catch (error) {
    res.status(500).json({ message: 'Terjadi kesalahan di server.', error });
  }
};


exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(401).json({ message: 'Email atau password salah!' });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ message: 'Email atau password salah!' });

    require('dotenv').config();
const token = jwt.sign(
  { id: user.id, email: user.email },
  process.env.JWT_SECRET,
  { expiresIn: '1h' }
);


    res.json({ message: 'Login berhasil!', token });
  } catch (error) {
    res.status(500).json({ message: 'Terjadi kesalahan di server.', error });
  }
};


exports.verifyEmail = async (req, res) => {
  try {
    const { token } = req.query;

    const user = await User.findOne({ where: { verify_token: token } });

    if (!user) {
      return res.status(400).json({ message: "Invalid Verification Token" });
    }

    // kosongkan token menjadi null agar tidak bisa dipakai ulang
    user.verify_token = null;
    await user.save();

    res.json({ message: "Email Verified Successfully" });

  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
