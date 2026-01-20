const db = require('../db/connection');

// ambil semua data
const getAllUsers = (callback) => {
  const sql = 'SELECT * FROM users';
  db.query(sql, callback);
};

// ambil 1 data berdasarkan id
const getUserById = (id, callback) => {
  const sql = 'SELECT * FROM users WHERE id = ?';
  db.query(sql, [id], callback);
};

// tambah data baru
const createUser = (data, callback) => {
  const sql = 'INSERT INTO users (nama_lengkap, no_hp, jenis_kelamin, foto_profil, email, password) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(sql, [data.nama_lengkap, data.no_hp, data.jenis_kelamin, data.foto_profil, data.email, data.password], callback);
};

// update data berdasarkan id
const updateUser = (id, data, callback) => {
  const sql = 'UPDATE users SET nama_lengkap=?, no_hp=?, jenis_kelamin=?, foto_profil=?, email=?, password=? WHERE id=?';
  db.query(sql, [data.nama_lengkap, data.no_hp, data.jenis_kelamin, data.foto_profil, data.email, data.password, id], callback);
};

// hapus data berdasarkan id
const deleteUser = (id, callback) => {
  const sql = 'DELETE FROM users WHERE id = ?';
  db.query(sql, [id], callback);
};

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser };
