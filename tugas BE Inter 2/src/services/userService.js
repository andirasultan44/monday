const db = require('../db/connection');

// GET semua data
const getAllUsers = async () => {
  const [rows] = await db.query('SELECT * FROM users');
  return rows;
};

// GET by id
const getUserById = async (id) => {
  const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
  return rows[0];
};

// INSERT
const addUser = async (data) => {
  const { nama_lengkap, email, No_Hp, jenis_kelamin, password } = data;
  await db.query(
    'INSERT INTO users (nama_lengkap, email, No_Hp, jenis_kelamin, password) VALUES (?, ?, ?, ?, ?)',
    [nama_lengkap, email, No_Hp, jenis_kelamin, password]
  );
  return { message: 'User berhasil ditambahkan' };
};

// UPDATE
const updateUser = async (id, data) => {
  const { nama_lengkap, email, No_Hp, jenis_kelamin } = data;
  await db.query(
    'UPDATE users SET nama_lengkap=?, email=?, No_Hp=?, jenis_kelamin=? WHERE id=?',
    [nama_lengkap, email, No_Hp, jenis_kelamin, id]
  );
  return { message: 'User berhasil diupdate' };
};

// DELETE
const deleteUser = async (id) => {
  await db.query('DELETE FROM users WHERE id = ?', [id]);
  return { message: 'User berhasil dihapus' };
};

module.exports = { getAllUsers, getUserById, addUser, updateUser, deleteUser };
