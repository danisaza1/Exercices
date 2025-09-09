// Rutas para la gestión de pedidos (commands).
const express = require('express');
const { createCommand, getUserCommands } = require('../controllers/orderController');
const router = express.Router();

router.post('/', createCommand);
router.get('/user/:userId', getUserCommands);

module.exports = router;

