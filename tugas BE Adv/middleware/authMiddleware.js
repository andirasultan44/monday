const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  // Ambil token dari header Authorization
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({
      message: "Token tidak ditemukan! Akses ditolak.",
    });
  }

  // Format header biasanya: "Bearer <token>"
  const token = authHeader.split(" ")[1];

  try {
    // Verifikasi token menggunakan secret key yang sama saat login
    require("dotenv").config();
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded; // Simpan data user hasil decode ke req.user
    next(); // lanjut ke controller berikutnya
  } catch (error) {
    return res.status(403).json({
      message: "Token tidak valid atau kadaluarsa!",
      error: error.message,
    });
  }
};

module.exports = { verifyToken };
