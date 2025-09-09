// Rutas para la gestión de platos (ítems del menú).
const express = require('express');
const { getDishes, addDish } = require('../controllers/menuController');
const router = express.Router();

router.get('/', getDishes);
router.post('/', addDish); // Ruta para añadir nuevos platos (ej. por un administrador)

module.exports = router;