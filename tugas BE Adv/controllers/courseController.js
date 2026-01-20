const { Op } = require('sequelize');
const { Course } = require('../models');

// GET /courses
// 🔹 GET Semua Course + Query Params
exports.getCourses = async (req, res) => {
  try {
    const { category, search, sort } = req.query;

    // 🔸 Build kondisi "WHERE" (Filter & Search)
    const whereClause = {};

    if (category) {
  whereClause.category = { [Op.like]: `%${category}%` };
}


    if (search) {
      whereClause[Op.or] = [
        { title: { [Op.like]: `%${search}%` } },
        { description: { [Op.like]: `%${search}%` } }
      ];
    }

    // 🔸 Sorting
    let orderClause = [];
    if (sort) {
      if (sort === 'price_asc') orderClause = [['price', 'ASC']];
      else if (sort === 'price_desc') orderClause = [['price', 'DESC']];
      else if (sort === 'title_asc') orderClause = [['title', 'ASC']];
      else if (sort === 'title_desc') orderClause = [['title', 'DESC']];
    }

    // 🔸 Ambil data
    const courses = await Course.findAll({
      where: whereClause,
      order: orderClause
    });

    res.status(200).json({
      message: 'Daftar course berhasil diambil!',
      data: courses
    });
  } catch (error) {
    res.status(500).json({
      message: 'Terjadi kesalahan pada server.',
      error: error.message
    });
  }
};

// Tambah course
exports.createCourse = async (req, res) => {
  try {
    const { title, category, description, price } = req.body;

    const newCourse = await Course.create({ title, category, description, price });

    res.status(201).json({
      message: 'Course berhasil dibuat!',
      data: newCourse,
    });
  } catch (error) {
    res.status(500).json({ message: 'Terjadi kesalahan pada server', error: error.message });
  }
};
