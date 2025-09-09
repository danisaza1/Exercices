// Rutas relacionadas con la autenticación y gestión de usuarios.
const express = require('express');
const { registerUser, getUserByEmail } = require('../controllers/usersController');
const router = express.Router();

router.post('/register', registerUser);
router.get('/user/:email', getUserByEmail);

module.exports = router;
