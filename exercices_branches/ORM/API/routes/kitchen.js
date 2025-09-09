// Rutas para la vista de cocina.
const express = require('express');
const { getPendingCommands, updateCommandStatus } = require('../controllers/kitchenController');
const router = express.Router();

router.get('/commands/pending', getPendingCommands);
router.put('/commands/:commandId/status', updateCommandStatus); // Para actualizar el estado de una comanda
router.get('/', (req, res) => {
  res.json({ message: 'Kitchen route working!' });
});


module.exports = router;
