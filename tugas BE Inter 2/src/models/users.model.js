const db = require('../db/connection');
const bcrypt = require('bcrypt');

// ambil semua data
const getAllUsers = async () => {
  const [rows] = await db.query('SELECT * FROM users');
  return rows;
};

// ambil 1 data berdasarkan id
const getUserById = async (id) => {
  const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
  return rows;
};

// tambah data baru
const createUser = async (data) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);

  const sql = `
    INSERT INTO users 
    (nama_lengkap, no_hp, jenis_kelamin, foto_profil, email, password) 
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  const [result] = await db.query(sql, [
    data.nama_lengkap,
    data.no_hp,
    data.jenis_kelamin,
    data.foto_profil,
    data.email,
    hashedPassword
  ]);

  return result;
};

// update data
const updateUser = async (id, data) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);

  const sql = `
    UPDATE users 
    SET nama_lengkap=?, no_hp=?, jenis_kelamin=?, foto_profil=?, email=?, password=? 
    WHERE id=?
  `;

  const [result] = await db.query(sql, [
    data.nama_lengkap,
    data.no_hp,
    data.jenis_kelamin,
    data.foto_profil,
    data.email,
    hashedPassword,
    id
  ]);

  return result;
};

// hapus data
const deleteUser = async (id) => {
  const [result] = await db.query('DELETE FROM users WHERE id = ?', [id]);
  return result;
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
