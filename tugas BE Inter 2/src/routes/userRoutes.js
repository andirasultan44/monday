const express = require('express');
const router = express.Router();
const userService = require('../services/userService');

// GET semua data
router.get('/', async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET by id
router.get('/:id', async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);

    if (!user || user.length === 0) {
      return res.status(404).json({ message: 'User tidak ditemukan' });
    }

    res.status(200).json(user[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST tambah data
router.post('/', async (req, res) => {
  try {
    if (!req.body) {
      return res.status(400).json({ message: 'Request body diperlukan' });
    }

    const result = await userService.addUser(req.body);
    res.status(201).json({ message: 'User berhasil dibuat', id: result.insertId });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PATCH update data
router.patch('/:id', async (req, res) => {
  try {
    const result = await userService.updateUser(req.params.id, req.body);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'User tidak ditemukan' });
    }

    res.status(200).json({ message: 'User berhasil diperbarui' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE data
router.delete('/:id', async (req, res) => {
  try {
    const result = await userService.deleteUser(req.params.id);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'User tidak ditemukan' });
    }

    res.status(200).json({ message: 'User berhasil dihapus' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
